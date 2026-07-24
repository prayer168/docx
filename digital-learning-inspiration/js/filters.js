/* ============================================================
   filters.js — 篩選器：建立面板、管理篩選狀態、比對案例
   對外暴露：window.Filters
   ============================================================ */
(function () {
  "use strict";

  // 多選面向（對應資料欄位為陣列或字串）
  var FACETS = [
    { key: "type",             label: "資源類型", field: "type",             multi: false },
    { key: "subjects",         label: "教學領域", field: "subjects",         multi: true },
    { key: "technologies",     label: "技術",     field: "technologies",     multi: true },
    { key: "difficulty",       label: "難度",     field: "difficulty",       multi: false, order: ["入門","初階","中階","進階","專業"] },
    { key: "interactionTypes", label: "互動方式", field: "interactionTypes", multi: true }
  ];

  // 布林面向
  var FLAGS = [
    { key: "hasFullCode",     label: "提供完整程式碼" },
    { key: "requiresLibrary", label: "需要外部程式庫" },
    { key: "mobileFriendly",  label: "適合手機" },
    { key: "tabletFriendly",  label: "適合平板" },
    { key: "offlineFriendly", label: "支援離線" },
    { key: "accessible",      label: "具無障礙設計" },
    { key: "featured",        label: "精選案例" }
  ];

  // 目前選取的篩選：{ facetKey: Set(values...) }，flags: Set(flagKey)，favoriteOnly: bool
  var selected = {};
  var flags = {};
  var favoriteOnly = false;

  FACETS.forEach(function (f) { selected[f.key] = new Set(); });

  /** 蒐集某面向所有可能值與數量 */
  function collectValues(examples, facet) {
    var map = {};
    examples.forEach(function (ex) {
      var v = ex[facet.field];
      if (Array.isArray(v)) {
        v.forEach(function (item) { map[item] = (map[item] || 0) + 1; });
      } else if (v != null) {
        map[v] = (map[v] || 0) + 1;
      }
    });
    var keys = Object.keys(map);
    if (facet.order) {
      keys.sort(function (a, b) { return facet.order.indexOf(a) - facet.order.indexOf(b); });
    } else {
      keys.sort(function (a, b) { return map[b] - map[a]; });
    }
    return keys.map(function (k) { return { value: k, count: map[k] }; });
  }

  var _onChange = null;      // 供選項變動時通知外部重繪
  var _globalBound = false;  // 是否已綁定全域關閉事件

  /** 建立單個選項列（checkbox + 文字 + 可選數量） */
  function optionRow(key, kind, value, text, count) {
    var label = document.createElement("label");
    label.className = "filter-option";
    var cb = document.createElement("input");
    cb.type = "checkbox";
    if (kind === "facet") { cb.dataset.facet = key; cb.value = value; }
    else { cb.dataset.flag = key; }
    cb.addEventListener("change", function () {
      if (kind === "facet") {
        if (cb.checked) { selected[key].add(value); } else { selected[key].delete(value); }
      } else {
        if (cb.checked) { flags[key] = true; } else { delete flags[key]; }
      }
      updateAllBadges();
      if (_onChange) _onChange();
    });
    var t = document.createElement("span");
    t.textContent = text;
    label.appendChild(cb);
    label.appendChild(t);
    if (count != null) {
      var c = document.createElement("span");
      c.className = "filter-option__count";
      c.textContent = count;
      label.appendChild(c);
    }
    return label;
  }

  /** 建立一個下拉篩選（按鈕 + 彈出選單） */
  function makeDropdown(key, label, optionEls) {
    var drop = document.createElement("div");
    drop.className = "fdrop";
    drop.dataset.key = key;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fdrop__btn";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-haspopup", "true");
    btn.innerHTML = '<span class="fdrop__label">' + label + '</span>' +
      '<span class="fdrop__badge" hidden>0</span><span class="fdrop__caret" aria-hidden="true">▾</span>';

    var menu = document.createElement("div");
    menu.className = "fdrop__menu";
    menu.setAttribute("role", "group");
    menu.setAttribute("aria-label", label);
    menu.hidden = true;
    optionEls.forEach(function (el) { menu.appendChild(el); });

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = menu.hidden;
      closeAll();
      if (willOpen) { menu.hidden = false; btn.setAttribute("aria-expanded", "true"); drop.classList.add("is-open"); }
    });
    menu.addEventListener("click", function (e) { e.stopPropagation(); });

    drop.appendChild(btn);
    drop.appendChild(menu);
    return drop;
  }

  function closeAll() {
    var container = document.getElementById("filter-groups");
    if (!container) return;
    container.querySelectorAll(".fdrop").forEach(function (d) {
      var m = d.querySelector(".fdrop__menu"), b = d.querySelector(".fdrop__btn");
      if (m) m.hidden = true;
      if (b) b.setAttribute("aria-expanded", "false");
      d.classList.remove("is-open");
    });
  }

  /** 更新每個下拉按鈕上的已選數量徽章 */
  function updateAllBadges() {
    var container = document.getElementById("filter-groups");
    if (!container) return;
    container.querySelectorAll(".fdrop").forEach(function (d) {
      var n = d.querySelectorAll(".fdrop__menu input:checked").length;
      var badge = d.querySelector(".fdrop__badge");
      if (badge) { badge.textContent = n; badge.hidden = n === 0; }
      d.classList.toggle("has-selected", n > 0);
    });
  }

  /** 建立下拉式篩選列 UI */
  function build(examples, onChange) {
    var container = document.getElementById("filter-groups");
    if (!container) return;
    _onChange = onChange;
    container.innerHTML = "";

    FACETS.forEach(function (facet) {
      var values = collectValues(examples, facet);
      if (!values.length) return;
      var opts = values.map(function (v) { return optionRow(facet.key, "facet", v.value, v.value, v.count); });
      container.appendChild(makeDropdown(facet.key, facet.label, opts));
    });

    // 特性（布林面向）
    var flagOpts = FLAGS.map(function (flag) { return optionRow(flag.key, "flag", null, flag.label, null); });
    container.appendChild(makeDropdown("__flags", "特性", flagOpts));

    // 全域：點擊外部或按 Esc 關閉開啟中的下拉（只綁定一次）
    if (!_globalBound) {
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".fdrop")) closeAll();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeAll();
      });
      _globalBound = true;
    }
    updateAllBadges();
  }

  /** 開啟第一個下拉（供鍵盤快捷鍵使用） */
  function openFirst() {
    var btn = document.querySelector("#filter-groups .fdrop__btn");
    if (btn) btn.click();
  }

  /** 比對單一案例是否符合目前所有篩選 */
  function match(ex) {
    // 多選面向：同面向為 OR，不同面向為 AND
    for (var i = 0; i < FACETS.length; i++) {
      var facet = FACETS[i];
      var set = selected[facet.key];
      if (set.size === 0) continue;
      var v = ex[facet.field];
      var ok = false;
      if (Array.isArray(v)) {
        ok = v.some(function (item) { return set.has(item); });
      } else {
        ok = set.has(v);
      }
      if (!ok) return false;
    }
    // 布林面向
    for (var key in flags) {
      if (flags[key] && !ex[key]) return false;
    }
    // 僅收藏
    if (favoriteOnly && !(window.Favorites && window.Favorites.has(ex.id))) return false;
    return true;
  }

  /** 取得目前啟用的篩選標籤（供顯示） */
  function activeTags() {
    var tags = [];
    FACETS.forEach(function (facet) {
      selected[facet.key].forEach(function (val) {
        tags.push({ facet: facet.key, value: val, label: val });
      });
    });
    Object.keys(flags).forEach(function (key) {
      var f = FLAGS.filter(function (x) { return x.key === key; })[0];
      tags.push({ flag: key, label: f ? f.label : key });
    });
    if (favoriteOnly) tags.push({ favorite: true, label: "僅收藏" });
    return tags;
  }

  /** 移除單一篩選條件 */
  function remove(tag) {
    if (tag.facet) { selected[tag.facet].delete(tag.value); }
    if (tag.flag) { delete flags[tag.flag]; syncFlagCheckbox(tag.flag, false); }
    if (tag.favorite) { favoriteOnly = false; }
    syncCheckboxes();
  }

  function clearAll() {
    FACETS.forEach(function (f) { selected[f.key].clear(); });
    flags = {};
    favoriteOnly = false;
    syncCheckboxes();
  }

  /** 依程式設定某面向（供快捷入口使用） */
  function setFacet(facetKey, value) {
    if (selected[facetKey]) { selected[facetKey].add(value); syncCheckboxes(); }
  }
  function setFlag(flagKey, value) {
    if (value) { flags[flagKey] = true; } else { delete flags[flagKey]; }
    syncFlagCheckbox(flagKey, value);
  }
  function setFavoriteOnly(v) { favoriteOnly = !!v; }
  function isFavoriteOnly() { return favoriteOnly; }

  /** 讓 UI checkbox 與狀態同步 */
  function syncCheckboxes() {
    var container = document.getElementById("filter-groups");
    if (!container) return;
    container.querySelectorAll("input[data-facet]").forEach(function (cb) {
      cb.checked = selected[cb.dataset.facet] && selected[cb.dataset.facet].has(cb.value);
    });
    container.querySelectorAll("input[data-flag]").forEach(function (cb) {
      cb.checked = !!flags[cb.dataset.flag];
    });
    updateAllBadges();
  }
  function syncFlagCheckbox(key, val) {
    var cb = document.querySelector('input[data-flag="' + key + '"]');
    if (cb) cb.checked = !!val;
    updateAllBadges();
  }

  window.Filters = {
    build: build,
    match: match,
    activeTags: activeTags,
    remove: remove,
    clearAll: clearAll,
    setFacet: setFacet,
    setFlag: setFlag,
    setFavoriteOnly: setFavoriteOnly,
    isFavoriteOnly: isFavoriteOnly,
    syncCheckboxes: syncCheckboxes,
    openFirst: openFirst
  };
})();
