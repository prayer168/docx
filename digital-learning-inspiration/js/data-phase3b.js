/* ============================================================
   data-phase3b.js — 第三階段擴充（數學互動 ＋ 人工智慧／資訊教育）
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }

  /* ---------- 數學（22） ---------- */
  add({ id: "mth-001", title: "分數視覺化圓餅", titleEn: "Fraction Circles", type: "自然科互動網站",
    subjects: ["數學"], topics: ["分數", "等分", "比較"], difficulty: "入門",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["滑桿", "即時模擬"],
    description: "以圓餅等分呈現分數，調整分子分母即時比較大小。",
    teachingApplication: "建立分數的量感與大小比較。",
    learningObjectives: ["理解分數意義", "比較分數大小"], tags: ["分數", "圓餅", "數學"] });
  add({ id: "mth-002", title: "數線與整數", titleEn: "Number Line", type: "SVG 案例",
    subjects: ["數學"], topics: ["數線", "整數", "正負"], difficulty: "入門",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["拖曳", "點擊"],
    description: "在數線上拖曳標記，認識整數、正負與大小順序。",
    teachingApplication: "以數線建立整數與正負概念。",
    learningObjectives: ["認識數線", "理解正負與順序"], tags: ["數線", "整數", "數學"] });
  add({ id: "mth-003", title: "乘法表互動", titleEn: "Multiplication Grid", type: "遊戲化學習",
    subjects: ["數學"], topics: ["乘法", "九九表", "練習"], difficulty: "入門",
    interactionTypes: ["點擊", "問答測驗"], description: "點選乘法表格子練習，答對高亮，可計時挑戰。",
    teachingApplication: "以互動格子練習與檢核乘法。",
    learningObjectives: ["熟練九九乘法", "建立乘法規律感"], tags: ["乘法", "九九表", "練習", "數學"] });
  add({ id: "mth-004", title: "座標平面點位", titleEn: "Coordinate Plane", type: "Canvas 案例",
    subjects: ["數學"], topics: ["座標", "象限", "點位"], difficulty: "初階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "在座標平面點擊放置點，讀出座標並判斷象限。",
    teachingApplication: "建立直角座標與象限概念。",
    learningObjectives: ["認識座標平面", "判斷象限"], tags: ["座標", "象限", "數學"] });
  add({ id: "mth-005", title: "一次函數圖形", titleEn: "Linear Function Graph", type: "Canvas 案例",
    subjects: ["數學"], topics: ["一次函數", "斜率", "截距"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整斜率與截距，即時觀察 y=ax+b 直線的變化。",
    teachingApplication: "連結參數 a、b 與直線的斜率、位置。",
    learningObjectives: ["理解斜率與截距", "認識一次函數圖形"], tags: ["一次函數", "斜率", "截距", "數學"] });
  add({ id: "mth-006", title: "二次函數拋物線", titleEn: "Quadratic Parabola", type: "Canvas 案例",
    subjects: ["數學"], topics: ["二次函數", "拋物線", "頂點"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整 a、b、c 觀察拋物線開口、頂點與對稱軸變化。",
    teachingApplication: "探究二次函數參數對圖形的影響。",
    learningObjectives: ["認識拋物線", "理解頂點與對稱軸"], tags: ["二次函數", "拋物線", "數學"] });
  add({ id: "mth-007", title: "圓周率估算（投點法）", titleEn: "Estimate Pi", type: "虛擬實驗",
    subjects: ["數學", "資訊教育"], topics: ["圓周率", "蒙地卡羅", "機率"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "在正方形內隨機投點，以落在圓內比例估算圓周率。",
    teachingApplication: "以蒙地卡羅方法體會機率與圓周率。",
    learningObjectives: ["認識蒙地卡羅法", "連結機率與幾何"],
    scienceFairApplication: "探究投點數與估算精確度的關係。", tags: ["圓周率", "蒙地卡羅", "機率", "數學"] });
  add({ id: "mth-008", title: "畢氏定理視覺證明", titleEn: "Pythagorean Theorem", type: "SVG 案例",
    subjects: ["數學"], topics: ["畢氏定理", "面積", "直角三角形"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["拖曳", "即時模擬"],
    description: "以正方形面積動態呈現 a²+b²=c² 的關係。",
    teachingApplication: "以面積視覺化理解畢氏定理。",
    learningObjectives: ["理解畢氏定理", "連結面積與定理"], tags: ["畢氏定理", "面積", "數學"] });
  add({ id: "mth-009", title: "角度與量角器", titleEn: "Angle & Protractor", type: "SVG 案例",
    subjects: ["數學"], topics: ["角度", "量角器", "測量"], difficulty: "入門",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["拖曳", "即時模擬"],
    description: "拖曳射線改變角度，量角器即時顯示度數。",
    teachingApplication: "練習量角器讀數與角度分類。",
    learningObjectives: ["認識角度", "使用量角器"], tags: ["角度", "量角器", "數學"] });
  add({ id: "mth-010", title: "對稱圖形繪製", titleEn: "Symmetry Drawing", type: "Canvas 案例",
    subjects: ["數學", "藝術教育"], topics: ["對稱", "鏡射", "軸對稱"], difficulty: "初階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "Canvas 繪圖"],
    description: "繪圖時自動鏡射，體會軸對稱圖形。",
    teachingApplication: "以繪圖體驗軸對稱概念。",
    learningObjectives: ["認識軸對稱", "辨識對稱軸"], tags: ["對稱", "鏡射", "數學"] });
  add({ id: "mth-011", title: "質數篩選", titleEn: "Prime Sieve", type: "自然科互動網站",
    subjects: ["數學", "資訊教育"], topics: ["質數", "篩法", "因數"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "以埃拉托斯特尼篩法逐步標出質數。",
    teachingApplication: "以篩法認識質數與合數。",
    learningObjectives: ["認識質數", "理解篩法原理"], tags: ["質數", "篩法", "數學"] });
  add({ id: "mth-012", title: "機率骰子和分布", titleEn: "Dice Sum Distribution", type: "Chart.js 與資料視覺化",
    subjects: ["數學"], topics: ["機率", "分布", "期望值"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"], libraries: ["Chart.js"], offlineFriendly: false,
    interactionTypes: ["點擊", "互動圖表"], description: "擲兩顆骰子多次，統計和的分布呈現三角形機率。",
    teachingApplication: "以實驗理解兩骰之和的機率分布。",
    learningObjectives: ["認識機率分布", "理解期望值"], tags: ["機率", "分布", "骰子", "數學"] });
  add({ id: "mth-013", title: "統計盒鬚圖", titleEn: "Box Plot", type: "Chart.js 與資料視覺化",
    subjects: ["數學"], topics: ["統計", "四分位數", "離散"], difficulty: "進階",
    technologies: ["HTML", "JavaScript", "Canvas"], interactionTypes: ["互動圖表"],
    description: "以盒鬚圖呈現資料的中位數、四分位數與離群值。",
    teachingApplication: "解讀資料分布與離散程度。",
    learningObjectives: ["認識四分位數", "解讀盒鬚圖"], tags: ["統計", "盒鬚圖", "四分位數", "數學"] });
  add({ id: "mth-014", title: "圓面積逼近", titleEn: "Circle Area Approximation", type: "SVG 案例",
    subjects: ["數學"], topics: ["圓面積", "極限", "扇形"], difficulty: "進階",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["滑桿", "即時模擬"],
    description: "把圓切成扇形重排近似平行四邊形，逼近圓面積公式。",
    teachingApplication: "以切割重排理解圓面積公式由來。",
    learningObjectives: ["理解圓面積公式", "體會極限概念"], tags: ["圓面積", "極限", "數學"] });
  add({ id: "mth-015", title: "比例尺與地圖", titleEn: "Map Scale", type: "自然科互動網站",
    subjects: ["數學", "社會領域"], topics: ["比例", "比例尺", "換算"], difficulty: "初階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整比例尺，換算地圖距離與實際距離。",
    teachingApplication: "練習比例尺換算與應用。",
    learningObjectives: ["認識比例尺", "進行距離換算"], tags: ["比例尺", "地圖", "比例", "數學"] });
  add({ id: "mth-016", title: "立體圖形展開", titleEn: "Net of Solids", type: "自然科互動網站",
    subjects: ["數學"], topics: ["立體圖形", "展開圖", "表面積"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "把立方體、角柱等展開成平面，連結表面積。",
    teachingApplication: "建立立體與展開圖的對應。",
    learningObjectives: ["認識展開圖", "連結表面積"], tags: ["立體圖形", "展開圖", "數學"] });
  add({ id: "mth-017", title: "百分比與折扣", titleEn: "Percentage & Discount", type: "測驗與評量",
    subjects: ["數學"], topics: ["百分比", "折扣", "應用"], difficulty: "初階",
    interactionTypes: ["滑桿", "問答測驗"], description: "計算折扣後價格，練習百分比生活應用。",
    teachingApplication: "以購物情境練習百分比計算。",
    learningObjectives: ["理解百分比", "計算折扣"], tags: ["百分比", "折扣", "數學"] });
  add({ id: "mth-018", title: "三角函數單位圓", titleEn: "Unit Circle Trig", type: "Canvas 案例",
    subjects: ["數學"], topics: ["三角函數", "單位圓", "弧度"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "拖動單位圓上的角，連結 sin、cos 值與波形。",
    teachingApplication: "建立三角函數與單位圓的關聯。",
    learningObjectives: ["認識單位圓", "連結三角函數與波形"], tags: ["三角函數", "單位圓", "數學"] });
  add({ id: "mth-019", title: "數列與規律", titleEn: "Number Patterns", type: "測驗與評量",
    subjects: ["數學"], topics: ["數列", "規律", "推理"], difficulty: "初階",
    interactionTypes: ["點擊", "問答測驗"], description: "找出數列的規律並填入下一項，訓練推理。",
    teachingApplication: "培養找規律與代數思維。",
    learningObjectives: ["發現數列規律", "推理下一項"], tags: ["數列", "規律", "推理", "數學"] });
  add({ id: "mth-020", title: "面積周長比較", titleEn: "Area vs Perimeter", type: "自然科互動網站",
    subjects: ["數學"], topics: ["面積", "周長", "比較"], difficulty: "初階",
    interactionTypes: ["拖曳", "即時模擬"], description: "調整矩形長寬，比較面積與周長如何獨立變化。",
    teachingApplication: "釐清面積與周長的差異與迷思。",
    learningObjectives: ["區分面積與周長", "破除混淆迷思"], tags: ["面積", "周長", "數學"] });
  add({ id: "mth-021", title: "分數加減視覺", titleEn: "Fraction Add/Subtract", type: "自然科互動網站",
    subjects: ["數學"], topics: ["分數運算", "通分", "視覺"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "以長條模型呈現分數加減與通分過程。",
    teachingApplication: "以視覺模型理解分數加減與通分。",
    learningObjectives: ["理解通分", "進行分數加減"], tags: ["分數運算", "通分", "數學"] });
  add({ id: "mth-022", title: "估算與四捨五入", titleEn: "Rounding & Estimation", type: "測驗與評量",
    subjects: ["數學"], topics: ["估算", "四捨五入", "位值"], difficulty: "入門",
    interactionTypes: ["點擊", "問答測驗"], description: "練習將數字四捨五入到指定位值並進行估算。",
    teachingApplication: "培養數感與估算能力。",
    learningObjectives: ["掌握四捨五入", "培養估算能力"], tags: ["估算", "四捨五入", "數學"] });

  /* ---------- 人工智慧／資訊教育／運算思維（22） ---------- */
  add({ id: "ai-001", title: "感知器分類（互動）", titleEn: "Perceptron Classifier", type: "自然科互動網站",
    subjects: ["人工智慧", "資訊教育", "數學"], topics: ["感知器", "分類", "決策界線"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"], featured: true,
    description: "點擊放置兩類點，感知器學習畫出分隔的決策界線。",
    teachingApplication: "以最簡單的模型認識機器學習的分類概念。",
    learningObjectives: ["認識感知器", "理解決策界線", "體會訓練過程"], tags: ["感知器", "分類", "機器學習", "AI"] });
  add({ id: "ai-002", title: "決策樹分類器", titleEn: "Decision Tree", type: "自然科互動網站",
    subjects: ["人工智慧", "資訊教育"], topics: ["決策樹", "分類", "條件"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "以是非題逐步分類物件，體會決策樹的判斷流程。",
    teachingApplication: "用生活分類遊戲介紹決策樹概念。",
    learningObjectives: ["認識決策樹", "理解條件分支"], tags: ["決策樹", "分類", "AI"] });
  add({ id: "ai-003", title: "K-最近鄰示範", titleEn: "K-Nearest Neighbors", type: "自然科互動網站",
    subjects: ["人工智慧", "數學"], topics: ["KNN", "分類", "距離"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "放置新點，依最近的 K 個鄰居多數決分類。",
    teachingApplication: "以距離概念說明 KNN 分類。",
    learningObjectives: ["認識 KNN", "理解以距離分類"], tags: ["KNN", "分類", "距離", "AI"] });
  add({ id: "ai-004", title: "神經網路前向傳播", titleEn: "Neural Net Forward Pass", type: "自然科互動網站",
    subjects: ["人工智慧", "數學"], topics: ["神經網路", "權重", "激活"], difficulty: "專業",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整權重觀察輸入如何經神經元運算得到輸出。",
    teachingApplication: "視覺化神經網路的基本運算。",
    learningObjectives: ["認識神經元運算", "理解權重作用"], tags: ["神經網路", "權重", "AI"] });
  add({ id: "ai-005", title: "分群 K-means", titleEn: "K-means Clustering", type: "自然科互動網站",
    subjects: ["人工智慧", "數學"], topics: ["分群", "非監督", "中心點"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "逐步迭代將資料點分群並更新群中心。",
    teachingApplication: "介紹非監督式學習的分群概念。",
    learningObjectives: ["認識分群", "理解迭代收斂"], tags: ["K-means", "分群", "AI"] });
  add({ id: "ai-006", title: "影像像素與濾鏡", titleEn: "Image Pixels & Filters", type: "Canvas 案例",
    subjects: ["人工智慧", "資訊教育", "藝術教育"], topics: ["影像", "像素", "卷積"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "以卷積核套用模糊、邊緣偵測等濾鏡，理解影像處理。",
    teachingApplication: "連結像素、卷積與電腦視覺基礎。",
    learningObjectives: ["認識像素與卷積", "理解影像濾鏡"], tags: ["影像", "卷積", "電腦視覺", "AI"] });
  add({ id: "ai-007", title: "文字情感傾向（規則）", titleEn: "Sentiment (Rule-based)", type: "自然科互動網站",
    subjects: ["人工智慧", "語文教育", "資訊教育"], topics: ["情感分析", "關鍵字", "文字"], difficulty: "中階",
    interactionTypes: ["鍵盤操作", "即時模擬"], description: "輸入句子，以關鍵字規則判斷正負面傾向。",
    teachingApplication: "以簡單規則介紹文字情感分析概念與限制。",
    learningObjectives: ["認識情感分析", "理解規則法的限制"], tags: ["情感分析", "文字", "NLP", "AI"] });
  add({ id: "ai-008", title: "訓練資料偏誤體驗", titleEn: "Data Bias Demo", type: "自然科互動網站",
    subjects: ["人工智慧", "資訊教育", "社會領域"], topics: ["資料偏誤", "倫理", "公平"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "調整訓練資料組成，觀察模型如何產生偏誤結果。",
    teachingApplication: "引導討論 AI 資料偏誤與倫理議題。",
    learningObjectives: ["認識資料偏誤", "思考 AI 公平性"], tags: ["偏誤", "倫理", "公平", "AI"] });
  add({ id: "ai-009", title: "馬可夫文字生成", titleEn: "Markov Text Generator", type: "自然科互動網站",
    subjects: ["人工智慧", "語文教育", "資訊教育"], topics: ["生成", "機率", "文字"], difficulty: "進階",
    interactionTypes: ["點擊", "即時模擬"], description: "以馬可夫鏈依前一字機率生成新句子。",
    teachingApplication: "以簡化模型認識文字生成的機率原理。",
    learningObjectives: ["認識馬可夫鏈", "理解機率生成"], tags: ["生成", "馬可夫", "文字", "AI"] });
  add({ id: "ai-010", title: "手寫數字辨識概念", titleEn: "Digit Recognition Concept", type: "自然科互動網站",
    subjects: ["人工智慧", "資訊教育"], topics: ["辨識", "特徵", "分類"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["Canvas 繪圖", "即時模擬"],
    description: "在格子上塗畫數字，以簡化特徵比對示範辨識概念。",
    teachingApplication: "說明機器如何從特徵辨識手寫數字。",
    learningObjectives: ["認識特徵擷取", "理解辨識流程"], tags: ["辨識", "手寫", "特徵", "AI"] });
  add({ id: "cs-001", title: "二進位與十進位轉換", titleEn: "Binary Converter", type: "自然科互動網站",
    subjects: ["資訊教育", "數學"], topics: ["二進位", "位值", "轉換"], difficulty: "初階",
    interactionTypes: ["點擊", "即時模擬"], description: "點擊位元開關，即時顯示對應的十進位數值。",
    teachingApplication: "認識二進位與位值概念。",
    learningObjectives: ["認識二進位", "進行進位轉換"], tags: ["二進位", "位值", "資訊教育"] });
  add({ id: "cs-002", title: "排序演算法視覺化", titleEn: "Sorting Visualizer", type: "Canvas 案例",
    subjects: ["資訊教育", "數學"], topics: ["排序", "演算法", "效率"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"], featured: true,
    description: "以長條動畫呈現氣泡、選擇等排序過程，比較效率。",
    teachingApplication: "視覺化排序演算法與效率概念。",
    learningObjectives: ["認識排序演算法", "比較演算法效率"], tags: ["排序", "演算法", "視覺化", "資訊教育"] });
  add({ id: "cs-003", title: "搜尋演算法比較", titleEn: "Search Algorithms", type: "自然科互動網站",
    subjects: ["資訊教育", "數學"], topics: ["搜尋", "二分搜尋", "效率"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "比較線性搜尋與二分搜尋的步驟數差異。",
    teachingApplication: "說明二分搜尋為何更快。",
    learningObjectives: ["認識搜尋演算法", "理解效率差異"], tags: ["搜尋", "二分搜尋", "資訊教育"] });
  add({ id: "cs-004", title: "積木式程式流程", titleEn: "Block Coding Flow", type: "遊戲化學習",
    subjects: ["資訊教育"], topics: ["程式流程", "順序", "迴圈"], difficulty: "初階",
    interactionTypes: ["拖曳", "遊戲控制"], description: "拖曳指令積木控制角色移動，體驗程式順序與迴圈。",
    teachingApplication: "以積木程式介紹運算思維。",
    learningObjectives: ["認識程式流程", "理解迴圈"], tags: ["積木程式", "迴圈", "運算思維"] });
  add({ id: "cs-005", title: "迴圈與條件動畫", titleEn: "Loops & Conditionals", type: "自然科互動網站",
    subjects: ["資訊教育"], topics: ["迴圈", "條件", "流程圖"], difficulty: "初階",
    interactionTypes: ["點擊", "流程動畫"], description: "以流程圖動畫呈現迴圈與條件判斷的執行路徑。",
    teachingApplication: "說明程式的迴圈與分支邏輯。",
    learningObjectives: ["理解迴圈", "理解條件判斷"], tags: ["迴圈", "條件", "流程圖", "資訊教育"] });
  add({ id: "cs-006", title: "演算法時間複雜度", titleEn: "Big-O Complexity", type: "Chart.js 與資料視覺化",
    subjects: ["資訊教育", "數學"], topics: ["複雜度", "效率", "成長"], difficulty: "進階",
    technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"], libraries: ["Chart.js"], offlineFriendly: false,
    interactionTypes: ["互動圖表"], description: "比較 O(1)、O(n)、O(n²) 等成長曲線。",
    teachingApplication: "以圖形理解演算法效率成長。",
    learningObjectives: ["認識時間複雜度", "比較成長速度"], tags: ["複雜度", "Big-O", "效率", "資訊教育"] });
  add({ id: "cs-007", title: "堆疊與佇列", titleEn: "Stack & Queue", type: "自然科互動網站",
    subjects: ["資訊教育"], topics: ["堆疊", "佇列", "資料結構"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "以動畫呈現堆疊（後進先出）與佇列（先進先出）。",
    teachingApplication: "認識基本資料結構的運作。",
    learningObjectives: ["區分堆疊與佇列", "理解 LIFO/FIFO"], tags: ["堆疊", "佇列", "資料結構", "資訊教育"] });
  add({ id: "cs-008", title: "路徑尋找 BFS", titleEn: "Pathfinding BFS", type: "Canvas 案例",
    subjects: ["資訊教育", "數學"], topics: ["圖", "BFS", "最短路徑"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "在格子上以廣度優先搜尋尋找起點到終點的最短路徑。",
    teachingApplication: "說明圖搜尋與最短路徑概念。",
    learningObjectives: ["認識 BFS", "理解最短路徑"], tags: ["BFS", "路徑", "圖", "資訊教育"] });
  add({ id: "cs-009", title: "加密與凱撒密碼", titleEn: "Caesar Cipher", type: "自然科互動網站",
    subjects: ["資訊教育", "數學", "語文教育"], topics: ["加密", "密碼", "位移"], difficulty: "初階",
    interactionTypes: ["滑桿", "鍵盤操作"], description: "輸入文字並調整位移量，即時加解密凱撒密碼。",
    teachingApplication: "以凱撒密碼介紹加密概念。",
    learningObjectives: ["認識加密", "理解位移密碼"], tags: ["加密", "凱撒密碼", "資訊教育"] });
  add({ id: "cs-010", title: "網路封包傳輸", titleEn: "Network Packets", type: "自然科互動網站",
    subjects: ["資訊教育"], topics: ["網路", "封包", "路由"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "動畫呈現資料被拆成封包並經路由傳送到目的地。",
    teachingApplication: "說明網路封包與路由的基本概念。",
    learningObjectives: ["認識封包傳輸", "理解路由"], tags: ["網路", "封包", "路由", "資訊教育"] });
  add({ id: "cs-011", title: "數位邏輯閘", titleEn: "Logic Gates", type: "虛擬實驗",
    subjects: ["資訊教育", "數學"], topics: ["邏輯閘", "AND/OR/NOT", "真值表"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "切換輸入觀察 AND、OR、NOT 等邏輯閘的輸出。",
    teachingApplication: "認識數位邏輯與真值表。",
    learningObjectives: ["認識邏輯閘", "讀懂真值表"], tags: ["邏輯閘", "真值表", "資訊教育"] });
  add({ id: "cs-012", title: "遞迴費氏數列", titleEn: "Recursive Fibonacci", type: "自然科互動網站",
    subjects: ["資訊教育", "數學"], topics: ["遞迴", "費氏數列", "呼叫堆疊"], difficulty: "進階",
    interactionTypes: ["點擊", "流程動畫"], description: "以樹狀圖呈現費氏數列遞迴呼叫的展開過程。",
    teachingApplication: "以費氏數列說明遞迴與呼叫堆疊。",
    learningObjectives: ["理解遞迴", "認識呼叫堆疊"], tags: ["遞迴", "費氏數列", "資訊教育"] });
})();
