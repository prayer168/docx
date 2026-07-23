# 數位教材設計靈感大全

**Interactive Digital Learning Design Inspiration Library**

一套提供教師、教材設計者、教育科技工作者與學生使用的數位教材設計案例資料庫。收錄 JavaScript 特效、CSS 動畫、自然科互動網站案例，以及 Three.js、GSAP、SVG、Canvas 教材效果，並針對每個案例提供**教學應用、技術分析與修改建議**，可直接複製程式碼、即時預覽並套用到自己的教材。

以純 HTML / CSS / 原生 JavaScript 開發，**不需後端、不需登入、不連資料庫**，可直接部署到 GitHub Pages，也可在本機直接開啟 `index.html` 使用。

---

## 一、功能列表

- 🔍 **全站搜尋**：即時搜尋案例名稱、技術、教學科目、標籤（中英文、忽略大小寫、可 Enter 搜尋）
- 🧭 **多維分類與篩選**：資源類型、教學領域、技術、難度、互動方式，以及「提供完整程式碼 / 需要程式庫 / 手機友善 / 可離線 / 無障礙 / 精選 / 僅收藏」等特性；可同時套用、即時顯示符合數量、點標籤移除單一條件
- ↕️ **排序**：依推薦、名稱、難度、更新日期、收藏狀態
- 🗂️ **兩種檢視**：網格模式與清單模式
- ⭐ **收藏**：以 `localStorage` 保存，重新整理後保留；可匯出 JSON、清除全部
- 🌗 **深色 / 淺色模式**：偏好保存於 `localStorage`
- 💻 **程式碼展示**：HTML / CSS / JavaScript / 完整版 / 使用說明分頁，語法醒目顯示（Prism.js）、一鍵複製、全螢幕檢視
- ⬇️ **下載完整單檔 HTML**
- ▶️ **即時預覽**：在 `iframe sandbox="allow-scripts"` 沙箱中執行，可切換桌面／平板／手機寬度、重新整理、全螢幕、錯誤提示
- 📊 **統計數字動畫**、首頁快捷入口、分類 chips、使用指南
- ♿ **無障礙**：語意標籤、鍵盤操作、焦點管理、`aria-*`、`prefers-reduced-motion`
- 📱 **RWD**：320 / 375 / 768 / 1024 / 1440px 皆無整頁水平捲軸

---

## 二、檔案結構

```
digital-learning-inspiration/
├── index.html            # 單頁式主頁面
├── css/
│   ├── style.css         # 設計權杖、主題、版面、排版
│   ├── components.css     # 按鈕、卡片、Modal、程式碼、篩選、Toast 等元件
│   └── responsive.css    # 響應式斷點
├── js/
│   ├── app.js            # 主程式：渲染、搜尋、排序、Modal、事件
│   ├── data.js           # 案例資料庫（第一階段 60 個，主要資料來源）
│   ├── data-phase2.js    # 第二階段擴充：p5.js / Matter.js / Chart.js
│   ├── data-phase2b.js   # 第二階段擴充：UI 元件 / 捲動敘事 / 遊戲化學習
│   ├── data-phase2c.js   # 第二階段擴充：測驗 / 虛擬實驗 / 導覽 / 無障礙 / 行動
│   ├── filters.js        # 篩選器邏輯與面板
│   ├── favorites.js      # 收藏（localStorage）
│   ├── code-runner.js    # 複製、下載、iframe 即時預覽
│   └── theme.js          # 深色／淺色模式
├── data/
│   └── examples.json     # 案例資料備份（未來擴充格式，非執行必需）
├── assets/
│   ├── icons/            # 圖示
│   ├── images/           # 圖片
│   └── thumbnails/       # 縮圖（缺圖時卡片自動以 emoji 備援）
├── README.md
└── LICENSE
```

> **關於資料來源**：為確保用 `file://` 直接開啟時也能運作（部分瀏覽器禁止 `fetch` 本機 JSON），**主要資料放在 `js/data.js`**，以 `<script>` 直接載入；`data/examples.json` 僅作為備份與未來擴充格式。

