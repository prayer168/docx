/* ============================================================
   favorites.js — 收藏功能（儲存於 localStorage）
   對外暴露：window.Favorites
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "digitalLearningFavorites";
  var ids = [];              // 收藏的案例 id 陣列
  var available = true;      // localStorage 是否可用

  function load() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      ids = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(ids)) ids = [];
    } catch (e) {
      available = false;
      ids = [];
    }
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      available = false;
      // 由 app.js 顯示友善提示
      document.dispatchEvent(new CustomEvent("storage-error"));
    }
  }

  function has(id) { return ids.indexOf(id) !== -1; }

  /** 切換收藏狀態，回傳切換後是否為已收藏 */
  function toggle(id) {
    var idx = ids.indexOf(id);
    if (idx === -1) { ids.push(id); } else { ids.splice(idx, 1); }
    save();
    document.dispatchEvent(new CustomEvent("favorites-change"));
    return has(id);
  }

  function count() { return ids.length; }
  function all() { return ids.slice(); }

  function clear() {
    ids = [];
    save();
    document.dispatchEvent(new CustomEvent("favorites-change"));
  }

  /** 匯出為 JSON 檔下載 */
  function exportJson(examples) {
    var picked = (examples || []).filter(function (ex) { return has(ex.id); })
      .map(function (ex) { return { id: ex.id, title: ex.title, type: ex.type }; });
    var payload = { app: "數位教材設計靈感大全", exportedAt: new Date().toISOString(), favorites: picked };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "my-favorites.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  load();

  window.Favorites = {
    has: has,
    toggle: toggle,
    count: count,
    all: all,
    clear: clear,
    exportJson: exportJson,
    isAvailable: function () { return available; }
  };
})();
