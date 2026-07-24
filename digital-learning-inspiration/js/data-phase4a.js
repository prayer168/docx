/* ============================================================
   data-phase4a.js — 第四階段擴充（跨科深化再擴充）
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }

  /* ---------- 物理再擴充（8） ---------- */
  add({ id: "phy-013", title: "圓周運動與向心力", titleEn: "Circular Motion", type: "虛擬實驗",
    subjects: ["自然科學", "物理", "數學"], topics: ["圓周運動", "向心力", "角速度"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整轉速與半徑，觀察向心力大小與方向的變化。",
    teachingApplication: "說明向心力方向指向圓心，與速度、半徑的關係。",
    learningObjectives: ["理解向心力", "連結轉速與向心力"], tags: ["圓周運動", "向心力", "物理"] });
  add({ id: "phy-014", title: "摩擦力與運動", titleEn: "Friction & Motion", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["摩擦力", "靜摩擦", "動摩擦"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "推動物體並調整表面粗糙度，比較靜摩擦與動摩擦。",
    teachingApplication: "說明靜摩擦最大值與動摩擦的差異。",
    learningObjectives: ["區分靜/動摩擦", "認識摩擦係數"], tags: ["摩擦力", "運動", "物理"] });
  add({ id: "phy-015", title: "槓桿三種類型", titleEn: "Three Classes of Levers", type: "自然科互動網站",
    subjects: ["自然科學", "物理"], topics: ["槓桿", "施力", "省力"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "比較第一、二、三類槓桿的支點、施力點與抗力點位置。",
    teachingApplication: "以生活工具說明三類槓桿與省力費力。",
    learningObjectives: ["區分三類槓桿", "分析省力與費力"], tags: ["槓桿", "省力", "物理"] });
  add({ id: "phy-016", title: "聲音的傳播介質", titleEn: "Sound Through Media", type: "自然科互動網站",
    subjects: ["自然科學", "物理"], topics: ["聲音", "介質", "傳播"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "比較聲音在空氣、水與固體中的傳播速度差異。",
    teachingApplication: "說明聲音需要介質、在不同介質速度不同。",
    learningObjectives: ["認識聲音傳播", "比較介質速度"], tags: ["聲音", "介質", "物理"] });
  add({ id: "phy-017", title: "電磁鐵強度", titleEn: "Electromagnet Strength", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["電磁鐵", "線圈", "電流"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整線圈匝數與電流，觀察電磁鐵吸附迴紋針的數量。",
    teachingApplication: "探究影響電磁鐵磁力的因素。",
    learningObjectives: ["認識電磁鐵", "分析影響磁力的變因"],
    scienceFairApplication: "以實體電磁鐵測試匝數與磁力關係。", tags: ["電磁鐵", "線圈", "物理"] });
  add({ id: "phy-018", title: "反射與折射整合", titleEn: "Reflection & Refraction", type: "Canvas 案例",
    subjects: ["自然科學", "物理"], topics: ["反射", "折射", "全反射"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "拖動光線，同時觀察反射與折射，並示範全反射臨界角。",
    teachingApplication: "整合反射定律與折射定律，說明全反射。",
    learningObjectives: ["整合反射與折射", "認識全反射"], tags: ["反射", "折射", "全反射", "物理"] });
  add({ id: "phy-019", title: "波的干涉條紋", titleEn: "Wave Interference", type: "Canvas 案例",
    subjects: ["自然科學", "物理"], topics: ["干涉", "波源", "條紋"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "兩個波源產生同心波，交會處形成干涉的明暗條紋。",
    teachingApplication: "視覺化雙波源干涉與建設性/破壞性干涉。",
    learningObjectives: ["認識波的干涉", "區分建設性與破壞性干涉"], tags: ["干涉", "波", "物理"] });
  add({ id: "phy-020", title: "杯子共振（駐波）", titleEn: "Standing Waves", type: "Canvas 案例",
    subjects: ["自然科學", "物理", "藝術教育"], topics: ["駐波", "共振", "頻率"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整頻率讓弦產生不同節點數的駐波，認識共振。",
    teachingApplication: "說明駐波、節點與樂器共振。",
    learningObjectives: ["認識駐波", "連結頻率與節點"], tags: ["駐波", "共振", "物理"] });

  /* ---------- 化學再擴充（7） ---------- */
  add({ id: "che-011", title: "反應速率因素", titleEn: "Reaction Rate Factors", type: "虛擬實驗",
    subjects: ["自然科學", "化學"], topics: ["反應速率", "溫度", "濃度", "催化劑"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整溫度、濃度與催化劑，觀察反應速率的變化。",
    teachingApplication: "探究影響化學反應速率的因素。",
    learningObjectives: ["認識反應速率", "分析影響因素"],
    scienceFairApplication: "以實體反應測試溫度對速率的影響。", tags: ["反應速率", "催化劑", "化學"] });
  add({ id: "che-012", title: "氣體體積與壓力", titleEn: "Gas Laws", type: "虛擬實驗",
    subjects: ["自然科學", "化學", "物理"], topics: ["波以耳定律", "壓力", "體積"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "壓縮氣體觀察壓力與體積成反比（波以耳定律）。",
    teachingApplication: "說明氣體壓力與體積的反比關係。",
    learningObjectives: ["認識波以耳定律", "理解反比關係"], tags: ["氣體", "壓力", "體積", "化學"] });
  add({ id: "che-013", title: "焰色反應", titleEn: "Flame Test", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["焰色", "金屬離子", "光譜"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "選擇不同金屬鹽，觀察燃燒產生的特徵焰色。",
    teachingApplication: "以焰色反應辨識金屬離子。",
    learningObjectives: ["認識焰色反應", "連結元素與顏色"], tags: ["焰色", "金屬離子", "化學"] });
  add({ id: "che-014", title: "pH 與生活物質", titleEn: "pH of Everyday Items", type: "自然科互動網站",
    subjects: ["自然科學", "化學", "健康教育"], topics: ["pH", "酸鹼", "生活"], difficulty: "初階",
    interactionTypes: ["點擊", "互動圖表"], description: "點選檸檬、肥皂、牛奶等物品，查看其 pH 值。",
    teachingApplication: "連結酸鹼概念與生活物質。",
    learningObjectives: ["認識常見物質酸鹼性", "解讀 pH"], tags: ["pH", "生活", "酸鹼", "化學"] });
  add({ id: "che-015", title: "分子擴散速率", titleEn: "Diffusion Rate", type: "Canvas 案例",
    subjects: ["自然科學", "化學", "物理"], topics: ["擴散", "溫度", "分子運動"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整溫度觀察墨水分子在水中擴散的快慢。",
    teachingApplication: "連結溫度、分子運動與擴散速率。",
    learningObjectives: ["認識擴散", "連結溫度與速率"], tags: ["擴散", "分子運動", "化學"] });
  add({ id: "che-016", title: "同位素與原子量", titleEn: "Isotopes & Atomic Mass", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["同位素", "中子", "原子量"], difficulty: "進階",
    interactionTypes: ["點擊", "互動圖表"], description: "改變中子數形成同位素，計算加權平均原子量。",
    teachingApplication: "說明同位素與平均原子量的由來。",
    learningObjectives: ["認識同位素", "計算平均原子量"], tags: ["同位素", "原子量", "化學"] });
  add({ id: "che-017", title: "電池與氧化還原", titleEn: "Battery & Redox", type: "自然科互動網站",
    subjects: ["自然科學", "化學"], topics: ["電池", "氧化還原", "電子流"], difficulty: "進階",
    interactionTypes: ["點擊", "流程動畫"], description: "呈現伏打電池中電子由負極流向正極的氧化還原過程。",
    teachingApplication: "說明化學能轉電能與電子流向。",
    learningObjectives: ["認識電池原理", "理解氧化還原"], tags: ["電池", "氧化還原", "化學"] });

  /* ---------- 生物再擴充（7） ---------- */
  add({ id: "bio-013", title: "神經傳導反射弧", titleEn: "Reflex Arc", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["神經", "反射", "傳導"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "動畫呈現刺激經感覺神經、脊髓到運動神經的反射弧。",
    teachingApplication: "說明反射動作不經大腦的傳導路徑。",
    learningObjectives: ["認識反射弧", "理解神經傳導"], tags: ["神經", "反射", "生物"] });
  add({ id: "bio-014", title: "消化系統旅程", titleEn: "Digestive Journey", type: "捲動敘事",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["消化", "器官", "營養"], difficulty: "初階",
    interactionTypes: ["捲動", "點擊"], description: "以捲動旅程跟隨食物經過口、胃、腸道的消化過程。",
    teachingApplication: "認識消化系統各器官的功能。",
    learningObjectives: ["認識消化器官", "理解消化過程"], tags: ["消化", "器官", "生物"] });
  add({ id: "bio-015", title: "呼吸作用氣體交換", titleEn: "Gas Exchange", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["呼吸", "肺泡", "氣體交換"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "呈現肺泡與微血管間氧氣與二氧化碳的交換。",
    teachingApplication: "說明呼吸作用的氣體交換原理。",
    learningObjectives: ["認識氣體交換", "理解肺泡功能"], tags: ["呼吸", "肺泡", "生物"] });
  add({ id: "bio-016", title: "植物蒸散作用", titleEn: "Transpiration", type: "虛擬實驗",
    subjects: ["自然科學", "生物"], topics: ["蒸散", "氣孔", "水分"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整溫度、濕度與風速，觀察植物蒸散速率變化。",
    teachingApplication: "探究影響蒸散作用的環境因素。",
    learningObjectives: ["認識蒸散作用", "分析環境變因"],
    scienceFairApplication: "以實驗測量不同條件下的蒸散量。", tags: ["蒸散", "氣孔", "生物"] });
  add({ id: "bio-017", title: "生物體內恆定", titleEn: "Homeostasis", type: "自然科互動網站",
    subjects: ["自然科學", "生物", "健康教育"], topics: ["恆定", "體溫", "血糖"], difficulty: "進階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整環境條件，觀察體溫或血糖如何被調節回穩定範圍。",
    teachingApplication: "說明負回饋維持體內恆定。",
    learningObjectives: ["認識恆定", "理解負回饋"], tags: ["恆定", "負回饋", "生物"] });
  add({ id: "bio-018", title: "生物適應與天擇", titleEn: "Adaptation & Selection", type: "遊戲化學習",
    subjects: ["自然科學", "生物", "環境教育"], topics: ["天擇", "適應", "演化"], difficulty: "進階",
    interactionTypes: ["點擊", "即時模擬"], description: "改變環境（如背景顏色），觀察偽裝有利的個體存活比例上升。",
    teachingApplication: "以模擬體會天擇與適應。",
    learningObjectives: ["認識天擇", "理解適應優勢"], tags: ["天擇", "適應", "演化", "生物"] });
  add({ id: "bio-019", title: "顯微鏡操作模擬", titleEn: "Microscope Simulator", type: "虛擬實驗",
    subjects: ["自然科學", "生物"], topics: ["顯微鏡", "倍率", "對焦"], difficulty: "初階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整倍率與對焦，模擬觀察細胞標本的過程。",
    teachingApplication: "練習顯微鏡操作與倍率概念。",
    learningObjectives: ["認識顯微鏡", "理解倍率與對焦"], tags: ["顯微鏡", "倍率", "生物"] });

  /* ---------- 地科再擴充（4） ---------- */
  add({ id: "ess-012", title: "洋流與氣候", titleEn: "Ocean Currents", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["洋流", "氣候", "熱能"], difficulty: "進階",
    interactionTypes: ["點擊", "即時模擬"], description: "呈現暖流與寒流如何影響沿岸氣候。",
    teachingApplication: "說明洋流對氣候與漁場的影響。",
    learningObjectives: ["認識洋流", "連結洋流與氣候"], tags: ["洋流", "氣候", "地科"] });
  add({ id: "ess-013", title: "河流地形塑造", titleEn: "River Landforms", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學"], topics: ["河流", "侵蝕", "堆積"], difficulty: "中階",
    interactionTypes: ["點擊", "流程動畫"], description: "呈現河流上中下游的侵蝕、搬運與堆積地形。",
    teachingApplication: "認識河流作用與地形塑造。",
    learningObjectives: ["認識河流地形", "理解侵蝕堆積"], tags: ["河流", "地形", "地科"] });
  add({ id: "ess-014", title: "礦物硬度比對", titleEn: "Mineral Hardness", type: "測驗與評量",
    subjects: ["自然科學", "地球科學"], topics: ["礦物", "莫氏硬度", "鑑定"], difficulty: "中階",
    interactionTypes: ["拖曳", "問答測驗"], description: "以刻劃測試比對礦物的莫氏硬度並排序。",
    teachingApplication: "認識莫氏硬度表與礦物鑑定。",
    learningObjectives: ["認識莫氏硬度", "練習礦物鑑定"], tags: ["礦物", "硬度", "地科"] });
  add({ id: "ess-015", title: "碳循環", titleEn: "Carbon Cycle", type: "自然科互動網站",
    subjects: ["自然科學", "地球科學", "環境教育"], topics: ["碳循環", "光合", "燃燒"], difficulty: "進階",
    interactionTypes: ["點擊", "流程動畫"], description: "呈現碳在大氣、生物、海洋與地層間的循環流動。",
    teachingApplication: "說明碳循環與人為排放的影響。",
    learningObjectives: ["認識碳循環", "連結人為活動"], tags: ["碳循環", "環境", "地科"] });

  /* ---------- 數學再擴充（8） ---------- */
  add({ id: "mth-023", title: "長條圖與平均數", titleEn: "Bar Chart & Mean", type: "自然科互動網站",
    subjects: ["數學"], topics: ["平均數", "統計", "長條圖"], difficulty: "初階",
    interactionTypes: ["滑桿", "互動圖表"], description: "調整各長條高度，即時計算平均數並畫出平均線。",
    teachingApplication: "以視覺方式理解平均數的意義。",
    learningObjectives: ["理解平均數", "解讀長條圖"], tags: ["平均數", "統計", "數學"] });
  add({ id: "mth-024", title: "因數與倍數", titleEn: "Factors & Multiples", type: "遊戲化學習",
    subjects: ["數學"], topics: ["因數", "倍數", "公因數"], difficulty: "初階",
    interactionTypes: ["點擊", "問答測驗"], description: "點選數字判斷因數或倍數，練習數論基礎。",
    teachingApplication: "熟練因數、倍數與公因數概念。",
    learningObjectives: ["認識因數倍數", "找公因數公倍數"], tags: ["因數", "倍數", "數學"] });
  add({ id: "mth-025", title: "小數與位值", titleEn: "Decimals & Place Value", type: "自然科互動網站",
    subjects: ["數學"], topics: ["小數", "位值", "換算"], difficulty: "入門",
    interactionTypes: ["點擊", "即時模擬"], description: "以方塊模型呈現小數的位值與大小。",
    teachingApplication: "建立小數位值與量感。",
    learningObjectives: ["理解小數位值", "比較小數大小"], tags: ["小數", "位值", "數學"] });
  add({ id: "mth-026", title: "幾何變換（平移旋轉）", titleEn: "Geometric Transformations", type: "Canvas 案例",
    subjects: ["數學"], topics: ["平移", "旋轉", "鏡射"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "對圖形套用平移、旋轉與鏡射，觀察座標變化。",
    teachingApplication: "認識幾何變換與座標對應。",
    learningObjectives: ["認識幾何變換", "理解座標變化"], tags: ["平移", "旋轉", "幾何", "數學"] });
  add({ id: "mth-027", title: "機率樹狀圖", titleEn: "Probability Tree", type: "自然科互動網站",
    subjects: ["數學"], topics: ["機率", "樹狀圖", "組合"], difficulty: "進階",
    interactionTypes: ["點擊", "流程動畫"], description: "以樹狀圖列出所有可能結果並計算機率。",
    teachingApplication: "以樹狀圖有系統地計算機率。",
    learningObjectives: ["建立樹狀圖", "計算複合機率"], tags: ["機率", "樹狀圖", "數學"] });
  add({ id: "mth-028", title: "等差數列視覺", titleEn: "Arithmetic Sequence", type: "自然科互動網站",
    subjects: ["數學"], topics: ["等差", "數列", "規律"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整首項與公差，觀察等差數列與其和的變化。",
    teachingApplication: "認識等差數列與求和公式。",
    learningObjectives: ["認識等差數列", "理解求和"], tags: ["等差數列", "數列", "數學"] });
  add({ id: "mth-029", title: "座標幾何距離", titleEn: "Distance Formula", type: "Canvas 案例",
    subjects: ["數學"], topics: ["距離公式", "座標", "畢氏"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "拖動兩點即時計算其座標距離（連結畢氏定理）。",
    teachingApplication: "以座標點推導兩點距離公式。",
    learningObjectives: ["認識距離公式", "連結畢氏定理"], tags: ["距離公式", "座標", "數學"] });
  add({ id: "mth-030", title: "體積與容積", titleEn: "Volume & Capacity", type: "自然科互動網站",
    subjects: ["數學", "自然科學"], topics: ["體積", "容積", "單位"], difficulty: "中階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整長寬高計算長方體體積，並換算容積單位。",
    teachingApplication: "認識體積公式與容積單位換算。",
    learningObjectives: ["計算體積", "換算容積單位"], tags: ["體積", "容積", "數學"] });

  /* ---------- 資訊/AI 再擴充（6） ---------- */
  add({ id: "ai-011", title: "梯度下降直覺", titleEn: "Gradient Descent", type: "Canvas 案例",
    subjects: ["人工智慧", "數學"], topics: ["梯度下降", "最佳化", "學習率"], difficulty: "專業",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "小球沿誤差曲面下滑到最低點，示範梯度下降與學習率影響。",
    teachingApplication: "以直覺方式介紹模型如何學習（最小化誤差）。",
    learningObjectives: ["認識梯度下降", "理解學習率"], tags: ["梯度下降", "最佳化", "AI"] });
  add({ id: "ai-012", title: "推薦系統概念", titleEn: "Recommendation Concept", type: "自然科互動網站",
    subjects: ["人工智慧", "資訊教育", "社會領域"], topics: ["推薦", "相似度", "資料"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "依你的喜好標記，系統以相似度推薦相近項目。",
    teachingApplication: "介紹推薦系統原理與同溫層議題。",
    learningObjectives: ["認識推薦系統", "思考演算法影響"], tags: ["推薦系統", "相似度", "AI"] });
  add({ id: "ai-013", title: "AI 影像分類信心度", titleEn: "Classification Confidence", type: "自然科互動網站",
    subjects: ["人工智慧", "資訊教育"], topics: ["分類", "信心度", "機率"], difficulty: "中階",
    interactionTypes: ["點擊", "互動圖表"], description: "呈現模型對各類別的信心度（機率），理解 AI 判斷不是絕對。",
    teachingApplication: "說明分類模型輸出的是機率而非確定答案。",
    learningObjectives: ["認識信心度", "理解機率輸出"], tags: ["分類", "信心度", "AI"] });
  add({ id: "cs-013", title: "位元與位元組", titleEn: "Bits & Bytes", type: "自然科互動網站",
    subjects: ["資訊教育", "數學"], topics: ["位元", "位元組", "容量"], difficulty: "初階",
    interactionTypes: ["點擊", "互動圖表"], description: "以方塊呈現位元、位元組與 KB/MB 的容量關係。",
    teachingApplication: "認識數位資料的容量單位。",
    learningObjectives: ["認識位元位元組", "理解容量單位"], tags: ["位元", "位元組", "資訊教育"] });
  add({ id: "cs-014", title: "顏色與 RGB 像素", titleEn: "RGB Pixel Grid", type: "Canvas 案例",
    subjects: ["資訊教育", "藝術教育", "數學"], topics: ["像素", "RGB", "點陣圖"], difficulty: "初階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "Canvas 繪圖"],
    description: "在像素格上塗色，理解點陣圖如何由 RGB 像素組成。",
    teachingApplication: "認識點陣圖與像素、RGB 顏色。",
    learningObjectives: ["認識像素", "理解點陣圖"], tags: ["像素", "RGB", "點陣圖", "資訊教育"] });
  add({ id: "cs-015", title: "QR Code 原理概念", titleEn: "QR Code Concept", type: "自然科互動網站",
    subjects: ["資訊教育", "數學"], topics: ["QR Code", "編碼", "容錯"], difficulty: "中階",
    interactionTypes: ["點擊", "即時模擬"], description: "以格子示意 QR Code 的定位點與資料區塊概念。",
    teachingApplication: "介紹二維條碼的編碼與容錯概念。",
    learningObjectives: ["認識 QR Code 結構", "理解容錯"], tags: ["QR Code", "編碼", "資訊教育"] });

  /* ---------- 其他跨領域再擴充（4） ---------- */
  add({ id: "art-004", title: "色相環與互補色", titleEn: "Color Wheel", type: "SVG 案例",
    subjects: ["藝術教育", "自然科學"], topics: ["色相環", "互補色", "配色"], difficulty: "初階",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["點擊", "即時模擬"],
    description: "點選色相環上的顏色，自動標示其互補色。",
    teachingApplication: "認識色相環與互補配色。",
    learningObjectives: ["認識色相環", "理解互補色"], tags: ["色相環", "互補色", "藝術"] });
  add({ id: "hlt-004", title: "BMI 計算與區間", titleEn: "BMI Calculator", type: "測驗與評量",
    subjects: ["健康教育", "數學"], topics: ["BMI", "健康", "計算"], difficulty: "初階",
    interactionTypes: ["滑桿", "互動圖表"], description: "輸入身高體重計算 BMI，並標示健康區間。",
    teachingApplication: "認識 BMI 與健康體位。",
    learningObjectives: ["計算 BMI", "認識健康區間"], tags: ["BMI", "健康", "計算"] });
  add({ id: "env-004", title: "生態足跡地圖", titleEn: "Ecological Footprint", type: "自然科互動網站",
    subjects: ["環境教育", "社會領域", "自然科學"], topics: ["生態足跡", "永續", "資源"], difficulty: "中階",
    interactionTypes: ["滑桿", "互動圖表"], description: "調整生活方式，估算需要幾個地球才能支撐。",
    teachingApplication: "以生態足跡引導永續生活反思。",
    learningObjectives: ["認識生態足跡", "反思資源使用"], tags: ["生態足跡", "永續", "環境"] });
  add({ id: "lang-005", title: "標點符號練習", titleEn: "Punctuation Practice", type: "測驗與評量",
    subjects: ["語文教育"], topics: ["標點", "句讀", "寫作"], difficulty: "入門",
    interactionTypes: ["點擊", "問答測驗"], description: "為句子選擇正確的標點符號，練習句讀。",
    teachingApplication: "練習標點符號的正確使用。",
    learningObjectives: ["認識標點符號", "正確斷句"], tags: ["標點", "句讀", "語文"] });
})();
