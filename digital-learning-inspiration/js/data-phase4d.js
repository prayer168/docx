/* ============================================================
   data-phase4d.js — 第四階段擴充（跨領域、AI/CS、外部研究站再擴充）
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
      teacherGuide:"選擇對應單元內容，設計引導問題並搭配學習單。",
      studentTask:"操作網站互動內容並記錄觀察或蒐集的資料。",
      scienceFairApplication:o.scienceFairApplication||"以現成資源建立假設或蒐集資料，再驗證。",
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

  /* ---------- 語文教育（6） ---------- */
  add({ id:"lang-006", title:"造句填空", titleEn:"Sentence Cloze", type:"測驗與評量",
    subjects:["語文教育"], topics:["造句","語法","填空"], difficulty:"初階", interactionTypes:["點擊","問答測驗"],
    description:"從詞語選項中選出最適合填入句子空格的詞。", teachingApplication:"語法與詞語運用練習。",
    learningObjectives:["理解語境","正確用詞"], tags:["造句","填空","語文"] });
  add({ id:"lang-007", title:"部首查字", titleEn:"Radical Lookup", type:"遊戲化學習",
    subjects:["語文教育"], topics:["部首","查字","識字"], difficulty:"初階", interactionTypes:["點擊","遊戲控制"],
    description:"依部首把國字分類，練習部首概念。", teachingApplication:"部首與查字典教學。",
    learningObjectives:["認識部首","練習分類"], tags:["部首","查字","語文"] });
  add({ id:"lang-008", title:"詩詞排序", titleEn:"Poem Ordering", type:"測驗與評量",
    subjects:["語文教育","社會領域"], topics:["詩詞","排序","韻律"], difficulty:"中階", interactionTypes:["點擊","問答測驗"],
    description:"將打散的詩句重新排回正確順序。", teachingApplication:"古詩詞的記憶與韻律教學。",
    learningObjectives:["熟悉詩詞","理解韻律"], tags:["詩詞","排序","語文"] });
  add({ id:"lang-009", title:"標點符號放置", titleEn:"Punctuation Placement", type:"測驗與評量",
    subjects:["語文教育"], topics:["標點","句讀","寫作"], difficulty:"初階", interactionTypes:["點擊","問答測驗"],
    description:"在正確位置插入標點，讓句子語意清楚。", teachingApplication:"標點與斷句練習。",
    learningObjectives:["正確斷句","運用標點"], tags:["標點","句讀","語文"] });
  add({ id:"lang-010", title:"反義詞配對", titleEn:"Antonym Match", type:"遊戲化學習",
    subjects:["語文教育"], topics:["反義詞","詞彙","配對"], difficulty:"入門", interactionTypes:["點擊","遊戲控制"],
    description:"配對反義詞（如大↔小），擴充詞彙。", teachingApplication:"反義詞與詞彙教學。",
    learningObjectives:["認識反義詞","擴充詞彙"], tags:["反義詞","配對","語文"] });
  add({ id:"lang-011", title:"英文字母發音", titleEn:"Phonics Practice", type:"自然科互動網站",
    subjects:["語文教育"], topics:["自然發音","字母","英語"], difficulty:"入門",
    technologies:["HTML","JavaScript","Web Audio API"], interactionTypes:["點擊","聲音互動"],
    description:"點選字母聽發音，練習英語自然發音（需點擊觸發）。", teachingApplication:"英語字母與發音入門。",
    learningObjectives:["認識字母發音","自然發音入門"], accessibilityNotes:"由使用者點擊觸發聲音。", tags:["發音","字母","英語","語文"] });

  /* ---------- 社會領域（8） ---------- */
  add({ id:"soc-005", title:"世界時區時鐘", titleEn:"World Time Zones", type:"自然科互動網站",
    subjects:["社會領域","地球科學","數學"], topics:["時區","經度","時差"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"拖動經度觀察各地時間與時差變化。",
    teachingApplication:"時區、經線與時差教學。", learningObjectives:["認識時區","計算時差"], tags:["時區","時差","社會"] });
  add({ id:"soc-006", title:"經緯度定位", titleEn:"Latitude & Longitude", type:"SVG 案例",
    subjects:["社會領域","地球科學","數學"], topics:["經緯度","座標","地圖"], difficulty:"中階",
    technologies:["HTML","JavaScript","SVG"], interactionTypes:["點擊","即時模擬"],
    description:"點擊世界地圖讀出經緯度座標。", teachingApplication:"經緯度與地理座標教學。",
    learningObjectives:["認識經緯度","地圖定位"], tags:["經緯度","座標","社會"] });
  add({ id:"soc-007", title:"選舉席次分配", titleEn:"Seat Allocation", type:"Chart.js 與資料視覺化",
    subjects:["社會領域","數學"], topics:["選舉","比例","分配"], difficulty:"進階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["滑桿","互動圖表"], description:"依得票比例分配席次，理解比例代表制。",
    teachingApplication:"公民：選舉制度與比例分配。", learningObjectives:["認識比例代表制","計算席次"], tags:["選舉","比例","社會"] });
  add({ id:"soc-008", title:"歷史地圖疆域", titleEn:"Historical Map", type:"自然科互動網站",
    subjects:["社會領域"], topics:["歷史","疆域","變遷"], difficulty:"中階",
    interactionTypes:["滑桿","即時模擬"], description:"拖動時間軸觀察疆域或城市的歷史變遷。",
    teachingApplication:"歷史地理與疆域變遷教學。", learningObjectives:["認識歷史變遷","地圖判讀"], tags:["歷史","疆域","社會"] });
  add({ id:"soc-009", title:"家庭收支預算", titleEn:"Budget Planner", type:"虛擬實驗",
    subjects:["社會領域","數學","健康教育"], topics:["理財","預算","收支"], difficulty:"初階",
    interactionTypes:["滑桿","互動圖表"], description:"分配收入到各項支出，練習編列預算。",
    teachingApplication:"理財教育與預算規劃。", learningObjectives:["認識收支","規劃預算"], tags:["理財","預算","社會"] });
  add({ id:"soc-010", title:"文化節慶地圖", titleEn:"Festival Map", type:"SVG 案例",
    subjects:["社會領域","藝術教育"], topics:["節慶","文化","地圖"], difficulty:"初階",
    technologies:["HTML","CSS","JavaScript","SVG"], interactionTypes:["點擊"],
    description:"點擊地圖上的標記認識各地文化節慶。", teachingApplication:"多元文化與節慶教學。",
    learningObjectives:["認識文化節慶","地圖探索"], tags:["節慶","文化","社會"] });
  add({ id:"soc-011", title:"供應鏈流程", titleEn:"Supply Chain", type:"自然科互動網站",
    subjects:["社會領域","環境教育"], topics:["供應鏈","生產","消費"], difficulty:"中階",
    interactionTypes:["點擊","流程動畫"], description:"追蹤商品從原料到消費者的供應鏈流程。",
    teachingApplication:"經濟活動與全球化教學。", learningObjectives:["認識供應鏈","理解生產消費"], tags:["供應鏈","經濟","社會"] });
  add({ id:"soc-012", title:"人權議題投票", titleEn:"Civics Poll", type:"測驗與評量",
    subjects:["社會領域"], topics:["公民","議題","討論"], difficulty:"中階", interactionTypes:["點擊","互動圖表"],
    description:"針對公民議題投票並看即時結果，引發討論。", teachingApplication:"公民議題討論與意見表達。",
    learningObjectives:["表達立場","理解多元觀點"], tags:["公民","議題","社會"] });

  /* ---------- 藝術教育（6） ---------- */
  add({ id:"art-005", title:"畢卡索風格拼貼", titleEn:"Cubism Collage", type:"Canvas 案例",
    subjects:["藝術教育"], topics:["立體派","拼貼","創作"], difficulty:"中階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["拖曳","Canvas 繪圖"],
    description:"拖曳幾何形狀拼貼出立體派風格作品。", teachingApplication:"藝術風格賞析與創作。",
    learningObjectives:["認識立體派","幾何拼貼創作"], tags:["立體派","拼貼","藝術"] });
  add({ id:"art-006", title:"點描畫生成", titleEn:"Pointillism", type:"Canvas 案例",
    subjects:["藝術教育","自然科學"], topics:["點描","色彩","視覺混色"], difficulty:"中階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["拖曳","Canvas 繪圖"],
    description:"以密集色點作畫，體會視覺混色的點描技法。", teachingApplication:"點描派與視覺混色教學。",
    learningObjectives:["認識點描派","理解視覺混色"], tags:["點描","混色","藝術"] });
  add({ id:"art-007", title:"對稱剪紙", titleEn:"Symmetric Paper-cut", type:"Canvas 案例",
    subjects:["藝術教育","數學"], topics:["對稱","剪紙","摺疊"], difficulty:"初階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["拖曳","Canvas 繪圖"],
    description:"在摺疊區塊繪圖，展開後成對稱剪紙圖案。", teachingApplication:"對稱與傳統剪紙藝術。",
    learningObjectives:["體驗對稱","剪紙創作"], tags:["對稱","剪紙","藝術"] });
  add({ id:"art-008", title:"和弦與音階", titleEn:"Chords & Scales", type:"自然科互動網站",
    subjects:["藝術教育","數學"], topics:["和弦","音階","樂理"], difficulty:"中階",
    technologies:["HTML","JavaScript","Web Audio API"], interactionTypes:["點擊","聲音互動"],
    description:"點擊琴鍵組成和弦、聽音階（需點擊觸發聲音）。", teachingApplication:"基礎樂理與和弦教學。",
    learningObjectives:["認識和弦","認識音階"], accessibilityNotes:"由使用者點擊觸發聲音。", tags:["和弦","音階","音樂","藝術"] });
  add({ id:"art-009", title:"透視法網格", titleEn:"Perspective Grid", type:"SVG 案例",
    subjects:["藝術教育","數學"], topics:["透視","消失點","繪畫"], difficulty:"中階",
    technologies:["HTML","JavaScript","SVG"], interactionTypes:["拖曳","即時模擬"],
    description:"拖動消失點，觀察一點透視網格的變化。", teachingApplication:"繪畫透視法教學。",
    learningObjectives:["認識透視法","理解消失點"], tags:["透視","消失點","藝術"] });
  add({ id:"art-010", title:"配色方案產生", titleEn:"Palette Generator", type:"JavaScript 特效",
    subjects:["藝術教育","資訊教育"], topics:["配色","色彩","方案"], difficulty:"初階", interactionTypes:["點擊"],
    description:"一鍵產生協調的配色方案並顯示色碼。", teachingApplication:"配色原理與設計應用。",
    learningObjectives:["認識配色","應用色彩方案"], tags:["配色","色彩","藝術"],
    htmlCode:'<div id="pal" style="display:flex;justify-content:center"></div><button id="gen">產生配色</button>',
    cssCode:'body{font-family:sans-serif;text-align:center}#pal div{width:60px;height:80px;display:flex;align-items:flex-end;justify-content:center;color:#fff;font-size:.7rem}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin-top:10px}',
    jsCode:'function gen(){var h=Math.floor(Math.random()*360);var pal=document.getElementById("pal");pal.innerHTML="";for(var i=0;i<5;i++){var hue=(h+i*30)%360,c="hsl("+hue+",65%,"+(40+i*8)+"%)";var d=document.createElement("div");d.style.background=c;d.textContent=hue+"°";pal.appendChild(d);}}document.getElementById("gen").onclick=gen;gen();' });

  /* ---------- 健康教育（5） ---------- */
  add({ id:"hlt-005", title:"洗手七步驟", titleEn:"Handwashing Steps", type:"教材版面與導覽",
    subjects:["健康教育"], topics:["衛生","洗手","步驟"], difficulty:"入門", interactionTypes:["點擊","流程動畫"],
    description:"逐步示範正確洗手的七個步驟。", teachingApplication:"衛生習慣與傳染病預防。",
    learningObjectives:["認識洗手步驟","養成衛生習慣"], tags:["洗手","衛生","健康"] });
  add({ id:"hlt-006", title:"食物金字塔", titleEn:"Food Pyramid", type:"自然科互動網站",
    subjects:["健康教育","自然科學"], topics:["營養","飲食","比例"], difficulty:"初階", interactionTypes:["拖曳","互動圖表"],
    description:"把食物放進金字塔各層，理解每日建議份量。", teachingApplication:"均衡飲食與營養教學。",
    learningObjectives:["認識食物金字塔","規劃份量"], tags:["營養","飲食","健康"] });
  add({ id:"hlt-007", title:"情緒辨識轉盤", titleEn:"Emotion Wheel", type:"自然科互動網站",
    subjects:["健康教育","藝術教育"], topics:["情緒","辨識","表達"], difficulty:"初階", interactionTypes:["點擊","即時模擬"],
    description:"轉動情緒轉盤認識並命名各種情緒。", teachingApplication:"情緒教育與自我覺察。",
    learningObjectives:["辨識情緒","表達感受"], tags:["情緒","辨識","健康"] });
  add({ id:"hlt-008", title:"睡眠時數建議", titleEn:"Sleep Needs", type:"Chart.js 與資料視覺化",
    subjects:["健康教育","數學"], topics:["睡眠","年齡","建議"], difficulty:"初階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["互動圖表"], description:"比較不同年齡層的建議睡眠時數。", teachingApplication:"睡眠健康與作息教學。",
    learningObjectives:["認識睡眠需求","重視作息"], tags:["睡眠","年齡","健康"] });
  add({ id:"hlt-009", title:"急救 CPR 節奏", titleEn:"CPR Rhythm", type:"自然科互動網站",
    subjects:["健康教育"], topics:["急救","CPR","節奏"], difficulty:"中階",
    technologies:["HTML","JavaScript","Web Audio API"], interactionTypes:["點擊","聲音互動"],
    description:"以每分鐘 100–120 下的節拍練習 CPR 壓胸節奏（需點擊啟動）。", teachingApplication:"基本急救 CPR 節奏教學。",
    learningObjectives:["認識 CPR 節奏","建立急救概念"], accessibilityNotes:"由使用者點擊觸發節拍聲。", tags:["急救","CPR","健康"] });

  /* ---------- 科展探究（6） ---------- */
  add({ id:"fair-004", title:"假設與變因規劃", titleEn:"Hypothesis Planner", type:"教材版面與導覽",
    subjects:["科展探究","自然科學"], topics:["假設","變因","探究"], difficulty:"中階", interactionTypes:["點擊"],
    description:"填寫假設、操縱/控制/應變變因，形成研究設計。", teachingApplication:"科展研究設計引導。",
    learningObjectives:["建立假設","規劃變因"], scienceFairApplication:"作為研究計畫的規劃工具。", tags:["假設","變因","科展"] });
  add({ id:"fair-005", title:"誤差與精確度", titleEn:"Error & Precision", type:"虛擬實驗",
    subjects:["科展探究","數學","自然科學"], topics:["誤差","精確度","測量"], difficulty:"進階",
    interactionTypes:["滑桿","互動圖表"], description:"多次測量觀察數據分散，理解誤差與精確度。",
    teachingApplication:"測量誤差與數據可信度教學。", learningObjectives:["認識誤差","理解精確度"],
    scienceFairApplication:"分析實驗數據的誤差與可信度。", tags:["誤差","精確度","科展"] });
  add({ id:"fair-006", title:"對照組設計", titleEn:"Control Group Design", type:"測驗與評量",
    subjects:["科展探究","自然科學"], topics:["對照組","實驗設計","公平測試"], difficulty:"中階", interactionTypes:["點擊","問答測驗"],
    description:"判斷實驗設計是否公平（只改變一個變因）。", teachingApplication:"公平測試與對照組概念。",
    learningObjectives:["認識對照組","設計公平測試"], scienceFairApplication:"檢核研究設計的嚴謹性。", tags:["對照組","實驗設計","科展"] });
  add({ id:"fair-007", title:"科展評分規準", titleEn:"Rubric Self-check", type:"測驗與評量",
    subjects:["科展探究"], topics:["評分規準","自評","發表"], difficulty:"初階", interactionTypes:["點擊","互動圖表"],
    description:"依評分規準自評研究，找出可改進處。", teachingApplication:"科展前的自評與精進。",
    learningObjectives:["認識評分規準","自我檢核"], scienceFairApplication:"作為研究自評工具。", tags:["評分規準","自評","科展"] });
  add({ id:"fair-008", title:"資料趨勢線擬合", titleEn:"Trend Line Fit", type:"Chart.js 與資料視覺化",
    subjects:["科展探究","數學"], topics:["趨勢線","相關","擬合"], difficulty:"進階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["互動圖表"], description:"為散布資料加上趨勢線，觀察相關性強弱。",
    teachingApplication:"資料分析與趨勢判讀。", learningObjectives:["認識趨勢線","判斷相關"],
    scienceFairApplication:"分析實驗兩變數的相關趨勢。", tags:["趨勢線","相關","科展"] });
  add({ id:"fair-009", title:"實驗紀錄表單", titleEn:"Lab Notebook Form", type:"教材版面與導覽",
    subjects:["科展探究","資訊教育"], topics:["紀錄","表單","數據"], difficulty:"初階",
    technologies:["HTML","CSS","JavaScript","LocalStorage"], interactionTypes:["鍵盤操作","點擊"],
    description:"結構化的實驗紀錄表單，資料存於瀏覽器。", teachingApplication:"養成完整實驗紀錄習慣。",
    learningObjectives:["結構化紀錄","保存數據"], scienceFairApplication:"作為實驗紀錄工具。", tags:["紀錄","表單","科展"] });

  /* ---------- AI/CS 再擴充（6） ---------- */
  add({ id:"ai-014", title:"聊天機器人（規則式）", titleEn:"Rule-based Chatbot", type:"自然科互動網站",
    subjects:["人工智慧","資訊教育","語文教育"], topics:["聊天機器人","規則","關鍵字"], difficulty:"中階",
    technologies:["HTML","CSS","JavaScript"], interactionTypes:["鍵盤操作","即時模擬"],
    description:"以關鍵字規則回應的簡易聊天機器人，理解與 LLM 的差異。", teachingApplication:"介紹規則式對話與其限制。",
    learningObjectives:["認識規則式對話","理解其限制"], tags:["聊天機器人","規則","AI"],
    htmlCode:'<div id="log" class="log"></div><input id="in" placeholder="輸入訊息…"><button id="s">送出</button>',
    cssCode:'body{font-family:sans-serif;max-width:300px;margin:auto}.log{height:160px;overflow:auto;border:1px solid #cbd5e1;border-radius:8px;padding:8px;margin-bottom:6px}.me{text-align:right;color:#2563eb}.bot{color:#0ea5a4}button{padding:6px 12px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var log=document.getElementById("log");function reply(t){if(/你好|哈囉/.test(t))return "你好！我是規則式機器人。";if(/名字/.test(t))return "我沒有名字，我只是照規則回覆。";if(/時間|幾點/.test(t))return "現在是 "+new Date().toLocaleTimeString();if(/再見|掰/.test(t))return "再見！";return "我只認得少數關鍵字，這就是規則式的限制。";}function send(){var v=document.getElementById("in").value.trim();if(!v)return;log.innerHTML+="<div class=me>"+v+"</div><div class=bot>"+reply(v)+"</div>";document.getElementById("in").value="";log.scrollTop=log.scrollHeight;}document.getElementById("s").onclick=send;document.getElementById("in").addEventListener("keydown",function(e){if(e.key==="Enter")send();});' });
  add({ id:"ai-015", title:"分類混淆矩陣", titleEn:"Confusion Matrix", type:"自然科互動網站",
    subjects:["人工智慧","數學","資訊教育"], topics:["評估","準確率","混淆矩陣"], difficulty:"專業",
    interactionTypes:["滑桿","互動圖表"], description:"調整預測結果，計算準確率、精確率與召回率。",
    teachingApplication:"介紹模型評估指標。", learningObjectives:["認識混淆矩陣","理解評估指標"], tags:["混淆矩陣","評估","AI"] });
  add({ id:"ai-016", title:"詞向量相似度", titleEn:"Word Similarity", type:"自然科互動網站",
    subjects:["人工智慧","語文教育","數學"], topics:["詞向量","相似度","語意"], difficulty:"專業",
    interactionTypes:["點擊","即時模擬"], description:"以簡化向量比較詞語語意相似度。", teachingApplication:"介紹詞向量與語意表示。",
    learningObjectives:["認識詞向量","理解語意相似"], tags:["詞向量","相似度","AI"] });
  add({ id:"cs-016", title:"雜湊與查表", titleEn:"Hashing", type:"自然科互動網站",
    subjects:["資訊教育","數學"], topics:["雜湊","查表","碰撞"], difficulty:"進階", interactionTypes:["點擊","即時模擬"],
    description:"輸入鍵值以雜湊函數放入桶中，示範查表與碰撞。", teachingApplication:"資料結構：雜湊表概念。",
    learningObjectives:["認識雜湊","理解碰撞"], tags:["雜湊","查表","資訊教育"] });
  add({ id:"cs-017", title:"堆疊解析括號", titleEn:"Bracket Matching", type:"自然科互動網站",
    subjects:["資訊教育","數學"], topics:["堆疊","括號","解析"], difficulty:"中階", interactionTypes:["鍵盤操作","即時模擬"],
    description:"以堆疊檢查括號是否正確配對。", teachingApplication:"堆疊應用與語法解析概念。",
    learningObjectives:["應用堆疊","理解配對檢查"], tags:["堆疊","括號","資訊教育"],
    htmlCode:'<input id="in" value="(a[b]{c})" style="width:80%"><button id="c">檢查</button><p id="r" aria-live="polite"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:16px}button{padding:6px 12px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'document.getElementById("c").onclick=function(){var s=document.getElementById("in").value,st=[],ok=true,m={")":"(","]":"[","}":"{"};for(var i=0;i<s.length;i++){var ch=s[i];if("([{".indexOf(ch)>-1)st.push(ch);else if(m[ch]){if(st.pop()!==m[ch]){ok=false;break;}}}if(st.length)ok=false;document.getElementById("r").textContent=ok?"括號配對正確 ✓":"括號不配對 ✗";};' });
  add({ id:"cs-018", title:"排程與甘特圖", titleEn:"Gantt Scheduling", type:"Chart.js 與資料視覺化",
    subjects:["資訊教育","數學","跨領域學習"], topics:["排程","甘特圖","專案"], difficulty:"中階",
    technologies:["HTML","JavaScript","Canvas"], interactionTypes:["互動圖表"],
    description:"以甘特圖規劃任務時程與先後順序。", teachingApplication:"專案管理與時間規劃教學。",
    learningObjectives:["認識甘特圖","規劃時程"], tags:["排程","甘特圖","資訊教育"] });

  /* ---------- 外部研究站（10） ---------- */
  site({ id:"site-029", title:"Wolfram Alpha", titleEn:"Wolfram Alpha", name:"Wolfram Alpha", org:"Wolfram Research（美國）", url:"https://www.wolframalpha.com/",
    subjects:["數學","自然科學"], topics:["計算","知識引擎","數學"], difficulty:"中階", interactionTypes:["鍵盤操作","即時模擬"],
    description:"輸入問題即可計算數學、單位換算、科學資料的知識引擎。", teachingApplication:"數學與科學計算、資料查詢。", techGuess:"符號計算後端推測為 Mathematica 引擎", tags:["計算","數學","外部資源"] });
  site({ id:"site-030", title:"Symbolab 數學解題", titleEn:"Symbolab", name:"Symbolab", org:"Symbolab（以色列）", url:"https://www.symbolab.com/",
    subjects:["數學"], topics:["解題","步驟","代數"], difficulty:"中階", description:"逐步顯示方程式、微積分等解題步驟。", teachingApplication:"數學解題步驟教學與自學檢核。", techGuess:"符號運算推測使用 JavaScript/後端", chinese:"支援多語", tags:["解題","數學","外部資源"] });
  site({ id:"site-031", title:"Explorable Explanations", titleEn:"Explorable Explanations", name:"Explorable Explanations", org:"社群策展（跨國）", url:"https://explorabl.es/",
    subjects:["數學","自然科學","社會領域","資訊教育"], topics:["可探索","互動文章","模型"], difficulty:"中階", interactionTypes:["拖曳","即時模擬"],
    description:"收錄大量「可玩的互動文章」，以操作理解概念。", teachingApplication:"作為互動教材設計的靈感與研究對象。", techGuess:"互動文章推測使用 JavaScript/Canvas", tags:["可探索","互動","外部資源"] });
  site({ id:"site-032", title:"Bartosz Ciechanowski 互動文章", titleEn:"ciechanow.ski", name:"Bartosz Ciechanowski", org:"個人（波蘭）", url:"https://ciechanow.ski/",
    subjects:["自然科學","物理","資訊教育"], topics:["互動解說","工程","3D"], difficulty:"進階", interactionTypes:["拖曳","3D 操作"],
    description:"以高品質互動圖解說明時鐘、GPS、光學等原理，是互動教材的典範。", teachingApplication:"作為高品質互動教材設計的研究對象。", techGuess:"互動與 3D 推測使用 WebGL/Canvas", tags:["互動解說","工程","外部資源"] });
  site({ id:"site-033", title:"Setosa 視覺化解說", titleEn:"Setosa.io", name:"Setosa", org:"Setosa（個人專案）", url:"https://setosa.io/ev/", subjects:["數學","資訊教育","自然科學"], topics:["視覺化","統計","解說"], difficulty:"中階", interactionTypes:["拖曳","即時模擬"],
    description:"以互動視覺化解說條件機率、主成分分析等概念。", teachingApplication:"統計與數學概念的視覺化教學。", techGuess:"互動視覺化推測使用 JavaScript/D3", tags:["視覺化","統計","外部資源"] });
  site({ id:"site-034", title:"Falstad 電路模擬", titleEn:"Falstad Circuit Simulator", name:"Falstad", org:"Paul Falstad（個人）", url:"https://www.falstad.com/circuit/", subjects:["自然科學","物理","資訊教育"], topics:["電路","模擬","電子"], difficulty:"進階", interactionTypes:["拖曳","即時模擬"],
    description:"線上互動電路模擬器，可搭建並觀察電流電壓。", teachingApplication:"電路與電子學的虛擬實驗。", scienceFairApplication:"先以模擬設計電路再實作。", techGuess:"電路模擬推測使用 JavaScript/Canvas", tags:["電路","模擬","外部資源"] });
  site({ id:"site-035", title:"Musenet/AI Duet 音樂 AI", titleEn:"AI Duet", name:"AI Duet", org:"Google Magenta（美國）", url:"https://experiments.withgoogle.com/ai-duet", subjects:["人工智慧","藝術教育"], topics:["音樂","AI","生成"], difficulty:"初階", interactionTypes:["點擊","聲音互動"],
    description:"你彈一段旋律，AI 即興接續，體驗音樂生成。", teachingApplication:"AI 與音樂創作的跨域體驗。", techGuess:"音樂生成推測使用 TensorFlow.js", tags:["音樂","AI","外部資源"] });
  site({ id:"site-036", title:"Curious Minds / Legends of Learning", titleEn:"Science Games", name:"Legends of Learning", org:"Legends of Learning（美國）", url:"https://www.legendsoflearning.com/", subjects:["自然科學","數學"], topics:["遊戲化","課程","評量"], difficulty:"初階", interactionTypes:["點擊","遊戲控制"],
    description:"以遊戲化任務對應課綱的科學與數學學習平台。", teachingApplication:"遊戲化課堂與形成性評量。", techGuess:"遊戲推測使用 HTML5/JavaScript", account:"教師使用需帳號", tags:["遊戲化","課程","外部資源"] });
  site({ id:"site-037", title:"Mathigon 互動教科書", titleEn:"Mathigon", name:"Mathigon", org:"Mathigon / Amplify（英國）", url:"https://mathigon.org/", subjects:["數學"], topics:["互動教科書","幾何","探究"], difficulty:"中階", interactionTypes:["拖曳","即時模擬"],
    description:"高互動的數學教科書，內容隨操作逐步展開。", teachingApplication:"探究式數學教學的優質資源。", techGuess:"互動內容推測使用 JavaScript", chinese:"部分支援多語", tags:["互動教科書","數學","外部資源"] });
  site({ id:"site-038", title:"Seterra 地理測驗", titleEn:"Seterra Geography", name:"Seterra", org:"GeoGuessr（瑞典）", url:"https://www.geoguessr.com/seterra", subjects:["社會領域"], topics:["地理","測驗","地圖"], difficulty:"初階", interactionTypes:["點擊","問答測驗"],
    description:"以地圖點選測驗練習國家、首都與地形位置。", teachingApplication:"地理位置的記憶與測驗。", techGuess:"地圖測驗推測使用 JavaScript/SVG", chinese:"支援多語", tags:["地理","測驗","外部資源"] });
})();
