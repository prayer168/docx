/* ============================================================
   code-runner.js — 程式碼複製、下載與 iframe 即時預覽（sandbox）
   對外暴露：window.CodeRunner
   ============================================================ */
(function () {
  "use strict";

  /** 顯示全域 Toast 提示 */
  function toast(msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(el.__t);
    el.__t = setTimeout(function () { el.classList.remove("is-show"); }, 2200);
  }

  /** 複製文字到剪貼簿，含 Clipboard API 備援 */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { toast("已複製到剪貼簿 ✓"); },
        function () { fallbackCopy(text); }
      );
    } else {
      fallbackCopy(text);
    }
  }

  /** 備援複製方案：使用隱藏 textarea + execCommand */
  function fallbackCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      toast(ok ? "已複製到剪貼簿 ✓" : "此瀏覽器不支援自動複製，請手動選取程式碼複製。");
    } catch (e) {
      toast("此瀏覽器不支援自動複製，請手動選取程式碼複製。");
    }
  }

  /** 組合完整單檔 HTML（供下載與預覽） */
  function buildFullHtml(ex) {
    if (ex.fullCode && ex.fullCode.trim()) return ex.fullCode;
    var html = ex.htmlCode || "";
    var css = ex.cssCode || "";
    var js = ex.jsCode || "";
    return [
      "<!DOCTYPE html>",
      '<html lang="zh-Hant">',
      "<head>",
      '  <meta charset="UTF-8" />',
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      "  <title>" + (ex.title || "範例") + "</title>",
      "  <style>\n" + css + "\n  </style>",
      "</head>",
      "<body>",
      html,
      "  <script>\n" + js + "\n  <\/script>",
      "</body>",
      "</html>"
    ].join("\n");
  }

  /** 下載完整 HTML 檔 */
  function download(ex) {
    var content = buildFullHtml(ex);
    var blob = new Blob([content], { type: "text/html;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = (ex.id || "example") + ".html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast("已開始下載 " + a.download);
  }

  /**
   * 在 iframe 中執行程式碼（使用 sandbox + srcdoc）
   * frame: iframe 元素；ex: 案例資料；errorBox: 顯示錯誤的元素
   */
  function run(frame, ex, errorBox) {
    if (!frame) return;
    if (errorBox) { errorBox.hidden = true; errorBox.textContent = ""; }

    // 注入簡易錯誤攔截，將執行期錯誤回報給父頁（透過 postMessage）
    var errHook =
      "<script>window.onerror=function(m,s,l,c){parent.postMessage({__preview_error:m+' (行 '+l+')'},'*');return false;};" +
      "window.addEventListener('unhandledrejection',function(e){parent.postMessage({__preview_error:'未處理的 Promise：'+(e.reason&&e.reason.message||e.reason)},'*');});<\/script>";

    var full = buildFullHtml(ex);
    // 在 </head> 後插入錯誤攔截；若無 head 則放最前面
    if (full.indexOf("</head>") !== -1) {
      full = full.replace("</head>", errHook + "</head>");
    } else {
      full = errHook + full;
    }
    frame.srcdoc = full;
  }

  // 監聽來自預覽 iframe 的錯誤訊息
  window.addEventListener("message", function (e) {
    if (e.data && e.data.__preview_error) {
      var box = document.querySelector(".preview__error");
      if (box) {
        box.hidden = false;
        box.textContent = "執行時發生錯誤：" + e.data.__preview_error;
      }
    }
  });

  window.CodeRunner = {
    copyText: copyText,
    buildFullHtml: buildFullHtml,
    download: download,
    run: run,
    toast: toast
  };
})();