---

## 三、本地端開啟方式

### 方法 A：直接開啟（最簡單）
用瀏覽器直接開啟 `index.html` 即可，所有功能（搜尋、篩選、收藏、深色模式、複製、即時預覽）皆可使用。

### 方法 B：使用簡易 HTTP Server（建議）
若要讀取 `data/examples.json` 或模擬正式環境，可啟動本機伺服器：

```bash
# Python 3
python -m http.server 8000
# 或 Node（不強制依賴）
npx serve
```

接著開啟 `http://localhost:8000`。

> 本網站**不強制依賴 Node.js**，僅在您想用 `npx serve` 時才需要。

---

## 四、GitHub Pages 部署流程

1. 建立 GitHub 儲存庫，將本資料夾內容推送上去（讓 `index.html` 位於您要發布的路徑）。
2. 進入儲存庫 **Settings → Pages**。
3. **Source** 選擇 `Deploy from a branch`，Branch 選擇您的分支（如 `main`）與 `/ (root)`（或放置 `index.html` 的資料夾）。
4. 儲存後稍候，即可在 `https://<帳號>.github.io/<儲存庫>/` 瀏覽。

> **子路徑相容**：所有資源皆使用**相對路徑**（例如 `css/style.css`、`assets/thumbnails/xxx.png`），不使用 `/assets/...` 這類會在專案子路徑失效的絕對路徑，因此在 GitHub Pages 子路徑下也能正常載入。

---

## 五、如何新增案例

有兩種方式，搜尋、篩選、卡片與統計都會**自動更新**（皆由資料動態產生，無寫死的卡片 HTML）：

1. **第一階段案例**：在 `js/data.js` 對應分組陣列（`groupA`～`groupD`）中新增物件；CSS 動畫類可使用 `cssAnim({...})` 工廠函式。
2. **後續擴充案例**：在 `js/data-phase2*.js` 中以 `window.__P2mk({...})`（或 `mk({...})`）新增物件並 `push` 進共用陣列；此工廠會自動補齊合理預設值，只需提供具辨識度的 `title / description / teachingApplication / tags` 等欄位即可，避免出現空白或空泛內容。要新增下一批（例如 `data-phase3.js`），比照 phase2 的模式建立檔案，並在 `index.html` 於 `data.js` 之前載入即可。

新增後如需同步備份 JSON：

```bash
node -e "global.window={};global.matchMedia=function(){return{matches:false}};\
require('./js/data-phase2.js');require('./js/data-phase2b.js');require('./js/data-phase2c.js');\
require('./js/data.js');\
require('fs').writeFileSync('data/examples.json',JSON.stringify(window.DATA,null,2))"
```

### 案例資料欄位說明

| 欄位 | 說明 |
| --- | --- |
| `id` | 唯一識別碼（如 `js-016`），需唯一 |
| `title` / `titleEn` | 中文 / 英文名稱 |
| `type` | 資源類型（JavaScript 特效、CSS 動畫、自然科互動網站、Three.js 案例…） |
| `subjects` | 教學領域陣列（自然科學、數學、人工智慧…） |
| `topics` | 教學主題陣列 |
| `gradeLevels` | 適用年級陣列 |
| `difficulty` | 難度：入門／初階／中階／進階／專業 |
| `technologies` | 使用技術陣列（HTML、CSS、JavaScript、SVG、Three.js…） |
| `interactionTypes` | 互動方式陣列（點擊、拖曳、滑桿…） |
| `libraries` / `requiresLibrary` | 外部程式庫清單 / 是否需要 |
| `mobileFriendly` `tabletFriendly` `offlineFriendly` `accessible` `featured` `hasFullCode` | 布林特性 |
| `description` | 效果說明 |
| `teachingApplication` `learningObjectives` `teacherGuide` `studentTask` `scienceFairApplication` `extensions` | 教學應用相關 |
| `techAnalysis` `performanceNotes` `mobileNotes` `accessibilityNotes` | 技術分析 |
| `modifyTips` | 修改建議陣列 |
| `htmlCode` `cssCode` `jsCode` `fullCode` | 程式碼（`fullCode` 為完整單檔；若空則由 html/css/js 自動組合） |
| `externalSite` | 外部網站案例資訊（名稱、機構、網址、是否免費、技術推測等） |
| `thumbnail` `referenceUrl` `license` `tags` `createdAt` `updatedAt` | 其他 |

