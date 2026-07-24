/* ============================================================
   data-phase3c.js — 第三階段擴充（程式效果深化：JS／CSS／SVG／Canvas／GSAP／Three.js）
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }
  var RG = '\n@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}';

  /* ---------- JavaScript 特效（10，皆附完整程式碼） ---------- */
  add({ id: "js-016", title: "倒數計時器", titleEn: "Countdown Timer", type: "JavaScript 特效",
    subjects: ["資訊教育", "跨領域學習"], topics: ["計時", "時間"], difficulty: "初階",
    interactionTypes: ["點擊"], description: "可設定秒數的倒數計時器，時間到提示，適合課堂活動。",
    teachingApplication: "課堂計時活動、限時討論或實驗計時。",
    learningObjectives: ["認識計時器", "以 setInterval 處理時間"], tags: ["計時", "倒數", "JS"],
    htmlCode: '<div class="t" id="t">00:10</div><button id="go">開始</button> <button id="rs">重設</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}.t{font-size:3rem;font-variant-numeric:tabular-nums;margin:16px}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:2px}',
    jsCode: 'var left=10,timer,el=document.getElementById("t");\nfunction show(){el.textContent="00:"+String(left).padStart(2,"0");}\ndocument.getElementById("go").onclick=function(){clearInterval(timer);timer=setInterval(function(){if(left>0){left--;show();}else{clearInterval(timer);el.textContent="時間到！";}},1000);};\ndocument.getElementById("rs").onclick=function(){clearInterval(timer);left=10;show();};show();' });
  add({ id: "js-017", title: "隨機抽點器", titleEn: "Random Picker", type: "JavaScript 特效",
    subjects: ["資訊教育", "跨領域學習"], topics: ["隨機", "抽選"], difficulty: "初階",
    interactionTypes: ["點擊"], description: "從名單中隨機抽出一位，附滾動動畫，適合課堂抽點。",
    teachingApplication: "課堂隨機點名或分組。",
    learningObjectives: ["認識亂數", "陣列隨機取值"], tags: ["隨機", "抽點", "JS"],
    htmlCode: '<div class="name" id="name">準備好了</div><button id="pick">抽選</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}.name{font-size:2rem;margin:20px;color:#2563eb}button{padding:10px 18px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
    jsCode: 'var names=["小明","小華","小美","小強","小芳","阿傑"],el=document.getElementById("name");\ndocument.getElementById("pick").onclick=function(){var n=0,iv=setInterval(function(){el.textContent=names[Math.floor(Math.random()*names.length)];if(++n>12){clearInterval(iv);el.textContent="👉 "+el.textContent;}},80);};' });
  add({ id: "js-018", title: "字數統計器", titleEn: "Word Counter", type: "JavaScript 特效",
    subjects: ["語文教育", "資訊教育"], topics: ["文字", "統計"], difficulty: "入門",
    interactionTypes: ["鍵盤操作"], description: "即時統計輸入文字的字數與字元數。",
    teachingApplication: "寫作字數控制、摘要練習。",
    learningObjectives: ["即時事件處理", "字串長度計算"], tags: ["字數", "文字", "JS"],
    htmlCode: '<textarea id="ta" rows="4" cols="30" placeholder="輸入文字…"></textarea><p>字元：<b id="c">0</b>　字數：<b id="w">0</b></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}textarea{padding:8px}',
    jsCode: 'var ta=document.getElementById("ta");\nta.addEventListener("input",function(){document.getElementById("c").textContent=ta.value.length;document.getElementById("w").textContent=ta.value.trim()?ta.value.trim().split(/\\s+/).length:0;});' });
  add({ id: "js-019", title: "色碼轉換器", titleEn: "Color Picker Tool", type: "JavaScript 特效",
    subjects: ["藝術教育", "資訊教育", "數學"], topics: ["顏色", "RGB", "HEX"], difficulty: "初階",
    interactionTypes: ["滑桿", "即時模擬"], description: "調整 RGB 滑桿，即時顯示色塊與 HEX 色碼。",
    teachingApplication: "認識顏色的數位表示與 RGB。",
    learningObjectives: ["認識 RGB/HEX", "理解顏色數位化"], tags: ["顏色", "RGB", "HEX", "JS"],
    htmlCode: '<div class="sw" id="sw"></div><label>R<input id="r" type="range" max="255" value="80"></label><label>G<input id="g" type="range" max="255" value="160"></label><label>B<input id="b" type="range" max="255" value="220"></label><p id="hex"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}.sw{width:100px;height:100px;border-radius:12px;margin:10px auto;border:1px solid #ccc}label{display:block}input{width:60%}',
    jsCode: 'function h(n){return(+n).toString(16).padStart(2,"0");}\nfunction upd(){var r=r0.value,g=g0.value,b=b0.value;document.getElementById("sw").style.background="rgb("+r+","+g+","+b+")";document.getElementById("hex").textContent="#"+h(r)+h(g)+h(b);}\nvar r0=document.getElementById("r"),g0=document.getElementById("g"),b0=document.getElementById("b");[r0,g0,b0].forEach(function(e){e.addEventListener("input",upd);});upd();' });
  add({ id: "js-020", title: "待辦清單", titleEn: "To-do List", type: "JavaScript 特效",
    subjects: ["資訊教育", "跨領域學習"], topics: ["清單", "增刪", "本地儲存"], difficulty: "初階",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"], interactionTypes: ["點擊", "鍵盤操作"],
    description: "新增、完成與刪除待辦項目，資料存於瀏覽器。",
    teachingApplication: "任務管理或學習計畫，示範 CRUD 與本地儲存。",
    learningObjectives: ["認識增刪改查", "以 localStorage 保存"], tags: ["待辦", "清單", "localStorage", "JS"],
    htmlCode: '<input id="in" placeholder="新增待辦…"><button id="add">加入</button><ul id="list"></ul>',
    cssCode: 'body{font-family:sans-serif;max-width:300px;margin:auto}ul{list-style:none;padding:0}li{display:flex;justify-content:space-between;padding:8px;background:#eef4ff;margin:4px 0;border-radius:8px}li.done span{text-decoration:line-through;color:#94a3b8}button{border:none;border-radius:6px;background:#2563eb;color:#fff;padding:4px 8px}',
    jsCode: 'var KEY="demo-todo",items=[];try{items=JSON.parse(localStorage.getItem(KEY))||[];}catch(e){}\nvar list=document.getElementById("list");\nfunction save(){try{localStorage.setItem(KEY,JSON.stringify(items));}catch(e){}}\nfunction draw(){list.innerHTML="";items.forEach(function(it,i){var li=document.createElement("li");li.className=it.done?"done":"";li.innerHTML="<span>"+it.t+"</span><span><button data-a=t data-i="+i+">✓</button> <button data-a=d data-i="+i+">✕</button></span>";list.appendChild(li);});}\ndocument.getElementById("add").onclick=function(){var v=document.getElementById("in").value.trim();if(v){items.push({t:v,done:false});document.getElementById("in").value="";save();draw();}};\nlist.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var i=+b.dataset.i;if(b.dataset.a==="t")items[i].done=!items[i].done;else items.splice(i,1);save();draw();});draw();' });
  add({ id: "js-021", title: "手風琴 FAQ（單開）", titleEn: "Single-open Accordion", type: "JavaScript 特效",
    subjects: ["資訊教育"], topics: ["摺疊", "FAQ"], difficulty: "初階", interactionTypes: ["點擊"],
    description: "一次只展開一項的手風琴，展開新項時自動收合其他項。",
    teachingApplication: "FAQ 或分段內容，維持畫面簡潔。",
    learningObjectives: ["管理互斥展開狀態", "aria-expanded 應用"], tags: ["手風琴", "FAQ", "JS"],
    htmlCode: '<div class="acc" id="acc">'+[["為什麼天空是藍色？","陽光中的藍光被大氣散射得最多。"],["為什麼會下雨？","水氣凝結成雲，水滴變大後落下。"],["彩虹怎麼形成？","陽光經水滴折射與反射而分光。"]].map(function(q){return '<button class="h" aria-expanded="false">'+q[0]+'</button><div class="p" hidden>'+q[1]+'</div>';}).join('')+'</div>',
    cssCode: 'body{font-family:sans-serif;max-width:340px;margin:auto}.h{width:100%;text-align:left;padding:12px;border:none;background:#2563eb;color:#fff;border-radius:8px;margin-top:6px}.h[aria-expanded=true]{background:#0ea5a4}.p{padding:10px;background:#eef4ff;border-radius:0 0 8px 8px}',
    jsCode: 'document.getElementById("acc").addEventListener("click",function(e){var h=e.target.closest(".h");if(!h)return;var open=h.getAttribute("aria-expanded")==="true";this.querySelectorAll(".h").forEach(function(x){x.setAttribute("aria-expanded","false");x.nextElementSibling.hidden=true;});if(!open){h.setAttribute("aria-expanded","true");h.nextElementSibling.hidden=false;}});' });
  add({ id: "js-022", title: "單位換算器", titleEn: "Unit Converter", type: "JavaScript 特效",
    subjects: ["數學", "自然科學"], topics: ["換算", "單位", "比例"], difficulty: "初階",
    interactionTypes: ["鍵盤操作", "即時模擬"], description: "輸入長度即時換算公分、公尺、英吋等單位。",
    teachingApplication: "練習單位換算與比例概念。",
    learningObjectives: ["認識單位換算", "理解比例係數"], tags: ["換算", "單位", "JS"],
    htmlCode: '<label>公尺 <input id="m" type="number" value="1"></label><p>= <b id="cm">100</b> 公分 = <b id="in">39.37</b> 英吋</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}input{padding:6px}',
    jsCode: 'var m=document.getElementById("m");\nfunction upd(){var v=+m.value||0;document.getElementById("cm").textContent=(v*100).toFixed(0);document.getElementById("in").textContent=(v*39.37).toFixed(2);}\nm.addEventListener("input",upd);upd();' });
  add({ id: "js-023", title: "分頁式測驗導覽", titleEn: "Paginated Quiz Nav", type: "JavaScript 特效",
    subjects: ["資訊教育", "跨領域學習"], topics: ["分頁", "導覽", "測驗"], difficulty: "中階",
    interactionTypes: ["點擊"], description: "以頁碼在多題之間切換，並標示已作答題目。",
    teachingApplication: "多題測驗的題目導覽與跳題。",
    learningObjectives: ["管理分頁狀態", "標示完成度"], tags: ["分頁", "導覽", "測驗", "JS"],
    htmlCode: '<div class="q" id="q"></div><div class="pager" id="pager"></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}.q{min-height:60px;font-size:1.2rem;margin:16px}.pager button{width:36px;height:36px;border:none;border-radius:8px;margin:2px;background:#e2e8f0}.pager button.on{background:#2563eb;color:#fff}',
    jsCode: 'var qs=["第一題：1+1=?","第二題：地球是圓的嗎？","第三題：水的三態？","第四題：光速多快？"],i=0;\nvar q=document.getElementById("q"),pager=document.getElementById("pager");\nqs.forEach(function(_,k){var b=document.createElement("button");b.textContent=k+1;b.onclick=function(){i=k;draw();};pager.appendChild(b);});\nfunction draw(){q.textContent=qs[i];pager.querySelectorAll("button").forEach(function(b,k){b.classList.toggle("on",k===i);});}draw();' });
  add({ id: "js-024", title: "光暈跟隨游標", titleEn: "Cursor Glow Follow", type: "JavaScript 特效",
    subjects: ["藝術教育", "資訊教育"], topics: ["游標", "光暈", "互動"], difficulty: "初階",
    interactionTypes: ["滑鼠移入"], description: "柔和光暈平滑跟隨滑鼠移動，營造互動氛圍。",
    teachingApplication: "作為互動教材首頁的氛圍點綴。",
    learningObjectives: ["認識滑鼠事件", "以 lerp 平滑移動"], tags: ["游標", "光暈", "JS"],
    htmlCode: '<div class="glow" id="glow"></div><p style="text-align:center;font-family:sans-serif;padding-top:80px">移動滑鼠</p>',
    cssCode: 'body{margin:0;height:100vh;background:#0b1020;overflow:hidden}.glow{position:fixed;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,#0ea5a488,transparent 70%);pointer-events:none;transform:translate(-50%,-50%)}',
    jsCode: 'var g=document.getElementById("glow"),tx=0,ty=0,x=0,y=0;\naddEventListener("mousemove",function(e){tx=e.clientX;ty=e.clientY;});\n(function loop(){x+=(tx-x)*0.1;y+=(ty-y)*0.1;g.style.left=x+"px";g.style.top=y+"px";requestAnimationFrame(loop);})();' });
  add({ id: "js-025", title: "圖片燈箱檢視", titleEn: "Image Lightbox", type: "JavaScript 特效",
    subjects: ["藝術教育", "資訊教育"], topics: ["燈箱", "圖片", "放大"], difficulty: "初階",
    interactionTypes: ["點擊"], description: "點擊縮圖放大到全螢幕燈箱，點背景或 Esc 關閉。",
    teachingApplication: "作品或圖解的放大檢視。",
    learningObjectives: ["建立燈箱互動", "焦點與關閉處理"], tags: ["燈箱", "圖片", "JS"],
    htmlCode: '<div class="gallery"><button class="thumb" data-e="🌋">🌋</button><button class="thumb" data-e="🌊">🌊</button><button class="thumb" data-e="🌲">🌲</button></div><div class="box" id="box" hidden><span id="big"></span></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}.thumb{font-size:2rem;border:none;background:#eef4ff;border-radius:8px;padding:10px;margin:4px}.box{position:fixed;inset:0;background:#000c;display:flex;align-items:center;justify-content:center}#big{font-size:6rem}',
    jsCode: 'var box=document.getElementById("box"),big=document.getElementById("big");\ndocument.querySelector(".gallery").addEventListener("click",function(e){var t=e.target.closest(".thumb");if(t){big.textContent=t.dataset.e;box.hidden=false;}});\nbox.addEventListener("click",function(){box.hidden=true;});\naddEventListener("keydown",function(e){if(e.key==="Escape")box.hidden=true;});' });

  /* ---------- CSS 動畫（8，皆附完整程式碼） ---------- */
  function css(o){o.type="CSS 動畫";o.subjects=o.subjects||["藝術教育","資訊教育"];o.technologies=o.technologies||["HTML","CSS","CSS Animation"];o.interactionTypes=o.interactionTypes||["滑鼠移入"];o.teachingApplication=o.teachingApplication||"作為教材的視覺提示、狀態回饋或版面點綴，適度使用以引導學生注意力，並尊重減少動態偏好。";o.cssCode=o.cssCode+RG;add(o);}
  css({ id: "css-016", title: "彈跳載入點", titleEn: "Bouncing Dots", difficulty: "入門",
    description: "三個小點依序彈跳，表示載入中。", tags: ["載入", "彈跳", "CSS"],
    htmlCode: '<div class="load"><i></i><i></i><i></i></div>',
    cssCode: 'body{display:flex;justify-content:center;padding:50px}.load{display:flex;gap:10px}.load i{width:14px;height:14px;border-radius:50%;background:#2563eb;animation:b .6s ease-in-out infinite}.load i:nth-child(2){animation-delay:.15s}.load i:nth-child(3){animation-delay:.3s}@keyframes b{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}' });
  css({ id: "css-017", title: "霓虹發光文字", titleEn: "Neon Glow Text", difficulty: "初階",
    description: "文字帶有霓虹燈般的發光與閃爍效果。", tags: ["霓虹", "發光", "文字", "CSS"],
    htmlCode: '<h1 class="neon">科學探索</h1>',
    cssCode: 'body{background:#0b1020;display:flex;justify-content:center;padding:50px}.neon{color:#fff;font-family:sans-serif;text-shadow:0 0 8px #0ea5a4,0 0 20px #0ea5a4,0 0 40px #2563eb;animation:flk 2s infinite alternate}@keyframes flk{from{opacity:.85}to{opacity:1}}' });
  css({ id: "css-018", title: "翻轉硬幣", titleEn: "Flipping Coin", difficulty: "初階",
    technologies: ["HTML","CSS","CSS 3D Transform"], description: "硬幣持續 3D 翻轉，正反面交替。", tags: ["硬幣", "3D", "翻轉", "CSS"],
    htmlCode: '<div class="coin"><span class="f">正</span><span class="b">反</span></div>',
    cssCode: 'body{display:flex;justify-content:center;padding:50px;perspective:600px}.coin{width:80px;height:80px;position:relative;transform-style:preserve-3d;animation:sp 2s linear infinite}.f,.b{position:absolute;inset:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#1a1200;backface-visibility:hidden;background:#f59e0b}.b{transform:rotateY(180deg)}@keyframes sp{to{transform:rotateY(360deg)}}' });
  css({ id: "css-019", title: "脈搏心跳", titleEn: "Heartbeat Pulse", subjects: ["健康教育","自然科學"], difficulty: "入門",
    description: "愛心以心跳節奏放大縮小。", tags: ["心跳", "脈動", "健康", "CSS"],
    htmlCode: '<div class="heart">❤️</div>',
    cssCode: 'body{display:flex;justify-content:center;padding:50px}.heart{font-size:4rem;animation:beat 1s ease-in-out infinite}@keyframes beat{0%,100%{transform:scale(1)}15%{transform:scale(1.25)}30%{transform:scale(1)}45%{transform:scale(1.15)}}' });
  css({ id: "css-020", title: "漂浮氣泡", titleEn: "Floating Bubbles", subjects: ["自然科學","藝術教育"], difficulty: "初階",
    description: "多顆氣泡由下往上緩緩漂浮上升。", tags: ["氣泡", "漂浮", "CSS"],
    htmlCode: '<div class="sea">'+Array.apply(null,Array(6)).map(function(_,i){return '<i style="left:'+(i*16+5)+'%;animation-delay:'+(i*0.5)+'s"></i>';}).join('')+'</div>',
    cssCode: 'body{margin:0}.sea{position:relative;height:220px;background:linear-gradient(#0369a1,#0c4a6e);overflow:hidden}.sea i{position:absolute;bottom:-20px;width:16px;height:16px;border-radius:50%;background:#ffffff55;animation:rise 4s linear infinite}@keyframes rise{to{transform:translateY(-240px);opacity:0}}' });
  css({ id: "css-021", title: "進度條條紋動畫", titleEn: "Striped Progress Bar", subjects: ["資訊教育"], difficulty: "初階",
    description: "帶斜條紋流動的進度條，表示進行中。", tags: ["進度條", "條紋", "CSS"],
    htmlCode: '<div class="bar"><i style="width:70%"></i></div>',
    cssCode: 'body{padding:40px;font-family:sans-serif}.bar{height:22px;background:#e2e8f0;border-radius:12px;overflow:hidden}.bar i{display:block;height:100%;background:repeating-linear-gradient(45deg,#2563eb 0 12px,#0ea5a4 12px 24px);background-size:34px 34px;animation:mv 1s linear infinite}@keyframes mv{to{background-position:34px 0}}' });
  css({ id: "css-022", title: "翻頁時鐘", titleEn: "Flip Clock Digit", subjects: ["資訊教育","數學"], difficulty: "中階",
    technologies: ["HTML","CSS","CSS 3D Transform"], description: "數字如翻頁時鐘般翻轉更新的動畫外觀。", tags: ["時鐘", "翻頁", "CSS"],
    htmlCode: '<div class="digit">5</div>',
    cssCode: 'body{display:flex;justify-content:center;padding:50px}.digit{width:70px;height:100px;background:#1e293b;color:#fff;font-family:sans-serif;font-size:3rem;display:flex;align-items:center;justify-content:center;border-radius:10px;position:relative;animation:flip 2s ease-in-out infinite}.digit::after{content:"";position:absolute;left:0;right:0;top:50%;height:2px;background:#0b1020}@keyframes flip{0%,100%{transform:rotateX(0)}50%{transform:rotateX(-20deg)}}' });
  css({ id: "css-023", title: "彩虹漸層文字", titleEn: "Rainbow Gradient Text", difficulty: "入門",
    description: "文字填上流動的彩虹漸層。", tags: ["彩虹", "漸層", "文字", "CSS"],
    htmlCode: '<h1 class="rb">數位教材</h1>',
    cssCode: 'body{display:flex;justify-content:center;padding:50px}.rb{font-family:sans-serif;font-size:2.4rem;background:linear-gradient(90deg,#ef4444,#f59e0b,#10b981,#2563eb,#7c3aed);background-size:300%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:slide 4s linear infinite}@keyframes slide{to{background-position:300%}}' });

  /* ---------- SVG（5） ---------- */
  add({ id: "svg-005", title: "SVG 折線圖動畫", titleEn: "SVG Animated Line Chart", type: "SVG 案例",
    subjects: ["數學", "自然科學"], topics: ["折線圖", "路徑動畫"], difficulty: "中階",
    technologies: ["HTML", "CSS", "JavaScript", "SVG"], interactionTypes: ["互動圖表"],
    description: "SVG 折線隨載入以 stroke-dashoffset 逐段畫出。",
    teachingApplication: "呈現數據趨勢並強調成長過程。",
    learningObjectives: ["認識 SVG 路徑動畫", "資料視覺化"], tags: ["SVG", "折線圖", "動畫"],
    htmlCode: '<svg viewBox="0 0 300 150" width="100%"><polyline id="ln" points="10,120 60,80 110,100 160,40 210,70 260,20" fill="none" stroke="#0ea5a4" stroke-width="3"/></svg>',
    cssCode: '#ln{stroke-dasharray:600;stroke-dashoffset:600;animation:d 2s ease forwards}@keyframes d{to{stroke-dashoffset:0}}'+RG, jsCode: '' });
  add({ id: "svg-006", title: "SVG 齒輪轉動", titleEn: "SVG Rotating Gears", type: "SVG 案例",
    subjects: ["自然科學", "物理", "資訊教育"], topics: ["齒輪", "傳動", "旋轉"], difficulty: "中階",
    technologies: ["HTML", "CSS", "SVG"], interactionTypes: ["流程動畫"],
    description: "兩個咬合齒輪反向轉動，示意機械傳動。",
    teachingApplication: "說明齒輪傳動與轉向關係。",
    learningObjectives: ["認識齒輪傳動", "理解反向轉動"], tags: ["SVG", "齒輪", "傳動"],
    htmlCode: '<svg viewBox="0 0 200 120" width="100%"><g class="g1" style="transform-origin:60px 60px"><circle cx="60" cy="60" r="30" fill="none" stroke="#2563eb" stroke-width="8" stroke-dasharray="6 6"/></g><g class="g2" style="transform-origin:130px 60px"><circle cx="130" cy="60" r="24" fill="none" stroke="#0ea5a4" stroke-width="8" stroke-dasharray="6 6"/></g></svg>',
    cssCode: '.g1{animation:r 4s linear infinite}.g2{animation:r 4s linear infinite reverse}@keyframes r{to{transform:rotate(360deg)}}'+RG, jsCode: '' });
  add({ id: "svg-007", title: "SVG 心電圖波形", titleEn: "SVG ECG Waveform", type: "SVG 案例",
    subjects: ["健康教育", "自然科學"], topics: ["心電圖", "波形", "健康"], difficulty: "中階",
    technologies: ["HTML", "CSS", "SVG"], interactionTypes: ["流程動畫"],
    description: "模擬心電圖 (ECG) 波形持續掃描的動畫。",
    teachingApplication: "連結心跳、脈搏與健康監測。",
    learningObjectives: ["認識心電圖波形", "連結健康資料"], tags: ["SVG", "心電圖", "健康"],
    htmlCode: '<svg viewBox="0 0 300 100" width="100%" style="background:#0b1020"><polyline id="ecg" points="0,50 40,50 55,20 70,80 85,50 300,50" fill="none" stroke="#10b981" stroke-width="2"/></svg>',
    cssCode: '#ecg{stroke-dasharray:400;stroke-dashoffset:400;animation:s 2s linear infinite}@keyframes s{to{stroke-dashoffset:0}}'+RG, jsCode: '' });
  add({ id: "svg-008", title: "SVG 進度甜甜圈", titleEn: "SVG Donut Progress", type: "SVG 案例",
    subjects: ["資訊教育", "數學"], topics: ["進度", "百分比", "環形"], difficulty: "中階",
    technologies: ["HTML", "JavaScript", "SVG"], interactionTypes: ["滑桿", "互動圖表"],
    description: "環形進度以角度呈現百分比，可滑桿調整。",
    teachingApplication: "呈現完成度或占比。",
    learningObjectives: ["認識環形進度", "連結角度與比例"], tags: ["SVG", "進度", "環形"],
    htmlCode: '<svg width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" stroke-width="14"/><circle id="p" cx="60" cy="60" r="50" fill="none" stroke="#7c3aed" stroke-width="14" stroke-linecap="round" transform="rotate(-90 60 60)"/></svg><br><input id="s" type="range" max="100" value="65">',
    cssCode: 'body{text-align:center;font-family:sans-serif}', jsCode: 'var c=document.getElementById("p"),len=2*Math.PI*50;c.style.strokeDasharray=len;var s=document.getElementById("s");function u(){c.style.strokeDashoffset=len*(1-s.value/100);}s.addEventListener("input",u);u();' });
  add({ id: "svg-009", title: "SVG 地圖標點", titleEn: "SVG Map Markers", type: "SVG 案例",
    subjects: ["社會領域", "自然科學", "資訊教育"], topics: ["地圖", "標點", "互動"], difficulty: "中階",
    technologies: ["HTML", "CSS", "JavaScript", "SVG"], interactionTypes: ["點擊"],
    description: "在簡化地圖上點擊標記顯示地點資訊。",
    teachingApplication: "地理位置、觀測站或事件地點標示。",
    learningObjectives: ["認識 SVG 互動", "地圖標點應用"], tags: ["SVG", "地圖", "標點"],
    htmlCode: '<svg viewBox="0 0 200 200" width="220"><rect width="200" height="200" fill="#dbeafe" rx="12"/><g id="pins"><circle class="pin" cx="60" cy="70" r="8" data-n="城市 A"/><circle class="pin" cx="130" cy="110" r="8" data-n="城市 B"/><circle class="pin" cx="90" cy="150" r="8" data-n="城市 C"/></g></svg><p id="info" style="font-family:sans-serif">點擊地圖上的點</p>',
    cssCode: '.pin{fill:#ef4444;cursor:pointer}.pin:hover{fill:#7c3aed}', jsCode: 'document.getElementById("pins").addEventListener("click",function(e){if(e.target.classList.contains("pin"))document.getElementById("info").textContent="這是："+e.target.dataset.n;});' });

  /* ---------- Canvas（5） ---------- */
  add({ id: "cv-001", title: "Canvas 煙火", titleEn: "Canvas Fireworks", type: "Canvas 案例",
    subjects: ["藝術教育", "物理"], topics: ["粒子", "爆炸", "重力"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "點擊施放煙火，粒子四散並受重力落下、淡出。",
    teachingApplication: "作為慶祝或獎勵動畫，也可講解粒子與重力。",
    learningObjectives: ["認識粒子系統", "理解重力與淡出"], tags: ["Canvas", "煙火", "粒子"],
    htmlCode: '<canvas id="fw" width="320" height="220"></canvas><p style="text-align:center;font-family:sans-serif">點擊施放煙火</p>',
    cssCode: 'canvas{background:#05070f;border-radius:8px;display:block;margin:auto}',
    jsCode: 'var c=document.getElementById("fw"),x=c.getContext("2d"),ps=[];\nc.addEventListener("click",function(e){var b=c.getBoundingClientRect(),px=e.clientX-b.left,py=e.clientY-b.top,col="hsl("+Math.random()*360+",90%,60%)";for(var i=0;i<40;i++){var a=Math.random()*6.28,s=Math.random()*3;ps.push({x:px,y:py,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:60,c:col});}});\nfunction loop(){x.fillStyle="rgba(5,7,15,.2)";x.fillRect(0,0,320,220);ps.forEach(function(p,i){p.vy+=0.04;p.x+=p.vx;p.y+=p.vy;p.life--;x.fillStyle=p.c;x.globalAlpha=Math.max(0,p.life/60);x.fillRect(p.x,p.y,3,3);x.globalAlpha=1;if(p.life<=0)ps.splice(i,1);});requestAnimationFrame(loop);}loop();' });
  add({ id: "cv-002", title: "Canvas 時鐘", titleEn: "Canvas Analog Clock", type: "Canvas 案例",
    subjects: ["數學", "資訊教育"], topics: ["時鐘", "角度", "時間"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["即時模擬"],
    description: "以 Canvas 繪製即時走動的類比時鐘。",
    teachingApplication: "認識時鐘讀法與角度換算。",
    learningObjectives: ["連結時間與角度", "認識動畫更新"], tags: ["Canvas", "時鐘", "時間"],
    htmlCode: '<canvas id="clk" width="200" height="200"></canvas>',
    cssCode: 'canvas{display:block;margin:auto;background:#fff;border-radius:50%;border:4px solid #2563eb}',
    jsCode: 'var c=document.getElementById("clk"),x=c.getContext("2d");\nfunction draw(){var n=new Date();x.clearRect(0,0,200,200);x.translate(100,100);function hand(ang,len,w,col){x.strokeStyle=col;x.lineWidth=w;x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(ang-Math.PI/2)*len,Math.sin(ang-Math.PI/2)*len);x.stroke();}hand(n.getHours()%12/12*6.28+n.getMinutes()/720*6.28,40,6,"#0b1020");hand(n.getMinutes()/60*6.28,60,4,"#2563eb");hand(n.getSeconds()/60*6.28,70,2,"#ef4444");x.translate(-100,-100);requestAnimationFrame(draw);}draw();' });
  add({ id: "cv-003", title: "Canvas 雨滴漣漪", titleEn: "Canvas Ripples", type: "Canvas 案例",
    subjects: ["自然科學", "物理", "藝術教育"], topics: ["漣漪", "波", "擴散"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["點擊", "即時模擬"],
    description: "點擊水面產生向外擴散並淡出的漣漪圈。",
    teachingApplication: "連結水波擴散與波的傳遞。",
    learningObjectives: ["認識波的擴散", "理解淡出動畫"], tags: ["Canvas", "漣漪", "波"],
    htmlCode: '<canvas id="rp" width="320" height="200"></canvas><p style="text-align:center;font-family:sans-serif">點擊產生漣漪</p>',
    cssCode: 'canvas{background:#0c4a6e;border-radius:8px;display:block;margin:auto}',
    jsCode: 'var c=document.getElementById("rp"),x=c.getContext("2d"),rs=[];\nc.addEventListener("click",function(e){var b=c.getBoundingClientRect();rs.push({x:e.clientX-b.left,y:e.clientY-b.top,r:0});});\nfunction loop(){x.fillStyle="rgba(12,74,110,.25)";x.fillRect(0,0,320,200);rs.forEach(function(o,i){o.r+=2;x.strokeStyle="rgba(255,255,255,"+Math.max(0,1-o.r/70)+")";x.beginPath();x.arc(o.x,o.y,o.r,0,7);x.stroke();if(o.r>70)rs.splice(i,1);});requestAnimationFrame(loop);}loop();' });
  add({ id: "cv-004", title: "Canvas 數字雨", titleEn: "Canvas Matrix Rain", type: "Canvas 案例",
    subjects: ["資訊教育", "藝術教育"], topics: ["數字雨", "字元", "背景"], difficulty: "中階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["即時模擬"],
    description: "經典綠色數字雨落下效果，適合資訊主題背景。",
    teachingApplication: "資訊或程式主題教材的氛圍背景。",
    learningObjectives: ["認識逐列動畫", "字元繪製"], tags: ["Canvas", "數字雨", "背景"],
    htmlCode: '<canvas id="mx" width="320" height="200"></canvas>',
    cssCode: 'canvas{background:#000;border-radius:8px;display:block;margin:auto}',
    jsCode: 'var c=document.getElementById("mx"),x=c.getContext("2d"),cols=Math.floor(320/12),y=Array(cols).fill(0);\nfunction loop(){if(document.hidden){return requestAnimationFrame(loop);}x.fillStyle="rgba(0,0,0,.08)";x.fillRect(0,0,320,200);x.fillStyle="#10b981";x.font="12px monospace";y.forEach(function(v,i){x.fillText(String.fromCharCode(0x30+Math.floor(Math.random()*10)),i*12,v);y[i]=v>200||Math.random()>0.97?0:v+12;});requestAnimationFrame(loop);}loop();' });
  add({ id: "cv-005", title: "Canvas 彈性繩", titleEn: "Canvas Elastic Rope", type: "Canvas 案例",
    subjects: ["自然科學", "物理"], topics: ["彈性", "節點", "模擬"], difficulty: "進階",
    technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["拖曳", "即時模擬"],
    description: "以多個節點串成的繩子受重力下垂，可拖曳一端。",
    teachingApplication: "說明彈性、節點連結與重力下垂。",
    learningObjectives: ["認識節點模擬", "理解彈性與重力"], tags: ["Canvas", "彈性", "繩", "物理"],
    htmlCode: '<canvas id="rope" width="320" height="220"></canvas><p style="text-align:center;font-family:sans-serif">拖曳繩子末端</p>',
    cssCode: 'canvas{background:#0b1020;border-radius:8px;display:block;margin:auto;touch-action:none}',
    jsCode: 'var c=document.getElementById("rope"),x=c.getContext("2d"),N=14,pts=[];for(var i=0;i<N;i++)pts.push({x:60+i*16,y:20,px:60+i*16,py:20});var drag=false;\nc.addEventListener("pointerdown",function(){drag=true;});c.addEventListener("pointerup",function(){drag=false;});\nc.addEventListener("pointermove",function(e){if(drag){var b=c.getBoundingClientRect();pts[N-1].x=e.clientX-b.left;pts[N-1].y=e.clientY-b.top;}});\nfunction loop(){for(var i=1;i<N;i++){var p=pts[i];if(i===N-1&&drag)continue;var vx=(p.x-p.px)*0.98,vy=(p.y-p.py)*0.98;p.px=p.x;p.py=p.y;p.x+=vx;p.y+=vy+0.5;}for(var k=0;k<5;k++)for(var i=0;i<N-1;i++){var a=pts[i],b=pts[i+1],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,diff=(d-16)/d;if(i>0){a.x+=dx*0.5*diff;a.y+=dy*0.5*diff;}b.x-=dx*0.5*diff;b.y-=dy*0.5*diff;}pts[0].x=60;pts[0].y=20;x.clearRect(0,0,320,220);x.strokeStyle="#0ea5a4";x.lineWidth=3;x.beginPath();pts.forEach(function(p,i){i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y);});x.stroke();requestAnimationFrame(loop);}loop();' });

  /* ---------- GSAP／Three.js 深化（4） ---------- */
  var G='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
  add({ id: "gs-003", title: "GSAP 數字滾動計數", titleEn: "GSAP Number Counter", type: "GSAP 案例",
    subjects: ["數學", "資訊教育"], topics: ["數字動畫", "計數"], difficulty: "中階",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"], libraries: ["GSAP"], offlineFriendly: false,
    interactionTypes: ["流程動畫"], description: "以 GSAP 平滑地把數字從 0 遞增到目標值，強調統計。",
    teachingApplication: "強調關鍵統計數字的動態呈現。",
    learningObjectives: ["認識補間動畫", "數值動畫應用"], tags: ["GSAP", "計數", "數字"],
    fullCode: window.__P2libFull({ title:"GSAP 數字計數", src:G, css:'.n{font-size:3rem;font-weight:900;color:#0ea5a4}p{color:#9fb0cc}', mount:'<div class="n" id="n">0</div><p>位學生完成挑戰</p>',
      body:'if(typeof gsap==="undefined")return;var o={v:0};gsap.to(o,{v:2560,duration:2,ease:"power1.out",onUpdate:function(){document.getElementById("n").textContent=Math.round(o.v);}});' }) });
  add({ id: "gs-004", title: "GSAP 彈性選單", titleEn: "GSAP Elastic Menu", type: "GSAP 案例",
    subjects: ["資訊教育", "藝術教育"], topics: ["選單", "彈性", "交錯"], difficulty: "中階",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"], libraries: ["GSAP"], offlineFriendly: false,
    interactionTypes: ["點擊", "流程動畫"], description: "點擊按鈕以彈性交錯動畫展開選單項目。",
    teachingApplication: "教材選單的生動展開效果。",
    learningObjectives: ["認識交錯動畫", "緩動函式應用"], tags: ["GSAP", "選單", "彈性"],
    fullCode: window.__P2libFull({ title:"GSAP 彈性選單", src:G, css:'.item{background:#2563eb;color:#fff;padding:12px;margin:6px auto;width:160px;border-radius:8px;opacity:0}button{padding:8px 16px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}', mount:'<button id="t">展開選單</button><div id="menu"><div class="item">單元一</div><div class="item">單元二</div><div class="item">單元三</div><div class="item">單元四</div></div>',
      body:'if(typeof gsap==="undefined"){document.querySelectorAll(".item").forEach(function(i){i.style.opacity=1;});return;}document.getElementById("t").onclick=function(){gsap.fromTo(".item",{opacity:0,y:-20,scale:.8},{opacity:1,y:0,scale:1,duration:.5,ease:"back.out(2)",stagger:0.08});};' }) });
  var TH='https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
  add({ id: "th-004", title: "Three.js 星空粒子", titleEn: "Three.js Star Particles", type: "Three.js 案例",
    subjects: ["自然科學", "地球科學", "藝術教育"], topics: ["星空", "粒子", "3D"], difficulty: "進階",
    technologies: ["HTML", "JavaScript", "WebGL", "Three.js"], libraries: ["Three.js"], offlineFriendly: false,
    interactionTypes: ["3D 操作"], description: "以數千個 3D 粒子構成緩慢旋轉的星空。",
    teachingApplication: "天文主題的沉浸式 3D 背景。",
    learningObjectives: ["認識 3D 粒子系統", "WebGL 效能概念"], tags: ["Three.js", "星空", "粒子", "3D"],
    fullCode: (function(){var b='  if(typeof THREE==="undefined"){document.getElementById("fallback").style.display="block";return;}\n  var scene=new THREE.Scene();var cam=new THREE.PerspectiveCamera(70,innerWidth/innerHeight,.1,1000);cam.position.z=1;\n  var r=new THREE.WebGLRenderer();r.setSize(innerWidth,innerHeight);document.body.appendChild(r.domElement);\n  var geo=new THREE.BufferGeometry();var pos=[];for(var i=0;i<3000;i++)pos.push((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10);\n  geo.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));\n  var pts=new THREE.Points(geo,new THREE.PointsMaterial({color:0x66ccff,size:0.015}));scene.add(pts);\n  addEventListener("resize",function(){cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight);});\n  (function loop(){if(document.hidden){return requestAnimationFrame(loop);}pts.rotation.y+=0.0008;pts.rotation.x+=0.0003;r.render(scene,cam);requestAnimationFrame(loop);})();';
      return '<!DOCTYPE html>\n<html lang="zh-Hant"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Three.js 星空粒子</title>\n<style>body{margin:0;overflow:hidden;background:#05070f}#fallback{color:#fff;padding:20px;display:none;font-family:sans-serif}</style></head><body>\n<div id="fallback">3D 元件（Three.js）載入失敗，請確認網路連線。</div>\n<script src="'+TH+'" onerror="document.getElementById(\'fallback\').style.display=\'block\'"><\/script>\n<script>window.addEventListener("load",function(){\n'+b+'\n});<\/script>\n</body></html>';})() });
  add({ id: "th-005", title: "Three.js 波動平面", titleEn: "Three.js Wave Plane", type: "Three.js 案例",
    subjects: ["自然科學", "物理", "數學"], topics: ["波", "網格", "3D"], difficulty: "專業",
    technologies: ["HTML", "JavaScript", "WebGL", "Three.js"], libraries: ["Three.js"], offlineFriendly: false,
    interactionTypes: ["3D 操作", "即時模擬"], description: "以正弦函數驅動 3D 網格平面起伏，呈現立體波動。",
    teachingApplication: "視覺化二維波動與函數地形。",
    learningObjectives: ["連結函數與 3D 表面", "認識頂點動畫"], tags: ["Three.js", "波", "網格", "3D"],
    fullCode: (function(){var b='  if(typeof THREE==="undefined"){document.getElementById("fallback").style.display="block";return;}\n  var scene=new THREE.Scene();var cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.1,100);cam.position.set(0,3,4);cam.lookAt(0,0,0);\n  var r=new THREE.WebGLRenderer({antialias:true});r.setSize(innerWidth,innerHeight);document.body.appendChild(r.domElement);\n  var geo=new THREE.PlaneGeometry(6,6,40,40);var mesh=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0x0ea5a4,wireframe:true}));mesh.rotation.x=-Math.PI/2.2;scene.add(mesh);\n  var pos=geo.attributes.position,base=pos.array.slice();\n  addEventListener("resize",function(){cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight);});\n  var t=0;(function loop(){if(document.hidden){return requestAnimationFrame(loop);}t+=0.05;for(var i=0;i<pos.count;i++){var xx=base[i*3],yy=base[i*3+1];pos.array[i*3+2]=Math.sin(xx*1.5+t)*0.3+Math.cos(yy*1.5+t)*0.3;}pos.needsUpdate=true;mesh.rotation.z+=0.002;r.render(scene,cam);requestAnimationFrame(loop);})();';
      return '<!DOCTYPE html>\n<html lang="zh-Hant"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Three.js 波動平面</title>\n<style>body{margin:0;overflow:hidden;background:#05070f}#fallback{color:#fff;padding:20px;display:none;font-family:sans-serif}</style></head><body>\n<div id="fallback">3D 元件（Three.js）載入失敗，請確認網路連線。</div>\n<script src="'+TH+'" onerror="document.getElementById(\'fallback\').style.display=\'block\'"><\/script>\n<script>window.addEventListener("load",function(){\n'+b+'\n});<\/script>\n</body></html>';})() });
})();
