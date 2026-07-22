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

  /** 建立篩選面板 UI */
  function build(examples, onChange) {
    var container = document.getElementById("filter-groups");
    if (!container) return;
    container.innerHTML = "";

    // 多選面向
    FACETS.forEach(function (facet) {
      var values = collectValues(examples, facet);
      if (!values.length) return;
      var group = document.createElement("div");
      group.className = "filter-group";
      var title = document.createElement("h4");
      title.className = "filter-group__title";
      title.textContent = facet.label;
      title.setAttribute("role", "button");
      title.setAttribute("tabindex", "0");
      title.addEventListener("click", function () { group.classList.toggle("is-collapsed"); });
      title.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); group.classList.toggle("is-collapsed"); }
      });
      var options = document.createElement("div");
      options.className = "filter-group__options";

      values.forEach(function (v) {
        var label = document.createElement("label");
        label.className = "filter-option";
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.value = v.value;
        cb.dataset.facet = facet.key;
        cb.addEventListener("change", function () {
          if (cb.checked) { selected[facet.key].add(v.value); }
          else { selected[facet.key].delete(v.value); }
          onChange();
        });
        var text = document.createElement("span");
        text.textContent = v.value;
        var cnt = document.createElement("span");
        cnt.className = "filter-option__count";
        cnt.textContent = v.count;
        label.appendChild(cb);
        label.appendChild(text);
        label.appendChild(cnt);
        options.appendChild(label);
      });

      group.appendChild(title);
      group.appendChild(options);
      container.appendChild(group);
    });

    // 布林面向
    var flagGroup = document.createElement("div");
    flagGroup.className = "filter-group";
    var flagTitle = document.createElement("h4");
    flagTitle.className = "filter-group__title";
    flagTitle.textContent = "特性";
    flagTitle.setAttribute("role", "button");
    flagTitle.setAttribute("tabindex", "0");
    flagTitle.addEventListener("click", function () { flagGroup.classList.toggle("is-collapsed"); });
    var flagOptions = document.createElement("div");
    flagOptions.className = "filter-group__options";
    FLAGS.forEach(function (flag) {
      var label = document.createElement("label");
      label.className = "filter-option";
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.dataset.flag = flag.key;
      cb.addEventListener("change", function () {
        if (cb.checked) { flags[flag.key] = true; } else { delete flags[flag.key]; }
        onChange();
      });
      var text = document.createElement("span");
      text.textContent = flag.label;
      label.appendChild(cb);
      label.appendChild(text);
      flagOptions.appendChild(label);
    });
    flagGroup.appendChild(flagTitle);
    flagGroup.appendChild(flagOptions);
    container.appendChild(flagGroup);
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
  }
  function syncFlagCheckbox(key, val) {
    var cb = document.querySelector('input[data-flag="' + key + '"]');
    if (cb) cb.checked = !!val;
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
    syncCheckboxes: syncCheckboxes
  };
})();