---

## 六、常見自訂

- **修改主題顏色**：編輯 `css/style.css` 最上方 `:root`、`[data-theme="dark"]`、`[data-theme="light"]` 內的 CSS 變數（如 `--c-primary`、`--c-primary-2`）。
- **加入新的分類**：篩選面向定義於 `js/filters.js` 的 `FACETS` 與 `FLAGS`；新增資料值即會自動出現於篩選面板。
- **替換縮圖**：將圖片放入 `assets/thumbnails/`，於案例的 `thumbnail` 欄位填入相對路徑；缺圖時卡片會自動以對應類型 emoji 備援。
- **使用外部程式庫**：於案例的 `fullCode` 以 CDN `<script>` 載入（範例已內含 `onerror` 載入失敗提示），並將 `requiresLibrary` 設為 `true`、`offlineFriendly` 設為 `false`。

---

## 七、授權注意事項

- 本站**示範程式碼**以教學與研究用途為主，歡迎自由取用、修改與再創作（見 `LICENSE`）。
- 引用第三方網站（如 PhET、NASA）時，本站**僅提供連結、功能分析與教學應用建議，不複製其原始程式碼、不宣稱擁有其內容**；所有商標、網站內容與原始設計均屬其原權利人所有。
- 對於無法確定的第三方技術，資料中標示「依網站互動表現推測，未經官方確認。」

---

## 八、已知限制

- Three.js / GSAP 案例需透過 CDN 載入，離線或無網路時無法執行（已提供載入失敗提示）；其餘案例皆可離線使用。
- 即時預覽使用 `sandbox="allow-scripts"`，僅執行本站已知的示範程式碼；不允許存取父頁面 DOM、不開啟彈出視窗。
- 收藏與偏好設定儲存於瀏覽器 `localStorage`，無痕模式或停用儲存時無法保存（已提供友善提示）。
- 縮圖以 emoji 備援呈現，如需實際截圖請自行放入 `assets/thumbnails/`。

---

## 九、未來開發方向

- 逐步擴充至 300～500 個案例（架構已支援）：新案例可先以精簡資料建立，再補上完整程式碼與教學分析。
- 加入更多外部自然科網站研究案例（互動物理模擬、虛擬實驗室、公民科學等）。
- 增加案例縮圖與動態預覽、標籤雲、關鍵字醒目標示強化。
- 匯入／匯出整體資料集、離線快取（Service Worker）。

---

## 十、測試結果摘要

- ✅ **141 個案例**（第一階段 60 ＋ 第二階段 81）、**139 個具完整可執行程式碼**
- ✅ 已涵蓋全部 18 種資源類型：JavaScript 特效、CSS 動畫、自然科互動網站、Three.js、GSAP、SVG、Canvas、p5.js、Matter.js、Chart.js、UI 互動元件、捲動敘事、遊戲化學習、測驗與評量、虛擬實驗、教材版面與導覽、無障礙互動、行動載具互動
- ✅ 搜尋、多條件篩選、排序、收藏（localStorage 保存）、深色模式、複製、下載、即時預覽皆可操作
- ✅ 全部 JS 檔通過語法檢查、`data.js` 通過解析、無重複 id、核心欄位齊全
- ✅ RWD 320～1440px 無整頁水平捲軸；Modal 手機版接近全螢幕
- ✅ 所有介面文字為臺灣繁體中文

詳細待辦與擴充方式見上方「未來開發方向」與「如何新增案例」。
