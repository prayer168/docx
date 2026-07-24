/* ============================================================
   data-phase3a.js — 第三階段擴充（自然科學深化：物理／化學／生物／地球太空）
   須於 data-phase2.js 之後、data.js 之前載入。
   本批以「精簡但具體」的概念案例為主，提供明確的說明、教學應用與學習目標，
   供教材設計者取材與延伸；部分附可執行程式碼。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }

  /* ---------- 物理（12） ---------- */
  add({ id: "phy-001", title: "自由落體與空氣阻力", titleEn: "Free Fall vs Air Resistance", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["自由落體", "空氣阻力", "終端速度"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "比較有無空氣阻力時物體落下的速度與時間差異，理解終端速度。",
    teachingApplication: "說明真空中羽毛與鐵球同時落地，以及空氣阻力如何造成差異。",
    learningObjectives: ["理解重力加速度", "認識空氣阻力與終端速度", "比較不同質量的落下"], tags: ["自由落體", "空氣阻力", "終端速度", "物理"] });
  add({ id: "phy-002", title: "簡諧運動與波", titleEn: "Simple Harmonic Motion", type: "Canvas 案例",
    subjects: ["自然科學", "物理", "數學"], topics: ["簡諧運動", "振幅", "相位"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "以圓周運動投影解釋簡諧運動，並連結到正弦波形。",
    teachingApplication: "建立圓周運動、簡諧運動與波形之間的關聯。",
    learningObjectives: ["理解簡諧運動", "連結圓周運動與正弦波"], tags: ["簡諧運動", "波", "相位", "物理"] });
  add({ id: "phy-003", title: "都卜勒效應", titleEn: "Doppler Effect", type: "自然科互動網站",
    subjects: ["自然科學", "物理"], topics: ["都卜勒", "頻率", "波源"], difficulty: "進階",
    interactionTypes: ["拖曳", "即時模擬"], description: "移動的波源使前方頻率變高、後方變低，解釋救護車聲音變化。",
    teachingApplication: "以生活中救護車鳴笛說明都卜勒效應。",
    learningObjectives: ["認識都卜勒效應", "連結頻率與波源運動"], tags: ["都卜勒", "聲波", "頻率", "物理"] });
  add({ id: "phy-004", title: "透鏡與面鏡成像整合", titleEn: "Lens & Mirror Imaging", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["凹凸透鏡", "凹凸面鏡", "成像"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "整合凸凹透鏡與面鏡的成像規律，切換元件觀察差異。",
    teachingApplication: "系統化比較各種光學元件的成像特性。",
    learningObjectives: ["比較透鏡與面鏡成像", "整理成像規律表"], tags: ["透鏡", "面鏡", "成像", "光學"] });
  add({ id: "phy-005", title: "電路串並聯比較", titleEn: "Series vs Parallel Circuit", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["串聯", "並聯", "電流"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "切換串聯與並聯接法，觀察燈泡亮度與電流分配差異。",
    teachingApplication: "比較串並聯電路的電流、電壓與亮度。",
    learningObjectives: ["區分串聯與並聯", "理解電流分配"], tags: ["串聯", "並聯", "電路", "物理"] });
  add({ id: "phy-006", title: "熱傳導模擬", titleEn: "Heat Conduction", type: "Canvas 案例",
    subjects: ["自然科學", "物理"], topics: ["熱傳導", "溫度", "材料"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "加熱金屬棒一端，以顏色呈現熱沿著材料傳導的過程。",
    teachingApplication: "說明熱傳導與不同材料的導熱差異。",
    learningObjectives: ["認識熱傳導", "比較材料導熱性"], tags: ["熱傳導", "溫度", "材料", "物理"] });
  add({ id: "phy-007", title: "浮力與排水量", titleEn: "Buoyancy & Displacement", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["浮力", "阿基米德", "排水"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "放入不同體積物體，觀察排開水量與浮力大小的關係。",
    teachingApplication: "說明阿基米德原理：浮力等於排開液體的重量。",
    learningObjectives: ["理解阿基米德原理", "連結浮力與排水量"], tags: ["浮力", "阿基米德", "排水", "物理"] });
  add({ id: "phy-008", title: "力的合成與分解", titleEn: "Force Vectors", type: "SVG 案例",
    subjects: ["自然科學", "物理", "數學"], topics: ["向量", "合力", "分力"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["拖曳", "即時模擬"],
    description: "拖曳箭頭調整兩個力，即時畫出合力向量。",
    teachingApplication: "以向量圖說明力的合成與分解。",
    learningObjectives: ["認識力向量", "理解合力與分力"], tags: ["向量", "合力", "力學", "SVG"] });
  add({ id: "phy-009", title: "斜拋與平拋比較", titleEn: "Projectile Comparison", type: "Canvas 案例",
    subjects: ["自然科學", "物理"], topics: ["平拋", "斜拋", "軌跡"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "同時發射平拋與斜拋物體，比較兩者的軌跡與落點。",
    teachingApplication: "比較平拋與斜拋的水平與垂直運動。",
    learningObjectives: ["分解拋體運動", "比較不同發射方式"], tags: ["平拋", "斜拋", "軌跡", "物理"] });
  add({ id: "phy-010", title: "能量守恆雲霄飛車", titleEn: "Energy Conservation Coaster", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["動能", "位能", "能量守恆"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "小車在軌道上運動，即時顯示動能與位能的轉換與總和守恆。",
    teachingApplication: "以雲霄飛車說明動能與位能的相互轉換。",
    learningObjectives: ["理解能量守恆", "認識動能位能轉換"], tags: ["能量守恆", "動能", "位能", "物理"] });
  add({ id: "phy-011", title: "聲音的合成波", titleEn: "Sound Wave Superposition", type: "Canvas 案例",
    subjects: ["自然科學", "物理", "藝術教育"], topics: ["疊加", "干涉", "拍"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "兩個不同頻率的波疊加，觀察合成波與拍頻現象。",
    teachingApplication: "說明波的疊加原理與拍的形成。",
    learningObjectives: ["理解波的疊加", "認識拍頻"], tags: ["疊加", "干涉", "拍", "物理"] });
  add({ id: "phy-012", title: "靜電與感應", titleEn: "Static Electricity", type: "自然科互動網站",
    subjects: ["自然科學", "物理"], topics: ["靜電", "電荷", "感應"], difficulty: "中階",
    interactionTypes: ["拖曳", "即時模擬"], description: "摩擦帶電並靠近中性物體，觀察靜電感應與吸引現象。",
    teachingApplication: "說明摩擦起電與靜電感應。",
    learningObjectives: ["認識電荷", "理解靜電感應"], tags: ["靜電", "電荷", "感應", "物理"] });

  /* ---------- 化學（10） ---------- */
  add({ id: "che-001", title: "原子結構模型", titleEn: "Atomic Structure", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["原子", "電子", "軌域"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "呈現原子核與電子殼層，點擊元素查看質子、中子與電子配置。",
    teachingApplication: "建立原子結構與電子排列概念。",
    learningObjectives: ["認識原子結構", "理解電子殼層"], tags: ["原子", "電子", "軌域", "化學"] });
  add({ id: "che-002", title: "週期表互動探索", titleEn: "Interactive Periodic Table", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["週期表", "元素", "分類"], difficulty: "初階",
    interactionTypes: ["點擊", "滑鼠移入"], description: "點擊元素顯示名稱、符號、原子序與分類，可依族群上色。",
    teachingApplication: "認識週期表結構與元素分類規律。",
    learningObjectives: ["熟悉週期表排列", "認識元素分類"], tags: ["週期表", "元素", "化學"] });
  add({ id: "che-003", title: "化學反應配平", titleEn: "Balancing Equations", type: "測驗與評量",
    subjects: ["自然科學", "化學", "數學"], topics: ["化學方程式", "配平", "守恆"], difficulty: "進階",
    interactionTypes: ["點擊", "問答測驗"], description: "調整係數讓反應式兩邊原子數相等，練習質量守恆。",
    teachingApplication: "以互動方式練習化學方程式配平。",
    learningObjectives: ["理解質量守恆", "練習配平係數"], tags: ["配平", "方程式", "守恆", "化學"] });
  add({ id: "che-004", title: "溶解與飽和", titleEn: "Dissolving & Saturation", type: "虛擬實驗",
    subjects: ["自然科學", "化學"], topics: ["溶解度", "飽和", "溫度"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整溫度與溶質量，觀察溶解、飽和與結晶的變化。",
    teachingApplication: "說明溶解度與溫度的關係。",
    learningObjectives: ["認識溶解度", "理解飽和與過飽和"], tags: ["溶解度", "飽和", "溫度", "化學"] });
  add({ id: "che-005", title: "分子動能與狀態", titleEn: "States of Matter", type: "Canvas 案例",
    subjects: ["自然科學", "化學", "物理"], topics: ["三態", "分子運動", "溫度"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整溫度，觀察分子在固態、液態、氣態下的運動差異。",
    teachingApplication: "以分子運動說明物質三態變化。",
    learningObjectives: ["連結溫度與分子運動", "理解三態變化"], tags: ["三態", "分子運動", "溫度", "化學"] });
  add({ id: "che-006", title: "酸鹼中和滴定", titleEn: "Acid-Base Titration", type: "虛擬實驗",
    subjects: ["自然科學", "化學"], topics: ["中和", "滴定", "pH"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "逐滴加入鹼液，觀察 pH 變化與中和點的顏色突變。",
    teachingApplication: "示範酸鹼中和滴定與指示劑變色。",
    learningObjectives: ["理解中和反應", "認識滴定終點"], tags: ["中和", "滴定", "pH", "化學"] });
  add({ id: "che-007", title: "電解水實驗", titleEn: "Electrolysis of Water", type: "虛擬實驗",
    subjects: ["自然科學", "化學"], topics: ["電解", "氫氧", "氣體比例"], difficulty: "進階",
    interactionTypes: ["點擊", "即時模擬"], description: "通電分解水，觀察兩極產生氫氣與氧氣的 2:1 體積比。",
    teachingApplication: "說明電解水產生氫氧氣的比例與原理。",
    learningObjectives: ["認識電解", "理解氣體體積比"], tags: ["電解", "氫", "氧", "化學"] });
  add({ id: "che-008", title: "化學鍵結類型", titleEn: "Chemical Bonding", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["共價鍵", "離子鍵", "電子"], difficulty: "進階",
    interactionTypes: ["點擊", "拖曳"], description: "拖曳電子形成共價或離子鍵，理解不同鍵結方式。",
    teachingApplication: "比較共價鍵與離子鍵的形成。",
    learningObjectives: ["區分鍵結類型", "理解電子轉移與共用"], tags: ["共價鍵", "離子鍵", "化學"] });
  add({ id: "che-009", title: "燃燒與氧化", titleEn: "Combustion & Oxidation", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["燃燒", "氧化", "反應物"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "調整氧氣量觀察燃燒的劇烈程度，連結三要素。",
    teachingApplication: "說明燃燒三要素與氧化反應。",
    learningObjectives: ["認識燃燒三要素", "理解氧化反應"], tags: ["燃燒", "氧化", "化學"] });
  add({ id: "che-010", title: "混合物分離方法", titleEn: "Separating Mixtures", type: "虛擬實驗",
    subjects: ["自然科學", "化學"], topics: ["過濾", "蒸發", "蒸餾"], difficulty: "初階",
    interactionTypes: ["點擊", "流程動畫"], description: "選擇過濾、蒸發或蒸餾等方法分離不同混合物。",
    teachingApplication: "認識依性質選擇合適的分離方法。",
    learningObjectives: ["認識分離方法", "依性質選擇技術"], tags: ["過濾", "蒸餾", "分離", "化學"] });

  /* ---------- 生物（12） ---------- */
  add({ id: "bio-001", title: "細胞構造探索", titleEn: "Cell Structure", type: "自然科互動網站",
    subjects: ["自然科學", "生物"], topics: ["細胞", "胞器", "功能"], difficulty: "中階",
    interactionTypes: ["點擊", "滑鼠移入"], description: "點擊細胞各胞器（細胞核、粒線體、葉綠體等）顯示功能。",
    teachingApplication: "認識動植物細胞的構造與功能差異。",
    learningObjectives: ["認識細胞胞器", "比較動植物細胞"], tags: ["細胞", "胞器", "生物"] });
  add({ id: "bio-002", title: "血液循環路徑", titleEn: "Blood Circulation", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["心臟", "血液", "循環"], difficulty: "中階",
    interactionTypes: ["流程動畫", "點擊"], description: "動畫呈現血液在心臟、肺與全身之間的循環路徑。",
    teachingApplication: "說明體循環與肺循環的路徑。",
    learningObjectives: ["認識血液循環", "區分體循環與肺循環"], tags: ["心臟", "血液", "循環", "生物"] });
  add({ id: "bio-003", title: "DNA 雙螺旋與複製", titleEn: "DNA Double Helix", type: "Three.js 案例",
    subjects: ["自然科學", "生物"], topics: ["DNA", "鹼基配對", "遺傳"], difficulty: "專業",
    technologies: ["HTML", "JavaScript", "WebGL", "Three.js"], interactionTypes: ["3D 操作"],
    libraries: ["Three.js"], offlineFriendly: false,
    description: "以 3D 呈現 DNA 雙螺旋結構與鹼基配對規則。",
    teachingApplication: "視覺化 DNA 結構與 A-T、G-C 配對。",
    learningObjectives: ["認識 DNA 結構", "理解鹼基配對"], tags: ["DNA", "遺傳", "3D", "生物"] });
  add({ id: "bio-004", title: "遺傳性狀機率（孟德爾）", titleEn: "Mendelian Genetics", type: "虛擬實驗",
    subjects: ["自然科學", "生物", "數學"], topics: ["遺傳", "顯隱性", "機率"], difficulty: "進階",
    interactionTypes: ["點擊", "互動圖表"], description: "以棋盤格計算親代雜交後代的性狀比例。",
    teachingApplication: "說明顯性隱性與遺傳機率（3:1）。",
    learningObjectives: ["認識遺傳法則", "計算後代比例"], tags: ["遺傳", "孟德爾", "機率", "生物"] });
  add({ id: "bio-005", title: "生態系能量金字塔", titleEn: "Energy Pyramid", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "環境教育"], topics: ["生態系", "營養階層", "能量"], difficulty: "中階",
    interactionTypes: ["點擊", "互動圖表"], description: "呈現生產者到高階消費者的能量遞減金字塔。",
    teachingApplication: "說明能量沿食物鏈遞減（約 10%）。",
    learningObjectives: ["認識營養階層", "理解能量遞減"], tags: ["生態", "能量金字塔", "營養階層", "生物"] });
  add({ id: "bio-006", title: "光合作用與呼吸作用", titleEn: "Photosynthesis & Respiration", type: "自然科互動網站",
    subjects: ["自然科學", "生物"], topics: ["光合作用", "呼吸作用", "氣體"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "比較光合作用與呼吸作用的反應物與生成物。",
    teachingApplication: "對照兩種作用的氣體與能量流向。",
    learningObjectives: ["比較光合與呼吸作用", "理解物質循環"], tags: ["光合作用", "呼吸作用", "生物"] });
  add({ id: "bio-007", title: "人體骨骼與肌肉", titleEn: "Skeleton & Muscles", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["骨骼", "肌肉", "運動"], difficulty: "初階",
    interactionTypes: ["點擊", "滑鼠移入"], description: "點擊人體圖顯示主要骨骼與肌肉名稱及功能。",
    teachingApplication: "認識骨骼肌肉系統與運動原理。",
    learningObjectives: ["認識骨骼系統", "理解肌肉如何帶動運動"], tags: ["骨骼", "肌肉", "人體", "生物"] });
  add({ id: "bio-008", title: "食物網互動", titleEn: "Food Web", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "環境教育"], topics: ["食物網", "生態平衡", "連結"], difficulty: "中階",
    interactionTypes: ["點擊", "拖曳"], description: "連結多條食物鏈成食物網，移除物種觀察連鎖影響。",
    teachingApplication: "說明食物網與生態平衡的脆弱性。",
    learningObjectives: ["認識食物網", "理解生態平衡"], tags: ["食物網", "生態", "平衡", "生物"] });
  add({ id: "bio-009", title: "植物向光性", titleEn: "Phototropism", type: "自然科互動網站",
    subjects: ["自然科學", "生物"], topics: ["向光性", "生長素", "刺激反應"], difficulty: "中階",
    interactionTypes: ["拖曳", "即時模擬"], description: "移動光源，觀察植物莖朝光彎曲的向光性。",
    teachingApplication: "說明植物對光刺激的向性反應。",
    learningObjectives: ["認識向光性", "理解刺激與反應"], tags: ["向光性", "植物", "生長", "生物"] });
  add({ id: "bio-010", title: "族群數量變化", titleEn: "Population Dynamics", type: "Chart.js 與資料視覺化",
    subjects: ["自然科學", "生物", "數學"], topics: ["族群", "成長曲線", "承載量"], difficulty: "進階",
    technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"], libraries: ["Chart.js"], offlineFriendly: false,
    interactionTypes: ["滑桿", "互動圖表"], description: "調整出生與死亡率，觀察族群 S 型成長與承載量。",
    teachingApplication: "說明族群成長模式與環境承載量。",
    learningObjectives: ["認識族群成長曲線", "理解承載量"], tags: ["族群", "成長曲線", "生態", "生物"] });
  add({ id: "bio-011", title: "免疫防禦機制", titleEn: "Immune Response", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["免疫", "白血球", "抗體"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "動畫呈現病原入侵時白血球與抗體的防禦過程。",
    teachingApplication: "說明人體免疫系統的防禦機制。",
    learningObjectives: ["認識免疫系統", "理解抗體作用"], tags: ["免疫", "白血球", "抗體", "生物"] });
  add({ id: "bio-012", title: "生物分類檢索", titleEn: "Classification Key", type: "測驗與評量",
    subjects: ["自然科學", "生物"], topics: ["分類", "檢索表", "特徵"], difficulty: "中階",
    interactionTypes: ["點擊", "問答測驗"], description: "依二分檢索表逐步回答特徵問題，判斷生物類別。",
    teachingApplication: "練習使用二分檢索表進行生物分類。",
    learningObjectives: ["認識生物分類", "使用檢索表"], tags: ["分類", "檢索表", "生物"] });

  /* ---------- 地球與太空科學（11） ---------- */
  add({ id: "ess-001", title: "板塊運動與地形", titleEn: "Plate Tectonics", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["板塊", "聚合", "張裂"], difficulty: "中階",
    interactionTypes: ["拖曳", "即時模擬"], description: "拖動板塊觀察聚合、張裂與錯動形成的地形。",
    teachingApplication: "說明板塊邊界類型與造山、火山、地震關聯。",
    learningObjectives: ["認識板塊邊界", "連結板塊與地形"], tags: ["板塊", "地形", "地科"] });
  add({ id: "ess-002", title: "四季形成原因", titleEn: "Why Seasons Happen", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["四季", "地軸傾斜", "公轉"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "呈現地軸傾斜與公轉如何造成四季，破除距離迷思。",
    teachingApplication: "說明四季源於地軸傾斜而非日地距離。",
    learningObjectives: ["理解四季成因", "破除距離迷思"], tags: ["四季", "地軸", "公轉", "地科"] });
  add({ id: "ess-003", title: "潮汐與月球引力", titleEn: "Tides & Moon", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["潮汐", "引力", "月球"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "呈現月球引力造成海水漲退潮與大小潮。",
    teachingApplication: "說明潮汐成因與月相的關係。",
    learningObjectives: ["認識潮汐成因", "連結潮汐與月相"], tags: ["潮汐", "引力", "月球", "地科"] });
  add({ id: "ess-004", title: "岩石循環", titleEn: "Rock Cycle", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["岩石", "火成", "沉積", "變質"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "呈現火成岩、沉積岩、變質岩之間的循環轉換。",
    teachingApplication: "說明三大岩類的形成與相互轉換。",
    learningObjectives: ["認識三大岩類", "理解岩石循環"], tags: ["岩石循環", "岩類", "地科"] });
  add({ id: "ess-005", title: "星座與星空盤", titleEn: "Constellation Finder", type: "Canvas 案例",
    subjects: ["自然科學", "地球科學"], topics: ["星座", "星空", "季節"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "旋轉星空盤觀察不同季節可見的星座。",
    teachingApplication: "認識四季星座與星空盤的使用。",
    learningObjectives: ["認識主要星座", "使用星空盤"], tags: ["星座", "星空", "天文", "地科"] });
  add({ id: "ess-006", title: "日食與月食", titleEn: "Solar & Lunar Eclipse", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["日食", "月食", "影子"], difficulty: "中階",
    interactionTypes: ["拖曳", "即時模擬"], description: "移動日地月三者，重現日食與月食的成因。",
    teachingApplication: "說明日食月食的成因與差異。",
    learningObjectives: ["區分日食與月食", "理解成因"], tags: ["日食", "月食", "天文", "地科"] });
  add({ id: "ess-007", title: "氣團與鋒面", titleEn: "Air Masses & Fronts", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["鋒面", "氣團", "天氣"], difficulty: "進階",
    interactionTypes: ["拖曳", "即時模擬"], description: "呈現冷暖氣團交會形成鋒面與天氣變化。",
    teachingApplication: "說明鋒面與天氣的關係。",
    learningObjectives: ["認識氣團與鋒面", "連結鋒面與天氣"], tags: ["鋒面", "氣團", "天氣", "地科"] });
  add({ id: "ess-008", title: "水的三態與天氣", titleEn: "Water States & Weather", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["三態", "雲", "降水"], difficulty: "初階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整溫度，觀察水的三態變化與雲、雨、雪的形成。",
    teachingApplication: "連結水的三態與天氣現象。",
    learningObjectives: ["認識水的三態", "連結三態與天氣"], tags: ["三態", "雲", "降水", "地科"] });
  add({ id: "ess-009", title: "地層與化石", titleEn: "Strata & Fossils", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["地層", "化石", "年代"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "點擊地層剖面，認識沉積順序與化石定年。",
    teachingApplication: "說明地層疊置與化石代表的年代。",
    learningObjectives: ["認識地層順序", "理解化石定年"], tags: ["地層", "化石", "年代", "地科"] });
  add({ id: "ess-010", title: "太陽系尺度比例", titleEn: "Solar System Scale", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學", "數學"], topics: ["太陽系", "尺度", "比例"], difficulty: "中階",
    interactionTypes: ["滑桿", "互動圖表"], description: "以可調比例呈現行星大小與距離，體會太空的尺度。",
    teachingApplication: "建立太陽系真實比例的空間感。",
    learningObjectives: ["認識行星尺度", "理解比例概念"], tags: ["太陽系", "尺度", "比例", "地科"] });
  add({ id: "ess-011", title: "溫室效應模擬", titleEn: "Greenhouse Effect", type: "虛擬實驗",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["溫室效應", "二氧化碳", "氣候"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整大氣中溫室氣體濃度，觀察地表溫度變化。",
    teachingApplication: "說明溫室效應與氣候變遷。",
    learningObjectives: ["認識溫室效應", "連結人為活動與氣候"], tags: ["溫室效應", "氣候", "環境", "地科"] });
})();
