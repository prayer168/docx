/* ============================================================
   data-phase2b.js — 第二階段擴充（續一）：UI 互動元件、捲動敘事、遊戲化學習
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return; // 需先載入 data-phase2.js
  var push = function (o) { window.__P2.push(window.__P2mk(o)); };

  /* ================= UI 互動元件（10） ================= */
  push({ id: "ui-001", title: "手風琴摺疊面板", titleEn: "Accordion", type: "UI 互動元件",
    subjects: ["資訊教育", "跨領域學習"], topics: ["摺疊", "常見問答", "資訊組織"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "點擊標題展開／收合內容，一次聚焦一段，適合常見問答與分段教材。",
    teachingApplication: "整理長篇內容為可摺疊段落，降低一次呈現的認知負荷。",
    learningObjectives: ["認識漸進揭露設計", "以 aria-expanded 表達展開狀態"],
    accessibilityNotes: "標題為 button，具 aria-expanded；可用鍵盤操作。",
    tags: ["手風琴", "摺疊", "FAQ", "UI"],
    htmlCode: '<div class="acc">\n  <button class="acc__h" aria-expanded="false">什麼是光合作用？</button>\n  <div class="acc__p" hidden>植物利用光能將二氧化碳和水轉化為養分的過程。</div>\n  <button class="acc__h" aria-expanded="false">植物需要哪些條件？</button>\n  <div class="acc__p" hidden>陽光、水、二氧化碳與適當溫度。</div>\n</div>',
    cssCode: 'body{font-family:sans-serif;max-width:340px;margin:auto}\n.acc__h{width:100%;text-align:left;padding:14px;border:none;background:#2563eb;color:#fff;border-radius:8px;margin-top:6px}\n.acc__h[aria-expanded=true]{background:#0ea5a4}\n.acc__p{padding:12px;background:#eef4ff;border-radius:0 0 8px 8px}',
    jsCode: 'document.querySelector(".acc").addEventListener("click",function(e){var h=e.target.closest(".acc__h");if(!h)return;var open=h.getAttribute("aria-expanded")==="true";h.setAttribute("aria-expanded",!open);h.nextElementSibling.hidden=open;});' });

  push({ id: "ui-002", title: "分頁標籤切換", titleEn: "Tabs", type: "UI 互動元件",
    subjects: ["資訊教育"], topics: ["分頁", "內容切換"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "鍵盤操作"],
    description: "以分頁在同一區塊切換不同內容，節省版面空間。",
    teachingApplication: "將相關內容分頁呈現，如「說明／範例／練習」。",
    learningObjectives: ["認識分頁模式", "以 role=tab 建立語意"],
    accessibilityNotes: "使用 role=tab/tabpanel 與 aria-selected，可鍵盤操作。",
    tags: ["分頁", "tabs", "切換", "UI"],
    htmlCode: '<div class="tabs" role="tablist">\n  <button role="tab" aria-selected="true" data-i="0">說明</button>\n  <button role="tab" aria-selected="false" data-i="1">範例</button>\n  <button role="tab" aria-selected="false" data-i="2">練習</button>\n</div>\n<div class="panel">這是說明內容。</div>\n<div class="panel" hidden>這是範例內容。</div>\n<div class="panel" hidden>這是練習內容。</div>',
    cssCode: 'body{font-family:sans-serif;max-width:340px;margin:auto}\n.tabs{display:flex;gap:4px}\n.tabs button{flex:1;padding:10px;border:none;background:#e2e8f0;border-radius:8px 8px 0 0}\n.tabs button[aria-selected=true]{background:#2563eb;color:#fff}\n.panel{padding:16px;background:#eef4ff;border-radius:0 0 8px 8px}',
    jsCode: 'var tabs=document.querySelectorAll("[role=tab]"),panels=document.querySelectorAll(".panel");\ndocument.querySelector(".tabs").addEventListener("click",function(e){var t=e.target.closest("[role=tab]");if(!t)return;tabs.forEach(function(x){x.setAttribute("aria-selected",x===t);});panels.forEach(function(p,i){p.hidden=i!=t.dataset.i;});});' });

  push({ id: "ui-003", title: "提示氣泡 Tooltip", titleEn: "Tooltip", type: "UI 互動元件",
    subjects: ["資訊教育", "語文教育"], topics: ["提示", "名詞解釋"],
    difficulty: "入門", technologies: ["HTML", "CSS"], interactionTypes: ["滑鼠移入", "鍵盤操作"],
    description: "滑鼠移入或聚焦時顯示補充說明的小氣泡，適合名詞解釋。",
    teachingApplication: "為專有名詞加上即時解釋，不打斷閱讀。",
    learningObjectives: ["認識 tooltip 模式", "純 CSS 顯示提示"],
    accessibilityNotes: "以 focus 也能觸發，並可用 aria-describedby 關聯說明。",
    tags: ["tooltip", "提示", "名詞解釋", "UI"],
    htmlCode: '<p>細胞中的 <span class="tip" tabindex="0" data-tip="控制細胞活動的中心">細胞核<i></i></span> 很重要。</p>',
    cssCode: 'body{font-family:sans-serif;padding:40px;font-size:1.1rem}\n.tip{position:relative;color:#2563eb;border-bottom:1px dashed}\n.tip i{position:absolute;left:50%;bottom:130%;transform:translateX(-50%);background:#0b1020;color:#fff;padding:6px 10px;border-radius:6px;white-space:nowrap;font-size:.85rem;opacity:0;pointer-events:none;transition:.2s}\n.tip i::after{content:attr(data-tip)}\n.tip:hover i,.tip:focus i{opacity:1}\n.tip i::before{content:"";position:absolute;left:50%;top:100%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#0b1020}',
    jsCode: 'document.querySelectorAll(".tip").forEach(function(t){t.querySelector("i").setAttribute("data-tip",t.dataset.tip);});' });

  push({ id: "ui-004", title: "圓形進度環", titleEn: "Circular Progress", type: "UI 互動元件",
    subjects: ["資訊教育", "數學"], topics: ["進度", "百分比", "SVG"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript", "SVG"], interactionTypes: ["滑桿", "互動圖表"],
    description: "以 SVG 圓環顯示百分比進度，可用滑桿即時調整。",
    teachingApplication: "呈現完成度、目標達成率或比例。",
    learningObjectives: ["認識圓周與比例", "理解 stroke-dashoffset"],
    tags: ["進度環", "SVG", "百分比", "UI"],
    htmlCode: '<svg width="120" height="120" viewBox="0 0 120 120">\n  <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" stroke-width="12"/>\n  <circle id="ring" cx="60" cy="60" r="52" fill="none" stroke="#0ea5a4" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)"/>\n  <text id="t" x="60" y="68" text-anchor="middle" font-size="24" fill="#2563eb">0%</text>\n</svg>\n<br><input id="s" type="range" min="0" max="100" value="0">',
    cssCode: 'body{font-family:sans-serif;text-align:center}input{width:60%}',
    jsCode: 'var ring=document.getElementById("ring"),len=2*Math.PI*52;ring.style.strokeDasharray=len;\nvar s=document.getElementById("s"),t=document.getElementById("t");\nfunction upd(){ring.style.strokeDashoffset=len*(1-s.value/100);t.textContent=s.value+"%";}\ns.addEventListener("input",upd);upd();' });

  push({ id: "ui-005", title: "開關切換 Toggle", titleEn: "Toggle Switch", type: "UI 互動元件",
    subjects: ["資訊教育"], topics: ["開關", "布林狀態"],
    difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "鍵盤操作"],
    description: "可切換開／關的滑動開關，適合設定選項。",
    teachingApplication: "作為設定介面元件，說明布林（是／否）狀態。",
    learningObjectives: ["認識開關元件", "以 checkbox 建立無障礙開關"],
    accessibilityNotes: "以原生 checkbox 實作，可鍵盤操作並有 label。",
    tags: ["開關", "toggle", "設定", "UI"],
    htmlCode: '<label class="sw"><input type="checkbox" id="cb"><span class="track"></span> 深色模式</label>\n<p id="state">關閉</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:30px}\n.sw{display:inline-flex;align-items:center;gap:10px;cursor:pointer}\n.sw input{position:absolute;opacity:0}\n.track{width:52px;height:28px;background:#94a3b8;border-radius:999px;position:relative;transition:.2s}\n.track::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;background:#fff;border-radius:50%;transition:.2s}\n.sw input:checked+.track{background:#0ea5a4}\n.sw input:checked+.track::after{transform:translateX(24px)}\n.sw input:focus-visible+.track{outline:3px solid #f59e0b}',
    jsCode: 'document.getElementById("cb").addEventListener("change",function(){document.getElementById("state").textContent=this.checked?"開啟":"關閉";});' });

  push({ id: "ui-006", title: "數量步進器", titleEn: "Stepper", type: "UI 互動元件",
    subjects: ["數學", "資訊教育"], topics: ["加減", "數量控制"],
    difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "以加減按鈕調整數量，並限制在合理範圍內。",
    teachingApplication: "作為購物、材料計量或計數練習介面。",
    learningObjectives: ["認識數值範圍限制", "理解按鈕停用狀態"],
    tags: ["步進器", "數量", "加減", "UI"],
    htmlCode: '<div class="step"><button id="minus" aria-label="減少">−</button><span id="n" aria-live="polite">1</span><button id="plus" aria-label="增加">＋</button></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:40px}\n.step{display:inline-flex;align-items:center;gap:16px}\nbutton{width:44px;height:44px;border:none;border-radius:8px;background:#2563eb;color:#fff;font-size:1.3rem}\nbutton:disabled{background:#cbd5e1}\n#n{font-size:1.5rem;min-width:2ch}',
    jsCode: 'var n=1,el=document.getElementById("n"),min=0,max=10;\nfunction upd(){el.textContent=n;document.getElementById("minus").disabled=n<=min;document.getElementById("plus").disabled=n>=max;}\ndocument.getElementById("plus").onclick=function(){if(n<max){n++;upd();}};\ndocument.getElementById("minus").onclick=function(){if(n>min){n--;upd();}};upd();' });

  push({ id: "ui-007", title: "星等評分", titleEn: "Star Rating", type: "UI 互動元件",
    subjects: ["資訊教育", "藝術教育"], topics: ["評分", "回饋"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "滑鼠移入"],
    description: "點擊星星給予 1～5 分評分，滑鼠移入時預覽。",
    teachingApplication: "作為作品互評、滿意度或難度回饋介面。",
    learningObjectives: ["認識評分元件", "以狀態顯示選取"],
    accessibilityNotes: "星星為 button，具 aria-label，可鍵盤操作。",
    tags: ["評分", "星等", "回饋", "UI"],
    htmlCode: '<div class="stars" id="stars"></div><p id="out" aria-live="polite">尚未評分</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:30px}\n.stars button{font-size:2rem;border:none;background:none;color:#cbd5e1;cursor:pointer}\n.stars button.on{color:#f59e0b}',
    jsCode: 'var wrap=document.getElementById("stars"),out=document.getElementById("out"),cur=0;\nfor(var i=1;i<=5;i++){var b=document.createElement("button");b.textContent="★";b.dataset.v=i;b.setAttribute("aria-label",i+" 星");wrap.appendChild(b);}\nfunction paint(v){wrap.querySelectorAll("button").forEach(function(b){b.classList.toggle("on",b.dataset.v<=v);});}\nwrap.addEventListener("mouseover",function(e){if(e.target.dataset.v)paint(e.target.dataset.v);});\nwrap.addEventListener("mouseleave",function(){paint(cur);});\nwrap.addEventListener("click",function(e){if(e.target.dataset.v){cur=+e.target.dataset.v;paint(cur);out.textContent="你給了 "+cur+" 星";}});' });

  push({ id: "ui-008", title: "圖片輪播", titleEn: "Carousel", type: "UI 互動元件",
    subjects: ["藝術教育", "資訊教育"], topics: ["輪播", "圖片瀏覽"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "觸控"],
    description: "以左右按鈕與指示點切換多張內容，適合作品或步驟展示。",
    teachingApplication: "展示一系列圖片、步驟或作品集。",
    learningObjectives: ["認識輪播模式", "以索引控制顯示"],
    accessibilityNotes: "提供前後按鈕與指示點，不自動播放避免干擾。",
    tags: ["輪播", "carousel", "圖片", "UI"],
    htmlCode: '<div class="car"><button id="prev" aria-label="上一張">‹</button><div class="slide" id="slide">1</div><button id="next" aria-label="下一張">›</button></div><div class="dots" id="dots"></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:20px}\n.car{display:flex;align-items:center;justify-content:center;gap:10px}\n.slide{width:200px;height:120px;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:12px;font-size:2rem}\nbutton{width:40px;height:40px;border:none;border-radius:50%;background:#0ea5a4;color:#fff;font-size:1.2rem}\n.dots{margin-top:10px}.dots i{display:inline-block;width:10px;height:10px;border-radius:50%;background:#cbd5e1;margin:3px}\n.dots i.on{background:#2563eb}',
    jsCode: 'var slides=["🌱","🌿","🌸","🍎"],i=0,slide=document.getElementById("slide"),dots=document.getElementById("dots");\nslides.forEach(function(){var d=document.createElement("i");dots.appendChild(d);});\nfunction show(){slide.textContent=slides[i];dots.querySelectorAll("i").forEach(function(d,k){d.classList.toggle("on",k===i);});}\ndocument.getElementById("next").onclick=function(){i=(i+1)%slides.length;show();};\ndocument.getElementById("prev").onclick=function(){i=(i-1+slides.length)%slides.length;show();};show();' });

  push({ id: "ui-009", title: "麵包屑導覽", titleEn: "Breadcrumb", type: "UI 互動元件",
    subjects: ["資訊教育"], topics: ["導覽", "階層", "位置"],
    difficulty: "入門", technologies: ["HTML", "CSS"], interactionTypes: ["點擊"],
    description: "顯示目前所在的階層路徑，幫助使用者了解位置並回上層。",
    teachingApplication: "在多層教材中標示目前單元位置。",
    learningObjectives: ["認識階層導覽", "以 nav 與 aria-current 標示"],
    accessibilityNotes: "以 nav 包裹，目前頁面以 aria-current=page 標示。",
    tags: ["麵包屑", "breadcrumb", "導覽", "UI"],
    htmlCode: '<nav aria-label="麵包屑"><ol class="bc">\n  <li><a href="#">首頁</a></li>\n  <li><a href="#">自然科</a></li>\n  <li><a href="#">物理</a></li>\n  <li aria-current="page">光的折射</li>\n</ol></nav>',
    cssCode: 'body{font-family:sans-serif;padding:20px}\n.bc{list-style:none;display:flex;flex-wrap:wrap;gap:6px;padding:0}\n.bc li+li::before{content:"›";margin-right:6px;color:#94a3b8}\n.bc a{color:#2563eb;text-decoration:none}\n.bc [aria-current]{color:#64748b}',
    jsCode: '' });

  push({ id: "ui-010", title: "通知徽章與計數", titleEn: "Notification Badge", type: "UI 互動元件",
    subjects: ["資訊教育"], topics: ["徽章", "計數", "狀態"],
    difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "圖示上顯示未讀數量的小徽章，點擊清除。",
    teachingApplication: "示範狀態計數與清除，如未完成任務數。",
    learningObjectives: ["認識徽章計數", "以文字回饋狀態變化"],
    accessibilityNotes: "以 aria-label 讀出未讀數量。",
    tags: ["徽章", "badge", "通知", "UI"],
    htmlCode: '<button id="bell" class="bell" aria-label="通知，3 則未讀">🔔<span class="badge" id="badge">3</span></button>',
    cssCode: 'body{text-align:center;padding:40px}\n.bell{position:relative;font-size:2rem;border:none;background:none}\n.badge{position:absolute;top:-4px;right:-6px;background:#ef4444;color:#fff;font-size:.75rem;min-width:20px;height:20px;border-radius:999px;display:flex;align-items:center;justify-content:center;padding:0 4px}\n.badge[hidden]{display:none}',
    jsCode: 'var bell=document.getElementById("bell"),badge=document.getElementById("badge");\nbell.addEventListener("click",function(){badge.hidden=true;bell.setAttribute("aria-label","通知，沒有未讀");});' });

  /* ================= 捲動敘事（6） ================= */
  push({ id: "sc-001", title: "視差捲動背景", titleEn: "Parallax Scroll", type: "捲動敘事",
    subjects: ["藝術教育", "地球科學", "跨領域學習"], topics: ["視差", "景深", "捲動"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["捲動"],
    description: "前後景以不同速度捲動產生景深，營造沉浸式敘事氛圍。",
    teachingApplication: "製作具景深的捲動式故事或主題導覽開場。",
    learningObjectives: ["認識視差效果", "以捲動位置驅動動畫"],
    performanceNotes: "以 transform 位移並於 requestAnimationFrame 更新，避免頻繁重排。",
    accessibilityNotes: "尊重 prefers-reduced-motion，減少動態時停用視差。",
    tags: ["視差", "parallax", "捲動", "景深"],
    htmlCode: '<div class="hero"><div class="far" id="far">⭐️ ✨ ⭐️</div><h1>星空之旅</h1></div><div class="body">向下捲動看看視差效果。<br><br>'+Array.apply(null,Array(20)).map(function(){return '滿天星斗。<br>';}).join('')+'</div>',
    cssCode: 'body{margin:0;font-family:sans-serif}\n.hero{height:60vh;background:linear-gradient(#0b1020,#1e293b);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden}\n.far{position:absolute;top:20%;font-size:2rem;will-change:transform}\n.body{padding:20px;background:#0f172a;color:#cbd5e1}\n@media(prefers-reduced-motion:reduce){.far{display:none}}',
    jsCode: 'var far=document.getElementById("far");\nvar reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;\nif(!reduce)addEventListener("scroll",function(){far.style.transform="translateY("+(scrollY*0.4)+"px)";});' });

  push({ id: "sc-002", title: "閱讀進度條", titleEn: "Reading Progress Bar", type: "捲動敘事",
    subjects: ["語文教育", "資訊教育"], topics: ["進度", "捲動", "閱讀"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["捲動"],
    description: "頁面頂端顯示閱讀進度條，隨捲動填滿。",
    teachingApplication: "長篇教材頂端顯示閱讀進度，提供完成感。",
    learningObjectives: ["以捲動比例計算進度", "認識固定定位"],
    tags: ["進度條", "閱讀", "捲動"],
    htmlCode: '<div class="bar"><i id="p"></i></div><div class="doc">'+Array.apply(null,Array(30)).map(function(_,i){return '<p>第 '+(i+1)+' 段內容。</p>';}).join('')+'</div>',
    cssCode: 'body{margin:0;font-family:sans-serif}\n.bar{position:fixed;top:0;left:0;right:0;height:6px;background:#e2e8f0}\n#p{display:block;height:100%;width:0;background:linear-gradient(90deg,#2563eb,#0ea5a4)}\n.doc{padding:20px;margin-top:6px}',
    jsCode: 'var p=document.getElementById("p");\naddEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;p.style.width=(h>0?scrollY/h*100:0)+"%";});' });

  push({ id: "sc-003", title: "數字滾動計數", titleEn: "Count-up on Scroll", type: "捲動敘事",
    subjects: ["數學", "資訊教育"], topics: ["數字動畫", "捲動觸發"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "Intersection Observer"], interactionTypes: ["捲動"],
    description: "統計數字在捲動進入畫面時才從 0 遞增，強調關鍵數據。",
    teachingApplication: "強調重要統計數字，如成果、次數或比例。",
    learningObjectives: ["認識捲動觸發", "以 requestAnimationFrame 做數字動畫"],
    tags: ["數字動畫", "計數", "捲動", "統計"],
    htmlCode: '<div style="height:70vh"></div><div class="stat"><span class="num" data-to="1280">0</span> 位學生受惠</div><div style="height:60vh"></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.stat{font-size:1.4rem}\n.num{font-size:3rem;font-weight:900;color:#2563eb}',
    jsCode: 'var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target,to=+el.dataset.to,t0=null;function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1200,1);el.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);io.unobserve(el);}});});\ndocument.querySelectorAll(".num").forEach(function(n){io.observe(n);});' });

  push({ id: "sc-004", title: "章節側邊點導覽", titleEn: "Scroll Spy Nav", type: "捲動敘事",
    subjects: ["資訊教育", "語文教育"], topics: ["章節", "定位", "導覽"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript", "Intersection Observer"], interactionTypes: ["捲動", "點擊"],
    description: "側邊圓點標示目前所在章節，並可點擊跳轉。",
    teachingApplication: "長頁教材的章節定位與快速跳轉。",
    learningObjectives: ["認識 scroll spy", "以 IntersectionObserver 偵測目前區塊"],
    tags: ["scroll spy", "章節", "導覽", "捲動"],
    htmlCode: '<nav class="spy" id="spy"></nav>'+Array.apply(null,Array(4)).map(function(_,i){return '<section id="s'+i+'"><h2>章節 '+(i+1)+'</h2></section>';}).join(''),
    cssCode: 'body{font-family:sans-serif;margin:0}\nsection{height:70vh;display:flex;align-items:center;justify-content:center;background:#eef4ff;border-bottom:1px solid #cbd5e1}\n.spy{position:fixed;right:14px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:10px}\n.spy a{width:12px;height:12px;border-radius:50%;background:#cbd5e1}\n.spy a.on{background:#2563eb;transform:scale(1.4)}',
    jsCode: 'var spy=document.getElementById("spy"),secs=document.querySelectorAll("section");\nsecs.forEach(function(s){var a=document.createElement("a");a.href="#"+s.id;a.setAttribute("aria-label",s.querySelector("h2").textContent);spy.appendChild(a);});\nvar links=spy.querySelectorAll("a");\nvar io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=[].indexOf.call(secs,e.target);links.forEach(function(l,k){l.classList.toggle("on",k===i);});}});},{threshold:.5});\nsecs.forEach(function(s){io.observe(s);});' });

  push({ id: "sc-005", title: "捲動圖片淡入序列", titleEn: "Scroll Image Sequence", type: "捲動敘事",
    subjects: ["自然科學", "藝術教育", "跨領域學習"], topics: ["序列", "淡入", "捲動"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "Intersection Observer"], interactionTypes: ["捲動"],
    description: "多個步驟卡片隨捲動依序淡入，適合流程或圖解敘事。",
    teachingApplication: "以捲動節奏逐步揭露流程步驟或概念圖解。",
    learningObjectives: ["控制敘事節奏", "以觀察器觸發進場"],
    tags: ["序列", "淡入", "捲動", "流程"],
    htmlCode: '<div style="height:40vh"></div>'+Array.apply(null,Array(5)).map(function(_,i){return '<div class="step">步驟 '+(i+1)+'</div>';}).join('')+'<div style="height:40vh"></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.step{max-width:280px;margin:30px auto;padding:30px;background:#2563eb;color:#fff;border-radius:12px;opacity:0;transform:translateY(30px);transition:.6s}\n.step.show{opacity:1;transform:none}\n@media(prefers-reduced-motion:reduce){.step{opacity:1;transform:none;transition:none}}',
    jsCode: 'var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target);}});},{threshold:.3});\ndocument.querySelectorAll(".step").forEach(function(s){io.observe(s);});' });

  push({ id: "sc-006", title: "黏性標題章節", titleEn: "Sticky Section Header", type: "捲動敘事",
    subjects: ["資訊教育", "社會領域"], topics: ["sticky", "分段", "捲動"],
    difficulty: "初階", technologies: ["HTML", "CSS"], interactionTypes: ["捲動"],
    description: "章節標題捲動時黏在頂端，離開章節才換下一個，強化段落感。",
    teachingApplication: "長篇分段內容中隨時提示目前章節標題。",
    learningObjectives: ["認識 position:sticky", "以純 CSS 達成黏性標題"],
    tags: ["sticky", "黏性標題", "章節", "捲動"],
    htmlCode: Array.apply(null,Array(3)).map(function(_,i){return '<section><h2 class="sh">主題 '+(i+1)+'</h2>'+Array.apply(null,Array(8)).map(function(){return '<p>內容段落。</p>';}).join('')+'</section>';}).join(''),
    cssCode: 'body{font-family:sans-serif;margin:0;padding:0 16px}\n.sh{position:sticky;top:0;background:#2563eb;color:#fff;margin:0;padding:12px;border-radius:0 0 8px 8px}',
    jsCode: '' });

  /* ================= 遊戲化學習（8） ================= */
  push({ id: "gm-001", title: "打地鼠反應遊戲", titleEn: "Whack-a-Mole", type: "遊戲化學習",
    subjects: ["健康教育", "資訊教育", "跨領域學習"], topics: ["反應力", "計分", "計時"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "遊戲控制"],
    description: "在限時內點擊隨機出現的地鼠得分，訓練反應與專注。",
    teachingApplication: "作為課堂暖身或反應力遊戲，可改為點擊正確答案。",
    learningObjectives: ["體驗計時計分機制", "訓練專注與反應"],
    tags: ["打地鼠", "反應", "計分", "遊戲"],
    htmlCode: '<p>分數：<b id="score">0</b> 時間：<b id="time">15</b></p>\n<div class="grid" id="grid"></div><button id="start">開始</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:240px;margin:10px auto}\n.hole{aspect-ratio:1;background:#8d6e63;border-radius:50%;font-size:1.8rem;border:none}\n.hole.up{background:#4caf50}\nbutton{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'var grid=document.getElementById("grid"),score=0,time=15,timer,mole,active=-1;\nfor(var i=0;i<9;i++){var b=document.createElement("button");b.className="hole";b.dataset.i=i;grid.appendChild(b);}\ngrid.addEventListener("click",function(e){var h=e.target.closest(".hole");if(h&&+h.dataset.i===active){score++;document.getElementById("score").textContent=score;h.classList.remove("up");h.textContent="";active=-1;}});\ndocument.getElementById("start").onclick=function(){score=0;time=15;document.getElementById("score").textContent=0;\nclearInterval(timer);clearInterval(mole);\ntimer=setInterval(function(){time--;document.getElementById("time").textContent=time;if(time<=0){clearInterval(timer);clearInterval(mole);}},1000);\nmole=setInterval(function(){var hs=grid.querySelectorAll(".hole");hs.forEach(function(h){h.classList.remove("up");h.textContent="";});active=Math.floor(Math.random()*9);hs[active].classList.add("up");hs[active].textContent="🐹";},800);};' });

  push({ id: "gm-002", title: "記憶序列 Simon", titleEn: "Simon Memory Game", type: "遊戲化學習",
    subjects: ["資訊教育", "健康教育"], topics: ["記憶", "序列", "專注"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "遊戲控制"],
    description: "記住並重複逐漸變長的燈光序列，訓練短期記憶。",
    teachingApplication: "訓練工作記憶與專注，可延伸討論記憶策略。",
    learningObjectives: ["體驗序列記憶", "認識難度遞增設計"],
    tags: ["Simon", "記憶", "序列", "遊戲"],
    htmlCode: '<div class="simon" id="simon"><button data-c="0"></button><button data-c="1"></button><button data-c="2"></button><button data-c="3"></button></div><p id="msg">點擊開始</p><button id="go">開始</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.simon{display:grid;grid-template-columns:repeat(2,80px);gap:8px;justify-content:center;margin:16px auto}\n.simon button{width:80px;height:80px;border:none;border-radius:12px;opacity:.5}\n.simon [data-c="0"]{background:#ef4444}.simon [data-c="1"]{background:#10b981}.simon [data-c="2"]{background:#2563eb}.simon [data-c="3"]{background:#f59e0b}\n.simon button.lit{opacity:1;transform:scale(1.05)}\n#go{padding:8px 16px;border:none;border-radius:8px;background:#7c3aed;color:#fff}',
    jsCode: 'var seq=[],input=[],btns=document.querySelectorAll(".simon button"),msg=document.getElementById("msg"),playing=false;\nfunction flash(i){btns[i].classList.add("lit");setTimeout(function(){btns[i].classList.remove("lit");},350);}\nfunction play(){playing=false;input=[];var d=0;seq.forEach(function(c){setTimeout(function(){flash(c);},d+=500);});setTimeout(function(){playing=true;msg.textContent="換你！";},d+400);}\nfunction next(){seq.push(Math.floor(Math.random()*4));msg.textContent="記住順序…";play();}\ndocument.getElementById("go").onclick=function(){seq=[];next();};\ndocument.querySelector(".simon").addEventListener("click",function(e){if(!playing)return;var b=e.target.closest("button");if(!b)return;var c=+b.dataset.c;flash(c);input.push(c);var k=input.length-1;if(input[k]!==seq[k]){msg.textContent="錯了！長度 "+(seq.length-1);playing=false;return;}if(input.length===seq.length){playing=false;msg.textContent="正確！";setTimeout(next,700);}});' });

  push({ id: "gm-003", title: "骰子機率實驗", titleEn: "Dice Probability", type: "遊戲化學習",
    subjects: ["數學", "自然科學"], topics: ["機率", "統計", "隨機"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "互動圖表"],
    description: "重複擲骰並統計各點數次數，觀察大量次數下的機率分布。",
    teachingApplication: "以實驗方式體會理論機率與大數法則。",
    learningObjectives: ["認識機率與頻率", "體會大數法則"],
    scienceFairApplication: "延伸探究骰子公平性或多顆骰子和的分布。",
    tags: ["骰子", "機率", "統計", "遊戲"],
    htmlCode: '<button id="roll">擲 10 次</button> <button id="reset">重置</button>\n<div class="bars" id="bars"></div><p id="total">總次數：0</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.bars{display:flex;align-items:flex-end;gap:8px;height:150px;justify-content:center;margin:16px 0}\n.col{width:36px;text-align:center;font-size:.8rem}\n.bar{background:#2563eb;border-radius:4px 4px 0 0;transition:.3s}\nbutton{padding:8px 14px;border:none;border-radius:8px;background:#0ea5a4;color:#fff;margin:2px}',
    jsCode: 'var counts=[0,0,0,0,0,0],total=0,bars=document.getElementById("bars");\nfunction draw(){bars.innerHTML="";var max=Math.max.apply(null,counts)||1;counts.forEach(function(c,i){var col=document.createElement("div");col.className="col";col.innerHTML="<div>"+c+"</div><div class=bar style=height:"+(c/max*110)+"px></div>"+(i+1);bars.appendChild(col);});document.getElementById("total").textContent="總次數："+total;}\ndocument.getElementById("roll").onclick=function(){for(var i=0;i<10;i++){counts[Math.floor(Math.random()*6)]++;total++;}draw();};\ndocument.getElementById("reset").onclick=function(){counts=[0,0,0,0,0,0];total=0;draw();};draw();' });

  push({ id: "gm-004", title: "滑塊拼圖", titleEn: "Sliding Puzzle", type: "遊戲化學習",
    subjects: ["數學", "資訊教育"], topics: ["拼圖", "邏輯", "空間"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "遊戲控制"],
    description: "經典 3×3 數字滑塊拼圖，移動方塊還原順序。",
    teachingApplication: "訓練空間推理與規劃能力。",
    learningObjectives: ["體驗邏輯推理", "認識狀態與目標"],
    tags: ["拼圖", "滑塊", "邏輯", "遊戲"],
    htmlCode: '<div class="puz" id="puz"></div><button id="shuffle">打亂</button><p id="msg"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.puz{display:grid;grid-template-columns:repeat(3,60px);gap:4px;justify-content:center;margin:16px auto}\n.puz button{width:60px;height:60px;border:none;border-radius:8px;background:#2563eb;color:#fff;font-size:1.4rem}\n.puz .empty{background:transparent}\n#shuffle{padding:8px 14px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
    jsCode: 'var puz=document.getElementById("puz"),state=[1,2,3,4,5,6,7,8,0];\nfunction draw(){puz.innerHTML="";state.forEach(function(v,i){var b=document.createElement("button");b.textContent=v||"";b.className=v?"":"empty";b.dataset.i=i;puz.appendChild(b);});document.getElementById("msg").textContent=state.join()==="1,2,3,4,5,6,7,8,0"?"完成！":"";}\nfunction move(i){var e=state.indexOf(0);if([i-1,i+1,i-3,i+3].indexOf(e)>-1&&!((i%3===0&&e===i-1)||(i%3===2&&e===i+1))){state[e]=state[i];state[i]=0;draw();}}\npuz.addEventListener("click",function(ev){var b=ev.target.closest("button");if(b&&b.textContent)move(+b.dataset.i);});\ndocument.getElementById("shuffle").onclick=function(){for(var k=0;k<100;k++){var e=state.indexOf(0),n=[e-1,e+1,e-3,e+3].filter(function(x){return x>=0&&x<9&&!((e%3===0&&x===e-1)||(e%3===2&&x===e+1));});var p=n[Math.floor(Math.random()*n.length)];state[e]=state[p];state[p]=0;}draw();};draw();' });

  push({ id: "gm-005", title: "反應時間測試", titleEn: "Reaction Time Test", type: "遊戲化學習",
    subjects: ["健康教育", "自然科學", "數學"], topics: ["反應時間", "測量", "平均"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "遊戲控制"],
    description: "螢幕變綠時立刻點擊，測量並記錄反應時間。",
    teachingApplication: "測量反應時間，連結神經傳導與資料平均。",
    learningObjectives: ["測量反應時間", "計算多次平均"],
    scienceFairApplication: "比較不同情境（疲勞、干擾）下的反應時間。",
    tags: ["反應時間", "測量", "神經", "遊戲"],
    htmlCode: '<div id="pad" class="pad">點擊開始</div><p id="log"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.pad{height:160px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:#64748b;color:#fff;font-size:1.2rem;cursor:pointer;user-select:none}\n.pad.wait{background:#ef4444}.pad.go{background:#10b981}',
    jsCode: 'var pad=document.getElementById("pad"),state="idle",t0=0,times=[];\npad.addEventListener("click",function(){if(state==="idle"||state==="result"){state="wait";pad.className="pad wait";pad.textContent="等待變綠…";setTimeout(function(){state="go";pad.className="pad go";pad.textContent="點擊！";t0=performance.now();},1000+Math.random()*2000);}else if(state==="wait"){state="idle";pad.className="pad";pad.textContent="太早了！再試一次";}else if(state==="go"){var ms=Math.round(performance.now()-t0);times.push(ms);var avg=Math.round(times.reduce(function(a,b){return a+b;})/times.length);state="result";pad.className="pad";pad.textContent=ms+" ms（點擊再測）";document.getElementById("log").textContent="次數："+times.length+"，平均："+avg+" ms";}});' });

  push({ id: "gm-006", title: "幸運轉盤", titleEn: "Spin Wheel", type: "遊戲化學習",
    subjects: ["資訊教育", "數學"], topics: ["隨機", "轉盤", "抽選"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "遊戲控制"],
    description: "點擊旋轉轉盤隨機抽選一個選項，適合課堂抽點或分組。",
    teachingApplication: "課堂隨機抽點、分組或決定順序。",
    learningObjectives: ["認識隨機抽選", "以角度計算結果"],
    tags: ["轉盤", "抽選", "隨機", "遊戲"],
    htmlCode: '<div class="wrap"><div class="pin">▼</div><div class="wheel" id="wheel"></div></div><button id="spin">旋轉</button><p id="res" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.wrap{position:relative;width:200px;margin:10px auto}\n.pin{position:absolute;top:-6px;left:50%;transform:translateX(-50%);z-index:2;color:#ef4444}\n.wheel{width:200px;height:200px;border-radius:50%;background:conic-gradient(#ef4444 0 90deg,#10b981 90deg 180deg,#2563eb 180deg 270deg,#f59e0b 270deg 360deg);transition:transform 3s cubic-bezier(.2,.8,.2,1)}\n#spin{padding:8px 16px;border:none;border-radius:8px;background:#7c3aed;color:#fff}',
    jsCode: 'var wheel=document.getElementById("wheel"),res=document.getElementById("res"),labels=["第一組","第二組","第三組","第四組"],rot=0,spinning=false;\ndocument.getElementById("spin").onclick=function(){if(spinning)return;spinning=true;rot+=1440+Math.floor(Math.random()*360);wheel.style.transform="rotate("+rot+"deg)";setTimeout(function(){var deg=(360-(rot%360)+ -0)%360;var idx=Math.floor(((deg)%360)/90)%4;res.textContent="結果："+labels[idx];spinning=false;},3100);};' });

  push({ id: "gm-007", title: "數字迷宮（鍵盤）", titleEn: "Keyboard Maze", type: "遊戲化學習",
    subjects: ["資訊教育", "數學"], topics: ["迷宮", "路徑", "鍵盤"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["鍵盤操作", "遊戲控制"],
    description: "以方向鍵操控角色走出迷宮，訓練路徑規劃。",
    teachingApplication: "訓練空間路徑規劃，連結程式的座標移動概念。",
    learningObjectives: ["以鍵盤控制座標移動", "路徑規劃"],
    accessibilityNotes: "以方向鍵操作並提供文字說明；亦可加上按鈕備援。",
    tags: ["迷宮", "鍵盤", "路徑", "遊戲"],
    htmlCode: '<p>用方向鍵移動 🙂 到 🎯</p><div class="maze" id="maze" tabindex="0"></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.maze{display:grid;grid-template-columns:repeat(7,32px);justify-content:center;margin:10px auto;outline:none}\n.cell{width:32px;height:32px;display:flex;align-items:center;justify-content:center}\n.wall{background:#334155}.path{background:#eef4ff}',
    jsCode: 'var map=["1111111","1000101","1011101","1010001","1010111","1000001","1111111"];var px=1,py=1,gx=5,gy=5;\nvar maze=document.getElementById("maze");\nfunction draw(){maze.innerHTML="";for(var y=0;y<7;y++)for(var x=0;x<7;x++){var d=document.createElement("div");d.className="cell "+(map[y][x]==="1"?"wall":"path");if(x===px&&y===py)d.textContent="🙂";else if(x===gx&&y===gy)d.textContent="🎯";maze.appendChild(d);}}\nmaze.addEventListener("keydown",function(e){var nx=px,ny=py;if(e.key==="ArrowUp")ny--;else if(e.key==="ArrowDown")ny++;else if(e.key==="ArrowLeft")nx--;else if(e.key==="ArrowRight")nx++;else return;e.preventDefault();if(map[ny]&&map[ny][nx]==="0"){px=nx;py=ny;draw();if(px===gx&&py===gy)setTimeout(function(){alert("恭喜到達終點！");},50);}});\nmaze.focus();draw();' });

  push({ id: "gm-008", title: "成就徽章系統", titleEn: "Achievement Badges", type: "遊戲化學習",
    subjects: ["資訊教育", "跨領域學習"], topics: ["成就", "獎勵", "動機"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"], interactionTypes: ["點擊"],
    description: "完成任務解鎖徽章，並以 localStorage 記住已解鎖狀態。",
    teachingApplication: "以徽章獎勵機制提升學習動機，記錄學習里程碑。",
    learningObjectives: ["認識遊戲化獎勵", "以本地儲存保存進度"],
    tags: ["成就", "徽章", "動機", "遊戲化"],
    htmlCode: '<div class="badges" id="badges"></div><button id="task">完成一項任務</button><button id="reset">重置</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.badges{display:flex;gap:12px;justify-content:center;margin:16px}\n.badge{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;background:#e2e8f0;filter:grayscale(1);opacity:.5}\n.badge.on{background:#fef3c7;filter:none;opacity:1}\nbutton{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:2px}',
    jsCode: 'var defs=["🥉","🥈","🥇","🏆"],KEY="demo-badges",done=0;\ntry{done=+localStorage.getItem(KEY)||0;}catch(e){}\nvar wrap=document.getElementById("badges");\nfunction draw(){wrap.innerHTML="";defs.forEach(function(b,i){var d=document.createElement("div");d.className="badge"+(i<done?" on":"");d.textContent=b;wrap.appendChild(d);});}\ndocument.getElementById("task").onclick=function(){if(done<defs.length){done++;try{localStorage.setItem(KEY,done);}catch(e){}draw();}};\ndocument.getElementById("reset").onclick=function(){done=0;try{localStorage.setItem(KEY,0);}catch(e){}draw();};draw();' });
})();
