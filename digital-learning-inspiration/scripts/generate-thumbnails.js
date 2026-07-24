#!/usr/bin/env node
/* ============================================================
   generate-thumbnails.js — 產生案例真實截圖縮圖
   《數位教材設計靈感大全》開發工具（非網站執行的必要檔案）

   用途：
     以無頭瀏覽器實際渲染各案例的「完整程式碼」，擷取畫面存成
     assets/thumbnails/<id>.png，並更新 js/thumbnails.js 的 window.THUMBS 清單，
     讓卡片顯示真實縮圖（其餘案例仍以類型漸層＋emoji 呈現）。

   前置需求（僅開發時需要，網站瀏覽本身不需 Node.js）：
     npm install --save-dev playwright
     npx playwright install chromium

   使用方式（於專案根目錄執行）：
     node scripts/generate-thumbnails.js            # 產生所有具完整程式碼的案例縮圖
     node scripts/generate-thumbnails.js js-001 sci-001   # 只產生指定 id
     node scripts/generate-thumbnails.js --offline  # 僅產生免程式庫（可離線）案例

   注意：
     - 需要 CDN 的案例（Three.js／GSAP／p5.js／Matter.js／Chart.js）必須在
       「有網路」的環境執行本腳本，才能擷取到實際畫面；離線時會擷取到載入失敗提示。
     - 動畫類案例擷取的是等待數秒後的某一影格。
     - 本腳本會「合併」既有的 window.THUMBS 清單，不會刪除他人已放入的縮圖 id。
   ============================================================ */

"use strict";
const fs = require("fs");
const path = require("path");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (e) {
  console.error("找不到 playwright，請先安裝：npm install --save-dev playwright");
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const DATA_FILES = [
  "data-phase2", "data-phase2b", "data-phase2c",
  "data-phase3a", "data-phase3b", "data-phase3c", "data-phase3d",
  "data"
];

/** 在 Node 環境載入資料檔（它們會寫入 global.window.DATA） */
function loadExamples() {
  global.window = {};
  global.matchMedia = function () { return { matches: false }; };
  DATA_FILES.forEach(function (f) {
    const p = path.join(ROOT, "js", f + ".js");
    if (fs.existsSync(p)) require(p);
  });
  return (global.window.DATA && global.window.DATA.examples) || [];
}

/** 組合完整單檔 HTML（對應 js/code-runner.js 的 buildFullHtml） */
function buildFullHtml(ex) {
  if (ex.fullCode && ex.fullCode.trim()) return ex.fullCode;
  const html = ex.htmlCode || "", css = ex.cssCode || "", js = ex.jsCode || "";
  return [
    "<!DOCTYPE html>",
    '<html lang="zh-Hant"><head><meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "<style>" + css + "</style></head><body>",
    html,
    "<scr" + "ipt>" + js + "</scr" + "ipt>",
    "</body></html>"
  ].join("\n");
}

/** 讀取既有的 window.THUMBS（若存在），以便合併 */
function readExistingThumbs() {
  const p = path.join(ROOT, "js", "thumbnails.js");
  if (!fs.existsSync(p)) return [];
  const m = fs.readFileSync(p, "utf8").match(/window\.THUMBS\s*=\s*(\[[^\]]*\])/);
  try { return m ? JSON.parse(m[1]) : []; } catch (e) { return []; }
}

async function main() {
  const args = process.argv.slice(2);
  const offlineOnly = args.indexOf("--offline") !== -1;
  const idArgs = args.filter(function (a) { return a.indexOf("--") !== 0; });

  const examples = loadExamples();
  const byId = {};
  examples.forEach(function (e) { byId[e.id] = e; });

  let targets;
  if (idArgs.length) {
    targets = idArgs;
  } else {
    targets = examples.filter(function (e) {
      return e.hasFullCode && (!offlineOnly || !e.requiresLibrary);
    }).map(function (e) { return e.id; });
  }

  const outDir = path.join(ROOT, "assets", "thumbnails");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch(
    process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {}
  );

  const done = [];
  for (const id of targets) {
    const ex = byId[id];
    if (!ex) { console.warn("略過（找不到 id）:", id); continue; }
    if (!ex.hasFullCode) { console.warn("略過（無完整程式碼）:", id); continue; }
    const page = await browser.newPage({ viewport: { width: 400, height: 225 }, deviceScaleFactor: 1.5 });
    try {
      await page.setContent(buildFullHtml(ex), { waitUntil: "load", timeout: 15000 });
      await page.waitForTimeout(1200); // 等待 canvas / 動畫渲染一個影格
      await page.screenshot({ path: path.join(outDir, id + ".png"), clip: { x: 0, y: 0, width: 400, height: 225 } });
      console.log("OK", id);
      done.push(id);
    } catch (e) {
      console.warn("失敗", id, "-", e.message);
    } finally {
      await page.close();
    }
  }
  await browser.close();

  // 合併既有清單並寫回 js/thumbnails.js
  const merged = Array.from(new Set(readExistingThumbs().concat(done))).sort();
  fs.writeFileSync(
    path.join(ROOT, "js", "thumbnails.js"),
    "/* thumbnails.js — 具真實截圖縮圖的案例 id 清單\n" +
    "   由 scripts/generate-thumbnails.js 產生，請勿手動大幅編輯。 */\n" +
    "window.THUMBS = " + JSON.stringify(merged) + ";\n"
  );
  console.log("\n完成：本次產生 " + done.length + " 張，window.THUMBS 共 " + merged.length + " 筆。");
}

main().catch(function (e) { console.error(e); process.exit(1); });
