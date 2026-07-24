/* ============================================================
   data-phase3d.js — 第三階段擴充（外部網站研究案例 ＋ 跨領域教學）
   須於 data-phase2.js 之後、data.js 之前載入。
   外部網站案例僅提供連結、功能分析與教學應用建議，不含程式碼、不宣稱擁有其內容；
   對無法確定的技術均標示「依網站互動表現推測，未經官方確認」。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }

  /** 外部網站研究案例輔助 */
  function site(o) {
    add({
      id: o.id, title: o.title, titleEn: o.titleEn, type: "自然科互動網站",
      subjects: o.subjects, topics: o.topics, gradeLevels: o.gradeLevels || ["國小高年級", "國中", "高中"],
      difficulty: o.difficulty || "初階", technologies: o.technologies || ["HTML", "JavaScript"],
      interactionTypes: o.interactionTypes || ["點擊", "即時模擬"], libraries: [], offlineFriendly: false,
      description: o.description, teachingApplication: o.teachingApplication,
      learningObjectives: o.learningObjectives || ["以現成互動資源進行探究", "觀察並記錄結果"],
      teacherGuide: "選擇對應單元的內容，設計引導問題讓學生操作探究，並搭配學習單。",
      studentTask: "操作網站互動內容並記錄觀察或蒐集的資料。",
      scienceFairApplication: o.scienceFairApplication || "以現成資源建立假設或蒐集資料，再進行實體驗證。",
      techAnalysis: (o.techGuess || "依網站互動表現推測，使用 HTML5 與 JavaScript。") + "（未經官方確認）",
      performanceNotes: "線上載入，需網路連線；部分內容較耗資源。",
      mobileNotes: o.mobile || "多數頁面支援行動裝置，實際請以裝置測試為準。",
      accessibilityNotes: "無障礙程度依原網站而定，建議搭配教師口述說明。",
      modifyTips: ["可嵌入 iframe 於教材（請遵守其使用條款）", "搭配學習單使用", "挑選對應單元內容"],
      referenceUrl: o.url, license: "第三方網站，著作權屬原權利人所有",
      externalSite: { name: o.name, org: o.org, url: o.url, needAccount: o.account || "多數內容免帳號", free: o.free || "免費（部分進階內容可能收費）", chinese: o.chinese || "以英文為主", mobile: o.mobile || "支援", techGuess: (o.techGuess || "依網站互動表現推測") + "，未經官方確認。", notes: "引用時請遵守其授權條款，勿宣稱自有內容。" },
      tags: o.tags, createdAt: "2026-07-23", updatedAt: "2026-07-23"
    });
  }

  /* ---------- 外部自然科互動網站研究案例（20） ---------- */
  site({ id: "site-001", title: "Google Earth 地球探索", titleEn: "Google Earth", name: "Google Earth", org: "Google（美國）", url: "https://earth.google.com/",
    subjects: ["自然科學", "地球科學", "社會領域"], topics: ["地理", "衛星影像", "3D 地球"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["3D 操作", "拖曳"],
    description: "以 3D 地球與衛星影像瀏覽全球地形、城市與地標，可測距與建立導覽。",
    teachingApplication: "地理位置、地形與環境變遷教學，帶學生虛擬走訪各地。",
    techGuess: "3D 地球互動推測使用 WebGL", chinese: "支援繁體中文", tags: ["Google Earth", "地理", "3D", "外部資源"] });
  site({ id: "site-002", title: "Stellarium 線上星空", titleEn: "Stellarium Web", name: "Stellarium Web", org: "Stellarium（開源）", url: "https://stellarium-web.org/",
    subjects: ["自然科學", "地球科學"], topics: ["星空", "星座", "天文"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["拖曳", "即時模擬"],
    description: "線上天象館，即時呈現任意時間地點的星空、星座與行星位置。",
    teachingApplication: "天文觀星教學，模擬不同時間地點的星空。",
    techGuess: "星空渲染推測使用 WebGL", chinese: "支援多語（含中文）", tags: ["Stellarium", "星空", "天文", "外部資源"] });
  site({ id: "site-003", title: "Desmos 繪圖計算機", titleEn: "Desmos Graphing", name: "Desmos", org: "Desmos（美國）", url: "https://www.desmos.com/calculator",
    subjects: ["數學"], topics: ["函數", "繪圖", "代數"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["滑桿", "即時模擬"],
    description: "強大的線上函數繪圖工具，輸入方程式即時繪圖，可用滑桿探究參數。",
    teachingApplication: "函數圖形、參數探究與代數視覺化教學。",
    techGuess: "繪圖推測使用 SVG／Canvas", chinese: "支援繁體中文", tags: ["Desmos", "函數", "繪圖", "外部資源"] });
  site({ id: "site-004", title: "GeoGebra 動態數學", titleEn: "GeoGebra", name: "GeoGebra", org: "GeoGebra（奧地利）", url: "https://www.geogebra.org/",
    subjects: ["數學"], topics: ["幾何", "代數", "動態幾何"], difficulty: "中階",
    technologies: ["HTML", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "整合幾何、代數與微積分的動態數學軟體，可建立互動作圖。",
    teachingApplication: "動態幾何、函數與統計的探究式教學。",
    techGuess: "動態作圖推測使用 Canvas／SVG", chinese: "支援繁體中文", tags: ["GeoGebra", "動態幾何", "數學", "外部資源"] });
  site({ id: "site-005", title: "NASA Eyes 太陽系", titleEn: "NASA Eyes on Solar System", name: "NASA's Eyes", org: "NASA/JPL（美國）", url: "https://eyes.nasa.gov/",
    subjects: ["自然科學", "地球科學"], topics: ["太陽系", "太空任務", "3D"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["3D 操作"],
    description: "以 3D 即時資料呈現太陽系、行星與太空任務軌跡。",
    teachingApplication: "太陽系與太空任務教學，觀察真實軌道資料。",
    techGuess: "3D 場景推測使用 WebGL", tags: ["NASA", "太陽系", "3D", "外部資源"] });
  site({ id: "site-006", title: "The Concord Consortium 模擬", titleEn: "Concord Consortium", name: "Concord Consortium", org: "Concord Consortium（美國）", url: "https://learn.concord.org/",
    subjects: ["自然科學", "物理", "化學", "生物"], topics: ["科學模擬", "探究", "STEM"], difficulty: "中階",
    description: "提供大量開放的科學互動模擬與探究課程，涵蓋多個學科。",
    teachingApplication: "以互動模擬進行 STEM 探究教學。",
    techGuess: "互動模擬推測使用 HTML5 Canvas／JavaScript", tags: ["Concord", "科學模擬", "STEM", "外部資源"] });
  site({ id: "site-007", title: "Molecular Workbench", titleEn: "Molecular Workbench", name: "Molecular Workbench", org: "Concord Consortium（美國）", url: "https://mw.concord.org/",
    subjects: ["自然科學", "化學", "物理"], topics: ["分子", "模擬", "微觀"], difficulty: "進階",
    description: "呈現原子與分子層級運動的互動模擬，連結微觀與巨觀現象。",
    teachingApplication: "分子運動、化學鍵與物態變化的微觀教學。",
    techGuess: "分子模擬推測使用 JavaScript／Canvas", tags: ["分子", "模擬", "化學", "外部資源"] });
  site({ id: "site-008", title: "Solar System Scope", titleEn: "Solar System Scope", name: "Solar System Scope", org: "INOVE（斯洛伐克）", url: "https://www.solarsystemscope.com/",
    subjects: ["自然科學", "地球科學"], topics: ["太陽系", "行星", "3D"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["3D 操作"],
    description: "3D 太陽系與星空模型，可切換行星視角並觀察軌道。",
    teachingApplication: "太陽系結構與行星運動的視覺化教學。",
    techGuess: "3D 呈現推測使用 WebGL", chinese: "支援多語", tags: ["太陽系", "3D", "行星", "外部資源"] });
  site({ id: "site-009", title: "The Physics Classroom", titleEn: "The Physics Classroom", name: "The Physics Classroom", org: "The Physics Classroom（美國）", url: "https://www.physicsclassroom.com/",
    subjects: ["自然科學", "物理"], topics: ["物理", "互動", "習題"], difficulty: "中階",
    description: "提供物理概念說明、互動模擬（Interactives）與練習題的教學網站。",
    teachingApplication: "物理各單元的概念教學與互動練習。",
    techGuess: "互動模擬推測使用 HTML5／JavaScript", tags: ["物理", "互動", "習題", "外部資源"] });
  site({ id: "site-010", title: "Learn Genetics（猶他大學）", titleEn: "Learn.Genetics", name: "Learn.Genetics", org: "University of Utah（美國）", url: "https://learn.genetics.utah.edu/",
    subjects: ["自然科學", "生物"], topics: ["遺傳", "細胞", "基因"], difficulty: "中階",
    description: "以互動內容說明遺傳、細胞與基因等生物概念的教育網站。",
    teachingApplication: "遺傳與細胞生物學的互動教學。",
    techGuess: "互動內容推測使用 HTML5／JavaScript", tags: ["遺傳", "生物", "基因", "外部資源"] });
  site({ id: "site-011", title: "Windy 氣象視覺化", titleEn: "Windy.com", name: "Windy", org: "Windy（捷克）", url: "https://www.windy.com/",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["天氣", "風場", "氣象"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["拖曳", "即時模擬"],
    description: "以動態動畫呈現全球風場、降雨、溫度等即時氣象資料。",
    teachingApplication: "天氣、風場與氣候的即時資料教學。",
    techGuess: "氣象動畫推測使用 WebGL／Canvas", chinese: "支援繁體中文", tags: ["天氣", "風場", "氣象", "外部資源"] });
  site({ id: "site-012", title: "PhET 化學模擬", titleEn: "PhET Chemistry", name: "PhET（化學類）", org: "University of Colorado Boulder（美國）", url: "https://phet.colorado.edu/zh_TW/simulations/filter?subjects=chemistry",
    subjects: ["自然科學", "化學"], topics: ["化學反應", "濃度", "模擬"], difficulty: "初階",
    description: "PhET 化學類互動模擬，如反應濃度、酸鹼與分子形狀。",
    teachingApplication: "化學各單元的虛擬實驗與探究。",
    techGuess: "HTML5 模擬推測使用 Canvas／WebGL", chinese: "支援繁體中文", tags: ["PhET", "化學", "模擬", "外部資源"] });
  site({ id: "site-013", title: "BioInteractive（HHMI）", titleEn: "HHMI BioInteractive", name: "HHMI BioInteractive", org: "Howard Hughes Medical Institute（美國）", url: "https://www.biointeractive.org/",
    subjects: ["自然科學", "生物", "環境教育"], topics: ["生態", "演化", "資料探究"], difficulty: "進階",
    description: "提供生物與生態的互動模組、資料點與影片等教學資源。",
    teachingApplication: "生態、演化與科學資料分析教學。",
    techGuess: "互動模組推測使用 HTML5／JavaScript", tags: ["生物", "生態", "資料", "外部資源"] });
  site({ id: "site-014", title: "Foldit 蛋白質摺疊", titleEn: "Foldit", name: "Foldit", org: "University of Washington（美國）", url: "https://fold.it/",
    subjects: ["自然科學", "生物", "資訊教育"], topics: ["蛋白質", "公民科學", "解謎"], difficulty: "進階",
    interactionTypes: ["拖曳", "遊戲控制"], description: "以解謎遊戲方式讓大眾參與蛋白質摺疊研究的公民科學專案。",
    teachingApplication: "介紹公民科學與蛋白質結構的探究活動。",
    scienceFairApplication: "參與公民科學專案並記錄貢獻與觀察。",
    techGuess: "3D 互動推測使用專屬引擎", account: "需註冊帳號", tags: ["公民科學", "蛋白質", "遊戲", "外部資源"] });
  site({ id: "site-015", title: "iNaturalist 生物觀察", titleEn: "iNaturalist", name: "iNaturalist", org: "California Academy of Sciences 等（美國）", url: "https://www.inaturalist.org/",
    subjects: ["自然科學", "生物", "環境教育"], topics: ["生物多樣性", "公民科學", "觀察"], difficulty: "初階",
    interactionTypes: ["點擊", "觸控"], description: "上傳生物照片參與辨識與紀錄，建立生物多樣性公民科學資料。",
    teachingApplication: "校園生物調查與公民科學觀察活動。",
    scienceFairApplication: "以實地觀察資料進行生物多樣性研究。",
    techGuess: "影像辨識推測使用機器學習模型", account: "上傳需帳號", chinese: "支援多語", mobile: "有行動 App", tags: ["生物多樣性", "公民科學", "觀察", "外部資源"] });
  site({ id: "site-016", title: "Ocean Explorer（NOAA）", titleEn: "NOAA Ocean Explorer", name: "NOAA Ocean Explorer", org: "NOAA（美國）", url: "https://oceanexplorer.noaa.gov/",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["海洋", "深海", "探索"], difficulty: "中階",
    description: "提供海洋與深海探索的影像、資料與教育資源。",
    teachingApplication: "海洋科學與深海生態教學。",
    techGuess: "多媒體內容推測使用 HTML5", tags: ["海洋", "深海", "地科", "外部資源"] });
  site({ id: "site-017", title: "Earth Nullschool 風場", titleEn: "earth.nullschool.net", name: "earth (nullschool)", org: "Cameron Beccario（個人專案）", url: "https://earth.nullschool.net/",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["風場", "洋流", "視覺化"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["拖曳", "即時模擬"],
    description: "以流動線條呈現全球風場與洋流的即時視覺化。",
    teachingApplication: "全球風場、洋流與氣候系統教學。",
    techGuess: "流線動畫推測使用 WebGL／Canvas", tags: ["風場", "洋流", "視覺化", "外部資源"] });
  site({ id: "site-018", title: "Scratch 程式創作", titleEn: "Scratch", name: "Scratch", org: "MIT Media Lab（美國）", url: "https://scratch.mit.edu/",
    subjects: ["資訊教育", "人工智慧", "藝術教育"], topics: ["積木程式", "創作", "運算思維"], difficulty: "初階",
    interactionTypes: ["拖曳", "遊戲控制"], description: "以積木式程式讓學生創作互動故事、遊戲與動畫。",
    teachingApplication: "運算思維與程式設計入門，跨科創作。",
    techGuess: "積木編輯器推測使用 JavaScript（Blockly 類）", account: "分享需帳號", chinese: "支援繁體中文", tags: ["Scratch", "積木程式", "運算思維", "外部資源"] });
  site({ id: "site-019", title: "Teachable Machine", titleEn: "Teachable Machine", name: "Teachable Machine", org: "Google（美國）", url: "https://teachablemachine.withgoogle.com/",
    subjects: ["人工智慧", "資訊教育"], topics: ["機器學習", "訓練", "分類"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "WebGL"], interactionTypes: ["點擊", "即時模擬"],
    description: "不需寫程式即可用相機影像訓練簡單的機器學習分類模型。",
    teachingApplication: "AI 教學：親手訓練影像/聲音分類模型，體會機器學習流程。",
    scienceFairApplication: "訓練自訂分類模型並評估其準確度。",
    techGuess: "瀏覽器端訓練推測使用 TensorFlow.js／WebGL", chinese: "支援多語", tags: ["Teachable Machine", "機器學習", "AI", "外部資源"] });
  site({ id: "site-020", title: "Quick, Draw!（Google AI）", titleEn: "Quick, Draw!", name: "Quick, Draw!", org: "Google（美國）", url: "https://quickdraw.withgoogle.com/",
    subjects: ["人工智慧", "資訊教育", "藝術教育"], topics: ["手寫辨識", "神經網路", "資料"], difficulty: "初階",
    interactionTypes: ["Canvas 繪圖", "即時模擬"], description: "在限時內塗鴉，讓神經網路猜測你畫的是什麼，體驗 AI 辨識。",
    teachingApplication: "以趣味方式介紹神經網路影像辨識與訓練資料。",
    techGuess: "塗鴉辨識推測使用神經網路模型", chinese: "支援多語", tags: ["Quick Draw", "手寫辨識", "AI", "外部資源"] });

  /* ---------- 跨領域教學（語文／社會／藝術／健康／環境／科展）（20） ---------- */
  add({ id: "lang-001", title: "注音拼讀練習", titleEn: "Zhuyin Practice", type: "測驗與評量",
    subjects: ["語文教育"], topics: ["注音", "拼讀", "識字"], difficulty: "入門",
    interactionTypes: ["點擊", "聲音互動"], description: "點選注音符號組合並拼讀，練習國字注音。",
    teachingApplication: "低年級注音拼讀與識字練習。",
    learningObjectives: ["熟悉注音符號", "練習拼讀"], tags: ["注音", "拼讀", "語文"] });
  add({ id: "lang-002", title: "成語配對", titleEn: "Idiom Matching", type: "遊戲化學習",
    subjects: ["語文教育"], topics: ["成語", "配對", "詞義"], difficulty: "初階",
    interactionTypes: ["點擊", "遊戲控制"], description: "將成語與其解釋配對，複習成語意義。",
    teachingApplication: "成語意義與運用的複習遊戲。",
    learningObjectives: ["理解成語意義", "強化記憶"], tags: ["成語", "配對", "語文"] });
  add({ id: "lang-003", title: "筆順動畫示範", titleEn: "Stroke Order Animation", type: "自然科互動網站",
    subjects: ["語文教育", "藝術教育"], topics: ["筆順", "書寫", "國字"], difficulty: "入門",
    technologies: ["HTML", "CSS", "JavaScript", "SVG"], interactionTypes: ["點擊", "流程動畫"],
    description: "以動畫逐筆示範國字的正確筆順。",
    teachingApplication: "國字筆順教學與書寫練習。",
    learningObjectives: ["認識正確筆順", "培養書寫習慣"], tags: ["筆順", "國字", "書寫", "語文"] });
  add({ id: "lang-004", title: "詞語接龍", titleEn: "Word Chain", type: "遊戲化學習",
    subjects: ["語文教育"], topics: ["詞語", "接龍", "詞彙"], difficulty: "初階",
    interactionTypes: ["鍵盤操作", "遊戲控制"], description: "以前一詞的末字接新詞，累積詞彙量。",
    teachingApplication: "詞彙擴充與聯想的語文遊戲。",
    learningObjectives: ["擴充詞彙", "訓練聯想"], tags: ["詞語接龍", "詞彙", "語文"] });
  add({ id: "soc-001", title: "歷史事件時間軸", titleEn: "History Timeline", type: "捲動敘事",
    subjects: ["社會領域"], topics: ["歷史", "時間軸", "事件"], difficulty: "初階",
    interactionTypes: ["捲動", "點擊"], description: "以捲動時間軸呈現重要歷史事件與脈絡。",
    teachingApplication: "歷史事件先後與因果脈絡教學。",
    learningObjectives: ["建立時序概念", "連結事件因果"], tags: ["歷史", "時間軸", "社會"] });
  add({ id: "soc-002", title: "台灣地圖縣市互動", titleEn: "Taiwan Map", type: "SVG 案例",
    subjects: ["社會領域", "自然科學"], topics: ["地理", "縣市", "地圖"], difficulty: "中階",
    technologies: ["HTML", "CSS", "JavaScript", "SVG"], interactionTypes: ["點擊", "滑鼠移入"],
    description: "點擊台灣各縣市顯示名稱與資訊的互動地圖。",
    teachingApplication: "台灣地理位置與縣市認識。",
    learningObjectives: ["認識縣市位置", "地圖判讀"], tags: ["台灣", "地圖", "地理", "社會"] });
  add({ id: "soc-003", title: "人口金字塔", titleEn: "Population Pyramid", type: "Chart.js 與資料視覺化",
    subjects: ["社會領域", "數學"], topics: ["人口", "年齡結構", "統計"], difficulty: "進階",
    technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"], libraries: ["Chart.js"], offlineFriendly: false,
    interactionTypes: ["互動圖表"], description: "以左右對稱長條呈現人口年齡與性別結構。",
    teachingApplication: "人口結構與高齡化議題教學。",
    learningObjectives: ["解讀人口金字塔", "認識人口結構"], tags: ["人口", "金字塔", "統計", "社會"] });
  add({ id: "soc-004", title: "供需曲線互動", titleEn: "Supply & Demand", type: "自然科互動網站",
    subjects: ["社會領域", "數學"], topics: ["供需", "價格", "經濟"], difficulty: "進階",
    interactionTypes: ["滑桿", "互動圖表"], description: "拖動供需曲線，觀察均衡價格與數量的變化。",
    teachingApplication: "基本經濟學供需與價格機制教學。",
    learningObjectives: ["理解供需關係", "認識市場均衡"], tags: ["供需", "經濟", "社會"] });
  add({ id: "art-001", title: "調色盤混色", titleEn: "Color Mixing Palette", type: "虛擬實驗",
    subjects: ["藝術教育", "自然科學"], topics: ["顏色", "混色", "色彩"], difficulty: "入門",
    interactionTypes: ["點擊", "即時模擬"], description: "混合顏料三原色，觀察顏色相加（減法混色）的結果。",
    teachingApplication: "認識顏料的減法混色與配色。",
    learningObjectives: ["認識三原色", "理解顏料混色"], tags: ["顏色", "混色", "藝術"] });
  add({ id: "art-002", title: "節奏節拍器", titleEn: "Rhythm Metronome", type: "自然科互動網站",
    subjects: ["藝術教育", "數學"], topics: ["節奏", "拍子", "音樂"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "Web Audio API"], interactionTypes: ["滑桿", "聲音互動"],
    description: "可調整速度的節拍器，練習音樂節奏與拍子（需點擊啟動聲音）。",
    teachingApplication: "音樂節奏訓練與拍子認識。",
    learningObjectives: ["認識拍速", "培養節奏感"], tags: ["節奏", "節拍器", "音樂", "藝術"] });
  add({ id: "art-003", title: "對稱曼陀羅繪製", titleEn: "Mandala Drawing", type: "Canvas 案例",
    subjects: ["藝術教育", "數學"], topics: ["對稱", "曼陀羅", "創作"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "Canvas 繪圖"],
    description: "以多重旋轉對稱繪製曼陀羅圖案，結合藝術與幾何。",
    teachingApplication: "旋轉對稱與美感創作的跨科活動。",
    learningObjectives: ["體驗旋轉對稱", "藝術與數學結合"], tags: ["曼陀羅", "對稱", "藝術"] });
  add({ id: "hlt-001", title: "均衡飲食餐盤", titleEn: "Balanced Plate", type: "自然科互動網站",
    subjects: ["健康教育", "自然科學"], topics: ["營養", "飲食", "六大類"], difficulty: "初階",
    interactionTypes: ["拖曳", "互動圖表"], description: "將食物拖入餐盤，檢視六大類食物的均衡比例。",
    teachingApplication: "均衡飲食與營養概念教學。",
    learningObjectives: ["認識六大類食物", "規劃均衡飲食"], tags: ["營養", "飲食", "健康"] });
  add({ id: "hlt-002", title: "運動心率區間", titleEn: "Heart Rate Zones", type: "Chart.js 與資料視覺化",
    subjects: ["健康教育", "自然科學", "數學"], topics: ["心率", "運動", "健康"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"], libraries: ["Chart.js"], offlineFriendly: false,
    interactionTypes: ["滑桿", "互動圖表"], description: "輸入年齡計算最大心率與各運動強度區間。",
    teachingApplication: "運動強度與心率監測的健康教學。",
    learningObjectives: ["計算目標心率", "認識運動強度"], tags: ["心率", "運動", "健康"] });
  add({ id: "hlt-003", title: "睡眠週期時鐘", titleEn: "Sleep Cycle Clock", type: "自然科互動網站",
    subjects: ["健康教育", "自然科學"], topics: ["睡眠", "週期", "作息"], difficulty: "初階",
    interactionTypes: ["滑桿", "即時模擬"], description: "設定就寢時間，推算理想起床時間（睡眠週期）。",
    teachingApplication: "睡眠週期與規律作息的健康教學。",
    learningObjectives: ["認識睡眠週期", "培養規律作息"], tags: ["睡眠", "作息", "健康"] });
  add({ id: "env-001", title: "碳足跡計算器", titleEn: "Carbon Footprint", type: "測驗與評量",
    subjects: ["環境教育", "自然科學", "社會領域"], topics: ["碳足跡", "永續", "減碳"], difficulty: "中階",
    interactionTypes: ["滑桿", "互動圖表"], description: "輸入生活習慣估算碳足跡，並提供減碳建議。",
    teachingApplication: "氣候變遷與個人減碳行動教學。",
    learningObjectives: ["認識碳足跡", "思考減碳行動"], tags: ["碳足跡", "永續", "環境"] });
  add({ id: "env-002", title: "垃圾分類挑戰", titleEn: "Recycling Sort", type: "遊戲化學習",
    subjects: ["環境教育"], topics: ["回收", "分類", "永續"], difficulty: "入門",
    interactionTypes: ["拖曳", "遊戲控制"], description: "把垃圾拖入正確的回收桶，練習資源分類。",
    teachingApplication: "資源回收與垃圾分類教學。",
    learningObjectives: ["認識回收分類", "養成環保習慣"], tags: ["回收", "分類", "環境"] });
  add({ id: "env-003", title: "水資源足跡", titleEn: "Water Footprint", type: "自然科互動網站",
    subjects: ["環境教育", "自然科學"], topics: ["水資源", "永續", "用水"], difficulty: "中階",
    interactionTypes: ["點擊", "互動圖表"], description: "認識日常物品背後的隱藏用水量（虛擬水）。",
    teachingApplication: "水資源保育與虛擬水概念教學。",
    learningObjectives: ["認識虛擬水", "珍惜水資源"], tags: ["水資源", "永續", "環境"] });
  add({ id: "fair-001", title: "科展變因設計器", titleEn: "Science Fair Variables", type: "教材版面與導覽",
    subjects: ["科展探究", "自然科學"], topics: ["變因", "實驗設計", "探究"], difficulty: "中階",
    interactionTypes: ["點擊", "拖曳"], description: "以互動卡片規劃操縱、控制與應變變因，設計嚴謹實驗。",
    teachingApplication: "科展與探究實驗的變因控制教學。",
    learningObjectives: ["區分三種變因", "設計對照實驗"],
    scienceFairApplication: "作為科展研究設計的規劃工具。", tags: ["科展", "變因", "實驗設計", "探究"] });
  add({ id: "fair-002", title: "數據記錄與圖表", titleEn: "Data Logger & Chart", type: "Chart.js 與資料視覺化",
    subjects: ["科展探究", "自然科學", "數學"], topics: ["數據", "圖表", "分析"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"], libraries: ["Chart.js"], offlineFriendly: false,
    interactionTypes: ["鍵盤操作", "互動圖表"], description: "輸入實驗數據即時繪成圖表，協助科展資料分析。",
    teachingApplication: "科展數據記錄、繪圖與趨勢分析。",
    learningObjectives: ["記錄實驗數據", "以圖表分析結果"],
    scienceFairApplication: "作為研究數據的記錄與視覺化工具。", tags: ["科展", "數據", "圖表", "分析"] });
  add({ id: "fair-003", title: "研究海報版面", titleEn: "Research Poster Layout", type: "教材版面與導覽",
    subjects: ["科展探究", "藝術教育", "資訊教育"], topics: ["海報", "版面", "發表"], difficulty: "初階",
    interactionTypes: ["點擊"], description: "以區塊式版面規劃科展研究海報（動機、方法、結果、結論）。",
    teachingApplication: "科展海報的版面與內容組織教學。",
    learningObjectives: ["規劃海報結構", "組織研究內容"],
    scienceFairApplication: "作為研究海報的版面範本。", tags: ["科展", "海報", "版面", "發表"] });
})();
