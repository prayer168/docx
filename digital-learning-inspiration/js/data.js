/* ============================================================
   data.js — 案例資料庫（主要資料來源，確保 file:// 可直接使用）
   資料格式統一；搜尋與篩選皆依此陣列動態產生。
   如需擴充，於對應分組陣列中新增物件即可（欄位說明見 README）。
   ============================================================ */
(function () {
  "use strict";

  /* ---------- A. JavaScript 特效（15） ---------- */
  var groupA = [
    {
      id: "js-001",
      title: "可拖曳的光線折射模擬",
      titleEn: "Draggable Light Refraction Simulation",
      type: "JavaScript 特效",
      subjects: ["自然科學", "物理"],
      topics: ["光的折射", "入射角", "折射角"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階",
      technologies: ["HTML", "CSS", "JavaScript", "SVG"],
      interactionTypes: ["拖曳", "滑桿", "即時模擬"],
      libraries: [],
      requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: true, hasFullCode: true,
      description: "拖曳滑桿改變入射角，即時觀察光線在兩種介質交界處的折射情形與折射角變化。",
      teachingApplication: "可用於光的折射、介質差異與入射角探究，讓抽象的司乃耳定律變得可視化。",
      learningObjectives: ["認識入射光線與折射光線", "比較不同介質中的折射現象", "觀察入射角與折射角的關係"],
      teacherGuide: "教師可先請學生預測折射方向，再操作滑桿驗證預測。",
      studentTask: "記錄不同入射角下的折射角，整理成表格並找出規律。",
      scienceFairApplication: "可延伸探究不同液體（水、油、糖水）的折射率差異。",
      buildTime: "1～2 小時",
      techAnalysis: "以 SVG 繪製介質分隔線與光線，透過司乃耳定律計算折射角，滑桿事件即時更新 SVG 線段座標。",
      performanceNotes: "避免在每次輸入事件中重建整個 SVG，只更新光線線段的端點座標即可。",
      mobileNotes: "滑桿觸控範圍需足夠大，數值同步以文字顯示。",
      accessibilityNotes: "提供滑桿鍵盤操作與數值文字，色彩之外另以角度數字輔助說明。",
      modifyTips: ["修改 n1、n2 變數改變兩種介質折射率", "調整 SVG viewBox 改變畫面比例", "更換 stroke 顏色代表不同光線"],
      thumbnail: "",
      referenceUrl: "", license: "本站示範程式碼",
      tags: ["折射", "SVG", "拖曳", "物理", "互動模擬"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="lab">\n' +
'  <svg viewBox="0 0 300 200" id="scene" width="100%">\n' +
'    <rect x="0" y="100" width="300" height="100" fill="#bfe3ff"/>\n' +
'    <line x1="0" y1="100" x2="300" y2="100" stroke="#0b5" stroke-dasharray="4"/>\n' +
'    <line id="incident" stroke="#f80" stroke-width="3"/>\n' +
'    <line id="refract" stroke="#08f" stroke-width="3"/>\n' +
'  </svg>\n' +
'  <label>入射角：<input id="angle" type="range" min="0" max="80" value="40"> <span id="val">40</span>°</label>\n' +
'</div>',
      cssCode:
'.lab{max-width:340px;margin:auto;font-family:sans-serif;text-align:center}\n' +
'label{display:block;margin-top:10px}\n' +
'input[type=range]{width:60%}',
      jsCode:
'// 司乃耳定律：n1 sinθ1 = n2 sinθ2\n' +
'var n1=1.0, n2=1.33, cx=150, cy=100, len=100;\n' +
'var angle=document.getElementById("angle");\n' +
'var val=document.getElementById("val");\n' +
'var inc=document.getElementById("incident");\n' +
'var ref=document.getElementById("refract");\n' +
'function update(){\n' +
'  var a1=angle.value*Math.PI/180;\n' +
'  val.textContent=angle.value;\n' +
'  // 入射光線（從左上到交界點）\n' +
'  inc.setAttribute("x1", cx-Math.sin(a1)*len);\n' +
'  inc.setAttribute("y1", cy-Math.cos(a1)*len);\n' +
'  inc.setAttribute("x2", cx); inc.setAttribute("y2", cy);\n' +
'  // 折射角\n' +
'  var s2=n1*Math.sin(a1)/n2; var a2=Math.asin(Math.min(1,s2));\n' +
'  ref.setAttribute("x1", cx); ref.setAttribute("y1", cy);\n' +
'  ref.setAttribute("x2", cx+Math.sin(a2)*len);\n' +
'  ref.setAttribute("y2", cy+Math.cos(a2)*len);\n' +
'}\n' +
'angle.addEventListener("input", update); update();'
    },
    {
      id: "js-002",
      title: "即時滑桿控制數值",
      titleEn: "Live Slider Value Control",
      type: "JavaScript 特效",
      subjects: ["數學", "自然科學"],
      topics: ["變數", "即時回饋", "比例"],
      gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "入門",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["滑桿", "即時模擬"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "拖動滑桿即時改變圓形大小與數值，示範最基本的即時互動回饋。",
      teachingApplication: "作為互動教材的入門範例，說明變數如何連動畫面呈現。",
      learningObjectives: ["理解滑桿輸入與畫面連動", "觀察數值與大小的比例關係"],
      teacherGuide: "適合帶學生第一次認識互動元件，請學生猜測數值再驗證。",
      studentTask: "找出讓圓形剛好填滿框線的數值。",
      scienceFairApplication: "可作為其他模擬的控制介面基礎。",
      buildTime: "30 分鐘",
      techAnalysis: "監聽 input 事件，更新 DOM 樣式與文字內容。",
      performanceNotes: "input 事件頻繁觸發，僅更新必要樣式即可。",
      mobileNotes: "滑桿寬度足夠，觸控友善。",
      accessibilityNotes: "數值以文字同步顯示，可鍵盤操作。",
      modifyTips: ["修改 min/max 改變範圍", "改變 size 對應的樣式屬性", "加上單位文字"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["滑桿", "入門", "即時回饋"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="box"><div id="ball"></div></div>\n' +
'<input id="s" type="range" min="10" max="150" value="60">\n' +
'<p>直徑：<b id="out">60</b> px</p>',
      cssCode:
'body{font-family:sans-serif;text-align:center}\n' +
'.box{width:170px;height:170px;border:2px dashed #09c;margin:20px auto;display:flex;align-items:center;justify-content:center}\n' +
'#ball{width:60px;height:60px;border-radius:50%;background:#09c;transition:.05s}\n' +
'input{width:70%}',
      jsCode:
'var s=document.getElementById("s");\n' +
'var ball=document.getElementById("ball");\n' +
'var out=document.getElementById("out");\n' +
's.addEventListener("input",function(){\n' +
'  ball.style.width=s.value+"px";\n' +
'  ball.style.height=s.value+"px";\n' +
'  out.textContent=s.value;\n' +
'});'
    },
    {
      id: "js-003",
      title: "圖片前後比較滑桿",
      titleEn: "Before/After Image Comparison",
      type: "JavaScript 特效",
      subjects: ["自然科學", "地球科學", "環境教育"],
      topics: ["環境變遷", "前後對照"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["拖曳", "滑桿", "圖片比較"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: true, hasFullCode: true,
      description: "拖曳中間分隔線比較兩張圖片，常用於呈現環境變遷、實驗前後或季節對照。",
      teachingApplication: "呈現冰川消融、都市擴張、實驗前後等對照，強化視覺衝擊。",
      learningObjectives: ["觀察前後變化差異", "描述環境變遷現象"],
      teacherGuide: "先只顯示其中一張，請學生描述，再拉開比較。",
      studentTask: "用文字描述兩張圖片的差異並推測原因。",
      scienceFairApplication: "可比較不同時間拍攝的觀察照片。",
      buildTime: "1 小時",
      techAnalysis: "以絕對定位疊放兩張圖，滑桿改變上層圖的 clip-path 寬度。",
      performanceNotes: "使用 clip-path 而非改變圖片尺寸，避免重排。",
      mobileNotes: "以觸控拖曳分隔線，範圍需足夠。",
      accessibilityNotes: "提供滑桿鍵盤操作，圖片皆有 alt 說明。",
      modifyTips: ["替換兩張圖片的 src", "修改分隔線顏色", "調整初始比較位置"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["圖片比較", "環境", "拖曳"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="cmp">\n' +
'  <div class="after" aria-label="變化後">變化後 🌱</div>\n' +
'  <div class="before" id="before" aria-label="變化前">變化前 🏜️</div>\n' +
'  <input id="r" type="range" min="0" max="100" value="50" aria-label="比較位置">\n' +
'</div>',
      cssCode:
'.cmp{position:relative;width:300px;height:180px;margin:auto;font-family:sans-serif}\n' +
'.after,.before{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:#fff}\n' +
'.after{background:#2a9d5c}.before{background:#c8863d}\n' +
'#r{position:absolute;bottom:-30px;width:100%}',
      jsCode:
'var r=document.getElementById("r");\n' +
'var before=document.getElementById("before");\n' +
'function upd(){before.style.clipPath="inset(0 "+(100-r.value)+"% 0 0)";}\n' +
'r.addEventListener("input",upd); upd();'
    },
    {
      id: "js-004",
      title: "點擊顯示知識解說卡",
      titleEn: "Click-to-Reveal Info Cards",
      type: "JavaScript 特效",
      subjects: ["自然科學", "生物", "跨領域學習"],
      topics: ["互動說明", "標註"],
      gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "入門",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "點擊圖上的標記點，展開對應的知識解說，適合構造圖與地圖標註。",
      teachingApplication: "用於植物構造、人體器官、地圖地標等標註式教材。",
      learningObjectives: ["認識各部位名稱與功能", "主動探索式學習"],
      teacherGuide: "請學生先點擊探索，再進行小測驗。",
      studentTask: "點開所有標記並用自己的話重述功能。",
      scienceFairApplication: "可做為觀察報告的互動導覽。",
      buildTime: "45 分鐘",
      techAnalysis: "以事件代理監聽標記點點擊，切換對應說明面板的顯示。",
      performanceNotes: "使用事件代理避免為每個標記綁定事件。",
      mobileNotes: "標記點觸控範圍至少 44px。",
      accessibilityNotes: "標記為 button，具 aria-expanded 狀態。",
      modifyTips: ["新增 data-info 內容", "調整標記位置百分比", "更換背景圖"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["點擊", "標註", "解說"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="stage">\n' +
'  <button class="dot" style="left:25%;top:40%" data-info="根：吸收水分與養分">1</button>\n' +
'  <button class="dot" style="left:55%;top:25%" data-info="葉：進行光合作用">2</button>\n' +
'  <button class="dot" style="left:70%;top:60%" data-info="莖：支撐並輸送養分">3</button>\n' +
'</div>\n' +
'<p id="info">點擊圖上的數字了解各部位功能</p>',
      cssCode:
'.stage{position:relative;width:280px;height:180px;background:#eaf7e1;border-radius:12px;margin:auto}\n' +
'.dot{position:absolute;width:34px;height:34px;border-radius:50%;border:none;background:#2a9d5c;color:#fff;font-weight:bold}\n' +
'#info{text-align:center;font-family:sans-serif;min-height:2em}',
      jsCode:
'document.querySelector(".stage").addEventListener("click",function(e){\n' +
'  var dot=e.target.closest(".dot"); if(!dot) return;\n' +
'  document.getElementById("info").textContent=dot.dataset.info;\n' +
'});'
    },
    {
      id: "js-005",
      title: "翻卡記憶學習卡",
      titleEn: "Flip Learning Cards",
      type: "JavaScript 特效",
      subjects: ["語文教育", "自然科學", "跨領域學習"],
      topics: ["單字卡", "問答"],
      gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "初階",
      technologies: ["HTML", "CSS", "JavaScript", "CSS 3D Transform"],
      interactionTypes: ["點擊", "卡片翻轉"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "點擊卡片翻面顯示答案，適合單字、名詞解釋與問答複習。",
      teachingApplication: "製作字詞卡、公式卡、名詞解釋卡供學生自主複習。",
      learningObjectives: ["記憶與檢索概念", "自我檢測"],
      teacherGuide: "先請學生看正面猜答案再翻面確認。",
      studentTask: "翻完所有卡片並記錄答對數量。",
      scienceFairApplication: "整理研究名詞卡。",
      buildTime: "40 分鐘",
      techAnalysis: "以 CSS 3D transform 旋轉卡片，JS 切換 class 控制翻面。",
      performanceNotes: "transform 由 GPU 合成，效能佳。",
      mobileNotes: "卡片點擊區大，觸控友善。",
      accessibilityNotes: "卡片為 button，翻面狀態以 aria-pressed 表示。",
      modifyTips: ["修改正反面文字", "調整卡片顏色", "改變翻轉軸（Y 改 X）"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["翻卡", "記憶", "3D"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<button class="card" aria-pressed="false">\n' +
'  <span class="face front">光合作用</span>\n' +
'  <span class="face back">植物利用光把二氧化碳和水轉為養分</span>\n' +
'</button>',
      cssCode:
'.card{width:220px;height:140px;border:none;background:none;perspective:600px;cursor:pointer}\n' +
'.face{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;border-radius:12px;backface-visibility:hidden;transition:transform .5s;font-family:sans-serif}\n' +
'.front{background:#2563eb;color:#fff;font-size:1.2rem}\n' +
'.back{background:#0ea5a4;color:#fff;transform:rotateY(180deg)}\n' +
'.card[aria-pressed=true] .front{transform:rotateY(180deg)}\n' +
'.card[aria-pressed=true] .back{transform:rotateY(360deg)}',
      jsCode:
'var card=document.querySelector(".card");\n' +
'card.addEventListener("click",function(){\n' +
'  var f=card.getAttribute("aria-pressed")==="true";\n' +
'  card.setAttribute("aria-pressed", f?"false":"true");\n' +
'});'
    },
    {
      id: "js-006",
      title: "步驟式流程導覽",
      titleEn: "Step-by-Step Walkthrough",
      type: "JavaScript 特效",
      subjects: ["自然科學", "資訊教育", "跨領域學習"],
      topics: ["流程", "實驗步驟"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "流程動畫"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "以上一步／下一步逐步呈現實驗或操作流程，並顯示進度。",
      teachingApplication: "拆解實驗步驟、程式流程或安全守則，降低一次呈現的認知負荷。",
      learningObjectives: ["依序理解流程", "掌握步驟先後"],
      teacherGuide: "配合實作，每完成一步再前進。",
      studentTask: "照著步驟完成操作並勾選。",
      scienceFairApplication: "呈現研究方法流程。",
      buildTime: "45 分鐘",
      techAnalysis: "以陣列儲存步驟，索引切換顯示內容與進度條寬度。",
      performanceNotes: "僅更新目前步驟文字，避免重建整個清單。",
      mobileNotes: "按鈕大，適合觸控。",
      accessibilityNotes: "進度以文字與 aria-live 公告。",
      modifyTips: ["增修 steps 陣列內容", "調整進度條顏色", "加入圖片"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["流程", "步驟", "進度"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="steps">\n' +
'  <div class="bar"><i id="prog"></i></div>\n' +
'  <p id="txt" aria-live="polite"></p>\n' +
'  <button id="prev">上一步</button> <button id="next">下一步</button>\n' +
'</div>',
      cssCode:
'.steps{max-width:320px;margin:auto;font-family:sans-serif;text-align:center}\n' +
'.bar{height:8px;background:#e2e8f0;border-radius:6px;overflow:hidden;margin-bottom:12px}\n' +
'#prog{display:block;height:100%;width:0;background:#2563eb;transition:.3s}\n' +
'button{padding:8px 14px;margin:4px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
      jsCode:
'var steps=["準備材料","組裝器材","進行觀察","記錄數據","整理結論"];\n' +
'var i=0, txt=document.getElementById("txt"), prog=document.getElementById("prog");\n' +
'function show(){txt.textContent=(i+1)+"/"+steps.length+"："+steps[i];prog.style.width=((i+1)/steps.length*100)+"%";}\n' +
'document.getElementById("next").onclick=function(){if(i<steps.length-1){i++;show();}};\n' +
'document.getElementById("prev").onclick=function(){if(i>0){i--;show();}};\n' +
'show();'
    },
    {
      id: "js-007",
      title: "互動時間軸",
      titleEn: "Interactive Timeline",
      type: "JavaScript 特效",
      subjects: ["社會領域", "自然科學", "跨領域學習"],
      topics: ["時間軸", "歷史事件", "演化"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "時間軸"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "點擊時間節點顯示對應事件說明，適合歷史、科學史與生命演化。",
      teachingApplication: "呈現科學發現史、地質年代或生物演化順序。",
      learningObjectives: ["建立時間先後概念", "連結事件與影響"],
      teacherGuide: "請學生依時間排序事件卡再對照。",
      studentTask: "挑選一個節點深入查找並報告。",
      scienceFairApplication: "整理研究主題的發展歷程。",
      buildTime: "1 小時",
      techAnalysis: "以資料陣列動態產生節點，點擊切換 active 並顯示詳情。",
      performanceNotes: "事件代理處理節點點擊。",
      mobileNotes: "時間軸可水平捲動，不撐破版面。",
      accessibilityNotes: "節點為 button，可鍵盤左右切換。",
      modifyTips: ["修改 events 資料", "改為垂直時間軸", "加入年份標籤"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["時間軸", "事件", "歷史"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="tl" id="tl"></div>\n' +
'<p id="detail" aria-live="polite">點擊節點查看事件</p>',
      cssCode:
'.tl{display:flex;gap:8px;overflow-x:auto;padding:20px;justify-content:center}\n' +
'.node{flex:0 0 auto;width:40px;height:40px;border-radius:50%;border:none;background:#94a3b8;color:#fff;font-weight:bold}\n' +
'.node.active{background:#2563eb;transform:scale(1.15)}\n' +
'#detail{text-align:center;font-family:sans-serif}',
      jsCode:
'var events=[["1687","牛頓運動定律"],["1859","達爾文演化論"],["1905","愛因斯坦相對論"],["1953","DNA 雙螺旋"]];\n' +
'var tl=document.getElementById("tl"), d=document.getElementById("detail");\n' +
'events.forEach(function(e,i){var b=document.createElement("button");b.className="node";b.textContent=e[0].slice(2);b.onclick=function(){document.querySelectorAll(".node").forEach(function(n){n.classList.remove("active")});b.classList.add("active");d.textContent=e[0]+"："+e[1];};tl.appendChild(b);});'
    },
    {
      id: "js-008",
      title: "簡易問答測驗",
      titleEn: "Simple Quiz",
      type: "JavaScript 特效",
      subjects: ["自然科學", "數學", "跨領域學習"],
      topics: ["測驗", "即時評分"],
      gradeLevels: ["國小中年級", "國小高年級", "國中"],
      difficulty: "初階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "問答測驗"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: true, hasFullCode: true,
      description: "單選題即時判斷對錯並計分，適合課堂快速形成性評量。",
      teachingApplication: "課後小測、隨堂檢測，立即給予回饋。",
      learningObjectives: ["檢核概念理解", "即時修正迷思"],
      teacherGuide: "作答後討論錯誤選項的迷思概念。",
      studentTask: "完成測驗並訂正錯題。",
      scienceFairApplication: "設計問卷了解同學先備知識。",
      buildTime: "1 小時",
      techAnalysis: "題目以陣列儲存，點選選項比對正解並累計分數。",
      performanceNotes: "一次只渲染一題，降低 DOM 數量。",
      mobileNotes: "選項按鈕大，易於點選。",
      accessibilityNotes: "選項為 button，結果以 aria-live 公告。",
      modifyTips: ["修改 quiz 題庫", "增加題數", "加入解析文字"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["測驗", "評量", "計分"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<div class="quiz">\n' +
'  <p id="q"></p>\n' +
'  <div id="opts"></div>\n' +
'  <p id="score" aria-live="polite"></p>\n' +
'</div>',
      cssCode:
'.quiz{max-width:340px;margin:auto;font-family:sans-serif;text-align:center}\n' +
'#opts button{display:block;width:100%;margin:6px 0;padding:10px;border:1px solid #cbd5e1;border-radius:8px;background:#fff}\n' +
'#opts button.ok{background:#10b981;color:#fff}\n' +
'#opts button.no{background:#ef4444;color:#fff}',
      jsCode:
'var quiz=[{q:"水的沸點是幾度C？",o:["50","100","0"],a:1},{q:"植物行光合作用需要？",o:["月光","陽光","燈光皆可"],a:1}];\n' +
'var i=0,score=0;\n' +
'var q=document.getElementById("q"),opts=document.getElementById("opts"),sc=document.getElementById("score");\n' +
'function show(){var item=quiz[i];q.textContent=(i+1)+". "+item.q;opts.innerHTML="";item.o.forEach(function(t,k){var b=document.createElement("button");b.textContent=t;b.onclick=function(){if(k===item.a){b.className="ok";score++;}else{b.className="no";}setTimeout(next,700);};opts.appendChild(b);});}\n' +
'function next(){i++;if(i<quiz.length){show();}else{q.textContent="完成！";opts.innerHTML="";sc.textContent="得分："+score+"/"+quiz.length;}}\n' +
'show();'
    },
    {
      id: "js-009",
      title: "配對連連看遊戲",
      titleEn: "Matching Game",
      type: "JavaScript 特效",
      subjects: ["自然科學", "語文教育", "跨領域學習"],
      topics: ["配對", "遊戲化"],
      gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "中階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "遊戲控制"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "點選兩張卡片配對，答對消除，適合名詞與定義、圖與文的配對。",
      teachingApplication: "字詞與解釋、生物與棲地、符號與意義的配對複習。",
      learningObjectives: ["建立概念連結", "強化記憶"],
      teacherGuide: "分組競賽計時完成。",
      studentTask: "完成所有配對並記錄用時。",
      scienceFairApplication: "設計自然名詞配對卡。",
      buildTime: "1.5 小時",
      techAnalysis: "以配對 id 標記卡片，點選兩張比對是否相符。",
      performanceNotes: "以事件代理處理點擊。",
      mobileNotes: "卡片大小適中，觸控友善。",
      accessibilityNotes: "卡片為 button，配對成功以文字回饋。",
      modifyTips: ["修改 pairs 資料", "增加卡片數", "加入計時"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["配對", "遊戲", "記憶"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div class="grid" id="grid"></div><p id="msg" aria-live="polite"></p>',
      cssCode:
'.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:320px;margin:auto}\n' +
'.tile{aspect-ratio:1;border:none;border-radius:8px;background:#2563eb;color:#fff;font-size:1.2rem}\n' +
'.tile.done{background:#10b981;visibility:hidden}\n' +
'#msg{text-align:center;font-family:sans-serif}',
      jsCode:
'var pairs=["🌞","🌞","💧","💧","🍃","🍃","🔥","🔥"];\n' +
'pairs.sort(function(){return Math.random()-.5;});\n' +
'var grid=document.getElementById("grid"),msg=document.getElementById("msg");\n' +
'var first=null,lock=false,done=0;\n' +
'pairs.forEach(function(p,i){var b=document.createElement("button");b.className="tile";b.dataset.v=p;b.dataset.i=i;b.textContent="?";grid.appendChild(b);});\n' +
'grid.addEventListener("click",function(e){var t=e.target.closest(".tile");if(!t||lock||t.classList.contains("done"))return;t.textContent=t.dataset.v;if(!first){first=t;return;}if(first.dataset.v===t.dataset.v&&first!==t){first.classList.add("done");t.classList.add("done");done+=2;if(done===pairs.length)msg.textContent="全部配對完成！";first=null;}else{lock=true;setTimeout(function(){first.textContent="?";t.textContent="?";first=null;lock=false;},600);}});'
    },
    {
      id: "js-010",
      title: "拖曳排序練習",
      titleEn: "Drag-and-Drop Ordering",
      type: "JavaScript 特效",
      subjects: ["自然科學", "數學", "跨領域學習"],
      topics: ["排序", "順序概念"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["拖曳", "觸控"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: false, offlineFriendly: true, accessible: false,
      featured: false, hasFullCode: true,
      description: "拖曳項目重新排序，適合排列流程、大小順序或事件先後。",
      teachingApplication: "排列生命週期、事件先後、數值大小順序。",
      learningObjectives: ["建立順序概念", "邏輯排序"],
      teacherGuide: "先討論正確順序再讓學生排列驗證。",
      studentTask: "排出正確順序並說明理由。",
      scienceFairApplication: "排列研究步驟。",
      buildTime: "1.5 小時",
      techAnalysis: "使用 HTML5 Drag and Drop API，dragover 時插入拖曳項目。",
      performanceNotes: "拖曳期間僅移動單一節點。",
      mobileNotes: "原生拖曳在部分行動瀏覽器支援有限，建議提供備援。",
      accessibilityNotes: "建議另提供上下移動按鈕供鍵盤使用者操作。",
      modifyTips: ["修改項目文字", "加入正確順序檢查", "加上按鈕備援"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["拖曳", "排序", "DnD"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<ul id="list">\n' +
'  <li draggable="true">種子發芽</li>\n' +
'  <li draggable="true">開花</li>\n' +
'  <li draggable="true">長出葉子</li>\n' +
'  <li draggable="true">結果</li>\n' +
'</ul>',
      cssCode:
'#list{list-style:none;max-width:280px;margin:auto;padding:0;font-family:sans-serif}\n' +
'li{background:#2563eb;color:#fff;padding:12px;margin:6px 0;border-radius:8px;cursor:grab}\n' +
'li.drag{opacity:.4}',
      jsCode:
'var list=document.getElementById("list"),dragged=null;\n' +
'list.addEventListener("dragstart",function(e){dragged=e.target;e.target.classList.add("drag");});\n' +
'list.addEventListener("dragend",function(e){e.target.classList.remove("drag");});\n' +
'list.addEventListener("dragover",function(e){e.preventDefault();var t=e.target;if(t.tagName==="LI"&&t!==dragged){var r=t.getBoundingClientRect();var after=e.clientY>r.top+r.height/2;list.insertBefore(dragged,after?t.nextSibling:t);}});'
    },
    {
      id: "js-011",
      title: "Canvas 互動粒子",
      titleEn: "Canvas Interactive Particles",
      type: "JavaScript 特效",
      subjects: ["自然科學", "物理", "資訊教育"],
      topics: ["粒子", "隨機運動"],
      gradeLevels: ["國中", "高中"],
      difficulty: "中階",
      technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["滑鼠移入", "Canvas 繪圖"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "滑鼠靠近時粒子閃避，示範 Canvas 動畫與滑鼠互動。",
      teachingApplication: "說明向量、速度與作用力概念，或作為科技感背景。",
      learningObjectives: ["理解座標與速度", "認識動畫迴圈"],
      teacherGuide: "討論粒子如何依滑鼠位置改變方向。",
      studentTask: "調整參數觀察運動變化。",
      scienceFairApplication: "延伸為分子擴散模擬。",
      buildTime: "1.5 小時",
      techAnalysis: "requestAnimationFrame 迴圈更新粒子座標並重繪。",
      performanceNotes: "控制粒子數量，離開頁籤時可暫停動畫。",
      mobileNotes: "以觸控座標取代滑鼠。",
      accessibilityNotes: "純裝飾性動畫，提供減少動態版本。",
      modifyTips: ["調整粒子數 N", "修改顏色", "改變閃避半徑"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "粒子", "滑鼠"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="c" width="320" height="200"></canvas>',
      cssCode: 'canvas{background:#0b1020;border-radius:12px;display:block;margin:auto;touch-action:none}',
      jsCode:
'var c=document.getElementById("c"),x=c.getContext("2d"),N=40,mx=-99,my=-99,ps=[];\n' +
'for(var i=0;i<N;i++)ps.push({x:Math.random()*320,y:Math.random()*200,vx:(Math.random()-.5),vy:(Math.random()-.5)});\n' +
'c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});\n' +
'c.addEventListener("pointerleave",function(){mx=-99;my=-99;});\n' +
'function loop(){x.clearRect(0,0,320,200);x.fillStyle="#0ea5a4";ps.forEach(function(p){var dx=p.x-mx,dy=p.y-my,d=Math.hypot(dx,dy);if(d<50){p.vx+=dx/d*.3;p.vy+=dy/d*.3;}p.x+=p.vx;p.y+=p.vy;p.vx*=.98;p.vy*=.98;if(p.x<0||p.x>320)p.vx*=-1;if(p.y<0||p.y>200)p.vy*=-1;x.beginPath();x.arc(p.x,p.y,3,0,7);x.fill();});requestAnimationFrame(loop);}\n' +
'loop();'
    },
    {
      id: "js-012",
      title: "滑鼠軌跡繪圖",
      titleEn: "Mouse Trail Drawing",
      type: "JavaScript 特效",
      subjects: ["藝術教育", "資訊教育", "數學"],
      topics: ["座標", "繪圖"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階",
      technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["拖曳", "Canvas 繪圖", "觸控"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: false,
      featured: false, hasFullCode: true,
      description: "按住滑鼠或手指在畫布上自由繪圖，示範座標與畫筆軌跡。",
      teachingApplication: "認識座標系統、對稱繪圖或創意美術。",
      learningObjectives: ["理解畫布座標", "連續繪圖概念"],
      teacherGuide: "請學生畫出對稱圖形。",
      studentTask: "用軌跡畫出指定圖案。",
      scienceFairApplication: "記錄運動軌跡。",
      buildTime: "45 分鐘",
      techAnalysis: "pointer 事件取得座標，lineTo 連線繪製。",
      performanceNotes: "繪圖僅在按下時進行。",
      mobileNotes: "使用 pointer 事件同時支援滑鼠與觸控。",
      accessibilityNotes: "純創作用途，另提供清除按鈕。",
      modifyTips: ["修改筆刷顏色與粗細", "加入橡皮擦", "加入對稱模式"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "繪圖", "軌跡"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="p" width="320" height="200"></canvas><br><button id="clr">清除</button>',
      cssCode: 'canvas{background:#fff;border:2px solid #2563eb;border-radius:8px;display:block;margin:auto;touch-action:none}button{display:block;margin:8px auto;padding:8px 14px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
      jsCode:
'var c=document.getElementById("p"),x=c.getContext("2d"),down=false;\n' +
'x.strokeStyle="#2563eb";x.lineWidth=3;x.lineCap="round";\n' +
'function pos(e){var r=c.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top];}\n' +
'c.addEventListener("pointerdown",function(e){down=true;var p=pos(e);x.beginPath();x.moveTo(p[0],p[1]);});\n' +
'c.addEventListener("pointermove",function(e){if(!down)return;var p=pos(e);x.lineTo(p[0],p[1]);x.stroke();});\n' +
'window.addEventListener("pointerup",function(){down=false;});\n' +
'document.getElementById("clr").onclick=function(){x.clearRect(0,0,320,200);};'
    },
    {
      id: "js-013",
      title: "即時長條統計圖",
      titleEn: "Live Bar Chart",
      type: "JavaScript 特效",
      subjects: ["數學", "自然科學", "資訊教育"],
      topics: ["統計", "資料視覺化"],
      gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階",
      technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "互動圖表"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "點擊按鈕即時增加投票數，長條圖動態更新，適合班級投票統計。",
      teachingApplication: "班級即時投票、資料蒐集與統計圖概念。",
      learningObjectives: ["讀懂長條圖", "資料與圖形對應"],
      teacherGuide: "帶全班即時投票並解讀結果。",
      studentTask: "統計並比較各項數量。",
      scienceFairApplication: "呈現問卷統計結果。",
      buildTime: "1 小時",
      techAnalysis: "以 flex 高度百分比呈現長條，點擊更新資料重繪。",
      performanceNotes: "純 DOM 更新，無需外部圖表庫。",
      mobileNotes: "按鈕大，長條自適應寬度。",
      accessibilityNotes: "數值以文字標示於長條上方。",
      modifyTips: ["修改項目名稱", "改變顏色", "加入重設按鈕"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["統計", "長條圖", "投票"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div class="chart" id="chart"></div><div id="btns"></div>',
      cssCode:
'.chart{display:flex;align-items:flex-end;gap:16px;height:160px;justify-content:center;font-family:sans-serif}\n' +
'.col{width:50px;text-align:center}\n' +
'.bar{background:#2563eb;border-radius:6px 6px 0 0;transition:.3s}\n' +
'#btns{text-align:center;margin-top:10px}#btns button{margin:4px;padding:8px 12px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
      jsCode:
'var data={"蘋果":2,"香蕉":1,"橘子":3};\n' +
'var chart=document.getElementById("chart"),btns=document.getElementById("btns");\n' +
'function draw(){chart.innerHTML="";var max=Math.max.apply(null,Object.values(data))||1;for(var k in data){var col=document.createElement("div");col.className="col";col.innerHTML="<div>"+data[k]+"</div><div class=bar style=height:"+(data[k]/max*120)+"px></div>"+k;chart.appendChild(col);}}\n' +
'for(var k in data){(function(key){var b=document.createElement("button");b.textContent="+"+key;b.onclick=function(){data[key]++;draw();};btns.appendChild(b);})(k);}\n' +
'draw();'
    },
    {
      id: "js-014",
      title: "LocalStorage 學習紀錄",
      titleEn: "LocalStorage Learning Log",
      type: "JavaScript 特效",
      subjects: ["資訊教育", "跨領域學習"],
      topics: ["資料保存", "學習歷程"],
      gradeLevels: ["國中", "高中"],
      difficulty: "初階",
      technologies: ["HTML", "JavaScript", "LocalStorage"],
      interactionTypes: ["點擊", "鍵盤操作"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "輸入的學習筆記會保存在瀏覽器中，重新整理後仍保留。",
      teachingApplication: "示範資料持久化概念，或作為簡易學習日誌。",
      learningObjectives: ["理解本地儲存", "資料的讀取與寫入"],
      teacherGuide: "說明資料存在使用者裝置、不會上傳。",
      studentTask: "記錄今天學到的三件事。",
      scienceFairApplication: "記錄每日觀察數據。",
      buildTime: "45 分鐘",
      techAnalysis: "以 localStorage getItem/setItem 讀寫，含 try/catch 防護。",
      performanceNotes: "資料量小，讀寫成本低。",
      mobileNotes: "無痕模式可能停用儲存，需提示。",
      accessibilityNotes: "輸入框具 label，狀態以文字回饋。",
      modifyTips: ["修改 KEY 名稱", "加入清除按鈕", "改為多筆清單"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["LocalStorage", "紀錄", "持久化"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode:
'<label for="note">我的筆記</label><br>\n' +
'<textarea id="note" rows="4" cols="30"></textarea><br>\n' +
'<button id="save">儲存</button> <span id="msg"></span>',
      cssCode: 'body{font-family:sans-serif;text-align:center}textarea{margin:8px}button{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff}#msg{color:#10b981}',
      jsCode:
'var KEY="demo-note",note=document.getElementById("note"),msg=document.getElementById("msg");\n' +
'try{note.value=localStorage.getItem(KEY)||"";}catch(e){msg.textContent="此瀏覽器停用了儲存功能";}\n' +
'document.getElementById("save").onclick=function(){try{localStorage.setItem(KEY,note.value);msg.textContent="已儲存 ✓";}catch(e){msg.textContent="無法儲存";}};'
    },
    {
      id: "js-015",
      title: "捲動出現動畫（Intersection Observer）",
      titleEn: "Scroll Reveal with Intersection Observer",
      type: "JavaScript 特效",
      subjects: ["資訊教育", "藝術教育", "跨領域學習"],
      topics: ["捲動", "進場動畫"],
      gradeLevels: ["國中", "高中"],
      difficulty: "初階",
      technologies: ["HTML", "CSS", "JavaScript", "Intersection Observer"],
      interactionTypes: ["捲動", "流程動畫"],
      libraries: [],
      requiresLibrary: false, mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: false, hasFullCode: true,
      description: "元素捲動進入畫面時才淡入出現，是高效能捲動動畫的標準做法。",
      teachingApplication: "製作捲動式教材、簡報或故事，控制內容出現節奏。",
      learningObjectives: ["認識 Intersection Observer", "效能友善的捲動動畫"],
      teacherGuide: "說明為何優於監聽 scroll 事件。",
      studentTask: "為自己的內容加上進場動畫。",
      scienceFairApplication: "製作捲動式研究海報。",
      buildTime: "45 分鐘",
      techAnalysis: "IntersectionObserver 監看元素，進入視窗即加上顯示 class。",
      performanceNotes: "避免監聽 scroll 事件，交由瀏覽器批次回報。",
      mobileNotes: "行動裝置同樣支援，效能佳。",
      accessibilityNotes: "尊重 prefers-reduced-motion，減少動態時直接顯示。",
      modifyTips: ["調整 threshold", "修改動畫效果", "加入延遲"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["捲動", "IntersectionObserver", "進場"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div class="reveal">向下捲動 ↓</div>'.concat(
        Array.apply(null, Array(6)).map(function (_, i) { return '\n<div class="reveal">區塊 ' + (i + 1) + '</div>'; }).join('')
      ),
      cssCode:
'body{font-family:sans-serif}\n' +
'.reveal{height:120px;margin:20px auto;max-width:320px;display:flex;align-items:center;justify-content:center;background:#2563eb;color:#fff;border-radius:12px;opacity:0;transform:translateY(30px);transition:.6s}\n' +
'.reveal.show{opacity:1;transform:none}\n' +
'@media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}',
      jsCode:
'var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target);}});},{threshold:.2});\n' +
'document.querySelectorAll(".reveal").forEach(function(el){io.observe(el);});'
    }
  ];

  /* ---------- B. CSS 動畫（15） ---------- */
  // 共用欄位工廠：減少重複，統一 CSS 動畫案例格式
  function cssAnim(o) {
    return {
      id: o.id, title: o.title, titleEn: o.titleEn,
      type: "CSS 動畫",
      subjects: o.subjects || ["藝術教育", "資訊教育"],
      topics: o.topics || ["動畫", "視覺效果"],
      gradeLevels: o.gradeLevels || ["國中", "高中"],
      difficulty: o.difficulty || "入門",
      technologies: o.technologies || ["HTML", "CSS", "CSS Animation"],
      interactionTypes: o.interactionTypes || ["滑鼠移入"],
      libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true,
      featured: !!o.featured, hasFullCode: true,
      description: o.description,
      teachingApplication: o.teachingApplication || "作為教材的視覺提示、狀態回饋或版面點綴，適度使用以引導注意力。",
      learningObjectives: o.learningObjectives || ["認識 CSS 動畫屬性", "理解 transition 與 keyframes 差異"],
      teacherGuide: o.teacherGuide || "示範原始碼並帶學生修改參數觀察變化。",
      studentTask: o.studentTask || "調整動畫時間與顏色，做出自己的版本。",
      scienceFairApplication: o.scienceFairApplication || "作為研究海報網頁的視覺點綴。",
      buildTime: o.buildTime || "20～40 分鐘",
      techAnalysis: o.techAnalysis || "以 CSS transition 或 @keyframes 定義動畫，透過 transform 與 opacity 取得最佳效能。",
      performanceNotes: "優先使用 transform 與 opacity（由 GPU 合成），避免動畫化 width/height/top 造成重排。",
      mobileNotes: "純 CSS 動畫在行動裝置效能佳，注意不要同時執行過多動畫。",
      accessibilityNotes: "已使用 prefers-reduced-motion 於減少動態時停用或簡化動畫。",
      modifyTips: o.modifyTips || ["修改 animation-duration 改變速度", "更換顏色變數", "調整 keyframes 關鍵影格"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: o.tags || ["CSS", "動畫"],
      createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: o.htmlCode, cssCode: o.cssCode, jsCode: o.jsCode || ""
    };
  }

  var reduceGuard = '\n@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}';

  var groupB = [
    cssAnim({
      id: "css-001", title: "淡入進場", titleEn: "Fade In", featured: true,
      description: "元素載入時由透明漸漸浮現，最基礎且常用的進場動畫。",
      tags: ["淡入", "進場", "opacity"],
      htmlCode: '<div class="box">淡入的內容</div>',
      cssCode: 'body{display:flex;justify-content:center;padding:40px;font-family:sans-serif}\n.box{padding:30px 50px;background:#2563eb;color:#fff;border-radius:12px;animation:fade 1.2s ease}\n@keyframes fade{from{opacity:0}to{opacity:1}}' + reduceGuard
    }),
    cssAnim({
      id: "css-002", title: "滑入進場", titleEn: "Slide In",
      description: "元素從側邊滑入定位，適合清單項目依序出現。",
      tags: ["滑入", "transform"],
      htmlCode: '<div class="box">從左方滑入</div>',
      cssCode: 'body{padding:40px;font-family:sans-serif}\n.box{padding:24px;background:#0ea5a4;color:#fff;border-radius:12px;animation:slide .8s ease}\n@keyframes slide{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}' + reduceGuard
    }),
    cssAnim({
      id: "css-003", title: "縮放彈出", titleEn: "Scale Pop",
      description: "元素由小放大彈出，帶有回彈感，適合提示與獎勵回饋。",
      tags: ["縮放", "彈跳"],
      htmlCode: '<div class="box">🎉 答對了！</div>',
      cssCode: 'body{padding:40px;text-align:center;font-family:sans-serif}\n.box{display:inline-block;padding:24px 40px;background:#f59e0b;color:#1a1200;border-radius:16px;font-size:1.3rem;animation:pop .5s cubic-bezier(.2,1.6,.4,1)}\n@keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}' + reduceGuard
    }),
    cssAnim({
      id: "css-004", title: "旋轉載入圈", titleEn: "Spinner",
      description: "持續旋轉的載入指示圈，表示系統正在處理。",
      tags: ["旋轉", "loading"],
      htmlCode: '<div class="spin"></div>',
      cssCode: 'body{padding:50px;display:flex;justify-content:center}\n.spin{width:48px;height:48px;border:5px solid #cbd5e1;border-top-color:#2563eb;border-radius:50%;animation:sp 1s linear infinite}\n@keyframes sp{to{transform:rotate(360deg)}}' + reduceGuard
    }),
    cssAnim({
      id: "css-005", title: "呼吸燈脈動", titleEn: "Breathing Pulse", featured: true,
      description: "元素緩慢放大縮小並改變亮度，模擬呼吸節奏，適合引導專注。",
      topics: ["脈動", "節奏"],
      tags: ["呼吸", "脈動"],
      htmlCode: '<div class="orb"></div><p style="text-align:center;font-family:sans-serif">跟著圓圈一起深呼吸</p>',
      cssCode: 'body{padding:40px;display:flex;flex-direction:column;align-items:center}\n.orb{width:70px;height:70px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#7dd3fc,#2563eb);animation:breathe 4s ease-in-out infinite}\n@keyframes breathe{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(1.4);opacity:1}}' + reduceGuard
    }),
    cssAnim({
      id: "css-006", title: "漸層流動背景", titleEn: "Animated Gradient",
      description: "背景漸層色彩緩慢流動，營造柔和科技感。",
      tags: ["漸層", "背景"],
      htmlCode: '<div class="bg">流動漸層背景</div>',
      cssCode: 'body{margin:0}\n.bg{height:200px;display:flex;align-items:center;justify-content:center;color:#fff;font-family:sans-serif;font-size:1.3rem;background:linear-gradient(120deg,#2563eb,#0ea5a4,#7c3aed,#f59e0b);background-size:300% 300%;animation:flow 8s ease infinite}\n@keyframes flow{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}' + reduceGuard
    }),
    cssAnim({
      id: "css-007", title: "波浪起伏", titleEn: "Wave Motion",
      description: "數條長條上下起伏形成波浪，可用於聲音或律動視覺。",
      subjects: ["自然科學", "物理", "藝術教育"], topics: ["波動", "律動"],
      tags: ["波浪", "律動"],
      htmlCode: '<div class="wave">'+Array.apply(null,Array(6)).map(function(){return '<i></i>';}).join('')+'</div>',
      cssCode: 'body{padding:50px;display:flex;justify-content:center}\n.wave{display:flex;gap:6px;align-items:flex-end;height:80px}\n.wave i{width:10px;height:60px;background:#0ea5a4;border-radius:6px;animation:w 1s ease-in-out infinite}\n.wave i:nth-child(2){animation-delay:.1s}.wave i:nth-child(3){animation-delay:.2s}.wave i:nth-child(4){animation-delay:.3s}.wave i:nth-child(5){animation-delay:.4s}.wave i:nth-child(6){animation-delay:.5s}\n@keyframes w{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}' + reduceGuard
    }),
    cssAnim({
      id: "css-008", title: "液體填充", titleEn: "Liquid Fill",
      description: "容器由下往上填滿色彩，適合表示進度或比例。",
      subjects: ["數學", "自然科學"], topics: ["比例", "進度"],
      tags: ["填充", "進度"],
      htmlCode: '<div class="cup"><div class="fill"></div></div>',
      cssCode: 'body{padding:40px;display:flex;justify-content:center}\n.cup{width:100px;height:140px;border:4px solid #2563eb;border-radius:0 0 20px 20px;position:relative;overflow:hidden}\n.fill{position:absolute;bottom:0;left:0;right:0;height:0;background:#0ea5a4;animation:fill 3s ease-in-out infinite}\n@keyframes fill{0%,100%{height:20%}50%{height:90%}}' + reduceGuard
    }),
    cssAnim({
      id: "css-009", title: "翻頁效果", titleEn: "Page Flip",
      description: "元素沿邊緣翻轉，模擬翻書或翻牌的動作。",
      tags: ["翻頁", "3D"], technologies: ["HTML", "CSS", "CSS 3D Transform"],
      htmlCode: '<div class="page">翻頁</div>',
      cssCode: 'body{padding:50px;display:flex;justify-content:center;perspective:800px}\n.page{width:120px;height:150px;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:8px;transform-origin:left;animation:flip 3s ease-in-out infinite;font-family:sans-serif}\n@keyframes flip{0%,100%{transform:rotateY(0)}50%{transform:rotateY(-160deg)}}' + reduceGuard
    }),
    cssAnim({
      id: "css-010", title: "3D 翻面卡片", titleEn: "3D Flip Card",
      description: "滑鼠移入時卡片翻面顯示背面內容，純 CSS 無需 JavaScript。",
      tags: ["翻面", "hover", "3D"], technologies: ["HTML", "CSS", "CSS 3D Transform"], featured: true,
      htmlCode: '<div class="fc"><div class="inner"><div class="f front">正面</div><div class="f back">背面說明</div></div></div>',
      cssCode: 'body{padding:40px;display:flex;justify-content:center}\n.fc{width:160px;height:110px;perspective:700px}\n.inner{position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d}\n.fc:hover .inner{transform:rotateY(180deg)}\n.f{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:12px;backface-visibility:hidden;font-family:sans-serif;color:#fff}\n.front{background:#2563eb}.back{background:#0ea5a4;transform:rotateY(180deg)}' + reduceGuard
    }),
    cssAnim({
      id: "css-011", title: "骨架載入", titleEn: "Skeleton Loading",
      description: "內容載入前顯示灰色骨架與流光，降低等待焦慮。",
      tags: ["骨架", "loading"],
      htmlCode: '<div class="sk t"></div><div class="sk"></div><div class="sk s"></div>',
      cssCode: 'body{padding:30px;max-width:300px;margin:auto}\n.sk{height:16px;border-radius:6px;margin:10px 0;background:linear-gradient(90deg,#e2e8f0 25%,#f1f5f9 50%,#e2e8f0 75%);background-size:200% 100%;animation:sh 1.4s infinite}\n.t{height:24px;width:60%}.s{width:80%}\n@keyframes sh{to{background-position:-200% 0}}' + reduceGuard
    }),
    cssAnim({
      id: "css-012", title: "按鈕波紋", titleEn: "Button Ripple",
      description: "滑鼠移入按鈕時擴散光暈波紋，強化點擊回饋。",
      tags: ["波紋", "按鈕"], interactionTypes: ["滑鼠移入", "點擊"],
      htmlCode: '<button class="rp">點我</button>',
      cssCode: 'body{padding:50px;display:flex;justify-content:center}\n.rp{position:relative;overflow:hidden;padding:14px 30px;border:none;border-radius:999px;background:#2563eb;color:#fff;font-size:1rem}\n.rp::after{content:"";position:absolute;inset:0;background:radial-gradient(circle,#fff6 10%,transparent 60%);transform:scale(0);opacity:0;transition:.5s}\n.rp:hover::after{transform:scale(2.5);opacity:1}' + reduceGuard
    }),
    cssAnim({
      id: "css-013", title: "文字打字機", titleEn: "Typing Text",
      description: "文字如打字機般逐字出現並帶游標，適合標題或引言。",
      subjects: ["語文教育", "藝術教育"], topics: ["文字", "打字"],
      tags: ["打字", "文字動畫"],
      htmlCode: '<h2 class="tw">歡迎來到數位教材世界</h2>',
      cssCode: 'body{padding:40px;display:flex;justify-content:center}\n.tw{font-family:monospace;white-space:nowrap;overflow:hidden;border-right:3px solid #2563eb;width:0;animation:type 3s steps(15) forwards,blink .7s step-end infinite}\n@keyframes type{to{width:15ch}}\n@keyframes blink{50%{border-color:transparent}}' + reduceGuard
    }),
    cssAnim({
      id: "css-014", title: "邊框流動光", titleEn: "Animated Border",
      description: "卡片邊框有光線沿邊緣流動，營造科技焦點感。",
      tags: ["邊框", "光線"],
      htmlCode: '<div class="glow">重點內容</div>',
      cssCode: 'body{padding:50px;display:flex;justify-content:center}\n.glow{position:relative;padding:30px 50px;border-radius:14px;background:#0b1020;color:#fff;font-family:sans-serif}\n.glow::before{content:"";position:absolute;inset:-2px;border-radius:16px;background:conic-gradient(from 0deg,#2563eb,#0ea5a4,#7c3aed,#2563eb);z-index:-1;animation:rot 4s linear infinite}\n@keyframes rot{to{transform:rotate(360deg)}}' + reduceGuard
    }),
    cssAnim({
      id: "css-015", title: "3D 懸浮卡片", titleEn: "3D Hover Card",
      description: "滑鼠移入時卡片微微上浮並加深陰影，營造層次立體感。",
      tags: ["懸浮", "hover", "陰影"], interactionTypes: ["滑鼠移入"],
      htmlCode: '<div class="hv">懸停我</div>',
      cssCode: 'body{padding:50px;display:flex;justify-content:center}\n.hv{padding:40px 60px;background:#fff;border-radius:16px;box-shadow:0 4px 10px #0002;transition:transform .3s,box-shadow .3s;font-family:sans-serif}\n.hv:hover{transform:translateY(-8px) scale(1.03);box-shadow:0 18px 40px #2563eb55}' + reduceGuard
    })
  ];
  /* ---------- C. 自然科互動網站（15）：含本站互動教材與外部網站研究案例 ---------- */
  var groupC = [
    {
      id: "sci-001", title: "月相變化模擬", titleEn: "Moon Phase Simulator",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學"],
      topics: ["月相", "公轉", "日地月"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["滑桿", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: true, hasFullCode: true,
      description: "拖動滑桿改變月球在軌道上的位置，即時繪出對應的月相（新月到滿月）。",
      teachingApplication: "說明月相成因是太陽照射角度與觀測位置的關係，而非地球陰影。",
      learningObjectives: ["認識新月、上弦、滿月、下弦", "理解月相與月球公轉的關係", "破除月相是地球影子的迷思"],
      teacherGuide: "先請學生畫出想像的月相順序，操作後再修正。",
      studentTask: "記錄一個月不同日期觀察到的月相並對照模擬。",
      scienceFairApplication: "連續觀測記錄真實月相並與模擬比較。",
      buildTime: "2 小時",
      techAnalysis: "以 Canvas 繪製月面，依相位角計算亮暗分界，滑桿改變相位。",
      performanceNotes: "僅在滑桿變動時重繪，靜止時不佔用資源。",
      mobileNotes: "滑桿觸控友善，Canvas 自適應寬度。",
      accessibilityNotes: "相位以文字同步顯示，可鍵盤操作滑桿。",
      modifyTips: ["修改月面顏色", "加入日期對照", "改變 canvas 尺寸"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["月相", "天文", "Canvas", "模擬"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="moon" width="200" height="200"></canvas>\n<label>公轉位置：<input id="ph" type="range" min="0" max="360" value="90"></label>\n<p id="name" aria-live="polite"></p>',
      cssCode: 'body{text-align:center;font-family:sans-serif}\ncanvas{background:#0b1020;border-radius:50%;margin:auto;display:block}\ninput{width:70%}',
      jsCode: 'var c=document.getElementById("moon"),x=c.getContext("2d"),ph=document.getElementById("ph"),nm=document.getElementById("name");\nfunction name(a){if(a<45||a>=315)return "新月";if(a<135)return "上弦月";if(a<225)return "滿月";return "下弦月";}\nfunction draw(){var a=+ph.value;x.clearRect(0,0,200,200);x.fillStyle="#f4f4dc";x.beginPath();x.arc(100,100,80,0,7);x.fill();\n// 用陰影覆蓋呈現相位\nvar t=(a/360);x.fillStyle="#0b1020";x.beginPath();var off=Math.cos(a*Math.PI/180)*80;\nx.ellipse(100,100,Math.abs(off),80,0,0,7);\nif(a<180){x.rect(100,20,100,160);}else{x.rect(0,20,100,160);}x.fill();nm.textContent="月相："+name(a);}\nph.addEventListener("input",draw);draw();'
    },
    {
      id: "sci-002", title: "水循環互動圖", titleEn: "Water Cycle Diagram",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學", "環境教育"],
      topics: ["水循環", "蒸發", "降水"], gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "SVG"],
      interactionTypes: ["點擊"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "點擊水循環各階段（蒸發、凝結、降水、逕流）顯示說明。",
      teachingApplication: "建立水循環整體概念與各階段名詞。",
      learningObjectives: ["認識水循環四階段", "理解水的三態變化"],
      teacherGuide: "依序點擊，請學生說出下一階段。",
      studentTask: "畫出自己的水循環圖並標註。",
      scienceFairApplication: "探究蒸發速率與溫度的關係。",
      buildTime: "1 小時",
      techAnalysis: "以按鈕標記各階段，點擊顯示對應說明文字。",
      performanceNotes: "純 DOM 更新，成本低。",
      mobileNotes: "標記區大，觸控友善。",
      accessibilityNotes: "標記為 button，具說明文字。",
      modifyTips: ["修改各階段說明", "加入動畫箭頭", "更換背景"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["水循環", "地科", "點擊"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div class="cyc">\n<button data-t="蒸發：陽光使水面的水變成水蒸氣上升">☀️ 蒸發</button>\n<button data-t="凝結：水蒸氣遇冷凝結成雲">☁️ 凝結</button>\n<button data-t="降水：雲中的水滴落下成為雨或雪">🌧️ 降水</button>\n<button data-t="逕流：地表水流回河流與海洋">🌊 逕流</button>\n</div>\n<p id="d" aria-live="polite">點擊了解各階段</p>',
      cssCode: 'body{font-family:sans-serif;text-align:center}\n.cyc{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:340px;margin:auto}\nbutton{padding:12px;border:none;border-radius:10px;background:#0ea5a4;color:#fff;flex:1 0 40%}',
      jsCode: 'document.querySelector(".cyc").addEventListener("click",function(e){var b=e.target.closest("button");if(b)document.getElementById("d").textContent=b.dataset.t;});'
    },
    {
      id: "sci-003", title: "簡易電路開關模擬", titleEn: "Simple Circuit Switch",
      type: "自然科互動網站", subjects: ["自然科學", "物理"],
      topics: ["電路", "通路斷路", "燈泡"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "SVG"],
      interactionTypes: ["點擊", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: true, hasFullCode: true,
      description: "點擊開關切換通路與斷路，燈泡隨之亮或熄。",
      teachingApplication: "示範通路才能使燈泡發亮的基本電路概念。",
      learningObjectives: ["理解通路與斷路", "認識電路組成"],
      teacherGuide: "配合實體電路實驗對照。",
      studentTask: "畫出讓兩顆燈泡都亮的電路。",
      scienceFairApplication: "探究串並聯亮度差異。",
      buildTime: "1 小時",
      techAnalysis: "以 class 切換開關狀態與燈泡樣式，模擬電流通路。",
      performanceNotes: "僅切換 class，效能佳。",
      mobileNotes: "開關按鈕大，觸控友善。",
      accessibilityNotes: "開關為 button，狀態以 aria-pressed 與文字表示。",
      modifyTips: ["修改燈泡發亮顏色", "加入第二顆燈泡", "加入電池電量"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["電路", "物理", "開關"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div class="cir"><div id="bulb">💡</div><button id="sw" aria-pressed="false">開關：關</button></div>',
      cssCode: 'body{font-family:sans-serif;text-align:center}\n#bulb{font-size:4rem;filter:grayscale(1) brightness(.6);transition:.3s}\n#bulb.on{filter:none;text-shadow:0 0 30px #ffde59}\nbutton{padding:12px 20px;border:none;border-radius:10px;background:#2563eb;color:#fff}',
      jsCode: 'var sw=document.getElementById("sw"),bulb=document.getElementById("bulb");\nsw.addEventListener("click",function(){var on=bulb.classList.toggle("on");sw.setAttribute("aria-pressed",on);sw.textContent="開關："+(on?"開":"關");});'
    },
    {
      id: "sci-004", title: "食物鏈連結", titleEn: "Food Chain Builder",
      type: "自然科互動網站", subjects: ["自然科學", "生物", "環境教育"],
      topics: ["食物鏈", "生產者消費者"], gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "依序點擊生物建立食物鏈，並顯示能量流動方向。",
      teachingApplication: "建立生產者、消費者與分解者的關係。",
      learningObjectives: ["認識食物鏈組成", "理解能量流動方向"],
      teacherGuide: "討論若某一環消失會怎樣。",
      studentTask: "建立一條至少四層的食物鏈。",
      scienceFairApplication: "調查校園中的食物網。",
      buildTime: "1 小時",
      techAnalysis: "點擊生物依序加入鏈中並以箭頭連接。",
      performanceNotes: "純 DOM，成本低。",
      mobileNotes: "選項大，觸控友善。",
      accessibilityNotes: "生物為 button，鏈以文字呈現。",
      modifyTips: ["修改生物清單", "加入正確性檢查", "加入圖片"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["食物鏈", "生物", "生態"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div id="pool"><button>🌱草</button><button>🦗蚱蜢</button><button>🐸青蛙</button><button>🐍蛇</button><button>🦅老鷹</button></div>\n<p id="chain">食物鏈：</p><button id="reset">重來</button>',
      cssCode: 'body{font-family:sans-serif;text-align:center}\n#pool button{margin:4px;padding:10px;border:none;border-radius:8px;background:#2a9d5c;color:#fff}\n#chain{font-size:1.2rem;min-height:2em}#reset{padding:8px 14px;border:none;border-radius:8px;background:#94a3b8;color:#fff}',
      jsCode: 'var chain=[];var out=document.getElementById("chain");\ndocument.getElementById("pool").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;chain.push(b.textContent);out.textContent="食物鏈："+chain.join(" → ");});\ndocument.getElementById("reset").onclick=function(){chain=[];out.textContent="食物鏈：";};'
    },
    {
      id: "sci-005", title: "凸透鏡成像模擬", titleEn: "Convex Lens Imaging",
      type: "自然科互動網站", subjects: ["自然科學", "物理"],
      topics: ["凸透鏡", "成像", "焦距"], gradeLevels: ["國中", "高中"],
      difficulty: "進階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["滑桿", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: true, hasFullCode: true,
      description: "移動物體距離，即時繪出凸透鏡成像的位置、大小與正倒立。",
      teachingApplication: "說明物距、像距與焦距的關係及成像規律。",
      learningObjectives: ["理解凸透鏡成像規律", "認識實像與虛像", "運用成像公式"],
      teacherGuide: "分區討論物體在不同位置時的成像特性。",
      studentTask: "整理物距與成像特性對照表。",
      scienceFairApplication: "自製透鏡測量焦距。",
      buildTime: "2～3 小時",
      techAnalysis: "以成像公式 1/f=1/u+1/v 計算像距，Canvas 繪製光線與成像。",
      performanceNotes: "僅在滑桿變動時重繪。",
      mobileNotes: "Canvas 自適應，滑桿觸控友善。",
      accessibilityNotes: "數值與成像特性以文字同步顯示。",
      modifyTips: ["修改焦距 f", "改變物體高度", "加入第二條光線"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["凸透鏡", "成像", "物理", "Canvas"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="l" width="320" height="180"></canvas>\n<label>物距：<input id="u" type="range" min="30" max="150" value="120"></label>\n<p id="info" aria-live="polite"></p>',
      cssCode: 'body{text-align:center;font-family:sans-serif}canvas{background:#fff;border:1px solid #cbd5e1;border-radius:8px;display:block;margin:auto}input{width:70%}',
      jsCode: 'var c=document.getElementById("l"),x=c.getContext("2d"),u=document.getElementById("u"),info=document.getElementById("info");\nvar cx=160,cy=90,f=50,H=40;\nfunction draw(){x.clearRect(0,0,320,180);x.strokeStyle="#94a3b8";x.beginPath();x.moveTo(0,cy);x.lineTo(320,cy);x.stroke();\nx.strokeStyle="#2563eb";x.beginPath();x.moveTo(cx,20);x.lineTo(cx,160);x.stroke();\nvar U=+u.value;x.strokeStyle="#f59e0b";x.beginPath();x.moveTo(cx-U,cy);x.lineTo(cx-U,cy-H);x.stroke();\nvar V=1/(1/f-1/U);var Hi=-H*V/U;\nx.strokeStyle="#10b981";x.beginPath();x.moveTo(cx+V,cy);x.lineTo(cx+V,cy-Hi);x.stroke();\ninfo.textContent=(V>0?"實像（倒立）":"虛像（正立）")+"，像距約 "+Math.abs(Math.round(V))+"px";}\nu.addEventListener("input",draw);draw();'
    },
    {
      id: "sci-006", title: "植物生長階段", titleEn: "Plant Growth Stages",
      type: "自然科互動網站", subjects: ["自然科學", "生物"],
      topics: ["植物", "生長", "生命週期"], gradeLevels: ["國小低年級", "國小中年級"],
      difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["滑桿", "流程動畫"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "拖動滑桿觀察種子發芽到開花結果的生長階段。",
      teachingApplication: "認識植物生命週期各階段順序。",
      learningObjectives: ["排列植物生長順序", "認識各階段特徵"],
      teacherGuide: "配合實際種植觀察對照。",
      studentTask: "記錄自己種植的植物生長。",
      scienceFairApplication: "比較不同光照下的生長速度。",
      buildTime: "45 分鐘",
      techAnalysis: "以滑桿索引切換階段的圖示與說明。",
      performanceNotes: "純文字/emoji 更新，成本低。",
      mobileNotes: "滑桿觸控友善。",
      accessibilityNotes: "階段以文字同步顯示。",
      modifyTips: ["修改階段內容", "改用圖片", "加入自動播放"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["植物", "生長", "生命週期"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div id="plant" style="font-size:4rem">🌰</div><p id="stage" aria-live="polite"></p>\n<input id="g" type="range" min="0" max="4" value="0">',
      cssCode: 'body{font-family:sans-serif;text-align:center}input{width:70%}',
      jsCode: 'var s=[["🌰","種子"],["🌱","發芽"],["🌿","長葉"],["🌷","開花"],["🍎","結果"]];\nvar g=document.getElementById("g"),p=document.getElementById("plant"),st=document.getElementById("stage");\nfunction upd(){p.textContent=s[g.value][0];st.textContent="階段："+s[g.value][1];}\ng.addEventListener("input",upd);upd();'
    },
    {
      id: "sci-007", title: "空氣壓力與海拔", titleEn: "Air Pressure & Altitude",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學", "物理"],
      topics: ["氣壓", "海拔"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["滑桿", "互動圖表"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "調整海拔高度，即時顯示對應的大氣壓力變化。",
      teachingApplication: "說明海拔越高氣壓越低的關係。",
      learningObjectives: ["理解氣壓與海拔關係", "讀懂數值變化"],
      teacherGuide: "連結高山症與煮沸點降低現象。",
      studentTask: "查找台灣各高山的氣壓估計值。",
      scienceFairApplication: "探究氣壓對氣球體積的影響。",
      buildTime: "1 小時",
      techAnalysis: "以氣壓公式估算並更新數值與長條高度。",
      performanceNotes: "僅更新數值與樣式。",
      mobileNotes: "滑桿觸控友善。",
      accessibilityNotes: "數值以文字顯示。",
      modifyTips: ["修改公式常數", "加入沸點對照", "改變單位"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["氣壓", "海拔", "地科"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<label>海拔：<input id="alt" type="range" min="0" max="9000" step="100" value="0"> <b id="am">0</b> m</label>\n<p>大氣壓力約 <b id="pr">1013</b> hPa</p>',
      cssCode: 'body{font-family:sans-serif;text-align:center}input{width:60%}',
      jsCode: 'var alt=document.getElementById("alt");\nfunction upd(){var h=+alt.value;document.getElementById("am").textContent=h;var p=1013*Math.pow(1-2.25577e-5*h,5.2559);document.getElementById("pr").textContent=Math.round(p);}\nalt.addEventListener("input",upd);upd();'
    },
    {
      id: "sci-008", title: "太陽系行星距離", titleEn: "Solar System Distances",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學"],
      topics: ["太陽系", "行星", "軌道"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["點擊", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 Canvas 繪製八大行星繞太陽公轉的簡化動畫，點擊行星顯示資訊。",
      teachingApplication: "建立行星順序與相對軌道概念。",
      learningObjectives: ["記憶行星順序", "理解公轉概念"],
      teacherGuide: "討論行星大小與距離並非等比例呈現。",
      studentTask: "查找各行星公轉週期並比較。",
      scienceFairApplication: "製作等比例太陽系模型。",
      buildTime: "2 小時",
      techAnalysis: "requestAnimationFrame 更新各行星角度並繪製軌道。",
      performanceNotes: "行星數少，動畫成本可控；頁籤隱藏可暫停。",
      mobileNotes: "Canvas 自適應寬度。",
      accessibilityNotes: "行星名稱以文字列出，動畫為輔助。",
      modifyTips: ["修改行星速度", "加入行星名稱標籤", "調整軌道半徑"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["太陽系", "行星", "Canvas", "天文"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="ss" width="320" height="320"></canvas>',
      cssCode: 'canvas{background:#05070f;border-radius:12px;display:block;margin:auto}',
      jsCode: 'var c=document.getElementById("ss"),x=c.getContext("2d");\nvar planets=[["#b0b0b0",40,3],["#e8c07d",60,2.4],["#4a90d9",80,2],["#d9603a",100,1.6],["#e0b060",130,1],["#d9c07a",160,.7]];\nvar t=0;\nfunction loop(){x.clearRect(0,0,320,320);x.fillStyle="#ffde59";x.beginPath();x.arc(160,160,14,0,7);x.fill();\nplanets.forEach(function(p,i){x.strokeStyle="#ffffff22";x.beginPath();x.arc(160,160,p[1],0,7);x.stroke();var a=t*p[2]*.01+i;var px=160+Math.cos(a)*p[1],py=160+Math.sin(a)*p[1];x.fillStyle=p[0];x.beginPath();x.arc(px,py,5,0,7);x.fill();});t++;requestAnimationFrame(loop);}\nloop();'
    },
    // ---- 外部網站研究案例（僅提供連結、分析與教學應用，不含程式碼） ----
    {
      id: "sci-009", title: "PhET 互動式科學模擬", titleEn: "PhET Interactive Simulations",
      type: "自然科互動網站", subjects: ["自然科學", "物理", "化學", "數學"],
      topics: ["互動模擬", "虛擬實驗"], gradeLevels: ["國小高年級", "國中", "高中"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "WebGL"],
      interactionTypes: ["拖曳", "滑桿", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: true, featured: true, hasFullCode: false,
      description: "美國科羅拉多大學開發的免費互動科學模擬平台，涵蓋物理、化學、生物、數學等大量主題。",
      teachingApplication: "作為虛擬實驗與探究教學的現成資源，可直接投影操作或指派學生自學。",
      learningObjectives: ["透過模擬進行探究", "觀察變因與結果關係"],
      teacherGuide: "選擇對應單元的模擬，設計引導問題讓學生操作探究。",
      studentTask: "操作模擬並記錄不同變因下的結果。",
      scienceFairApplication: "以模擬先建立假設，再進行實體實驗驗證。",
      buildTime: "—（現成資源）",
      techAnalysis: "早期以 Java／Flash，現多為 HTML5 + JavaScript 重寫，部分使用 WebGL。依網站互動表現推測，未經官方確認。",
      performanceNotes: "線上載入，需網路；部分模擬可下載離線使用。",
      mobileNotes: "HTML5 版本支援平板與手機。",
      accessibilityNotes: "官方持續改善鍵盤操作與螢幕閱讀器支援。",
      modifyTips: ["可嵌入 iframe 於教材（請遵守其使用條款）", "搭配學習單使用", "選擇繁中介面"],
      thumbnail: "", referenceUrl: "https://phet.colorado.edu/zh_TW/",
      license: "第三方網站，著作權屬原權利人所有",
      externalSite: { name: "PhET Interactive Simulations", org: "University of Colorado Boulder（美國）", url: "https://phet.colorado.edu/zh_TW/", needAccount: "免費使用，可免帳號", free: "免費", chinese: "支援繁體中文", mobile: "HTML5 版支援行動裝置", techGuess: "依網站互動表現推測使用 HTML5 Canvas／WebGL，未經官方確認。", notes: "引用時請遵守其授權條款，勿宣稱自有。" },
      tags: ["PhET", "模擬", "外部資源", "虛擬實驗"], createdAt: "2026-07-22", updatedAt: "2026-07-22"
    },
    {
      id: "sci-010", title: "NASA 太空探索網站", titleEn: "NASA Space Exploration",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學"],
      topics: ["太空", "行星", "太空任務"], gradeLevels: ["國小高年級", "國中", "高中"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "WebGL", "Three.js"],
      interactionTypes: ["3D 操作", "捲動"], libraries: ["Three.js"], requiresLibrary: true,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: true, featured: false, hasFullCode: false,
      description: "NASA 提供大量太空影像、3D 模型與即時任務資料，可作為天文與地科教材素材來源。",
      teachingApplication: "引用官方影像與 3D 模型豐富天文教材，並連結最新太空任務。",
      learningObjectives: ["認識太陽系與宇宙", "接觸真實太空資料"],
      teacherGuide: "挑選主題影像或 3D 模型融入簡報與討論。",
      studentTask: "選一個太空任務製作介紹海報。",
      scienceFairApplication: "使用公開資料進行天文資料分析。",
      buildTime: "—（現成資源）",
      techAnalysis: "Eyes on the Solar System 等 3D 應用推測使用 WebGL／Three.js，未經官方確認。",
      performanceNotes: "3D 內容需較佳硬體與網路。",
      mobileNotes: "多數頁面支援行動裝置。",
      accessibilityNotes: "影像頁面提供替代文字。",
      modifyTips: ["引用官方影像需標示來源", "使用公開 API 取得資料", "注意使用條款"],
      thumbnail: "", referenceUrl: "https://www.nasa.gov/",
      license: "第三方網站，著作權屬原權利人所有",
      externalSite: { name: "NASA", org: "美國國家航空暨太空總署", url: "https://www.nasa.gov/", needAccount: "瀏覽免帳號", free: "免費", chinese: "以英文為主", mobile: "支援", techGuess: "3D 互動推測使用 WebGL／Three.js，未經官方確認。", notes: "影像多為公有領域，仍請標示來源。" },
      tags: ["NASA", "太空", "外部資源"], createdAt: "2026-07-22", updatedAt: "2026-07-22"
    },
    {
      id: "sci-011", title: "火山噴發互動示意", titleEn: "Volcano Eruption Demo",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學"],
      topics: ["火山", "板塊", "岩漿"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "流程動畫"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "點擊按鈕觸發火山噴發的簡化動畫，示意岩漿累積與噴發。",
      teachingApplication: "引起動機，說明火山噴發的成因與過程。",
      learningObjectives: ["認識火山構造", "了解噴發過程"],
      teacherGuide: "搭配影片與圖片深入說明。",
      studentTask: "查找台灣的火山分布。",
      scienceFairApplication: "製作小蘇打醋火山模型並記錄。",
      buildTime: "1 小時",
      techAnalysis: "以 CSS 動畫呈現噴發，JS 觸發 class 切換。",
      performanceNotes: "動畫短暫且簡單。",
      mobileNotes: "按鈕大，觸控友善。",
      accessibilityNotes: "動畫為輔助，狀態以文字說明。",
      modifyTips: ["修改噴發顏色", "調整動畫時間", "加入音效（避免自動播放）"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["火山", "地科", "動畫"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div class="volcano"><div id="lava"></div>🌋</div><br><button id="erupt">噴發！</button>',
      cssCode: 'body{font-family:sans-serif;text-align:center}\n.volcano{position:relative;font-size:5rem;display:inline-block}\n#lava{position:absolute;left:50%;top:0;width:16px;height:16px;background:#ff5722;border-radius:50%;transform:translateX(-50%);opacity:0}\n#lava.go{animation:erupt 1s ease-out}\n@keyframes erupt{0%{opacity:1;top:20px}100%{opacity:0;top:-80px}}\nbutton{padding:10px 18px;border:none;border-radius:10px;background:#ef4444;color:#fff}\n@media(prefers-reduced-motion:reduce){#lava.go{animation:none}}',
      jsCode: 'var lava=document.getElementById("lava");\ndocument.getElementById("erupt").onclick=function(){lava.classList.remove("go");void lava.offsetWidth;lava.classList.add("go");};'
    },
    {
      id: "sci-012", title: "昆蟲生活史轉盤", titleEn: "Insect Life Cycle Wheel",
      type: "自然科互動網站", subjects: ["自然科學", "生物"],
      topics: ["昆蟲", "完全變態", "生活史"], gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊", "卡片翻轉"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "點擊循環顯示昆蟲完全變態的四個階段：卵、幼蟲、蛹、成蟲。",
      teachingApplication: "說明完全變態與不完全變態的差異。",
      learningObjectives: ["認識昆蟲生活史", "區分變態類型"],
      teacherGuide: "對照蝴蝶與蝗蟲的差異。",
      studentTask: "畫出一種昆蟲的生活史。",
      scienceFairApplication: "飼養並記錄昆蟲成長。",
      buildTime: "45 分鐘",
      techAnalysis: "以索引循環切換階段內容。",
      performanceNotes: "純文字更新。",
      mobileNotes: "按鈕大，觸控友善。",
      accessibilityNotes: "階段以文字顯示。",
      modifyTips: ["修改階段內容", "改用圖片", "加入不完全變態版本"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["昆蟲", "生活史", "生物"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div id="face" style="font-size:4rem">🥚</div><p id="lbl" aria-live="polite"></p><button id="nx">下一階段</button>',
      cssCode: 'body{font-family:sans-serif;text-align:center}button{padding:10px 18px;border:none;border-radius:10px;background:#2a9d5c;color:#fff}',
      jsCode: 'var s=[["🥚","卵"],["🐛","幼蟲"],["🛡️","蛹"],["🦋","成蟲"]];var i=0;\nvar f=document.getElementById("face"),l=document.getElementById("lbl");\nfunction upd(){f.textContent=s[i][0];l.textContent="階段："+s[i][1];}\ndocument.getElementById("nx").onclick=function(){i=(i+1)%s.length;upd();};upd();'
    },
    {
      id: "sci-013", title: "天氣圖符號判讀", titleEn: "Weather Map Symbols",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學", "環境教育"],
      topics: ["天氣", "氣象符號"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"],
      interactionTypes: ["點擊"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "點擊天氣符號顯示意義，練習判讀天氣預報圖。",
      teachingApplication: "認識常見氣象符號與天氣現象。",
      learningObjectives: ["判讀天氣符號", "連結天氣與生活"],
      teacherGuide: "對照當日真實天氣預報。",
      studentTask: "連續一週記錄天氣符號。",
      scienceFairApplication: "分析一個月的天氣資料。",
      buildTime: "40 分鐘",
      techAnalysis: "事件代理處理符號點擊顯示說明。",
      performanceNotes: "純 DOM 更新。",
      mobileNotes: "符號區大，觸控友善。",
      accessibilityNotes: "符號為 button，具說明。",
      modifyTips: ["新增符號", "加入圖片", "改為配對題"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["天氣", "氣象", "判讀"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<div id="wx"><button data-t="晴天">☀️</button><button data-t="多雲">⛅</button><button data-t="陰天">☁️</button><button data-t="下雨">🌧️</button><button data-t="雷雨">⛈️</button><button data-t="下雪">❄️</button></div><p id="wt" aria-live="polite">點擊符號看意義</p>',
      cssCode: 'body{font-family:sans-serif;text-align:center}#wx button{font-size:2rem;margin:4px;border:none;background:#eef4ff;border-radius:12px;padding:8px}',
      jsCode: 'document.getElementById("wx").addEventListener("click",function(e){var b=e.target.closest("button");if(b)document.getElementById("wt").textContent="這是："+b.dataset.t;});'
    },
    {
      id: "sci-014", title: "磁力線互動圖", titleEn: "Magnetic Field Lines",
      type: "自然科互動網站", subjects: ["自然科學", "物理"],
      topics: ["磁鐵", "磁力線", "磁場"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["拖曳", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "拖動指北針般的測試點，觀察磁鐵周圍磁場方向。",
      teachingApplication: "視覺化磁力線與磁場方向概念。",
      learningObjectives: ["認識磁力線分布", "理解磁場方向"],
      teacherGuide: "對照鐵粉實驗結果。",
      studentTask: "用鐵粉實作磁力線並比較。",
      scienceFairApplication: "探究不同磁鐵的磁場強度。",
      buildTime: "2 小時",
      techAnalysis: "以兩極點計算合成場向量，Canvas 繪製箭頭。",
      performanceNotes: "僅在互動時重繪。",
      mobileNotes: "以觸控拖曳測試點。",
      accessibilityNotes: "提供文字說明磁場方向。",
      modifyTips: ["修改磁極位置", "增加測試點", "改變箭頭密度"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["磁力", "磁場", "Canvas", "物理"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="mag" width="300" height="200"></canvas><p style="text-align:center;font-family:sans-serif">拖曳畫面觀察磁場方向</p>',
      cssCode: 'canvas{background:#fff;border:1px solid #cbd5e1;border-radius:8px;display:block;margin:auto;touch-action:none}',
      jsCode: 'var c=document.getElementById("mag"),x=c.getContext("2d");\nvar N={x:100,y:100},S={x:200,y:100};\nfunction field(px,py){var dx1=px-N.x,dy1=py-N.y,r1=Math.hypot(dx1,dy1)+1;var dx2=px-S.x,dy2=py-S.y,r2=Math.hypot(dx2,dy2)+1;return [dx1/r1/r1-dx2/r2/r2, dy1/r1/r1-dy2/r2/r2];}\nfunction draw(){x.clearRect(0,0,300,200);x.fillStyle="#ef4444";x.beginPath();x.arc(N.x,N.y,8,0,7);x.fill();x.fillStyle="#2563eb";x.beginPath();x.arc(S.x,S.y,8,0,7);x.fill();\nfor(var gy=20;gy<200;gy+=28)for(var gx=20;gx<300;gx+=28){var f=field(gx,gy);var a=Math.atan2(f[1],f[0]);x.strokeStyle="#0ea5a4";x.beginPath();x.moveTo(gx,gy);x.lineTo(gx+Math.cos(a)*10,gy+Math.sin(a)*10);x.stroke();}}\nc.addEventListener("pointermove",function(e){if(e.buttons){var r=c.getBoundingClientRect();S.x=e.clientX-r.left;S.y=e.clientY-r.top;draw();}});draw();'
    },
    {
      id: "sci-015", title: "地震波傳遞示意", titleEn: "Seismic Wave Demo",
      type: "自然科互動網站", subjects: ["自然科學", "地球科學"],
      topics: ["地震", "P波S波", "波動"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["點擊", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "點擊震源後，P 波與 S 波以不同速度向外擴散，示意兩種地震波傳遞。",
      teachingApplication: "說明 P 波比 S 波快，可用來估算震央距離。",
      learningObjectives: ["區分 P 波與 S 波", "理解波速與到時差"],
      teacherGuide: "討論地震預警的原理。",
      studentTask: "查找地震資料計算震央距離。",
      scienceFairApplication: "分析地震儀資料。",
      buildTime: "1.5 小時",
      techAnalysis: "以擴散圓半徑隨時間增加，兩波速度不同。",
      performanceNotes: "動畫結束後停止重繪。",
      mobileNotes: "Canvas 自適應。",
      accessibilityNotes: "以文字說明兩種波差異。",
      modifyTips: ["修改波速比例", "改變顏色", "加入偵測站"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["地震", "波", "Canvas", "地科"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="eq" width="300" height="200"></canvas><br><button id="go">觸發地震</button>',
      cssCode: 'body{text-align:center;font-family:sans-serif}canvas{background:#0b1020;border-radius:8px;display:block;margin:auto}button{margin-top:8px;padding:10px 16px;border:none;border-radius:8px;background:#f59e0b;color:#1a1200}',
      jsCode: 'var c=document.getElementById("eq"),x=c.getContext("2d"),t=0,run=false;\nfunction loop(){if(!run)return;x.clearRect(0,0,300,200);x.fillStyle="#fff";x.beginPath();x.arc(150,100,4,0,7);x.fill();\nx.strokeStyle="#ef4444";x.beginPath();x.arc(150,100,t*1.5,0,7);x.stroke();\nx.strokeStyle="#2563eb";x.beginPath();x.arc(150,100,t,0,7);x.stroke();\nt+=1.5;if(t<160)requestAnimationFrame(loop);else run=false;}\ndocument.getElementById("go").onclick=function(){t=0;run=true;loop();};'
    }
  ];
  /* ---------- D. Three.js / GSAP / SVG / Canvas（15） ---------- */
  // Three.js 與 GSAP 的完整單檔以 fullCode 提供（透過 CDN 載入），並附載入失敗提示。
  var THREE_CDN = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
  var GSAP_CDN = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';

  function threeFull(title, bodyJs) {
    return '<!DOCTYPE html>\n<html lang="zh-Hant"><head><meta charset="UTF-8">\n' +
'<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
'<title>' + title + '</title>\n' +
'<style>body{margin:0;overflow:hidden;background:#05070f;font-family:sans-serif}#fallback{color:#fff;padding:20px;display:none}</style>\n' +
'</head><body>\n<div id="fallback">3D 元件（Three.js）載入失敗，請確認網路連線後重新整理。</div>\n' +
'<script src="' + THREE_CDN + '" onerror="document.getElementById(\'fallback\').style.display=\'block\'"><\/script>\n' +
'<script>\nwindow.addEventListener("load",function(){\n  if(typeof THREE==="undefined"){document.getElementById("fallback").style.display="block";return;}\n' + bodyJs + '\n});\n<\/script>\n</body></html>';
  }

  var groupD = [
    {
      id: "td-001", title: "Three.js 旋轉地球", titleEn: "Three.js Rotating Earth",
      type: "Three.js 案例", subjects: ["自然科學", "地球科學"],
      topics: ["地球", "自轉", "3D"], gradeLevels: ["國小高年級", "國中", "高中"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "WebGL", "Three.js"],
      interactionTypes: ["3D 操作"], libraries: ["Three.js"], requiresLibrary: true,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: false, featured: true, hasFullCode: true,
      description: "以 Three.js 建立一顆持續自轉的 3D 地球，示範 WebGL 基礎場景。",
      teachingApplication: "說明地球自轉與晝夜形成，作為天文教材的立體視覺。",
      learningObjectives: ["認識 3D 場景組成", "理解地球自轉"],
      teacherGuide: "討論自轉方向與晝夜關係。",
      studentTask: "為地球加上月球或標記台灣位置。",
      scienceFairApplication: "延伸為時區與季節模擬。",
      buildTime: "2～3 小時",
      techAnalysis: "建立 Scene、PerspectiveCamera、WebGLRenderer，以球體 Mesh 貼上材質，於 animate 迴圈中旋轉。透過 CDN 載入 Three.js。",
      performanceNotes: "限制像素比、頁籤隱藏時暫停 render，可降低耗電。",
      mobileNotes: "行動裝置需支援 WebGL；控制紋理解析度避免記憶體壓力。",
      accessibilityNotes: "3D 為視覺內容，建議另提供文字說明與靜態圖。",
      modifyTips: ["替換球體貼圖 URL", "調整自轉速度", "加入 OrbitControls 可拖曳旋轉"],
      thumbnail: "", referenceUrl: "https://threejs.org/",
      license: "本站示範程式碼；Three.js 為 MIT 授權",
      tags: ["Three.js", "地球", "3D", "WebGL"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      fullCode: threeFull("Three.js 旋轉地球",
'  var scene=new THREE.Scene();\n  var cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.1,100);cam.position.z=3;\n  var r=new THREE.WebGLRenderer({antialias:true});r.setPixelRatio(Math.min(2,devicePixelRatio));r.setSize(innerWidth,innerHeight);document.body.appendChild(r.domElement);\n  var geo=new THREE.SphereGeometry(1,48,48);\n  var mat=new THREE.MeshPhongMaterial({color:0x2266cc,emissive:0x0a1f44,shininess:8});\n  var earth=new THREE.Mesh(geo,mat);scene.add(earth);\n  scene.add(new THREE.AmbientLight(0x404040));\n  var light=new THREE.DirectionalLight(0xffffff,1);light.position.set(5,3,5);scene.add(light);\n  addEventListener("resize",function(){cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight);});\n  (function loop(){if(document.hidden){return requestAnimationFrame(loop);}earth.rotation.y+=0.005;r.render(scene,cam);requestAnimationFrame(loop);})();')
    },
    {
      id: "td-002", title: "Three.js 3D 幾何體", titleEn: "Three.js 3D Solids",
      type: "Three.js 案例", subjects: ["數學", "資訊教育"],
      topics: ["立體圖形", "幾何"], gradeLevels: ["國中", "高中"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "WebGL", "Three.js"],
      interactionTypes: ["3D 操作"], libraries: ["Three.js"], requiresLibrary: true,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: false, featured: false, hasFullCode: true,
      description: "旋轉的 3D 幾何體（如二十面體），示範立體圖形的頂點、邊與面。",
      teachingApplication: "認識立體圖形的組成與空間感。",
      learningObjectives: ["認識立體圖形", "建立空間旋轉概念"],
      teacherGuide: "討論頂點、邊、面的數量。",
      studentTask: "更換不同幾何體並數出面數。",
      scienceFairApplication: "延伸為結晶結構模型。",
      buildTime: "2 小時",
      techAnalysis: "使用 IcosahedronGeometry 搭配線框材質，animate 迴圈中旋轉。",
      performanceNotes: "低多邊形模型效能佳。",
      mobileNotes: "需 WebGL 支援。",
      accessibilityNotes: "建議附靜態展開圖。",
      modifyTips: ["更換 Geometry 類型", "切換 wireframe", "調整旋轉軸"],
      thumbnail: "", referenceUrl: "https://threejs.org/",
      license: "本站示範程式碼；Three.js 為 MIT 授權",
      tags: ["Three.js", "幾何", "3D"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      fullCode: threeFull("Three.js 3D 幾何體",
'  var scene=new THREE.Scene();var cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.1,100);cam.position.z=3;\n  var r=new THREE.WebGLRenderer({antialias:true});r.setPixelRatio(Math.min(2,devicePixelRatio));r.setSize(innerWidth,innerHeight);document.body.appendChild(r.domElement);\n  var geo=new THREE.IcosahedronGeometry(1,0);\n  var mesh=new THREE.Mesh(geo,new THREE.MeshPhongMaterial({color:0x0ea5a4,flatShading:true}));scene.add(mesh);\n  var wire=new THREE.LineSegments(new THREE.WireframeGeometry(geo),new THREE.LineBasicMaterial({color:0xffffff}));mesh.add(wire);\n  scene.add(new THREE.AmbientLight(0x555555));var l=new THREE.DirectionalLight(0xffffff,1);l.position.set(4,4,4);scene.add(l);\n  addEventListener("resize",function(){cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight);});\n  (function loop(){if(document.hidden){return requestAnimationFrame(loop);}mesh.rotation.x+=0.006;mesh.rotation.y+=0.008;r.render(scene,cam);requestAnimationFrame(loop);})();')
    },
    {
      id: "td-003", title: "Three.js 水分子模型", titleEn: "Three.js Water Molecule",
      type: "Three.js 案例", subjects: ["自然科學", "化學"],
      topics: ["分子", "水", "鍵結"], gradeLevels: ["國中", "高中"],
      difficulty: "專業", technologies: ["HTML", "JavaScript", "WebGL", "Three.js"],
      interactionTypes: ["3D 操作"], libraries: ["Three.js"], requiresLibrary: true,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: false, featured: true, hasFullCode: true,
      description: "以球棍模型呈現水分子（H₂O）的 3D 結構與鍵角。",
      teachingApplication: "視覺化分子結構、鍵角與極性概念。",
      learningObjectives: ["認識分子立體結構", "理解共價鍵"],
      teacherGuide: "討論水分子彎曲形狀與極性。",
      studentTask: "查找並建立其他分子（CO₂、CH₄）。",
      scienceFairApplication: "探究分子極性與溶解度。",
      buildTime: "3 小時",
      techAnalysis: "以球體代表原子、圓柱代表鍵結，依鍵角配置座標並整體旋轉。",
      performanceNotes: "原子數少，效能佳。",
      mobileNotes: "需 WebGL 支援。",
      accessibilityNotes: "建議附平面結構式。",
      modifyTips: ["修改原子座標建立其他分子", "更換原子顏色", "調整鍵角"],
      thumbnail: "", referenceUrl: "https://threejs.org/",
      license: "本站示範程式碼；Three.js 為 MIT 授權",
      tags: ["Three.js", "分子", "化學", "3D"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      fullCode: threeFull("Three.js 水分子模型",
'  var scene=new THREE.Scene();var cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.1,100);cam.position.z=5;\n  var r=new THREE.WebGLRenderer({antialias:true});r.setPixelRatio(Math.min(2,devicePixelRatio));r.setSize(innerWidth,innerHeight);document.body.appendChild(r.domElement);\n  var g=new THREE.Group();scene.add(g);\n  function atom(x,y,z,col,rad){var m=new THREE.Mesh(new THREE.SphereGeometry(rad,32,32),new THREE.MeshPhongMaterial({color:col}));m.position.set(x,y,z);g.add(m);return m;}\n  var O=atom(0,0,0,0xff4444,0.8);\n  var H1=atom(-1.2,0.9,0,0xffffff,0.45);var H2=atom(1.2,0.9,0,0xffffff,0.45);\n  function bond(a,b){var dir=b.position.clone().sub(a.position);var len=dir.length();var cyl=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,len,12),new THREE.MeshPhongMaterial({color:0xcccccc}));cyl.position.copy(a.position).add(b.position).multiplyScalar(0.5);cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.clone().normalize());g.add(cyl);}\n  bond(O,H1);bond(O,H2);\n  scene.add(new THREE.AmbientLight(0x666666));var l=new THREE.DirectionalLight(0xffffff,1);l.position.set(4,5,6);scene.add(l);\n  addEventListener("resize",function(){cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight);});\n  (function loop(){if(document.hidden){return requestAnimationFrame(loop);}g.rotation.y+=0.008;r.render(scene,cam);requestAnimationFrame(loop);})();')
    },
    {
      id: "td-004", title: "GSAP 進場時間軸動畫", titleEn: "GSAP Timeline Intro",
      type: "GSAP 案例", subjects: ["藝術教育", "資訊教育"],
      topics: ["動畫", "時間軸", "序列"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      interactionTypes: ["流程動畫"], libraries: ["GSAP"], requiresLibrary: true,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: true, featured: false, hasFullCode: true,
      description: "以 GSAP timeline 依序播放多個元素的進場動畫，示範專業級動畫排序。",
      teachingApplication: "製作教材開場、標題序列或重點依序呈現。",
      learningObjectives: ["認識時間軸動畫", "控制動畫序列與節奏"],
      teacherGuide: "說明 timeline 相對於單一動畫的優勢。",
      studentTask: "調整順序與緩動函式做出自己的開場。",
      scienceFairApplication: "製作研究成果的動態開場。",
      buildTime: "1～2 小時",
      techAnalysis: "使用 gsap.timeline() 串接多個 to() 動畫，透過 CDN 載入 GSAP，含載入失敗提示。",
      performanceNotes: "GSAP 以 transform 為主，效能佳；避免同時大量動畫。",
      mobileNotes: "行動裝置支援良好。",
      accessibilityNotes: "尊重 prefers-reduced-motion，可於減少動態時直接顯示。",
      modifyTips: ["調整 duration 與 ease", "增加動畫元素", "改變進場方向"],
      thumbnail: "", referenceUrl: "https://gsap.com/",
      license: "本站示範程式碼；GSAP 為其原授權",
      tags: ["GSAP", "時間軸", "動畫"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      fullCode: '<!DOCTYPE html>\n<html lang="zh-Hant"><head><meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>GSAP 進場時間軸動畫</title>\n<style>body{font-family:sans-serif;text-align:center;padding:40px;background:#0b1020;color:#fff}\n.box{width:80px;height:80px;margin:10px auto;border-radius:16px;background:#0ea5a4;opacity:0}\n#fb{display:none;color:#f59e0b}</style></head><body>\n<div id="fb">動畫元件（GSAP）載入失敗，請確認網路連線。</div>\n<div class="box" id="b1"></div><div class="box" id="b2" style="background:#2563eb"></div><div class="box" id="b3" style="background:#7c3aed"></div>\n<script src="' + GSAP_CDN + '" onerror="document.getElementById(\'fb\').style.display=\'block\';document.querySelectorAll(\'.box\').forEach(function(b){b.style.opacity=1})"><\/script>\n<script>\nwindow.addEventListener("load",function(){\n  if(typeof gsap==="undefined"){document.querySelectorAll(".box").forEach(function(b){b.style.opacity=1});return;}\n  var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;\n  if(reduce){document.querySelectorAll(".box").forEach(function(b){b.style.opacity=1});return;}\n  var tl=gsap.timeline();\n  tl.to("#b1",{opacity:1,y:0,duration:.6,ease:"back.out(1.7)"},0)\n    .from("#b1",{y:-40},0)\n    .to("#b2",{opacity:1,duration:.6},0.3).from("#b2",{x:-60},0.3)\n    .to("#b3",{opacity:1,duration:.6},0.6).from("#b3",{x:60},0.6);\n});\n<\/script>\n</body></html>'
    },
    {
      id: "td-005", title: "GSAP 捲動觸發敘事", titleEn: "GSAP Scroll Storytelling",
      type: "GSAP 案例", subjects: ["語文教育", "自然科學", "跨領域學習"],
      topics: ["捲動敘事", "動畫"], gradeLevels: ["國中", "高中"],
      difficulty: "進階", technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Intersection Observer"],
      interactionTypes: ["捲動", "流程動畫"], libraries: ["GSAP"], requiresLibrary: true,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: false, accessible: true, featured: true, hasFullCode: true,
      description: "捲動頁面時觸發段落動畫，打造互動式敘事教材。此版以 IntersectionObserver 觸發 GSAP 動畫（免額外外掛）。",
      teachingApplication: "製作科學故事、探究歷程或圖文並茂的捲動式教材。",
      learningObjectives: ["設計捲動敘事節奏", "結合捲動與動畫"],
      teacherGuide: "示範如何用敘事引導學習。",
      studentTask: "製作一頁捲動式研究故事。",
      scienceFairApplication: "以捲動敘事呈現研究過程。",
      buildTime: "2～3 小時",
      techAnalysis: "IntersectionObserver 偵測段落進入視窗，觸發 gsap 動畫；GSAP 由 CDN 載入含失敗提示。",
      performanceNotes: "以 IntersectionObserver 取代 scroll 監聽，效能佳。",
      mobileNotes: "行動裝置支援良好，動畫幅度適中。",
      accessibilityNotes: "減少動態時直接顯示內容，不影響閱讀。",
      modifyTips: ["增修段落內容", "調整動畫效果", "改變觸發門檻"],
      thumbnail: "", referenceUrl: "https://gsap.com/",
      license: "本站示範程式碼；GSAP 為其原授權",
      tags: ["GSAP", "捲動", "敘事"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      fullCode: '<!DOCTYPE html>\n<html lang="zh-Hant"><head><meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>GSAP 捲動敘事</title>\n<style>body{font-family:sans-serif;margin:0;background:#0b1020;color:#fff}\nsection{min-height:80vh;display:flex;align-items:center;justify-content:center;padding:20px}\n.card{max-width:400px;background:#16213b;padding:30px;border-radius:16px;opacity:0}\nh2{color:#0ea5a4}</style></head><body>\n<section><div class="card"><h2>第一站</h2><p>向下捲動，開始一段科學探索之旅。</p></div></section>\n<section><div class="card"><h2>第二站</h2><p>每個段落進入畫面時，會以動畫出現。</p></div></section>\n<section><div class="card"><h2>第三站</h2><p>這就是捲動敘事教材的基本做法。</p></div></section>\n<script src="' + GSAP_CDN + '" onerror="document.querySelectorAll(\'.card\').forEach(function(c){c.style.opacity=1})"><\/script>\n<script>\nwindow.addEventListener("load",function(){\n  var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;\n  var cards=document.querySelectorAll(".card");\n  if(typeof gsap==="undefined"||reduce){cards.forEach(function(c){c.style.opacity=1});return;}\n  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){gsap.to(e.target,{opacity:1,y:0,duration:.8,ease:"power2.out"});gsap.from(e.target,{y:50,duration:.8});io.unobserve(e.target);}});},{threshold:.4});\n  cards.forEach(function(c){io.observe(c);});\n});\n<\/script>\n</body></html>'
    },
    {
      id: "td-006", title: "SVG 光的路徑圖", titleEn: "SVG Light Path",
      type: "SVG 案例", subjects: ["自然科學", "物理"],
      topics: ["光", "反射", "路徑"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript", "SVG"],
      interactionTypes: ["滑桿", "流程動畫"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 SVG 繪製光線在鏡面反射的路徑，並用 stroke-dashoffset 呈現光行進動畫。",
      teachingApplication: "說明入射角等於反射角的反射定律。",
      learningObjectives: ["理解反射定律", "認識 SVG 路徑動畫"],
      teacherGuide: "對照雷射筆與鏡子實驗。",
      studentTask: "畫出光線經兩面鏡的路徑。",
      scienceFairApplication: "探究潛望鏡原理。",
      buildTime: "1.5 小時",
      techAnalysis: "以 SVG polyline 表示光路，透過 stroke-dasharray/offset 製作行進動畫。",
      performanceNotes: "SVG 動畫由瀏覽器最佳化，效能佳。",
      mobileNotes: "SVG 向量縮放不失真。",
      accessibilityNotes: "提供文字說明反射角度。",
      modifyTips: ["修改反射點座標", "調整動畫速度", "更換光線顏色"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["SVG", "光", "反射", "路徑動畫"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<svg viewBox="0 0 300 160" width="100%">\n  <rect x="0" y="140" width="300" height="8" fill="#94a3b8"/>\n  <polyline id="ray" points="20,20 150,140 280,20" fill="none" stroke="#f59e0b" stroke-width="3"/>\n</svg>\n<p style="text-align:center;font-family:sans-serif">入射角 = 反射角</p>',
      cssCode: '#ray{stroke-dasharray:400;stroke-dashoffset:400;animation:go 2s linear infinite}\n@keyframes go{to{stroke-dashoffset:0}}\n@media(prefers-reduced-motion:reduce){#ray{animation:none;stroke-dashoffset:0}}',
      jsCode: ''
    },
    {
      id: "td-007", title: "SVG 電路示意圖", titleEn: "SVG Circuit Diagram",
      type: "SVG 案例", subjects: ["自然科學", "物理", "資訊教育"],
      topics: ["電路", "電流"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript", "SVG"],
      interactionTypes: ["點擊", "流程動畫"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 SVG 繪製簡易電路，並用移動圓點示意電流方向。",
      teachingApplication: "呈現電流流向與電路符號。",
      learningObjectives: ["認識電路符號", "理解電流方向"],
      teacherGuide: "對照實體電路連接。",
      studentTask: "畫出含開關的電路圖。",
      scienceFairApplication: "設計電路解謎關卡。",
      buildTime: "1.5 小時",
      techAnalysis: "以 SVG 線段組成電路，沿路徑以動畫移動圓點示意電流。",
      performanceNotes: "SVG 動畫效能佳。",
      mobileNotes: "向量縮放清晰。",
      accessibilityNotes: "以文字說明電流方向。",
      modifyTips: ["修改電路形狀", "調整電流速度", "加入元件符號"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["SVG", "電路", "電流"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<svg viewBox="0 0 200 140" width="100%">\n  <rect x="20" y="20" width="160" height="100" fill="none" stroke="#2563eb" stroke-width="3" rx="8"/>\n  <rect x="10" y="60" width="20" height="20" fill="#f59e0b"/>\n  <circle r="5" fill="#ef4444"><animateMotion dur="3s" repeatCount="indefinite" path="M20,20 H180 V120 H20 Z"/></circle>\n</svg>\n<p style="text-align:center;font-family:sans-serif">紅點示意電流方向</p>',
      cssCode: '@media(prefers-reduced-motion:reduce){animateMotion{display:none}}',
      jsCode: ''
    },
    {
      id: "td-008", title: "SVG 植物構造標註", titleEn: "SVG Plant Anatomy",
      type: "SVG 案例", subjects: ["自然科學", "生物"],
      topics: ["植物構造", "標註"], gradeLevels: ["國小中年級", "國小高年級"],
      difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "SVG"],
      interactionTypes: ["滑鼠移入", "點擊"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 SVG 繪製植物並在滑鼠移入時醒目標示各部位。",
      teachingApplication: "認識植物根、莖、葉、花各部位。",
      learningObjectives: ["認識植物構造", "連結構造與功能"],
      teacherGuide: "移入各部位並說明功能。",
      studentTask: "標註實體植物照片。",
      scienceFairApplication: "觀察不同植物構造差異。",
      buildTime: "1.5 小時",
      techAnalysis: "以 SVG 形狀分層繪製，hover 時改變填色並顯示名稱。",
      performanceNotes: "SVG 向量繪圖效能佳。",
      mobileNotes: "改以點擊觸發，向量縮放清晰。",
      accessibilityNotes: "各部位以 title 提供名稱。",
      modifyTips: ["修改部位顏色", "新增部位", "加入說明面板"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["SVG", "植物", "構造", "標註"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<svg viewBox="0 0 200 200" width="220">\n  <g class="part"><title>葉</title><ellipse cx="70" cy="70" rx="30" ry="16" fill="#4caf50"/></g>\n  <g class="part"><title>花</title><circle cx="130" cy="60" r="18" fill="#e91e63"/></g>\n  <g class="part"><title>莖</title><rect x="96" y="70" width="8" height="90" fill="#2e7d32"/></g>\n  <g class="part"><title>根</title><path d="M100,160 L80,195 M100,160 L120,195 M100,160 L100,198" stroke="#795548" stroke-width="5" fill="none"/></g>\n</svg>\n<p style="font-family:sans-serif">將滑鼠移到各部位（或點擊）看名稱</p>',
      cssCode: '.part{cursor:pointer;transition:.2s}.part:hover *{filter:brightness(1.3);stroke:#f59e0b;stroke-width:3}',
      jsCode: 'document.querySelectorAll(".part").forEach(function(p){p.addEventListener("click",function(){alert("這是："+p.querySelector("title").textContent);});});'
    },
    {
      id: "td-009", title: "Canvas 拋射運動", titleEn: "Canvas Projectile Motion",
      type: "Canvas 案例", subjects: ["自然科學", "物理", "數學"],
      topics: ["拋射", "重力", "軌跡"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["滑桿", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: true, hasFullCode: true,
      description: "調整發射角度與初速，觀察拋射體的拋物線軌跡。",
      teachingApplication: "說明拋射運動的水平與垂直分量。",
      learningObjectives: ["理解拋射運動", "認識重力影響"],
      teacherGuide: "討論最大射程的角度。",
      studentTask: "找出射程最遠的發射角。",
      scienceFairApplication: "探究不同角度的射程。",
      buildTime: "2 小時",
      techAnalysis: "以運動方程式更新座標，Canvas 繪製軌跡與物體，requestAnimationFrame 動畫。",
      performanceNotes: "動畫結束後停止；可暫停高成本迴圈。",
      mobileNotes: "滑桿觸控友善，Canvas 自適應。",
      accessibilityNotes: "角度與速度以文字顯示。",
      modifyTips: ["修改重力常數", "改變初速範圍", "加入空氣阻力"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "拋射", "物理", "模擬"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="pj" width="320" height="200"></canvas><br>\n<label>角度 <input id="ang" type="range" min="10" max="80" value="45"></label>\n<label>初速 <input id="spd" type="range" min="20" max="70" value="50"></label>\n<button id="fire">發射</button>',
      cssCode: 'body{text-align:center;font-family:sans-serif}canvas{background:#eef4ff;border-radius:8px;display:block;margin:auto}label{display:inline-block;margin:4px}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
      jsCode: 'var c=document.getElementById("pj"),x=c.getContext("2d");\ndocument.getElementById("fire").onclick=function(){\n  var a=document.getElementById("ang").value*Math.PI/180,v=document.getElementById("spd").value/8,t=0;\n  var pts=[];\n  (function loop(){t+=0.4;var px=20+v*Math.cos(a)*t*4,py=190-(v*Math.sin(a)*t*4-0.5*9.8*t*t*0.6);pts.push([px,py]);\n  x.clearRect(0,0,320,200);x.strokeStyle="#94a3b8";x.beginPath();pts.forEach(function(p,i){i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]);});x.stroke();\n  x.fillStyle="#ef4444";x.beginPath();x.arc(px,py,6,0,7);x.fill();\n  if(py<200&&px<320)requestAnimationFrame(loop);})();\n};'
    },
    {
      id: "td-010", title: "Canvas 正弦波形", titleEn: "Canvas Sine Wave",
      type: "Canvas 案例", subjects: ["自然科學", "物理", "數學"],
      topics: ["波", "振幅", "頻率"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["滑桿", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以滑桿調整振幅與頻率，即時繪製流動的正弦波。",
      teachingApplication: "說明波的振幅、頻率與波長概念。",
      learningObjectives: ["認識波形參數", "理解振幅與頻率"],
      teacherGuide: "連結聲音大小與音高。",
      studentTask: "調出指定的波形。",
      scienceFairApplication: "分析聲音波形。",
      buildTime: "1.5 小時",
      techAnalysis: "以 sin 函式逐點繪製波形，時間偏移產生流動效果。",
      performanceNotes: "可於頁籤隱藏時暫停動畫。",
      mobileNotes: "滑桿觸控友善。",
      accessibilityNotes: "參數以文字顯示。",
      modifyTips: ["修改顏色", "加入第二條波", "改為餘弦波"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "波形", "正弦", "物理"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="wv" width="320" height="160"></canvas><br>\n<label>振幅 <input id="amp" type="range" min="10" max="60" value="40"></label>\n<label>頻率 <input id="frq" type="range" min="1" max="8" value="3"></label>',
      cssCode: 'body{text-align:center;font-family:sans-serif}canvas{background:#0b1020;border-radius:8px;display:block;margin:auto}',
      jsCode: 'var c=document.getElementById("wv"),x=c.getContext("2d"),t=0;\nfunction loop(){if(document.hidden){return requestAnimationFrame(loop);}var A=+document.getElementById("amp").value,F=+document.getElementById("frq").value;\nx.clearRect(0,0,320,160);x.strokeStyle="#0ea5a4";x.lineWidth=2;x.beginPath();\nfor(var px=0;px<320;px++){var py=80+A*Math.sin((px/320*F*6.28)+t);px?x.lineTo(px,py):x.moveTo(px,py);}x.stroke();t+=0.08;requestAnimationFrame(loop);}\nloop();'
    },
    {
      id: "td-011", title: "Canvas 布朗運動", titleEn: "Canvas Brownian Motion",
      type: "Canvas 案例", subjects: ["自然科學", "物理", "化學"],
      topics: ["布朗運動", "粒子", "擴散"], gradeLevels: ["國中", "高中"],
      difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "模擬懸浮粒子受分子撞擊而隨機移動的布朗運動。",
      teachingApplication: "說明分子運動與擴散現象。",
      learningObjectives: ["認識布朗運動", "理解隨機運動"],
      teacherGuide: "連結墨水在水中擴散的現象。",
      studentTask: "觀察並描述粒子路徑特徵。",
      scienceFairApplication: "探究溫度對擴散速率的影響。",
      buildTime: "1.5 小時",
      techAnalysis: "每幀對每個粒子加上隨機位移，Canvas 重繪。",
      performanceNotes: "控制粒子數；頁籤隱藏可暫停。",
      mobileNotes: "Canvas 自適應。",
      accessibilityNotes: "純模擬，附文字說明。",
      modifyTips: ["修改粒子數", "調整步長（模擬溫度）", "改變顏色"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "布朗運動", "粒子", "擴散"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="bm" width="300" height="200"></canvas>',
      cssCode: 'canvas{background:#0b1020;border-radius:8px;display:block;margin:auto}',
      jsCode: 'var c=document.getElementById("bm"),x=c.getContext("2d"),ps=[];\nfor(var i=0;i<30;i++)ps.push({x:150,y:100,c:"hsl("+(i*12)+",70%,60%)"});\nfunction loop(){if(document.hidden){return requestAnimationFrame(loop);}x.fillStyle="rgba(11,16,32,.15)";x.fillRect(0,0,300,200);ps.forEach(function(p){p.x+=(Math.random()-.5)*6;p.y+=(Math.random()-.5)*6;p.x=Math.max(0,Math.min(300,p.x));p.y=Math.max(0,Math.min(200,p.y));x.fillStyle=p.c;x.beginPath();x.arc(p.x,p.y,3,0,7);x.fill();});requestAnimationFrame(loop);}\nloop();'
    },
    {
      id: "td-012", title: "Canvas 折線資料圖", titleEn: "Canvas Line Chart",
      type: "Canvas 案例", subjects: ["數學", "自然科學", "資訊教育"],
      topics: ["資料視覺化", "折線圖"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "初階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["互動圖表"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 Canvas 手動繪製折線圖，示範不依賴圖表庫的資料視覺化。",
      teachingApplication: "呈現觀測數據趨勢，如氣溫、生長紀錄。",
      learningObjectives: ["讀懂折線圖", "資料與圖形對應"],
      teacherGuide: "帶學生解讀趨勢與轉折。",
      studentTask: "輸入自己的觀測資料繪圖。",
      scienceFairApplication: "呈現實驗連續數據。",
      buildTime: "1.5 小時",
      techAnalysis: "計算資料點座標並以 lineTo 連線，繪製座標軸與資料點。",
      performanceNotes: "靜態繪製一次即可，成本低。",
      mobileNotes: "Canvas 自適應寬度。",
      accessibilityNotes: "建議另附資料表格供讀取。",
      modifyTips: ["修改 data 陣列", "加入座標標籤", "改變顏色"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "折線圖", "資料視覺化"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="ch" width="320" height="200"></canvas>',
      cssCode: 'canvas{background:#fff;border:1px solid #cbd5e1;border-radius:8px;display:block;margin:auto}',
      jsCode: 'var c=document.getElementById("ch"),x=c.getContext("2d");\nvar data=[20,35,30,50,45,70,65];\nvar w=320,h=200,pad=30,max=Math.max.apply(null,data);\nx.strokeStyle="#cbd5e1";x.beginPath();x.moveTo(pad,10);x.lineTo(pad,h-pad);x.lineTo(w-10,h-pad);x.stroke();\nx.strokeStyle="#2563eb";x.lineWidth=2;x.beginPath();\ndata.forEach(function(v,i){var px=pad+i*(w-pad-20)/(data.length-1),py=(h-pad)-v/max*(h-pad-20);i?x.lineTo(px,py):x.moveTo(px,py);});x.stroke();\nx.fillStyle="#ef4444";data.forEach(function(v,i){var px=pad+i*(w-pad-20)/(data.length-1),py=(h-pad)-v/max*(h-pad-20);x.beginPath();x.arc(px,py,4,0,7);x.fill();});'
    },
    {
      id: "td-013", title: "Canvas 星空背景", titleEn: "Canvas Starfield",
      type: "Canvas 案例", subjects: ["自然科學", "地球科學", "藝術教育"],
      topics: ["星空", "粒子", "背景"], gradeLevels: ["國小高年級", "國中", "高中"],
      difficulty: "初階", technologies: ["HTML", "Canvas", "JavaScript"],
      interactionTypes: ["即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 Canvas 繪製緩慢閃爍與飄移的星空，適合天文教材背景。",
      teachingApplication: "作為天文主題教材的沉浸式背景。",
      learningObjectives: ["認識動畫迴圈", "體會情境營造"],
      teacherGuide: "討論如何用背景營造主題氛圍。",
      studentTask: "調整星星數量與速度。",
      scienceFairApplication: "作為星象觀測報告背景。",
      buildTime: "1 小時",
      techAnalysis: "隨機分布星點，透過 alpha 變化模擬閃爍，緩慢飄移。",
      performanceNotes: "控制星星數量；頁籤隱藏可暫停。",
      mobileNotes: "自適應視窗大小。",
      accessibilityNotes: "純裝飾，建議於減少動態時改為靜態。",
      modifyTips: ["修改星星數量", "調整飄移速度", "改變星星顏色"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "星空", "背景", "天文"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="sky" width="320" height="200"></canvas>',
      cssCode: 'canvas{background:#05070f;border-radius:8px;display:block;margin:auto}',
      jsCode: 'var c=document.getElementById("sky"),x=c.getContext("2d"),stars=[];\nfor(var i=0;i<80;i++)stars.push({x:Math.random()*320,y:Math.random()*200,r:Math.random()*1.5,p:Math.random()*6});\nvar reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;\nfunction loop(){if(document.hidden){return requestAnimationFrame(loop);}x.clearRect(0,0,320,200);stars.forEach(function(s){s.p+=0.05;var a=0.5+0.5*Math.sin(s.p);x.fillStyle="rgba(255,255,255,"+a+")";x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill();s.x-=0.15;if(s.x<0)s.x=320;});if(!reduce)requestAnimationFrame(loop);}\nif(reduce){stars.forEach(function(s){x.fillStyle="#fff";x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill();});}else loop();'
    },
    {
      id: "td-014", title: "SVG 圓餅圖", titleEn: "SVG Pie Chart",
      type: "SVG 案例", subjects: ["數學", "資訊教育", "社會領域"],
      topics: ["圓餅圖", "百分比", "資料視覺化"], gradeLevels: ["國小高年級", "國中"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "SVG"],
      interactionTypes: ["互動圖表"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 SVG 動態產生圓餅圖，示範以角度計算扇形路徑。",
      teachingApplication: "呈現比例與百分比資料，如班級調查結果。",
      learningObjectives: ["理解百分比與圓餅圖", "認識角度計算"],
      teacherGuide: "帶學生把資料換算成角度。",
      studentTask: "用自己的調查資料製作圓餅圖。",
      scienceFairApplication: "呈現分類統計結果。",
      buildTime: "2 小時",
      techAnalysis: "依各項比例計算起訖角度，以極座標換算 SVG path 的弧線指令。",
      performanceNotes: "靜態產生一次，成本低。",
      mobileNotes: "SVG 向量縮放清晰。",
      accessibilityNotes: "各扇形以 title 標示名稱與比例。",
      modifyTips: ["修改 data 資料", "更換配色", "加入圖例"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["SVG", "圓餅圖", "資料視覺化", "數學"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<svg id="pie" viewBox="0 0 200 200" width="220"></svg>\n<p style="text-align:center;font-family:sans-serif">SVG 動態圓餅圖</p>',
      cssCode: 'svg{display:block;margin:auto}',
      jsCode: 'var data=[["蘋果",4,"#2563eb"],["香蕉",3,"#0ea5a4"],["橘子",2,"#f59e0b"],["葡萄",1,"#7c3aed"]];\nvar total=data.reduce(function(s,d){return s+d[1];},0),ang=-90,svg=document.getElementById("pie");\nfunction pt(a){var r=a*Math.PI/180;return [100+90*Math.cos(r),100+90*Math.sin(r)];}\ndata.forEach(function(d){var next=ang+d[1]/total*360,a=pt(ang),b=pt(next),large=(d[1]/total>0.5)?1:0;\nvar path=document.createElementNS("http://www.w3.org/2000/svg","path");\npath.setAttribute("d","M100,100 L"+a[0]+","+a[1]+" A90,90 0 "+large+" 1 "+b[0]+","+b[1]+" Z");\npath.setAttribute("fill",d[2]);\nvar t=document.createElementNS("http://www.w3.org/2000/svg","title");t.textContent=d[0]+"："+Math.round(d[1]/total*100)+"%";path.appendChild(t);\nsvg.appendChild(path);ang=next;});'
    },
    {
      id: "td-015", title: "Canvas 聲音頻譜視覺化", titleEn: "Canvas Audio Visualizer",
      type: "Canvas 案例", subjects: ["自然科學", "物理", "藝術教育"],
      topics: ["聲音", "頻譜", "Web Audio"], gradeLevels: ["國中", "高中"],
      difficulty: "進階", technologies: ["HTML", "Canvas", "JavaScript", "Web Audio API"],
      interactionTypes: ["聲音互動", "即時模擬"], libraries: [], requiresLibrary: false,
      mobileFriendly: true, tabletFriendly: true, offlineFriendly: true, accessible: true, featured: false, hasFullCode: true,
      description: "以 Web Audio API 產生音調並用 Canvas 繪製即時頻譜（需使用者點擊後才發聲，不自動播放）。",
      teachingApplication: "視覺化聲音頻率，連結音高與頻率概念。",
      learningObjectives: ["認識聲音頻率", "理解頻譜視覺化"],
      teacherGuide: "說明為何需使用者互動後才播放聲音。",
      studentTask: "調整頻率觀察頻譜變化。",
      scienceFairApplication: "分析不同樂器的頻譜。",
      buildTime: "2～3 小時",
      techAnalysis: "以 AudioContext 建立 Oscillator 與 Analyser，getByteFrequencyData 取得頻譜資料並以 Canvas 繪製長條。",
      performanceNotes: "使用者停止後關閉 AudioContext，避免持續耗用資源。",
      mobileNotes: "行動裝置需使用者手勢才能啟動音訊。",
      accessibilityNotes: "不自動播放聲音，提供開始／停止按鈕與文字狀態。",
      modifyTips: ["修改振盪器頻率", "更換波形類型", "調整長條顏色"],
      thumbnail: "", referenceUrl: "", license: "本站示範程式碼",
      tags: ["Canvas", "Web Audio", "頻譜", "聲音"], createdAt: "2026-07-22", updatedAt: "2026-07-22",
      htmlCode: '<canvas id="viz" width="320" height="150"></canvas><br>\n<button id="toggle">▶ 開始發聲</button>\n<label>頻率 <input id="freq" type="range" min="100" max="1000" value="440"></label>',
      cssCode: 'body{text-align:center;font-family:sans-serif}canvas{background:#0b1020;border-radius:8px;display:block;margin:auto}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:6px}',
      jsCode: 'var c=document.getElementById("viz"),x=c.getContext("2d"),ctx=null,osc=null,an=null,playing=false;\ndocument.getElementById("toggle").onclick=function(){\n  if(!playing){ctx=new (window.AudioContext||window.webkitAudioContext)();osc=ctx.createOscillator();an=ctx.createAnalyser();an.fftSize=64;osc.frequency.value=+document.getElementById("freq").value;osc.connect(an);an.connect(ctx.destination);osc.start();playing=true;this.textContent="⏸ 停止";draw();}\n  else{osc.stop();ctx.close();playing=false;this.textContent="▶ 開始發聲";}\n};\ndocument.getElementById("freq").addEventListener("input",function(){if(osc)osc.frequency.value=+this.value;});\nfunction draw(){if(!playing)return;var d=new Uint8Array(an.frequencyBinCount);an.getByteFrequencyData(d);x.clearRect(0,0,320,150);var bw=320/d.length;d.forEach(function(v,i){x.fillStyle="hsl("+(i*10)+",70%,55%)";x.fillRect(i*bw,150-v/2,bw-2,v/2);});requestAnimationFrame(draw);}'
    }
  ];

  // 第二階段擴充案例（若已載入 js/data-phase2.js 則一併併入）
  var phase2 = (window.DATA_PHASE2 && window.DATA_PHASE2.examples) || [];

  window.DATA = {
    updatedAt: "2026-07-23",
    examples: groupA.concat(groupB, groupC, groupD, phase2)
  };
})();
