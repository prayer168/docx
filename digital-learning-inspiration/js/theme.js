/* ============================================================
   theme.js — 深色／淺色模式切換（儲存於 localStorage）
   對外暴露：window.Theme
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "digitalLearningTheme";

  /** 安全讀取 localStorage（可能被停用或無痕模式限制） */
  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, val) {
    try { window.localStorage.setItem(key, val); return true; } catch (e) { return false; }
  }

  /** 套用主題到 <body> 的 data-theme，並同步行動瀏覽器工具列顏色 */
  function apply(theme) {
    document.body.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f4f7fb" : "#0b1020");
  }

  /** 初始化：優先使用者選擇 → 系統偏好 → 預設深色 */
  function init() {
    var saved = safeGet(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      apply(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      apply("light");
    } else {
      apply("dark");
    }

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var current = document.body.getAttribute("data-theme");
        var next = current === "dark" ? "light" : "dark";
        apply(next);
        safeSet(STORAGE_KEY, next);
        // 通知其他模組（例如背景 Canvas 調整顏色）
        document.dispatchEvent(new CustomEvent("themechange", { detail: next }));
      });
    }
  }

  window.Theme = { init: init, apply: apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
