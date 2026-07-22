/* ============================================================
   app.js — 主程式：資料驅動渲染、搜尋、排序、載入更多、Modal、
            快捷入口、分類 chips、使用指南、統計、背景動畫、導覽互動
   ============================================================ */
(function () {
  "use strict";

  // ---------- 全域狀態 ----------
  var EXAMPLES = (window.DATA && window.DATA.examples) || [];
  var PAGE_SIZE = 24;               // 第一批顯示數量
  var shownCount = PAGE_SIZE;       // 目前顯示數量
  var currentView = "grid";         // grid | list
  var searchTerm = "";
  var lastFocused = null;           // Modal 開啟前的焦點元素

  var DIFFICULTY_ORDER = { "入門": 1, "初階": 2, "中階": 3, "進階": 4, "專業": 5 };

  var GUIDE_ITEMS = [
    ["搜尋案例", "在資料庫的搜尋列輸入關鍵字，支援案例名稱、技術、科目與標籤，中英文皆可、忽略大小寫。"],
    ["分類與篩選", "使用左側（手機為抽屜）篩選面板，可同時套用資源類型、教學領域、技術、難度等多個條件。"],
    ["收藏案例", "點選卡片右上角星號即可收藏，收藏會保存在瀏覽器 localStorage，重新整理後仍在。"],
    ["複製程式碼", "在案例詳情的程式碼分頁點「複製」，即可貼到您的教材檔案中；亦可複製完整單檔版本。"],
    ["即時預覽", "在詳情視窗點「執行」，程式碼會在安全的 iframe 沙箱中執行，可切換桌面／平板／手機寬度。"],
    ["貼到自己的教材", "下載完整 HTML 後用瀏覽器開啟即可；或把 HTML／CSS／JS 分別貼進您現有的教材檔案。"],
    ["修改文字與顏色", "每個案例的「修改建議」說明如何更換文字、顏色、動畫速度與圖片，初學者也能上手。"],
    ["使用 CDN", "部分案例使用 Three.js、GSAP 等程式庫，透過 CDN 載入；本站已加入載入失敗的基本提示。"],
    ["部署到 GitHub Pages", "將整個資料夾推送到 GitHub，於 Settings → Pages 選擇分支即可發布，詳見 README。"],
    ["檢查手機版", "用瀏覽器開發者工具切換裝置尺寸，或直接在手機開啟；本站已針對 320～1440px 最佳化。"],
    ["改善效能", "首頁只先載入 24 個案例，其餘用「載入更多」；動畫尊重減少動態偏好，避免效能負擔。"],
    ["符合無障礙", "本站使用語意標籤、鍵盤操作、焦點管理與 aria 屬性；收藏按鈕提供 aria-pressed 狀態。"],
    ["避免動畫過多", "背景與卡片動畫皆低調且可停用；建議教材中一次聚焦一個互動，降低學生認知負荷。"],
    ["標示第三方授權", "引用外部網站時僅提供連結與分析，不複製其程式碼；請於教材中標示原始來源與授權。"]
  ];

  var QUICK_LINKS = [
    { label: "適合自然科", apply: function () { Filters.setFacet("subjects", "自然科學"); } },
    { label: "適合數學",   apply: function () { Filters.setFacet("subjects", "數學"); } },
    { label: "適合科展",   apply: function () { Filters.setFacet("subjects", "科展探究"); } },
    { label: "適合 AI 教學", apply: function () { Filters.setFacet("subjects", "人工智慧"); } },
    { label: "適合國小",   apply: function () { Filters.setFacet("interactionTypes", "點擊"); searchTerm = "國小"; setSearchInput("國小"); } },
    { label: "不需外部程式庫", apply: function () { Filters.setFlag("requiresLibrary", false); Filters.setFacet("type", "JavaScript 特效"); } },
    { label: "可離線使用", apply: function () { Filters.setFlag("offlineFriendly", true); } },
    { label: "入門程式碼", apply: function () { Filters.setFacet("difficulty", "入門"); } },
    { label: "進階 3D 案例", apply: function () { Filters.setFacet("technologies", "Three.js"); } },
    { label: "手機友善",   apply: function () { Filters.setFlag("mobileFriendly", true); } },
    { label: "完整單檔 HTML", apply: function () { Filters.setFlag("hasFullCode", true); } },
    { label: "本週精選",   apply: function () { Filters.setFlag("featured", true); } },
    { label: "我的收藏",   apply: function () { Filters.setFavoriteOnly(true); } }
  ];

  // ---------- 小工具 ----------
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function diffClass(d) { return "d" + (DIFFICULTY_ORDER[d] || 3); }
  function debounce(fn, ms) {
    var t;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  // 每個資源類型對應的縮圖 emoji（縮圖圖片缺失時的備援）
  var TYPE_EMOJI = {
    "JavaScript 特效": "⚡", "CSS 動畫": "🎨", "自然科互動網站": "🔬",
    "Three.js 案例": "🌐", "GSAP 案例": "🎬", "SVG 案例": "📐", "Canvas 案例": "🖼️",
    "p5.js 案例": "🎇", "Matter.js 物理模擬": "🧲", "Chart.js 與資料視覺化": "📊",
    "UI 互動元件": "🧩", "捲動敘事": "📜", "遊戲化學習": "🎮", "測驗與評量": "📝",
    "虛擬實驗": "🧪", "教材版面與導覽": "🗂️", "無障礙互動": "♿", "行動載具互動": "📱"
  };
  function emojiFor(ex) { return TYPE_EMOJI[ex.type] || "✨"; }

  // ---------- 搜尋比對 ----------
  function buildSearchIndex(ex) {
    return [
      ex.title, ex.titleEn, ex.type, ex.description, ex.teachingApplication,
      (ex.subjects || []).join(" "), (ex.topics || []).join(" "),
      (ex.technologies || []).join(" "), (ex.interactionTypes || []).join(" "),
      (ex.libraries || []).join(" "), (ex.tags || []).join(" "),
      (ex.gradeLevels || []).join(" ")
    ].join(" ").toLowerCase();
  }
  function matchSearch(ex) {
    if (!searchTerm) return true;
    var term = searchTerm.trim().toLowerCase();
    if (!term) return true;
    if (!ex.__index) ex.__index = buildSearchIndex(ex);
    // 以空白拆分多關鍵字，全部符合才算命中
    return term.split(/\s+/).every(function (t) { return ex.__index.indexOf(t) !== -1; });
  }

  // ---------- 取得符合條件並排序的清單 ----------
  function getFiltered() {
    var list = EXAMPLES.filter(function (ex) {
      return matchSearch(ex) && Filters.match(ex);
    });
    var sort = $("#sort-select") ? $("#sort-select").value : "featured";
    list.sort(function (a, b) {
      switch (sort) {
        case "name": return a.title.localeCompare(b.title, "zh-Hant");
        case "difficulty": return (DIFFICULTY_ORDER[a.difficulty] || 0) - (DIFFICULTY_ORDER[b.difficulty] || 0);
        case "updated": return (b.updatedAt || "").localeCompare(a.updatedAt || "");
        case "favorite":
          var fa = Favorites.has(a.id) ? 0 : 1, fb = Favorites.has(b.id) ? 0 : 1;
          return fa - fb;
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
    return list;
  }

  // ---------- 卡片 HTML ----------
  function cardHtml(ex) {
    var fav = Favorites.has(ex.id);
    var techTags = (ex.technologies || []).slice(0, 4).map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("");
    var thumb = ex.thumbnail
      ? '<img src="' + esc(ex.thumbnail) + '" alt="' + esc(ex.title) + ' 縮圖" loading="lazy" ' +
        'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
        '<span class="card__thumb-emoji" style="display:none" aria-hidden="true">' + emojiFor(ex) + "</span>"
      : '<span class="card__thumb-emoji" aria-hidden="true">' + emojiFor(ex) + "</span>";

    return '' +
      '<article class="card" data-id="' + esc(ex.id) + '">' +
        '<div class="card__thumb">' +
          '<div class="card__badges">' +
            (ex.featured ? '<span class="tag tag--featured">精選</span>' : "") +
          "</div>" +
          '<button class="card__fav" data-action="fav" data-id="' + esc(ex.id) + '" ' +
            'aria-pressed="' + (fav ? "true" : "false") + '" ' +
            'aria-label="' + (fav ? "取消收藏" : "加入收藏") + "：" + esc(ex.title) + '">' +
            (fav ? "★" : "☆") +
          "</button>" +
          thumb +
        "</div>" +
        '<div class="card__body">' +
          '<span class="card__id">' + esc(ex.id) + "</span>" +
          '<h3 class="card__title">' + esc(ex.title) + "</h3>" +
          '<p class="card__desc">' + esc(ex.description) + "</p>" +
          '<div class="card__meta">' +
            '<span class="tag tag--type">' + esc(ex.type) + "</span>" +
            (ex.subjects && ex.subjects[0] ? '<span class="tag tag--subject">' + esc(ex.subjects[0]) + "</span>" : "") +
            '<span class="tag tag--diff ' + diffClass(ex.difficulty) + '">' + esc(ex.difficulty) + "</span>" +
            (ex.requiresLibrary ? '<span class="tag">需程式庫</span>' : '<span class="tag">免程式庫</span>') +
            (ex.mobileFriendly ? '<span class="tag">📱 手機</span>' : "") +
            (ex.hasFullCode ? '<span class="tag">完整程式碼</span>' : "") +
          "</div>" +
          '<div class="card__tech">' + techTags + "</div>" +
          '<div class="card__actions">' +
            '<button class="btn btn--primary btn--sm" data-action="detail" data-id="' + esc(ex.id) + '">查看詳情</button>' +
            (ex.hasFullCode ? '<button class="btn btn--ghost btn--sm" data-action="copy" data-id="' + esc(ex.id) + '">複製程式碼</button>' : "") +
          "</div>" +
        "</div>" +
      "</article>";
  }

  // ---------- 渲染案例列表 ----------
  function render() {
    var list = getFiltered();
    var container = $("#cards");
    var empty = $("#empty-state");
    var loadMore = $("#load-more");
    var countEl = $("#result-count");

    // 結果數量（aria-live）
    if (countEl) {
      countEl.textContent = list.length
        ? "共找到 " + list.length + " 個案例"
        : "";
    }

    if (!list.length) {
      container.innerHTML = "";
      if (empty) empty.hidden = false;
      if (loadMore) loadMore.hidden = true;
    } else {
      if (empty) empty.hidden = true;
      var visible = list.slice(0, shownCount);
      container.innerHTML = visible.map(cardHtml).join("");
      if (loadMore) loadMore.hidden = shownCount >= list.length;
    }
    renderActiveFilters();
  }

  // ---------- 啟用中的篩選標籤 ----------
  function renderActiveFilters() {
    var wrap = $("#active-filters");
    if (!wrap) return;
    var tags = Filters.activeTags();
    if (searchTerm) tags.unshift({ search: true, label: '搜尋：「' + searchTerm + "」" });
    if (!tags.length) { wrap.innerHTML = ""; return; }
    wrap.innerHTML = tags.map(function (t, i) {
      return '<span class="active-filter" data-idx="' + i + '">' + esc(t.label) +
        ' <button data-action="remove-filter" data-idx="' + i + '" aria-label="移除此條件">✕</button></span>';
    }).join("");
    wrap.__tags = tags;
  }

  // ---------- Modal 詳情 ----------
  function field(label, value) {
    if (value == null || value === "") return "";
    return '<div class="detail__field"><div class="detail__field-label">' + esc(label) +
      '</div><div class="detail__field-value">' + esc(value) + "</div></div>";
  }
  function listSection(title, items) {
    if (!items || !items.length) return "";
    return '<div class="detail__section"><h3>' + esc(title) + "</h3><ul>" +
      items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
  }
  function textSection(title, text) {
    if (!text) return "";
    return '<div class="detail__section"><h3>' + esc(title) + "</h3><p>" + esc(text) + "</p></div>";
  }

  function openModal(id) {
    var ex = EXAMPLES.filter(function (e) { return e.id === id; })[0];
    if (!ex) return;
    lastFocused = document.activeElement;
    var body = $("#modal-body");
    var fav = Favorites.has(ex.id);

    var badges =
      '<span class="tag tag--type">' + esc(ex.type) + "</span>" +
      (ex.subjects || []).map(function (s) { return '<span class="tag tag--subject">' + esc(s) + "</span>"; }).join("") +
      '<span class="tag tag--diff ' + diffClass(ex.difficulty) + '">' + esc(ex.difficulty) + "</span>" +
      (ex.featured ? '<span class="tag tag--featured">精選</span>' : "");

    var basic = '<div class="detail__section"><h3>基本資訊</h3><div class="detail__grid">' +
      field("案例編號", ex.id) +
      field("英文名稱", ex.titleEn) +
      field("資源類型", ex.type) +
      field("教學領域", (ex.subjects || []).join("、")) +
      field("適用年級", (ex.gradeLevels || []).join("、")) +
      field("難度", ex.difficulty) +
      field("建議製作時間", ex.buildTime) +
      field("技術需求", (ex.technologies || []).join("、")) +
      field("相容裝置", [ex.mobileFriendly ? "手機" : "", ex.tabletFriendly ? "平板" : "", "桌機"].filter(Boolean).join("、")) +
      field("外部程式庫", ex.requiresLibrary ? (ex.libraries || []).join("、") || "需要" : "不需要") +
      field("授權資訊", ex.license) +
      "</div>" +
      (ex.referenceUrl ? '<p style="margin-top:12px">參考連結：<a href="' + esc(ex.referenceUrl) + '" target="_blank" rel="noopener">' + esc(ex.referenceUrl) + "</a></p>" : "") +
      "</div>";

    var effect = textSection("效果說明", ex.description) +
      textSection("學生如何操作", ex.studentTask) +
      (ex.notSuitableFor ? textSection("不適合的情境", ex.notSuitableFor) : "");

    var teaching = '<div class="detail__section"><h3>教學應用</h3>' +
      (ex.teachingApplication ? "<p>" + esc(ex.teachingApplication) + "</p>" : "") +
      "</div>" +
      listSection("學習目標", ex.learningObjectives) +
      textSection("教師操作方式", ex.teacherGuide) +
      textSection("學生學習任務", ex.studentTask) +
      textSection("科展應用方式", ex.scienceFairApplication) +
      listSection("延伸活動", ex.extensions);

    var tech = textSection("技術分析", ex.techAnalysis) +
      textSection("效能注意事項", ex.performanceNotes) +
      textSection("行動裝置注意事項", ex.mobileNotes) +
      textSection("無障礙注意事項", ex.accessibilityNotes);

    var modify = listSection("修改建議", ex.modifyTips);

    // 外部網站案例（自然科互動網站）額外欄位
    var external = "";
    if (ex.externalSite) {
      var s = ex.externalSite;
      external = '<div class="detail__section"><h3>外部網站案例資訊</h3><div class="detail__grid">' +
        field("網站名稱", s.name) +
        field("國家或機構", s.org) +
        field("是否需要帳號", s.needAccount) +
        field("是否免費", s.free) +
        field("是否支援中文", s.chinese) +
        field("行動裝置相容性", s.mobile) +
        "</div>" +
        (s.url ? '<p style="margin-top:12px">官方連結：<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + "</a></p>" : "") +
        (s.techGuess ? '<p><em>' + esc(s.techGuess) + "</em></p>" : "") +
        (s.notes ? "<p>使用注意事項：" + esc(s.notes) + "</p>" : "") +
        "</div>";
    }

    // 程式碼區
    var codeHtml = "";
    if (ex.hasFullCode || ex.htmlCode || ex.cssCode || ex.jsCode) {
      codeHtml = buildCodeSection(ex);
    }

    body.innerHTML =
      '<div class="detail__header">' +
        '<span class="detail__id">' + esc(ex.id) + "</span>" +
        '<h2 class="detail__title" id="modal-title">' + esc(ex.title) + "</h2>" +
        '<div class="detail__title-en">' + esc(ex.titleEn || "") + "</div>" +
        '<div class="detail__badges">' + badges + "</div>" +
      "</div>" +
      '<div class="detail__actions">' +
        '<button class="btn btn--ghost btn--sm" data-action="fav" data-id="' + esc(ex.id) + '" aria-pressed="' + (fav ? "true" : "false") + '">' +
          (fav ? "★ 已收藏" : "☆ 加入收藏") + "</button>" +
        (ex.hasFullCode ? '<button class="btn btn--ghost btn--sm" data-action="download" data-id="' + esc(ex.id) + '">下載完整 HTML</button>' : "") +
      "</div>" +
      basic + effect + teaching + external + tech + modify + codeHtml;

    // 顯示 Modal
    var modal = $("#detail-modal");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("#modal-close").focus();

    // 若有程式碼區，初始化分頁與預覽、套用語法醒目
    if (codeHtml) initCodeSection(ex);
  }

  function closeModal() {
    var modal = $("#detail-modal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  // ---------- 程式碼區建立與初始化 ----------
  function buildCodeSection(ex) {
    var tabs = [];
    if (ex.htmlCode) tabs.push(["html", "HTML", "markup"]);
    if (ex.cssCode) tabs.push(["css", "CSS", "css"]);
    if (ex.jsCode) tabs.push(["js", "JavaScript", "javascript"]);
    tabs.push(["full", "完整版", "markup"]);
    tabs.push(["usage", "使用說明", null]);

    var nav = tabs.map(function (t, i) {
      return '<button class="code-tab' + (i === 0 ? " is-active" : "") + '" data-tab="' + t[0] + '" role="tab">' + t[1] + "</button>";
    }).join("");

    var panels = tabs.map(function (t, i) {
      var active = i === 0 ? " is-active" : "";
      if (t[0] === "usage") {
        var tips = (ex.modifyTips || []).map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");
        return '<div class="code-panel' + active + '" data-panel="' + t[0] + '">' +
          '<div class="code-note"><p>將程式碼複製到您的 HTML 檔案，或點選上方「執行」在沙箱中預覽。' +
          (ex.requiresLibrary ? "本範例需透過 CDN 載入：" + esc((ex.libraries || []).join("、")) + "。" : "本範例不需外部程式庫，可離線使用。") +
          "</p>" + (tips ? "<p>修改建議：</p><ul>" + tips + "</ul>" : "") + "</div></div>";
      }
      var code = t[0] === "full" ? CodeRunner.buildFullHtml(ex) : (ex[t[0] + "Code"] || "");
      return '<div class="code-panel' + active + '" data-panel="' + t[0] + '">' +
        '<div class="code-block"><pre class="line-numbers"><code class="language-' + t[2] + '">' +
        esc(code) + "</code></pre></div></div>";
    }).join("");

    var preview = ex.hasFullCode ? (
      '<div class="detail__section"><h3>即時預覽</h3>' +
      '<div class="preview">' +
        '<div class="preview__toolbar">' +
          '<button class="btn btn--primary btn--sm" data-action="run" data-id="' + esc(ex.id) + '">▶ 執行</button>' +
          '<button class="btn btn--ghost btn--sm" data-action="run" data-id="' + esc(ex.id) + '">↻ 重新整理</button>' +
          '<button class="btn btn--ghost btn--sm" data-action="preview-width" data-w="desktop">桌面</button>' +
          '<button class="btn btn--ghost btn--sm" data-action="preview-width" data-w="tablet">平板</button>' +
          '<button class="btn btn--ghost btn--sm" data-action="preview-width" data-w="mobile">手機</button>' +
          '<button class="btn btn--ghost btn--sm" data-action="preview-fullscreen">全螢幕</button>' +
        "</div>" +
        '<div class="preview__error" hidden></div>' +
        '<div class="preview__frame-wrap">' +
          '<iframe class="preview__frame" title="' + esc(ex.title) + ' 即時預覽" sandbox="allow-scripts"></iframe>' +
        "</div>" +
      "</div></div>"
    ) : "";

    return '<div class="detail__section"><h3>程式碼</h3>' +
      '<div class="code-tabs">' +
        '<div class="code-tabs__nav" role="tablist">' + nav +
          '<div class="code-tabs__toolbar">' +
            '<button class="icon-btn" data-action="copy-current" title="複製目前分頁程式碼" aria-label="複製目前分頁程式碼">📋</button>' +
            '<button class="icon-btn" data-action="fullscreen-code" title="全螢幕檢視程式碼" aria-label="全螢幕檢視程式碼">⛶</button>' +
          "</div>" +
        "</div>" + panels +
      "</div></div>" + preview;
  }

  function initCodeSection(ex) {
    // 套用 Prism 語法醒目（若 CDN 載入成功）
    if (window.Prism && window.Prism.highlightAll) {
      try { window.Prism.highlightAll(); } catch (e) {}
    } else if (window.__prismFailed) {
      // CDN 失敗提示（不影響閱讀，程式碼仍可見）
      $all(".code-block").forEach(function (b) {
        if (!b.querySelector(".code-note")) {
          var note = document.createElement("div");
          note.className = "code-note";
          note.textContent = "（語法醒目顯示元件載入失敗，程式碼仍可正常複製與閱讀。）";
          b.parentNode.insertBefore(note, b);
        }
      });
    }
    // 自動執行一次預覽
    var frame = $("#modal-body .preview__frame");
    if (frame && ex.hasFullCode) {
      CodeRunner.run(frame, ex, $("#modal-body .preview__error"));
    }
  }

  // ---------- 事件：卡片與 Modal 內的委派 ----------
  function handleAction(e) {
    var btn = e.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.dataset.action;
    var id = btn.dataset.id;
    var ex = id ? EXAMPLES.filter(function (x) { return x.id === id; })[0] : null;

    switch (action) {
      case "fav":
        if (!id) return;
        var nowFav = Favorites.toggle(id);
        // 同步所有相同 id 的收藏按鈕
        $all('[data-action="fav"][data-id="' + id + '"]').forEach(function (b) {
          b.setAttribute("aria-pressed", nowFav ? "true" : "false");
          if (b.classList.contains("card__fav")) {
            b.textContent = nowFav ? "★" : "☆";
            b.setAttribute("aria-label", (nowFav ? "取消收藏" : "加入收藏") + "：" + (ex ? ex.title : ""));
          } else {
            b.textContent = nowFav ? "★ 已收藏" : "☆ 加入收藏";
          }
        });
        CodeRunner.toast(nowFav ? "已加入收藏 ★" : "已取消收藏");
        break;
      case "detail":
        openModal(id);
        break;
      case "copy":
        if (ex) CodeRunner.copyText(CodeRunner.buildFullHtml(ex));
        break;
      case "download":
        if (ex) CodeRunner.download(ex);
        break;
      case "run":
        var frame = $("#modal-body .preview__frame");
        if (frame && ex) CodeRunner.run(frame, ex, $("#modal-body .preview__error"));
        break;
      case "preview-width":
        var f = $("#modal-body .preview__frame");
        if (f) { f.classList.remove("w-tablet", "w-mobile");
          if (btn.dataset.w === "tablet") f.classList.add("w-tablet");
          if (btn.dataset.w === "mobile") f.classList.add("w-mobile"); }
        break;
      case "preview-fullscreen":
        var wrap = btn.closest(".preview");
        if (wrap && wrap.requestFullscreen) wrap.requestFullscreen().catch(function () {});
        break;
      case "copy-current":
        var panel = $("#modal-body .code-panel.is-active code");
        if (panel) CodeRunner.copyText(panel.textContent);
        break;
      case "fullscreen-code":
        var activeBlock = $("#modal-body .code-panel.is-active .code-block");
        if (activeBlock) {
          activeBlock.classList.toggle("is-fullscreen");
          if (activeBlock.classList.contains("is-fullscreen")) {
            document.addEventListener("keydown", escExitCodeFs);
          }
        }
        break;
      case "remove-filter":
        var wrapEl = $("#active-filters");
        var tag = wrapEl && wrapEl.__tags ? wrapEl.__tags[+btn.dataset.idx] : null;
        if (tag) {
          if (tag.search) { searchTerm = ""; setSearchInput(""); }
          else { Filters.remove(tag); }
          shownCount = PAGE_SIZE;
          refresh();
        }
        break;
    }
  }

  function escExitCodeFs(e) {
    if (e.key === "Escape") {
      $all(".code-block.is-fullscreen").forEach(function (b) { b.classList.remove("is-fullscreen"); });
      document.removeEventListener("keydown", escExitCodeFs);
    }
  }

  // 程式碼分頁切換
  function handleTabClick(e) {
    var tab = e.target.closest(".code-tab");
    if (!tab) return;
    var name = tab.dataset.tab;
    var tabsWrap = tab.closest(".code-tabs");
    $all(".code-tab", tabsWrap).forEach(function (t) { t.classList.toggle("is-active", t === tab); });
    $all(".code-panel", tabsWrap).forEach(function (p) { p.classList.toggle("is-active", p.dataset.panel === name); });
  }

  // ---------- 收藏區渲染 ----------
  function renderFavorites() {
    var wrap = $("#fav-cards");
    var empty = $("#fav-empty");
    var favCount = $("#fav-count");
    if (favCount) favCount.textContent = Favorites.count();
    if (!wrap) return;
    var favs = EXAMPLES.filter(function (ex) { return Favorites.has(ex.id); });
    if (!favs.length) {
      wrap.innerHTML = "";
      if (empty) empty.style.display = "";
    } else {
      if (empty) empty.style.display = "none";
      wrap.innerHTML = favs.map(cardHtml).join("");
    }
  }

  // ---------- 分類 chips ----------
  function renderChips() {
    var subjEl = $("#subject-chips");
    var techEl = $("#tech-chips");
    var subjMap = {}, techMap = {};
    EXAMPLES.forEach(function (ex) {
      (ex.subjects || []).forEach(function (s) { subjMap[s] = (subjMap[s] || 0) + 1; });
      (ex.technologies || []).forEach(function (t) { techMap[t] = (techMap[t] || 0) + 1; });
    });
    function chip(name, count, facet) {
      return '<button class="chip" data-chip-facet="' + facet + '" data-chip-value="' + esc(name) + '">' +
        esc(name) + ' <span class="chip__count">' + count + "</span></button>";
    }
    if (subjEl) subjEl.innerHTML = Object.keys(subjMap).sort(function (a, b) { return subjMap[b] - subjMap[a]; })
      .map(function (k) { return chip(k, subjMap[k], "subjects"); }).join("");
    if (techEl) techEl.innerHTML = Object.keys(techMap).sort(function (a, b) { return techMap[b] - techMap[a]; })
      .map(function (k) { return chip(k, techMap[k], "technologies"); }).join("");
  }

  // ---------- 快捷入口 ----------
  function renderQuickLinks() {
    var wrap = $("#quick-links");
    if (!wrap) return;
    wrap.innerHTML = QUICK_LINKS.map(function (q, i) {
      return '<button class="quick-link" data-quick="' + i + '">' + esc(q.label) + "</button>";
    }).join("");
  }

  // ---------- 使用指南 ----------
  function renderGuide() {
    var wrap = $("#guide-grid");
    if (!wrap) return;
    wrap.innerHTML = GUIDE_ITEMS.map(function (g, i) {
      return '<div class="guide-card"><div class="guide-card__num">' + (i + 1) +
        '</div><h3>' + esc(g[0]) + "</h3><p>" + esc(g[1]) + "</p></div>";
    }).join("");
  }

  // ---------- 統計數字遞增動畫 ----------
  function computeStats() {
    var byType = {};
    var techSet = {}, subjSet = {};
    EXAMPLES.forEach(function (ex) {
      byType[ex.type] = (byType[ex.type] || 0) + 1;
      (ex.technologies || []).forEach(function (t) { techSet[t] = 1; });
      (ex.subjects || []).forEach(function (s) { subjSet[s] = 1; });
    });
    return {
      js: byType["JavaScript 特效"] || 0,
      css: byType["CSS 動畫"] || 0,
      science: byType["自然科互動網站"] || 0,
      components: EXAMPLES.filter(function (e) { return e.hasFullCode; }).length,
      tech: Object.keys(techSet).length,
      subjects: Object.keys(subjSet).length
    };
  }
  function animateStats() {
    var stats = computeStats();
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $all(".stat__num").forEach(function (el) {
      var key = el.dataset.stat;
      var target = stats[key] || 0;
      if (reduce) { el.textContent = target; return; }
      var start = 0, dur = 900, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        el.textContent = Math.round(start + (target - start) * p);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  // ---------- 搜尋輸入 ----------
  function setSearchInput(v) {
    var input = $("#search-input");
    if (input) input.value = v;
    var clr = $("#search-clear");
    if (clr) clr.hidden = !v;
  }

  // ---------- 重新整理列表 ----------
  function refresh() {
    render();
    renderFavorites();
    Filters.syncCheckboxes();
  }

  // ---------- 背景 Canvas 粒子（低調、尊重減少動態） ----------
  function initBackground() {
    var canvas = $("#bg-canvas");
    if (!canvas) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { canvas.style.display = "none"; return; }
    var ctx = canvas.getContext("2d");
    var particles = [];
    var raf = null, running = true;
    var COUNT = window.innerWidth < 768 ? 26 : 54;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    function color() {
      return document.body.getAttribute("data-theme") === "light"
        ? "rgba(37,99,235,0.35)" : "rgba(14,165,164,0.5)";
    }
    function seed() {
      particles = [];
      for (var i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.6
        });
      }
    }
    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var c = color();
      ctx.fillStyle = c;
      ctx.strokeStyle = c;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        // 連線（僅鄰近粒子，控制成本）
        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            ctx.globalAlpha = 1 - d2 / 12000;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    resize(); seed(); draw();
    window.addEventListener("resize", debounce(function () { resize(); seed(); }, 200));
    // 頁籤隱藏時暫停，節省效能
    document.addEventListener("visibilitychange", function () {
      running = !document.hidden;
      if (running && !raf) draw();
      else { cancelAnimationFrame(raf); raf = null; }
    });
  }

  // ---------- 初始化事件綁定 ----------
  function bindEvents() {
    // 事件委派：卡片區、收藏區、Modal
    $("#cards").addEventListener("click", handleAction);
    $("#fav-cards").addEventListener("click", handleAction);
    $("#active-filters").addEventListener("click", handleAction);
    $("#modal-body").addEventListener("click", function (e) {
      handleAction(e); handleTabClick(e);
    });

    // 搜尋（debounce）
    var input = $("#search-input");
    var onSearch = debounce(function () {
      searchTerm = input.value;
      $("#search-clear").hidden = !searchTerm;
      shownCount = PAGE_SIZE;
      render();
    }, 220);
    input.addEventListener("input", onSearch);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { searchTerm = input.value; shownCount = PAGE_SIZE; render(); }
    });
    $("#search-clear").addEventListener("click", function () {
      searchTerm = ""; setSearchInput(""); shownCount = PAGE_SIZE; render();
      input.focus();
    });

    // 排序
    $("#sort-select").addEventListener("change", function () { render(); });

    // 檢視模式
    $("#view-grid").addEventListener("click", function () { setView("grid"); });
    $("#view-list").addEventListener("click", function () { setView("list"); });

    // 載入更多
    $("#load-more").addEventListener("click", function () {
      shownCount += PAGE_SIZE; render();
    });

    // 篩選抽屜開關（手機／平板）
    $("#filter-toggle").addEventListener("click", function () {
      var panel = $("#filter-panel");
      var open = panel.classList.toggle("is-open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $("#filter-close").addEventListener("click", function () {
      $("#filter-panel").classList.remove("is-open");
      $("#filter-toggle").setAttribute("aria-expanded", "false");
    });
    $("#filter-clear").addEventListener("click", function () {
      Filters.clearAll(); searchTerm = ""; setSearchInput(""); shownCount = PAGE_SIZE; refresh();
    });

    // 空狀態清除
    var emptyClear = $("#empty-clear");
    if (emptyClear) emptyClear.addEventListener("click", function () {
      Filters.clearAll(); searchTerm = ""; setSearchInput(""); shownCount = PAGE_SIZE; refresh();
    });

    // 分類 chips（事件委派）
    document.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-chip-facet]");
      if (chip) {
        Filters.setFacet(chip.dataset.chipFacet, chip.dataset.chipValue);
        shownCount = PAGE_SIZE; refresh();
        $("#library").scrollIntoView({ behavior: "smooth" });
        return;
      }
      var q = e.target.closest("[data-quick]");
      if (q) {
        var item = QUICK_LINKS[+q.dataset.quick];
        if (item && item.apply) { item.apply(); shownCount = PAGE_SIZE; refresh();
          var target = item.label === "我的收藏" ? "#favorites" : "#library";
          $(target).scrollIntoView({ behavior: "smooth" }); }
      }
    });

    // 收藏區操作
    $("#fav-export").addEventListener("click", function () { Favorites.exportJson(EXAMPLES); });
    $("#fav-clear").addEventListener("click", function () {
      if (confirm("確定要清除全部收藏嗎？此動作無法復原。")) { Favorites.clear(); }
    });
    document.addEventListener("favorites-change", function () { renderFavorites(); render(); });
    document.addEventListener("storage-error", function () {
      CodeRunner.toast("您的瀏覽器停用了本地儲存，收藏將無法保存。");
    });

    // Modal 關閉
    $("#modal-close").addEventListener("click", closeModal);
    $("#detail-modal").addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close-modal")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
    // Modal 焦點鎖定（簡易 focus trap）
    $("#detail-modal").addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var focusables = $all('button, a[href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])', this)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!focusables.length) return;
      var first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // 導覽列漢堡選單
    $("#nav-toggle").addEventListener("click", function () {
      var nav = $("#primary-nav");
      var open = nav.classList.toggle("is-open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
      this.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
    });
    // 點導覽連結後關閉手機選單
    $all(".navbar__link").forEach(function (a) {
      a.addEventListener("click", function () { $("#primary-nav").classList.remove("is-open"); });
    });

    // 捲動：導覽列陰影 + 回到頂部
    var backTop = $("#back-to-top");
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      $("#navbar").classList.toggle("is-scrolled", y > 8);
      if (backTop) backTop.hidden = y < 400;
    });
    if (backTop) backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function setView(view) {
    currentView = view;
    var cards = $("#cards");
    cards.classList.toggle("cards--grid", view === "grid");
    cards.classList.toggle("cards--list", view === "list");
    $("#view-grid").classList.toggle("is-active", view === "grid");
    $("#view-list").classList.toggle("is-active", view === "list");
    $("#view-grid").setAttribute("aria-pressed", view === "grid" ? "true" : "false");
    $("#view-list").setAttribute("aria-pressed", view === "list" ? "true" : "false");
  }

  // ---------- 啟動 ----------
  function init() {
    if (!EXAMPLES.length) {
      var container = $("#cards");
      if (container) container.innerHTML =
        '<div class="empty-state"><p class="empty-state__emoji">⚠️</p>' +
        '<p class="empty-state__title">案例資料載入失敗</p>' +
        '<p class="empty-state__hint">請確認 js/data.js 是否正確載入。</p></div>';
      return;
    }
    var updated = $("#footer-updated");
    if (updated && window.DATA && window.DATA.updatedAt) updated.textContent = window.DATA.updatedAt;

    Filters.build(EXAMPLES, function () { shownCount = PAGE_SIZE; render(); });
    renderQuickLinks();
    renderChips();
    renderGuide();
    render();
    renderFavorites();
    animateStats();
    bindEvents();
    initBackground();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
