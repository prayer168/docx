/* ============================================================
   data-phase4b.js — 第四階段擴充（自然科學/環境深化 ＋ 外部研究站）
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }
  function site(o) {
    add({ id:o.id, title:o.title, titleEn:o.titleEn, type:"自然科互動網站",
      subjects:o.subjects, topics:o.topics, gradeLevels:o.gradeLevels||["國中","高中"],
      difficulty:o.difficulty||"初階", technologies:o.technologies||["HTML","JavaScript"],
      interactionTypes:o.interactionTypes||["點擊","即時模擬"], libraries:[], offlineFriendly:false,
      description:o.description, teachingApplication:o.teachingApplication,
      learningObjectives:o.learningObjectives||["以現成資源進行探究","觀察並記錄結果"],
      teacherGuide:"選擇對應單元內容，設計引導問題讓學生操作，搭配學習單。",
      studentTask:"操作網站互動內容並記錄觀察或蒐集的資料。",
      scienceFairApplication:o.scienceFairApplication||"以現成資源建立假設或蒐集資料，再進行驗證。",
      techAnalysis:(o.techGuess||"依網站互動表現推測使用 HTML5 與 JavaScript")+"（未經官方確認）",
      performanceNotes:"線上載入，需網路連線。", mobileNotes:o.mobile||"多數頁面支援行動裝置。",
      accessibilityNotes:"無障礙程度依原網站而定，建議搭配教師說明。",
      modifyTips:["可嵌入 iframe（請遵守使用條款）","搭配學習單","挑選對應單元內容"],
      referenceUrl:o.url, license:"第三方網站，著作權屬原權利人所有",
      externalSite:{ name:o.name, org:o.org, url:o.url, needAccount:o.account||"多數內容免帳號",
        free:o.free||"免費（部分內容可能收費）", chinese:o.chinese||"以英文為主", mobile:o.mobile||"支援",
        techGuess:(o.techGuess||"依網站互動表現推測")+"，未經官方確認。", notes:"引用請遵守其授權條款，勿宣稱自有。" },
      tags:o.tags, createdAt:"2026-07-23", updatedAt:"2026-07-23" });
  }

  /* ---------- 物理進階（10） ---------- */
  add({ id:"phy-021", title:"動量守恆碰撞", titleEn:"Momentum Conservation", type:"虛擬實驗",
    subjects:["自然科學","物理"], topics:["動量","碰撞","守恆"], difficulty:"進階",
    interactionTypes:["滑桿","即時模擬"], description:"設定兩球質量與速度，觀察碰撞前後動量守恆。",
    teachingApplication:"驗證動量守恆定律。", learningObjectives:["理解動量守恆","分析碰撞前後"], tags:["動量","碰撞","物理"] });
  add({ id:"phy-022", title:"彈性與非彈性碰撞", titleEn:"Elastic vs Inelastic", type:"Canvas 案例",
    subjects:["自然科學","物理"], topics:["碰撞","動能","恢復係數"], difficulty:"進階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["滑桿","即時模擬"],
    description:"比較彈性與非彈性碰撞後動能是否守恆。", teachingApplication:"區分兩種碰撞的能量變化。",
    learningObjectives:["區分彈性/非彈性碰撞","理解動能損失"], tags:["碰撞","動能","物理"] });
  add({ id:"phy-023", title:"功與功率", titleEn:"Work & Power", type:"虛擬實驗",
    subjects:["自然科學","物理"], topics:["功","功率","能量"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"調整施力與距離計算功，並比較不同時間下的功率。",
    teachingApplication:"說明功＝力×距離、功率＝功/時間。", learningObjectives:["計算功與功率","區分兩者"], tags:["功","功率","物理"] });
  add({ id:"phy-024", title:"滑輪組省力", titleEn:"Pulley Systems", type:"自然科互動網站",
    subjects:["自然科學","物理"], topics:["滑輪","省力","機械利益"], difficulty:"中階",
    interactionTypes:["點擊","即時模擬"], description:"組合定滑輪與動滑輪，計算省力倍數與拉繩距離。",
    teachingApplication:"說明滑輪組的機械利益。", learningObjectives:["認識滑輪組","理解省力費距"], tags:["滑輪","省力","物理"] });
  add({ id:"phy-025", title:"齒輪比與轉速", titleEn:"Gear Ratio", type:"SVG 案例",
    subjects:["自然科學","物理","數學"], topics:["齒輪","傳動比","轉速"], difficulty:"中階",
    technologies:["HTML","CSS","JavaScript","SVG"], interactionTypes:["滑桿","即時模擬"],
    description:"調整兩齒輪齒數，計算傳動比與轉速關係。", teachingApplication:"說明齒輪比與轉速反比。",
    learningObjectives:["認識齒輪比","理解轉速關係"], tags:["齒輪","傳動比","物理"] });
  add({ id:"phy-026", title:"電容充放電", titleEn:"Capacitor Charge", type:"Chart.js 與資料視覺化",
    subjects:["自然科學","物理"], topics:["電容","充放電","指數"], difficulty:"專業",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["滑桿","互動圖表"], description:"觀察電容充放電的指數曲線與時間常數。",
    teachingApplication:"連結 RC 電路與指數變化。", learningObjectives:["認識充放電曲線","理解時間常數"], tags:["電容","RC","物理"] });
  add({ id:"phy-027", title:"稜鏡分光", titleEn:"Prism Dispersion", type:"Canvas 案例",
    subjects:["自然科學","物理"], topics:["色散","光譜","折射"], difficulty:"進階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["拖曳","即時模擬"],
    description:"白光經稜鏡分散成彩色光譜，示範色散。", teachingApplication:"說明不同波長折射率不同造成色散。",
    learningObjectives:["認識色散","連結波長與折射"], tags:["稜鏡","光譜","色散","物理"] });
  add({ id:"phy-028", title:"單擺週期因素", titleEn:"Pendulum Period", type:"虛擬實驗",
    subjects:["自然科學","物理","數學"], topics:["單擺","週期","擺長"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"改變擺長與重力，觀察單擺週期變化。",
    teachingApplication:"探究影響單擺週期的因素。", learningObjectives:["認識單擺週期公式","分析變因"],
    scienceFairApplication:"以實體單擺測量擺長與週期關係。", tags:["單擺","週期","物理"] });
  add({ id:"phy-029", title:"槓桿秤重", titleEn:"Balance Scale Weighing", type:"虛擬實驗",
    subjects:["自然科學","物理","數學"], topics:["天平","質量","平衡"], difficulty:"初階",
    interactionTypes:["拖曳","即時模擬"], description:"在天平兩端放砝碼與物體，測量未知質量。",
    teachingApplication:"練習天平使用與質量測量。", learningObjectives:["認識天平","測量質量"], tags:["天平","質量","物理"] });
  add({ id:"phy-030", title:"聲音分貝與強度", titleEn:"Decibel & Intensity", type:"自然科互動網站",
    subjects:["自然科學","物理","健康教育"], topics:["分貝","音量","聽力"], difficulty:"中階",
    interactionTypes:["滑桿","互動圖表"], description:"比較日常聲音的分貝值與對聽力的影響。",
    teachingApplication:"認識分貝尺度與噪音防護。", learningObjectives:["認識分貝","關注聽力健康"], tags:["分貝","音量","物理"] });

  /* ---------- 化學進階（8） ---------- */
  add({ id:"che-018", title:"莫耳與粒子數", titleEn:"Mole Concept", type:"自然科互動網站",
    subjects:["自然科學","化學","數學"], topics:["莫耳","亞佛加厥數","換算"], difficulty:"進階",
    interactionTypes:["滑桿","即時模擬"], description:"以粒子數視覺化莫耳與亞佛加厥數的換算。",
    teachingApplication:"建立莫耳與粒子數的量感。", learningObjectives:["認識莫耳","換算粒子數"], tags:["莫耳","化學"] });
  add({ id:"che-019", title:"濃度稀釋計算", titleEn:"Dilution Calculator", type:"虛擬實驗",
    subjects:["自然科學","化學","數學"], topics:["濃度","稀釋","C1V1"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"加水稀釋溶液，觀察濃度變化並計算 C₁V₁=C₂V₂。",
    teachingApplication:"練習濃度稀釋計算。", learningObjectives:["認識濃度","計算稀釋"], tags:["濃度","稀釋","化學"] });
  add({ id:"che-020", title:"沉澱反應", titleEn:"Precipitation Reaction", type:"虛擬實驗",
    subjects:["自然科學","化學"], topics:["沉澱","離子","反應"], difficulty:"進階",
    interactionTypes:["點擊","即時模擬"], description:"混合兩溶液觀察是否生成沉澱與顏色。",
    teachingApplication:"認識沉澱反應與離子結合。", learningObjectives:["認識沉澱反應","判斷生成物"], tags:["沉澱","離子","化學"] });
  add({ id:"che-021", title:"金屬活性順序", titleEn:"Reactivity Series", type:"自然科互動網站",
    subjects:["自然科學","化學"], topics:["金屬活性","置換","反應"], difficulty:"進階",
    interactionTypes:["拖曳","即時模擬"], description:"排列金屬活性並預測置換反應是否發生。",
    teachingApplication:"認識金屬活性順序與置換反應。", learningObjectives:["排列金屬活性","預測反應"], tags:["金屬活性","置換","化學"] });
  add({ id:"che-022", title:"分子形狀 VSEPR", titleEn:"Molecular Shapes", type:"自然科互動網站",
    subjects:["自然科學","化學"], topics:["分子形狀","鍵角","VSEPR"], difficulty:"專業",
    interactionTypes:["點擊","3D 操作"], description:"依電子對數判斷分子的立體形狀（直線、四面體等）。",
    teachingApplication:"說明 VSEPR 理論與分子形狀。", learningObjectives:["認識分子形狀","理解 VSEPR"], tags:["分子形狀","VSEPR","化學"] });
  add({ id:"che-023", title:"聚合物與單體", titleEn:"Polymers & Monomers", type:"自然科互動網站",
    subjects:["自然科學","化學","環境教育"], topics:["聚合物","單體","塑膠"], difficulty:"中階",
    interactionTypes:["拖曳","流程動畫"], description:"把單體串連成聚合物長鏈，理解塑膠結構。",
    teachingApplication:"認識聚合反應與塑膠。", learningObjectives:["認識聚合物","連結塑膠議題"], tags:["聚合物","塑膠","化學"] });
  add({ id:"che-024", title:"氧化數判定", titleEn:"Oxidation Numbers", type:"測驗與評量",
    subjects:["自然科學","化學"], topics:["氧化數","規則","判定"], difficulty:"專業",
    interactionTypes:["點擊","問答測驗"], description:"依規則判定化合物中各元素的氧化數。",
    teachingApplication:"練習氧化數判定規則。", learningObjectives:["認識氧化數","應用判定規則"], tags:["氧化數","化學"] });
  add({ id:"che-025", title:"結晶生成", titleEn:"Crystallization", type:"虛擬實驗",
    subjects:["自然科學","化學","地球科學"], topics:["結晶","飽和","冷卻"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"冷卻飽和溶液，觀察結晶隨過飽和度析出。",
    teachingApplication:"說明結晶與過飽和。", learningObjectives:["認識結晶","理解過飽和"],
    scienceFairApplication:"培養明礬或食鹽結晶並記錄。", tags:["結晶","飽和","化學"] });

  /* ---------- 生物進階（10） ---------- */
  add({ id:"bio-020", title:"光合速率因素", titleEn:"Photosynthesis Rate", type:"虛擬實驗",
    subjects:["自然科學","生物"], topics:["光合作用","光強","二氧化碳"], difficulty:"進階",
    interactionTypes:["滑桿","互動圖表"], description:"調整光強、二氧化碳與溫度，觀察光合速率變化。",
    teachingApplication:"探究光合作用的限制因子。", learningObjectives:["認識限制因子","分析變因"],
    scienceFairApplication:"以水蘊草實驗測量光合速率。", tags:["光合作用","限制因子","生物"] });
  add({ id:"bio-021", title:"酵素活性", titleEn:"Enzyme Activity", type:"虛擬實驗",
    subjects:["自然科學","生物","化學"], topics:["酵素","溫度","pH"], difficulty:"進階",
    interactionTypes:["滑桿","互動圖表"], description:"調整溫度與 pH，觀察酵素活性的最適值與變性。",
    teachingApplication:"說明酵素的最適溫度與 pH。", learningObjectives:["認識酵素","理解最適條件"], tags:["酵素","溫度","pH","生物"] });
  add({ id:"bio-022", title:"血型遺傳", titleEn:"Blood Type Genetics", type:"虛擬實驗",
    subjects:["自然科學","生物","數學"], topics:["血型","遺傳","共顯性"], difficulty:"進階",
    interactionTypes:["點擊","互動圖表"], description:"以親代血型推算子代可能血型與機率。",
    teachingApplication:"說明 ABO 血型的共顯性遺傳。", learningObjectives:["認識血型遺傳","理解共顯性"], tags:["血型","遺傳","生物"] });
  add({ id:"bio-023", title:"生態演替", titleEn:"Ecological Succession", type:"捲動敘事",
    subjects:["自然科學","生物","環境教育"], topics:["演替","群落","變化"], difficulty:"中階",
    interactionTypes:["捲動","流程動畫"], description:"以時間序列呈現裸地到森林的生態演替。",
    teachingApplication:"認識初級與次級演替。", learningObjectives:["認識生態演替","理解群落變化"], tags:["演替","生態","生物"] });
  add({ id:"bio-024", title:"族群競爭模型", titleEn:"Competition Model", type:"Chart.js 與資料視覺化",
    subjects:["自然科學","生物","數學"], topics:["競爭","族群","資源"], difficulty:"專業",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["滑桿","互動圖表"], description:"調整兩物種參數，觀察競爭下的族群消長。",
    teachingApplication:"說明種間競爭與競爭排除。", learningObjectives:["認識種間競爭","理解族群動態"], tags:["競爭","族群","生物"] });
  add({ id:"bio-025", title:"心跳與運動", titleEn:"Heart Rate & Exercise", type:"虛擬實驗",
    subjects:["自然科學","生物","健康教育"], topics:["心跳","運動","恢復"], difficulty:"初階",
    interactionTypes:["滑桿","互動圖表"], description:"模擬運動強度變化，觀察心跳上升與恢復。",
    teachingApplication:"連結運動強度與心跳反應。", learningObjectives:["認識心跳變化","理解恢復"],
    scienceFairApplication:"實測運動前後心跳並繪圖。", tags:["心跳","運動","生物"] });
  add({ id:"bio-026", title:"感官錯覺", titleEn:"Optical Illusions", type:"自然科互動網站",
    subjects:["自然科學","生物","藝術教育"], topics:["視覺","錯覺","大腦"], difficulty:"初階",
    interactionTypes:["點擊","即時模擬"], description:"展示多種視錯覺，探討大腦如何詮釋影像。",
    teachingApplication:"以錯覺探討感覺與知覺。", learningObjectives:["認識視錯覺","理解知覺處理"], tags:["視錯覺","感官","生物"] });
  add({ id:"bio-027", title:"肌肉拮抗作用", titleEn:"Antagonistic Muscles", type:"自然科互動網站",
    subjects:["自然科學","生物","健康教育"], topics:["肌肉","拮抗","關節"], difficulty:"中階",
    interactionTypes:["拖曳","即時模擬"], description:"彎曲手臂，觀察二頭肌與三頭肌的拮抗作用。",
    teachingApplication:"說明肌肉成對拮抗帶動關節。", learningObjectives:["認識拮抗作用","理解關節運動"], tags:["肌肉","拮抗","生物"] });
  add({ id:"bio-028", title:"生物鐘與日夜", titleEn:"Circadian Rhythm", type:"自然科互動網站",
    subjects:["自然科學","生物","健康教育"], topics:["生物鐘","日夜","作息"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"調整光照週期，觀察生物鐘對活動與睡眠的影響。",
    teachingApplication:"認識生理時鐘與規律作息。", learningObjectives:["認識生物鐘","連結健康作息"], tags:["生物鐘","日夜","生物"] });
  add({ id:"bio-029", title:"營養標示判讀", titleEn:"Nutrition Label", type:"測驗與評量",
    subjects:["健康教育","自然科學","數學"], topics:["營養","熱量","判讀"], difficulty:"初階",
    interactionTypes:["點擊","互動圖表"], description:"判讀食品營養標示，計算熱量與各營養素占比。",
    teachingApplication:"練習營養標示判讀與飲食選擇。", learningObjectives:["判讀營養標示","計算熱量"], tags:["營養標示","熱量","健康"] });

  /* ---------- 地科/天文進階（10） ---------- */
  add({ id:"ess-016", title:"星等與亮度", titleEn:"Stellar Magnitude", type:"自然科互動網站",
    subjects:["自然科學","地球科學","數學"], topics:["星等","亮度","對數"], difficulty:"進階",
    interactionTypes:["滑桿","互動圖表"], description:"比較不同星等恆星的亮度（對數尺度）。",
    teachingApplication:"認識星等尺度與對數關係。", learningObjectives:["認識星等","理解對數亮度"], tags:["星等","亮度","天文"] });
  add({ id:"ess-017", title:"行星大小比較", titleEn:"Planet Size Compare", type:"自然科互動網站",
    subjects:["自然科學","地球科學"], topics:["行星","大小","比例"], difficulty:"初階",
    interactionTypes:["點擊","互動圖表"], description:"以等比例並排比較八大行星的大小。",
    teachingApplication:"建立行星大小的相對概念。", learningObjectives:["比較行星大小","理解比例"], tags:["行星","大小","天文"] });
  add({ id:"ess-018", title:"隕石坑形成", titleEn:"Crater Formation", type:"虛擬實驗",
    subjects:["自然科學","地球科學","物理"], topics:["隕石","撞擊","能量"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"調整隕石大小與速度，觀察撞擊坑大小。",
    teachingApplication:"連結撞擊能量與隕石坑。", learningObjectives:["認識撞擊坑","連結能量與規模"],
    scienceFairApplication:"以麵粉盤模擬撞擊實驗。", tags:["隕石","撞擊坑","地科"] });
  add({ id:"ess-019", title:"地球磁場", titleEn:"Earth's Magnetic Field", type:"自然科互動網站",
    subjects:["自然科學","地球科學","物理"], topics:["地磁","磁極","羅盤"], difficulty:"中階",
    interactionTypes:["拖曳","即時模擬"], description:"呈現地球磁場線與羅盤指向的關係。",
    teachingApplication:"說明地磁與指南針原理。", learningObjectives:["認識地磁","理解羅盤"], tags:["地磁","羅盤","地科"] });
  add({ id:"ess-020", title:"雲的種類", titleEn:"Cloud Types", type:"自然科互動網站",
    subjects:["自然科學","地球科學"], topics:["雲","天氣","分類"], difficulty:"初階",
    interactionTypes:["點擊","滑鼠移入"], description:"依高度與形狀認識積雲、層雲、卷雲等雲種。",
    teachingApplication:"認識雲的分類與天氣關聯。", learningObjectives:["認識雲種","連結天氣"], tags:["雲","天氣","地科"] });
  add({ id:"ess-021", title:"颱風結構", titleEn:"Typhoon Structure", type:"自然科互動網站",
    subjects:["自然科學","地球科學","環境教育"], topics:["颱風","風眼","氣壓"], difficulty:"中階",
    interactionTypes:["點擊","即時模擬"], description:"剖析颱風的風眼、眼牆與螺旋雨帶結構。",
    teachingApplication:"認識颱風結構與形成條件。", learningObjectives:["認識颱風結構","理解形成"], tags:["颱風","風眼","地科"] });
  add({ id:"ess-022", title:"地下水與含水層", titleEn:"Groundwater", type:"自然科互動網站",
    subjects:["自然科學","地球科學","環境教育"], topics:["地下水","含水層","滲透"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"呈現雨水滲入地下形成含水層與地下水位變化。",
    teachingApplication:"認識地下水與水資源。", learningObjectives:["認識地下水","理解含水層"], tags:["地下水","含水層","地科"] });
  add({ id:"ess-023", title:"土壤分層", titleEn:"Soil Horizons", type:"自然科互動網站",
    subjects:["自然科學","地球科學","環境教育"], topics:["土壤","分層","風化"], difficulty:"初階",
    interactionTypes:["點擊","滑鼠移入"], description:"點擊土壤剖面各層，認識腐植質、表土與母質層。",
    teachingApplication:"認識土壤分層與形成。", learningObjectives:["認識土壤分層","理解風化"], tags:["土壤","分層","地科"] });
  add({ id:"ess-024", title:"極光成因", titleEn:"Aurora Formation", type:"自然科互動網站",
    subjects:["自然科學","地球科學","物理"], topics:["極光","太陽風","磁場"], difficulty:"進階",
    interactionTypes:["點擊","即時模擬"], description:"呈現太陽風粒子沿地磁進入高層大氣產生極光。",
    teachingApplication:"說明極光與太陽風、地磁的關係。", learningObjectives:["認識極光成因","連結太陽風"], tags:["極光","太陽風","地科"] });
  add({ id:"ess-025", title:"潮間帶生態", titleEn:"Intertidal Zone", type:"自然科互動網站",
    subjects:["自然科學","生物","地球科學","環境教育"], topics:["潮間帶","分帶","生物"], difficulty:"中階",
    interactionTypes:["點擊","即時模擬"], description:"隨潮汐變化觀察潮間帶不同分帶的生物適應。",
    teachingApplication:"認識潮間帶分帶與生物適應。", learningObjectives:["認識潮間帶","理解分帶"], tags:["潮間帶","生態","地科"] });

  /* ---------- 環境教育（6） ---------- */
  add({ id:"env-005", title:"空氣品質 AQI", titleEn:"Air Quality Index", type:"Chart.js 與資料視覺化",
    subjects:["環境教育","自然科學","健康教育"], topics:["AQI","空污","健康"], difficulty:"中階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["滑桿","互動圖表"], description:"調整污染物濃度，對照 AQI 分級與健康建議。",
    teachingApplication:"認識空氣品質指標與防護。", learningObjectives:["認識 AQI","連結健康防護"], tags:["AQI","空污","環境"] });
  add({ id:"env-006", title:"再生能源比較", titleEn:"Renewable Energy", type:"Chart.js 與資料視覺化",
    subjects:["環境教育","自然科學","社會領域"], topics:["再生能源","發電","比較"], difficulty:"中階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["互動圖表"], description:"比較太陽能、風力、水力等發電方式的特性。",
    teachingApplication:"認識各種再生能源的優缺點。", learningObjectives:["認識再生能源","比較發電方式"], tags:["再生能源","發電","環境"] });
  add({ id:"env-007", title:"噪音分貝計", titleEn:"Noise Meter", type:"虛擬實驗",
    subjects:["環境教育","健康教育","自然科學"], topics:["噪音","分貝","健康"], difficulty:"初階",
    interactionTypes:["滑桿","互動圖表"], description:"對照日常情境的噪音分貝與聽力風險。",
    teachingApplication:"認識噪音污染與聽力保護。", learningObjectives:["認識分貝","關注聽力"], tags:["噪音","分貝","環境"] });
  add({ id:"env-008", title:"塑膠分解時間", titleEn:"Plastic Decomposition", type:"自然科互動網站",
    subjects:["環境教育","自然科學","社會領域"], topics:["塑膠","分解","污染"], difficulty:"初階",
    interactionTypes:["點擊","互動圖表"], description:"比較各種垃圾在自然中分解所需的時間。",
    teachingApplication:"引導減塑與環保行動。", learningObjectives:["認識分解時間","反思減塑"], tags:["塑膠","分解","環境"] });
  add({ id:"env-009", title:"生物指標水質", titleEn:"Bioindicators", type:"自然科互動網站",
    subjects:["環境教育","生物","自然科學"], topics:["生物指標","水質","監測"], difficulty:"中階",
    interactionTypes:["點擊","即時模擬"], description:"以底棲生物種類判斷溪流水質等級。",
    teachingApplication:"認識以生物指標評估水質。", learningObjectives:["認識生物指標","評估水質"],
    scienceFairApplication:"實地採集底棲生物評估溪流水質。", tags:["生物指標","水質","環境"] });
  add({ id:"env-010", title:"光污染與星空", titleEn:"Light Pollution", type:"自然科互動網站",
    subjects:["環境教育","地球科學","健康教育"], topics:["光污染","星空","能源"], difficulty:"初階",
    interactionTypes:["滑桿","即時模擬"], description:"調整城市燈光，觀察可見星星數量的變化。",
    teachingApplication:"認識光污染對觀星與生態的影響。", learningObjectives:["認識光污染","反思照明"], tags:["光污染","星空","環境"] });

  /* ---------- 外部研究站（8） ---------- */
  site({ id:"site-021", title:"Our World in Data", titleEn:"Our World in Data", name:"Our World in Data", org:"University of Oxford（英國）", url:"https://ourworldindata.org/",
    subjects:["社會領域","自然科學","數學","環境教育"], topics:["資料","統計","全球議題"], difficulty:"中階",
    interactionTypes:["互動圖表"], description:"以互動圖表呈現全球健康、環境、經濟等長期資料。",
    teachingApplication:"以真實資料進行跨科議題探究與圖表判讀。", techGuess:"互動圖表推測使用 JavaScript/D3", tags:["資料","統計","全球","外部資源"] });
  site({ id:"site-022", title:"Gapminder", titleEn:"Gapminder", name:"Gapminder", org:"Gapminder Foundation（瑞典）", url:"https://www.gapminder.org/tools/",
    subjects:["社會領域","數學","自然科學"], topics:["泡泡圖","發展","趨勢"], difficulty:"中階",
    technologies:["HTML","JavaScript"], interactionTypes:["互動圖表","即時模擬"],
    description:"以動態泡泡圖呈現各國壽命、所得等隨時間變化。", teachingApplication:"以動態資料破除刻板印象、練習圖表判讀。", techGuess:"動態泡泡圖推測使用 JavaScript", tags:["泡泡圖","發展","資料","外部資源"] });
  site({ id:"site-023", title:"Khan Academy", titleEn:"Khan Academy", name:"Khan Academy", org:"Khan Academy（美國）", url:"https://www.khanacademy.org/",
    subjects:["數學","自然科學","資訊教育"], topics:["課程","練習","精熟學習"], difficulty:"初階",
    interactionTypes:["點擊","問答測驗"], description:"提供數學、科學等免費課程影片與互動練習。",
    teachingApplication:"翻轉教室與差異化學習的自學資源。", techGuess:"互動練習推測使用 JavaScript", account:"追蹤進度需帳號", chinese:"部分支援中文", tags:["課程","練習","外部資源"] });
  site({ id:"site-024", title:"CODAP 資料分析", titleEn:"CODAP", name:"CODAP", org:"The Concord Consortium（美國）", url:"https://codap.concord.org/",
    subjects:["數學","自然科學","資訊教育"], topics:["資料分析","圖表","探究"], difficulty:"中階",
    technologies:["HTML","JavaScript"], interactionTypes:["拖曳","互動圖表"],
    description:"免費線上資料分析平台，可拖曳建立圖表探索資料。", teachingApplication:"資料素養與探究：讓學生動手分析真實資料。", techGuess:"資料視覺化推測使用 JavaScript", tags:["資料分析","圖表","外部資源"] });
  site({ id:"site-025", title:"Zooniverse 公民科學", titleEn:"Zooniverse", name:"Zooniverse", org:"Zooniverse（跨國）", url:"https://www.zooniverse.org/",
    subjects:["自然科學","生物","地球科學","資訊教育"], topics:["公民科學","分類","研究"], difficulty:"初階",
    interactionTypes:["點擊","觸控"], description:"參與真實科學研究的分類與標註（動物、星系等）。",
    teachingApplication:"讓學生實際參與公民科學專案。", scienceFairApplication:"參與專案並記錄貢獻作為探究素材。", techGuess:"分類介面推測使用 JavaScript", account:"貢獻需帳號", tags:["公民科學","分類","外部資源"] });
  site({ id:"site-026", title:"GLOBE 環境觀測", titleEn:"GLOBE Program", name:"GLOBE Program", org:"NASA 等（跨國）", url:"https://www.globe.gov/",
    subjects:["環境教育","地球科學","自然科學"], topics:["環境觀測","資料","公民科學"], difficulty:"中階",
    interactionTypes:["點擊","觸控"], description:"全球學生共同觀測與上傳環境資料的教育計畫。",
    teachingApplication:"帶學生進行環境觀測並提交資料。", scienceFairApplication:"以 GLOBE 觀測資料進行環境研究。", techGuess:"資料平台推測使用標準 Web 技術", tags:["環境觀測","公民科學","外部資源"] });
  site({ id:"site-027", title:"Musicca 音樂互動", titleEn:"Musicca", name:"Musicca", org:"Musicca（丹麥）", url:"https://www.musicca.com/",
    subjects:["藝術教育","數學"], topics:["音樂","樂理","節奏"], difficulty:"初階",
    interactionTypes:["點擊","聲音互動"], description:"提供互動鋼琴、節奏與樂理練習工具。",
    teachingApplication:"音樂樂理與節奏的互動練習。", techGuess:"互動樂器推測使用 Web Audio API", chinese:"支援多語", tags:["音樂","樂理","外部資源"] });
  site({ id:"site-028", title:"Google Arts & Culture", titleEn:"Google Arts & Culture", name:"Google Arts & Culture", org:"Google（美國）", url:"https://artsandculture.google.com/",
    subjects:["藝術教育","社會領域"], topics:["藝術","文化","博物館"], difficulty:"初階",
    interactionTypes:["點擊","3D 操作"], description:"線上瀏覽全球博物館典藏、名畫高解析與虛擬展覽。",
    teachingApplication:"藝術與文化賞析、虛擬博物館導覽。", techGuess:"高解析檢視與 3D 推測使用 WebGL", chinese:"支援繁體中文", tags:["藝術","文化","博物館","外部資源"] });
})();
