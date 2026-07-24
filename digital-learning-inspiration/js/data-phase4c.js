/* ============================================================
   data-phase4c.js — 第四階段擴充（互動元件與程式效果再擴充，多附完整程式碼）
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }
  var RG = '\n@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}';

  /* ---------- JavaScript 特效（8） ---------- */
  add({ id:"js-026", title:"貨幣/單位即時換算表", titleEn:"Live Conversion Table", type:"JavaScript 特效",
    subjects:["數學","社會領域"], topics:["換算","比例","表格"], difficulty:"初階", interactionTypes:["鍵盤操作","即時模擬"],
    description:"輸入數值即時換算成多種單位並列表顯示。", teachingApplication:"練習比例換算與表格閱讀。",
    learningObjectives:["理解比例換算","即時運算"], tags:["換算","比例","JS"],
    htmlCode:'<label>公里 <input id="v" type="number" value="5"></label><table id="t"><tbody></tbody></table>',
    cssCode:'body{font-family:sans-serif;text-align:center}table{margin:10px auto;border-collapse:collapse}td{border:1px solid #cbd5e1;padding:6px 14px}',
    jsCode:'var units=[["公尺",1000],["公分",100000],["英里",0.621],["海里",0.54]];var v=document.getElementById("v");function u(){document.querySelector("#t tbody").innerHTML=units.map(function(x){return "<tr><td>"+x[0]+"</td><td>"+(v.value*x[1]).toFixed(2)+"</td></tr>";}).join("");}v.addEventListener("input",u);u();' });
  add({ id:"js-027", title:"密碼強度檢測", titleEn:"Password Strength", type:"JavaScript 特效",
    subjects:["資訊教育"], topics:["密碼","安全","檢測"], difficulty:"中階", interactionTypes:["鍵盤操作","即時模擬"],
    description:"輸入密碼即時評估長度與複雜度並顯示強度條。", teachingApplication:"資訊安全：說明強密碼要素。",
    learningObjectives:["認識密碼強度","培養資安意識"], tags:["密碼","資安","JS"],
    htmlCode:'<input id="p" type="text" placeholder="輸入密碼"><div class="bar"><i id="b"></i></div><p id="lbl"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center}.bar{width:220px;height:10px;background:#e2e8f0;border-radius:6px;margin:10px auto;overflow:hidden}#b{display:block;height:100%;width:0;transition:.3s}',
    jsCode:'var p=document.getElementById("p"),b=document.getElementById("b"),lbl=document.getElementById("lbl");p.addEventListener("input",function(){var s=0,v=p.value;if(v.length>=8)s++;if(/[A-Z]/.test(v))s++;if(/[0-9]/.test(v))s++;if(/[^A-Za-z0-9]/.test(v))s++;var pct=[0,25,50,75,100][s],col=["#ef4444","#ef4444","#f59e0b","#22c55e","#10b981"][s];b.style.width=pct+"%";b.style.background=col;lbl.textContent=["","很弱","普通","良好","很強"][s];});' });
  add({ id:"js-028", title:"骰子模擬器", titleEn:"Dice Roller", type:"JavaScript 特效",
    subjects:["數學"], topics:["隨機","骰子","機率"], difficulty:"入門", interactionTypes:["點擊"],
    description:"點擊擲一到多顆骰子，顯示點數與總和。", teachingApplication:"機率與加法練習。",
    learningObjectives:["認識隨機","計算總和"], tags:["骰子","隨機","JS"],
    htmlCode:'<div id="dice" style="font-size:3rem"></div><p>總和：<b id="sum">0</b></p><button id="roll">擲 2 顆</button>',
    cssCode:'body{font-family:sans-serif;text-align:center}button{padding:10px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var f=["⚀","⚁","⚂","⚃","⚄","⚅"];document.getElementById("roll").onclick=function(){var a=1+Math.floor(Math.random()*6),c=1+Math.floor(Math.random()*6);document.getElementById("dice").textContent=f[a-1]+" "+f[c-1];document.getElementById("sum").textContent=a+c;};' });
  add({ id:"js-029", title:"番茄鐘計時", titleEn:"Pomodoro Timer", type:"JavaScript 特效",
    subjects:["資訊教育","健康教育"], topics:["時間管理","專注","計時"], difficulty:"中階", interactionTypes:["點擊"],
    description:"25 分鐘專注、5 分鐘休息的番茄鐘計時器。", teachingApplication:"時間管理與專注學習策略。",
    learningObjectives:["認識番茄工作法","時間管理"], tags:["番茄鐘","專注","JS"],
    htmlCode:'<div class="t" id="t">25:00</div><button id="go">開始/暫停</button> <button id="rs">重設</button><p id="mode">專注</p>',
    cssCode:'body{font-family:sans-serif;text-align:center}.t{font-size:3rem;font-variant-numeric:tabular-nums}button{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:2px}',
    jsCode:'var sec=1500,run=false,timer,focus=true;function fmt(){var m=String(Math.floor(sec/60)).padStart(2,"0"),s=String(sec%60).padStart(2,"0");document.getElementById("t").textContent=m+":"+s;}document.getElementById("go").onclick=function(){run=!run;if(run)timer=setInterval(function(){if(sec>0){sec--;fmt();}else{focus=!focus;sec=focus?1500:300;document.getElementById("mode").textContent=focus?"專注":"休息";}},1000);else clearInterval(timer);};document.getElementById("rs").onclick=function(){clearInterval(timer);run=false;focus=true;sec=1500;document.getElementById("mode").textContent="專注";fmt();};fmt();' });
  add({ id:"js-030", title:"猜數字遊戲", titleEn:"Guess the Number", type:"JavaScript 特效",
    subjects:["數學","資訊教育"], topics:["二分","猜測","邏輯"], difficulty:"初階", interactionTypes:["鍵盤操作","遊戲控制"],
    description:"猜 1–100 的數字，系統提示太大或太小，連結二分搜尋。", teachingApplication:"以遊戲體會二分搜尋策略。",
    learningObjectives:["體驗二分策略","邏輯推理"], tags:["猜數字","二分","JS"],
    htmlCode:'<input id="g" type="number" placeholder="1-100"><button id="c">猜</button><p id="msg">我想了一個 1-100 的數字</p><p id="n">次數：0</p>',
    cssCode:'body{font-family:sans-serif;text-align:center}button{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var target=1+Math.floor(Math.random()*100),n=0;document.getElementById("c").onclick=function(){var g=+document.getElementById("g").value;n++;document.getElementById("n").textContent="次數："+n;var m=document.getElementById("msg");if(g===target)m.textContent="答對了！答案是 "+target;else m.textContent=g>target?"太大了":"太小了";};' });
  add({ id:"js-031", title:"打字速度測驗", titleEn:"Typing Speed Test", type:"JavaScript 特效",
    subjects:["資訊教育","語文教育"], topics:["打字","速度","WPM"], difficulty:"中階", interactionTypes:["鍵盤操作"],
    description:"輸入指定句子，計算每分鐘字數與正確率。", teachingApplication:"鍵盤打字練習與速度評估。",
    learningObjectives:["測量打字速度","培養鍵盤能力"], tags:["打字","速度","JS"],
    htmlCode:'<p id="target">The quick brown fox jumps.</p><input id="in" style="width:90%" placeholder="開始打字…"><p id="res" aria-live="polite"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:16px}#target{font-family:monospace;background:#eef4ff;padding:10px;border-radius:8px}',
    jsCode:'var t0=null,txt="The quick brown fox jumps.",inp=document.getElementById("in");inp.addEventListener("input",function(){if(!t0)t0=Date.now();if(inp.value===txt){var sec=(Date.now()-t0)/1000,wpm=Math.round((txt.split(" ").length)/sec*60);document.getElementById("res").textContent="完成！約 "+wpm+" WPM";}});' });
  add({ id:"js-032", title:"抽籤分組器", titleEn:"Group Maker", type:"JavaScript 特效",
    subjects:["資訊教育","跨領域學習"], topics:["分組","隨機","洗牌"], difficulty:"初階", interactionTypes:["點擊"],
    description:"輸入名單與組數，隨機平均分組。", teachingApplication:"課堂快速隨機分組。",
    learningObjectives:["認識洗牌演算法","隨機分組"], tags:["分組","隨機","JS"],
    htmlCode:'<textarea id="names" rows="3" cols="24">小明,小華,小美,小強,阿傑,小芳,大雄,靜香</textarea><br><label>組數 <input id="g" type="number" value="2" min="1"></label><button id="go">分組</button><div id="out"></div>',
    cssCode:'body{font-family:sans-serif;text-align:center}.grp{display:inline-block;vertical-align:top;margin:8px;padding:8px 14px;background:#eef4ff;border-radius:8px}button{padding:8px 14px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
    jsCode:'document.getElementById("go").onclick=function(){var arr=document.getElementById("names").value.split(/[,，\\n]/).map(function(s){return s.trim();}).filter(Boolean);for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=arr[i];arr[i]=arr[j];arr[j]=t;}var g=+document.getElementById("g").value||1,groups=[];for(var k=0;k<g;k++)groups.push([]);arr.forEach(function(n,i){groups[i%g].push(n);});document.getElementById("out").innerHTML=groups.map(function(gr,i){return "<div class=grp><b>第"+(i+1)+"組</b><br>"+gr.join("<br>")+"</div>";}).join("");};' });
  add({ id:"js-033", title:"圖片馬賽克隱藏", titleEn:"Spoiler Reveal", type:"JavaScript 特效",
    subjects:["資訊教育","跨領域學習"], topics:["遮蔽","揭示","互動"], difficulty:"入門", interactionTypes:["點擊"],
    description:"內容先以模糊遮蔽，點擊後才揭示答案。", teachingApplication:"問答教材中先思考再揭示答案。",
    learningObjectives:["認識漸進揭示","互動設計"], tags:["遮蔽","揭示","JS"],
    htmlCode:'<p>問題：水的沸點？</p><span class="spoiler" id="s">100°C（一大氣壓）</span>',
    cssCode:'body{font-family:sans-serif;text-align:center}.spoiler{background:#334155;color:#334155;border-radius:6px;padding:4px 10px;cursor:pointer;filter:blur(4px);transition:.3s}.spoiler.show{background:#dcfce7;color:#065f46;filter:none}',
    jsCode:'document.getElementById("s").addEventListener("click",function(){this.classList.toggle("show");});' });

  /* ---------- CSS 動畫（8） ---------- */
  function css(o){o.type="CSS 動畫";o.subjects=o.subjects||["藝術教育","資訊教育"];o.technologies=o.technologies||["HTML","CSS","CSS Animation"];o.interactionTypes=o.interactionTypes||["滑鼠移入"];o.teachingApplication=o.teachingApplication||"作為教材的視覺提示或點綴，適度使用並尊重減少動態偏好。";o.cssCode=o.cssCode+RG;add(o);}
  css({ id:"css-024", title:"日夜循環天空", titleEn:"Day-Night Sky", subjects:["自然科學","地球科學","藝術教育"], difficulty:"中階",
    description:"天空色彩與太陽/月亮循環，示意日夜變化。", tags:["日夜","天空","CSS"],
    htmlCode:'<div class="sky"><div class="sun"></div></div>',
    cssCode:'body{margin:0}.sky{height:200px;animation:day 8s linear infinite;position:relative;overflow:hidden}.sun{position:absolute;width:40px;height:40px;border-radius:50%;background:#ffde59;left:20px;animation:arc 8s linear infinite}@keyframes day{0%,100%{background:linear-gradient(#0b1020,#1e293b)}50%{background:linear-gradient(#60a5fa,#bfdbfe)}}@keyframes arc{0%{top:180px;left:10px}50%{top:20px;left:50%}100%{top:180px;left:90%}}' });
  css({ id:"css-025", title:"下雨動畫", titleEn:"Rain Effect", subjects:["自然科學","地球科學","藝術教育"], difficulty:"中階",
    description:"多條雨線由上落下，營造下雨情境。", tags:["下雨","天氣","CSS"],
    htmlCode:'<div class="rain">'+Array.apply(null,Array(12)).map(function(_,i){return '<i style="left:'+(i*8+2)+'%;animation-delay:'+(i*0.13)+'s"></i>';}).join('')+'</div>',
    cssCode:'body{margin:0}.rain{position:relative;height:200px;background:linear-gradient(#334155,#64748b);overflow:hidden}.rain i{position:absolute;top:-20px;width:2px;height:18px;background:#bfdbfe;animation:fall .8s linear infinite}@keyframes fall{to{transform:translateY(220px)}}' });
  css({ id:"css-026", title:"愛心點擊爆發", titleEn:"Heart Burst", difficulty:"初階", interactionTypes:["滑鼠移入","點擊"],
    description:"滑鼠移入時愛心放大並散發光暈。", tags:["愛心","按讚","CSS"],
    htmlCode:'<div class="like">❤️</div>',
    cssCode:'body{display:flex;justify-content:center;padding:50px}.like{font-size:3rem;cursor:pointer;transition:transform .3s}.like:hover{transform:scale(1.4)}.like:hover{animation:pulse .6s}@keyframes pulse{0%,100%{filter:none}50%{filter:drop-shadow(0 0 16px #ef4444)}}' });
  css({ id:"css-027", title:"載入條紋斜線", titleEn:"Barber Pole Loader", difficulty:"初階",
    description:"理髮廳旋轉條紋般的載入指示。", tags:["載入","條紋","CSS"],
    htmlCode:'<div class="pole"></div>',
    cssCode:'body{display:flex;justify-content:center;padding:50px}.pole{width:60px;height:60px;border-radius:50%;background:repeating-linear-gradient(45deg,#2563eb 0 10px,#fff 10px 20px);animation:sp 1s linear infinite}@keyframes sp{to{background-position:28px 0}}' });
  css({ id:"css-028", title:"文字漸現逐字", titleEn:"Text Fade-in Words", subjects:["語文教育","藝術教育"], difficulty:"中階",
    description:"句子的每個字依序淡入出現。", tags:["文字","逐字","CSS"],
    htmlCode:'<h2 class="fw">'+"探索 科學 的 樂趣".split(" ").map(function(w,i){return '<span style="animation-delay:'+(i*0.3)+'s">'+w+'</span>';}).join(" ")+'</h2>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:40px}.fw span{display:inline-block;opacity:0;animation:fi .6s forwards}@keyframes fi{to{opacity:1;transform:translateY(0)}}.fw span{transform:translateY(10px)}' });
  css({ id:"css-029", title:"齒輪轉動（純CSS）", titleEn:"CSS Gear Spin", subjects:["自然科學","物理","藝術教育"], difficulty:"中階",
    description:"以 conic-gradient 製作旋轉齒輪。", tags:["齒輪","旋轉","CSS"],
    htmlCode:'<div class="gear"></div>',
    cssCode:'body{display:flex;justify-content:center;padding:50px}.gear{width:70px;height:70px;border-radius:50%;background:repeating-conic-gradient(#2563eb 0 15deg,#0ea5a4 15deg 30deg);animation:sp 4s linear infinite}.gear::after{content:"";position:absolute;width:30px;height:30px;background:#0b1020;border-radius:50%;margin:20px}@keyframes sp{to{transform:rotate(360deg)}}' });
  css({ id:"css-030", title:"能量充電環", titleEn:"Charging Ring", subjects:["自然科學","資訊教育"], difficulty:"中階",
    description:"環形進度不斷充滿，示意充電或載入。", tags:["充電","環形","CSS"],
    htmlCode:'<div class="ring"></div>',
    cssCode:'body{display:flex;justify-content:center;padding:50px}.ring{width:70px;height:70px;border-radius:50%;background:conic-gradient(#10b981 var(--p,0%),#e2e8f0 0);animation:fill 2s ease-in-out infinite}.ring::after{content:"";position:absolute;width:52px;height:52px;background:#fff;border-radius:50%;margin:9px}@keyframes fill{to{--p:100%}}@property --p{syntax:"<percentage>";inherits:false;initial-value:0%}' });
  css({ id:"css-031", title:"彈跳進場清單", titleEn:"Bounce-in List", difficulty:"初階",
    description:"清單項目依序彈跳進場。", tags:["清單","彈跳","進場","CSS"],
    htmlCode:'<ul class="bi">'+["水","陽光","空氣","養分"].map(function(t,i){return '<li style="animation-delay:'+(i*0.15)+'s">'+t+'</li>';}).join("")+'</ul>',
    cssCode:'body{font-family:sans-serif}.bi{list-style:none;max-width:200px;margin:auto}.bi li{background:#0ea5a4;color:#fff;margin:6px 0;padding:10px;border-radius:8px;opacity:0;animation:bi .5s cubic-bezier(.2,1.6,.4,1) forwards}@keyframes bi{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:none}}' });

  /* ---------- SVG（4） ---------- */
  add({ id:"svg-010", title:"SVG 溫度計刻度", titleEn:"SVG Thermometer", type:"SVG 案例",
    subjects:["自然科學","數學"], topics:["溫度","刻度","SVG"], difficulty:"中階",
    technologies:["HTML","JavaScript","SVG"], interactionTypes:["滑桿","即時模擬"],
    description:"以 SVG 繪製溫度計，滑桿調整水銀柱高度。", teachingApplication:"練習溫度刻度讀取。",
    learningObjectives:["讀取刻度","認識 SVG 繪圖"], tags:["溫度計","刻度","SVG"],
    htmlCode:'<svg viewBox="0 0 60 200" width="80"><rect x="24" y="10" width="12" height="150" rx="6" fill="#e2e8f0"/><rect id="hg" x="24" y="80" width="12" height="80" fill="#ef4444"/><circle cx="30" cy="170" r="16" fill="#ef4444"/></svg><br><input id="s" type="range" min="0" max="150" value="80">',
    cssCode:'body{text-align:center;font-family:sans-serif}',
    jsCode:'var hg=document.getElementById("hg"),s=document.getElementById("s");function u(){var h=+s.value;hg.setAttribute("y",160-h);hg.setAttribute("height",h);}s.addEventListener("input",u);u();' });
  add({ id:"svg-011", title:"SVG 雷達掃描", titleEn:"SVG Radar Sweep", type:"SVG 案例",
    subjects:["資訊教育","物理","藝術教育"], topics:["雷達","掃描","動畫"], difficulty:"中階",
    technologies:["HTML","CSS","SVG"], interactionTypes:["流程動畫"],
    description:"雷達掃描線持續旋轉，適合科技感情境。", teachingApplication:"科技主題的視覺點綴或偵測示意。",
    learningObjectives:["認識 SVG 旋轉動畫"], tags:["雷達","掃描","SVG"],
    htmlCode:'<svg viewBox="0 0 200 200" width="200"><circle cx="100" cy="100" r="90" fill="#031b1a" stroke="#0ea5a4"/><circle cx="100" cy="100" r="60" fill="none" stroke="#0ea5a455"/><circle cx="100" cy="100" r="30" fill="none" stroke="#0ea5a455"/><line class="sweep" x1="100" y1="100" x2="100" y2="10" stroke="#0ea5a4" stroke-width="2"/></svg>',
    cssCode:'.sweep{transform-origin:100px 100px;animation:sw 3s linear infinite}@keyframes sw{to{transform:rotate(360deg)}}'+RG, jsCode:'' });
  add({ id:"svg-012", title:"SVG 波形等化器", titleEn:"SVG Equalizer", type:"SVG 案例",
    subjects:["藝術教育","物理","資訊教育"], topics:["等化器","波形","動畫"], difficulty:"中階",
    technologies:["HTML","CSS","SVG"], interactionTypes:["流程動畫"],
    description:"多條長條上下律動，模擬音樂等化器。", teachingApplication:"聲音/音樂主題的視覺呈現。",
    learningObjectives:["認識 SVG 動畫節奏"], tags:["等化器","波形","SVG"],
    htmlCode:'<svg viewBox="0 0 120 60" width="200">'+[0,1,2,3,4,5].map(function(i){return '<rect class="b'+(i%3)+'" x="'+(i*20+4)+'" width="12" y="10" height="40" fill="#7c3aed"/>';}).join("")+'</svg>',
    cssCode:'rect{transform-origin:bottom;animation:eq .8s ease-in-out infinite}.b1{animation-delay:.2s}.b2{animation-delay:.4s}@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}svg rect{transform-box:fill-box}'+RG, jsCode:'' });
  add({ id:"svg-013", title:"SVG 流程圖節點", titleEn:"SVG Flowchart", type:"SVG 案例",
    subjects:["資訊教育","跨領域學習"], topics:["流程圖","節點","連線"], difficulty:"中階",
    technologies:["HTML","CSS","JavaScript","SVG"], interactionTypes:["點擊"],
    description:"點擊流程圖節點顯示步驟說明。", teachingApplication:"呈現演算法或實驗流程。",
    learningObjectives:["認識流程圖","理解步驟連結"], tags:["流程圖","節點","SVG"],
    htmlCode:'<svg viewBox="0 0 240 90" width="100%"><g class="n" data-t="開始"><rect x="10" y="30" width="60" height="30" rx="15" fill="#2563eb"/></g><line x1="70" y1="45" x2="90" y2="45" stroke="#94a3b8"/><g class="n" data-t="處理資料"><rect x="90" y="30" width="60" height="30" fill="#0ea5a4"/></g><line x1="150" y1="45" x2="170" y2="45" stroke="#94a3b8"/><g class="n" data-t="輸出結果"><rect x="170" y="30" width="60" height="30" rx="15" fill="#7c3aed"/></g></svg><p id="d" style="text-align:center;font-family:sans-serif">點擊節點</p>',
    cssCode:'.n{cursor:pointer}.n:hover rect{opacity:.8}',
    jsCode:'document.querySelectorAll(".n").forEach(function(n){n.addEventListener("click",function(){document.getElementById("d").textContent="步驟："+n.dataset.t;});});' });

  /* ---------- Canvas（4） ---------- */
  add({ id:"cv-006", title:"Canvas 畫筆調色", titleEn:"Canvas Paint Tool", type:"Canvas 案例",
    subjects:["藝術教育","資訊教育"], topics:["繪圖","調色","畫筆"], difficulty:"中階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["拖曳","Canvas 繪圖","觸控"],
    description:"可選色與筆刷粗細的簡易繪圖板。", teachingApplication:"數位美術創作與座標繪圖。",
    learningObjectives:["認識繪圖 API","調整畫筆參數"], tags:["繪圖","調色","Canvas"],
    htmlCode:'<canvas id="c" width="320" height="180"></canvas><br><input id="col" type="color" value="#2563eb"><input id="w" type="range" min="1" max="20" value="4"><button id="clr">清除</button>',
    cssCode:'body{text-align:center;font-family:sans-serif}canvas{background:#fff;border:2px solid #2563eb;border-radius:8px;touch-action:none}button{padding:6px 12px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
    jsCode:'var c=document.getElementById("c"),x=c.getContext("2d"),down=false;x.lineCap="round";function pos(e){var r=c.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top];}c.addEventListener("pointerdown",function(e){down=true;var p=pos(e);x.beginPath();x.moveTo(p[0],p[1]);});c.addEventListener("pointermove",function(e){if(!down)return;x.strokeStyle=document.getElementById("col").value;x.lineWidth=document.getElementById("w").value;var p=pos(e);x.lineTo(p[0],p[1]);x.stroke();});window.addEventListener("pointerup",function(){down=false;});document.getElementById("clr").onclick=function(){x.clearRect(0,0,320,180);};' });
  add({ id:"cv-007", title:"Canvas 生命值血條", titleEn:"Canvas Health Bar", type:"Canvas 案例",
    subjects:["資訊教育","數學"], topics:["血條","比例","繪製"], difficulty:"初階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["點擊","即時模擬"],
    description:"以 Canvas 繪製隨數值變化的血條（顏色隨比例變）。", teachingApplication:"遊戲化教材的狀態顯示。",
    learningObjectives:["以比例繪圖","顏色映射"], tags:["血條","比例","Canvas"],
    htmlCode:'<canvas id="hb" width="240" height="40"></canvas><br><button id="hit">-10</button> <button id="heal">+10</button>',
    cssCode:'body{text-align:center;font-family:sans-serif}canvas{background:#1e293b;border-radius:8px}button{padding:6px 12px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var c=document.getElementById("hb"),x=c.getContext("2d"),hp=100;function draw(){x.clearRect(0,0,240,40);var w=hp/100*220;x.fillStyle=hp>50?"#22c55e":hp>25?"#f59e0b":"#ef4444";x.fillRect(10,10,w,20);x.fillStyle="#fff";x.font="14px sans-serif";x.fillText(hp+"%",105,25);}document.getElementById("hit").onclick=function(){hp=Math.max(0,hp-10);draw();};document.getElementById("heal").onclick=function(){hp=Math.min(100,hp+10);draw();};draw();' });
  add({ id:"cv-008", title:"Canvas 齒輪嚙合", titleEn:"Canvas Meshing Gears", type:"Canvas 案例",
    subjects:["自然科學","物理","數學"], topics:["齒輪","嚙合","傳動"], difficulty:"進階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["即時模擬"],
    description:"兩齒輪反向嚙合轉動，示意機械傳動。", teachingApplication:"齒輪傳動與轉向教學。",
    learningObjectives:["認識齒輪嚙合","理解反向轉動"], tags:["齒輪","傳動","Canvas"],
    htmlCode:'<canvas id="g" width="300" height="160"></canvas>',
    cssCode:'canvas{background:#0b1020;border-radius:8px;display:block;margin:auto}',
    jsCode:'var c=document.getElementById("g"),x=c.getContext("2d"),a=0;function gear(cx,cy,r,teeth,rot,col){x.save();x.translate(cx,cy);x.rotate(rot);x.fillStyle=col;x.beginPath();for(var i=0;i<teeth*2;i++){var rr=i%2?r:r*0.8,ang=i/(teeth*2)*Math.PI*2;x.lineTo(Math.cos(ang)*rr,Math.sin(ang)*rr);}x.closePath();x.fill();x.restore();}function loop(){if(document.hidden){return requestAnimationFrame(loop);}x.clearRect(0,0,300,160);gear(110,80,50,12,a,"#2563eb");gear(210,80,40,10,-a*1.2+0.3,"#0ea5a4");a+=0.02;requestAnimationFrame(loop);}loop();' });
  add({ id:"cv-009", title:"Canvas 打磚塊", titleEn:"Canvas Breakout", type:"Canvas 案例",
    subjects:["資訊教育","物理","數學"], topics:["遊戲","碰撞","反彈"], difficulty:"進階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["鍵盤操作","遊戲控制"],
    description:"經典打磚塊小遊戲，示範碰撞偵測與鍵盤控制。", teachingApplication:"遊戲程式設計與碰撞、反彈概念。",
    learningObjectives:["認識碰撞偵測","理解反彈"], tags:["打磚塊","遊戲","碰撞","Canvas"],
    htmlCode:'<canvas id="bk" width="300" height="220" tabindex="0"></canvas><p style="text-align:center;font-family:sans-serif">←→ 移動擋板</p>',
    cssCode:'canvas{background:#0b1020;border-radius:8px;display:block;margin:auto;outline:none}',
    jsCode:'var c=document.getElementById("bk"),x=c.getContext("2d");var bx=150,by=160,vx=2,vy=-2,px=120,pw=60,bricks=[];for(var r=0;r<3;r++)for(var col=0;col<6;col++)bricks.push({x:col*48+10,y:r*20+20,on:true});addEventListener("keydown",function(e){if(e.key==="ArrowLeft")px-=20;if(e.key==="ArrowRight")px+=20;px=Math.max(0,Math.min(240,px));});function loop(){x.clearRect(0,0,300,220);bx+=vx;by+=vy;if(bx<5||bx>295)vx*=-1;if(by<5)vy*=-1;if(by>200&&bx>px&&bx<px+pw)vy*=-1;bricks.forEach(function(b){if(b.on&&bx>b.x&&bx<b.x+44&&by>b.y&&by<b.y+16){b.on=false;vy*=-1;}});x.fillStyle="#f59e0b";bricks.forEach(function(b){if(b.on)x.fillRect(b.x,b.y,44,16);});x.fillStyle="#0ea5a4";x.fillRect(px,205,pw,8);x.beginPath();x.fillStyle="#fff";x.arc(bx,by,5,0,7);x.fill();if(by<215)requestAnimationFrame(loop);else{x.fillStyle="#fff";x.fillText("重新整理再玩",110,110);}}c.focus();loop();' });

  /* ---------- UI 元件（6） ---------- */
  add({ id:"ui-011", title:"範圍雙滑桿", titleEn:"Range Dual Slider", type:"UI 互動元件",
    subjects:["資訊教育","數學"], topics:["範圍","滑桿","篩選"], difficulty:"中階", interactionTypes:["滑桿"],
    description:"以兩個滑桿選擇數值範圍（最小/最大）。", teachingApplication:"篩選介面或區間選擇教學。",
    learningObjectives:["認識範圍選擇","處理雙輸入"], tags:["範圍","滑桿","UI"],
    htmlCode:'<input id="lo" type="range" min="0" max="100" value="20"><input id="hi" type="range" min="0" max="100" value="80"><p>範圍：<b id="out">20 - 80</b></p>',
    cssCode:'body{font-family:sans-serif;text-align:center}input{width:70%;display:block;margin:6px auto}',
    jsCode:'var lo=document.getElementById("lo"),hi=document.getElementById("hi");function u(){var a=Math.min(+lo.value,+hi.value),b=Math.max(+lo.value,+hi.value);document.getElementById("out").textContent=a+" - "+b;}lo.addEventListener("input",u);hi.addEventListener("input",u);u();' });
  add({ id:"ui-012", title:"評論星等統計條", titleEn:"Rating Distribution", type:"UI 互動元件",
    subjects:["數學","資訊教育"], topics:["統計","評分","長條"], difficulty:"初階", interactionTypes:["互動圖表"],
    description:"以水平長條顯示 1–5 星的評分分布比例。", teachingApplication:"呈現問卷或評分統計。",
    learningObjectives:["解讀分布","比例呈現"], tags:["評分","統計","UI"],
    htmlCode:'<div id="rd"></div>',
    cssCode:'body{font-family:sans-serif;max-width:280px;margin:auto}.row{display:flex;align-items:center;gap:8px;margin:4px 0}.bar{height:12px;background:#f59e0b;border-radius:6px}',
    jsCode:'var data={5:40,4:25,3:15,2:12,1:8},total=100,el=document.getElementById("rd");for(var s=5;s>=1;s--){var d=document.createElement("div");d.className="row";d.innerHTML=s+"★ <div class=bar style=width:"+(data[s]/total*180)+"px></div> "+data[s]+"%";el.appendChild(d);}' });
  add({ id:"ui-013", title:"多步驟表單精靈", titleEn:"Multi-step Form", type:"UI 互動元件",
    subjects:["資訊教育"], topics:["表單","步驟","精靈"], difficulty:"中階", interactionTypes:["點擊"],
    description:"分多步驟填寫的表單，含進度指示與上下步。", teachingApplication:"報名或問卷的分步填寫介面。",
    learningObjectives:["認識多步驟表單","管理步驟狀態"], tags:["表單","步驟","UI"],
    htmlCode:'<div class="wiz"><p id="step">步驟 1 / 3：基本資料</p><div class="dots" id="dots"></div><button id="prev">上一步</button><button id="next">下一步</button></div>',
    cssCode:'body{font-family:sans-serif;text-align:center}.dots i{display:inline-block;width:10px;height:10px;border-radius:50%;background:#cbd5e1;margin:3px}.dots i.on{background:#2563eb}button{padding:8px 14px;border:none;border-radius:8px;background:#0ea5a4;color:#fff;margin:2px}',
    jsCode:'var steps=["基本資料","選擇項目","確認送出"],i=0,dots=document.getElementById("dots");steps.forEach(function(){var d=document.createElement("i");dots.appendChild(d);});function draw(){document.getElementById("step").textContent="步驟 "+(i+1)+" / "+steps.length+"："+steps[i];dots.querySelectorAll("i").forEach(function(d,k){d.classList.toggle("on",k<=i);});}document.getElementById("next").onclick=function(){if(i<steps.length-1){i++;draw();}};document.getElementById("prev").onclick=function(){if(i>0){i--;draw();}};draw();' });
  add({ id:"ui-014", title:"複製到剪貼簿按鈕", titleEn:"Copy to Clipboard", type:"UI 互動元件",
    subjects:["資訊教育"], topics:["剪貼簿","複製","回饋"], difficulty:"初階", interactionTypes:["點擊"],
    description:"點擊複製文字到剪貼簿並顯示成功提示（含備援）。", teachingApplication:"示範 Clipboard API 與使用者回饋。",
    learningObjectives:["認識剪貼簿 API","提供操作回饋"], tags:["剪貼簿","複製","UI"],
    htmlCode:'<code id="txt">科學使人進步</code><button id="cp">複製</button><span id="msg"></span>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:20px}code{background:#eef4ff;padding:6px 10px;border-radius:6px}button{padding:6px 12px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:0 6px}#msg{color:#10b981}',
    jsCode:'document.getElementById("cp").onclick=function(){var t=document.getElementById("txt").textContent;function ok(){document.getElementById("msg").textContent="已複製 ✓";}if(navigator.clipboard){navigator.clipboard.writeText(t).then(ok,ok);}else{var ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();ok();}};' });
  add({ id:"ui-015", title:"深淺色切換開關", titleEn:"Theme Toggle Demo", type:"UI 互動元件",
    subjects:["資訊教育","藝術教育"], topics:["主題","深色","切換"], difficulty:"初階", interactionTypes:["點擊"],
    description:"示範深/淺色主題切換（以 CSS 變數與 class）。", teachingApplication:"介紹主題切換與 CSS 變數。",
    learningObjectives:["認識 CSS 變數","實作主題切換"], tags:["主題","深色","UI"],
    htmlCode:'<button id="t">🌙 切換主題</button><div class="demo"><h3>示範卡片</h3><p>切換看看深淺色。</p></div>',
    cssCode:'body{font-family:sans-serif;text-align:center;--bg:#fff;--fg:#1e293b;background:var(--bg);color:var(--fg);transition:.3s;padding:20px}body.dark{--bg:#0b1020;--fg:#e8eefc}.demo{border:1px solid #94a3b8;border-radius:12px;padding:16px;margin-top:12px}button{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'document.getElementById("t").onclick=function(){document.body.classList.toggle("dark");this.textContent=document.body.classList.contains("dark")?"☀️ 切換主題":"🌙 切換主題";};' });
  add({ id:"ui-016", title:"對話氣泡打字中", titleEn:"Chat Typing Bubble", type:"UI 互動元件",
    subjects:["資訊教育","語文教育"], topics:["對話","氣泡","動畫"], difficulty:"初階", interactionTypes:["點擊"],
    description:"聊天對話氣泡與「正在輸入」的動態點點點。", teachingApplication:"對話式教材或聊天介面示範。",
    learningObjectives:["認識對話 UI","狀態動畫"], tags:["對話","氣泡","UI"],
    htmlCode:'<div class="chat"><div class="b them">你好！準備好上課了嗎？</div><div class="b me">好了！</div><div class="b them typing"><i></i><i></i><i></i></div></div>',
    cssCode:'body{font-family:sans-serif;max-width:280px;margin:auto;padding:16px}.b{padding:10px 14px;border-radius:14px;margin:6px 0;max-width:80%}.them{background:#e2e8f0}.me{background:#2563eb;color:#fff;margin-left:auto}.typing i{display:inline-block;width:7px;height:7px;background:#64748b;border-radius:50%;animation:t 1s infinite}.typing i:nth-child(2){animation-delay:.2s}.typing i:nth-child(3){animation-delay:.4s}@keyframes t{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}'+RG, jsCode:'' });

  /* ---------- 遊戲化學習（6） ---------- */
  add({ id:"gm-009", title:"貪食蛇（科學版）", titleEn:"Snake Game", type:"遊戲化學習",
    subjects:["資訊教育","數學"], topics:["遊戲","座標","邏輯"], difficulty:"進階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["鍵盤操作","遊戲控制"],
    description:"經典貪食蛇，示範網格座標、佇列與碰撞。", teachingApplication:"程式設計與座標、資料結構教學。",
    learningObjectives:["認識網格座標","理解佇列與碰撞"], tags:["貪食蛇","遊戲","座標"],
    htmlCode:'<canvas id="s" width="200" height="200" tabindex="0"></canvas><p style="text-align:center;font-family:sans-serif">方向鍵控制</p>',
    cssCode:'canvas{background:#0b1020;border-radius:8px;display:block;margin:auto;outline:none}',
    jsCode:'var c=document.getElementById("s"),x=c.getContext("2d"),g=10,snake=[{x:5,y:5}],dir={x:1,y:0},food={x:8,y:5};addEventListener("keydown",function(e){if(e.key==="ArrowUp"&&dir.y===0)dir={x:0,y:-1};if(e.key==="ArrowDown"&&dir.y===0)dir={x:0,y:1};if(e.key==="ArrowLeft"&&dir.x===0)dir={x:-1,y:0};if(e.key==="ArrowRight"&&dir.x===0)dir={x:1,y:0};});function loop(){var h={x:(snake[0].x+dir.x+20)%20,y:(snake[0].y+dir.y+20)%20};snake.unshift(h);if(h.x===food.x&&h.y===food.y){food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};}else snake.pop();x.clearRect(0,0,200,200);x.fillStyle="#ef4444";x.fillRect(food.x*g,food.y*g,g-1,g-1);x.fillStyle="#0ea5a4";snake.forEach(function(s){x.fillRect(s.x*g,s.y*g,g-1,g-1);});setTimeout(function(){requestAnimationFrame(loop);},140);}c.focus();loop();' });
  add({ id:"gm-010", title:"單字消消樂", titleEn:"Word Pop", type:"遊戲化學習",
    subjects:["語文教育","跨領域學習"], topics:["單字","點擊","計時"], difficulty:"初階", interactionTypes:["點擊","遊戲控制"],
    description:"點掉指定類別的詞語得分，訓練分類與反應。", teachingApplication:"詞語分類的趣味練習。",
    learningObjectives:["詞語分類","反應訓練"], tags:["單字","分類","遊戲"],
    htmlCode:'<p>點掉「動物」：<b id="sc">0</b></p><div id="grid"></div>',
    cssCode:'body{font-family:sans-serif;text-align:center}#grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:280px;margin:auto}button{padding:12px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var words=[["貓",1],["桌子",0],["狗",1],["椅子",0],["魚",1],["書",0],["鳥",1],["筆",0],["馬",1]];var sc=0,grid=document.getElementById("grid");words.forEach(function(w){var b=document.createElement("button");b.textContent=w[0];b.onclick=function(){if(w[1]){sc++;document.getElementById("sc").textContent=sc;b.style.visibility="hidden";}else{b.style.background="#ef4444";}};grid.appendChild(b);});' });
  add({ id:"gm-011", title:"記憶翻牌配對", titleEn:"Memory Flip Match", type:"遊戲化學習",
    subjects:["資訊教育","跨領域學習"], topics:["記憶","配對","翻牌"], difficulty:"中階", interactionTypes:["點擊","遊戲控制"],
    description:"翻牌找出相同的一對，訓練記憶。", teachingApplication:"記憶訓練與配對複習。",
    learningObjectives:["訓練記憶","配對辨識"], tags:["記憶","翻牌","配對","遊戲"],
    htmlCode:'<div id="grid"></div><p id="msg" aria-live="polite"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center}#grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;max-width:260px;margin:auto}.card{aspect-ratio:1;border:none;border-radius:8px;background:#2563eb;color:#fff;font-size:1.4rem}.card.up{background:#0ea5a4}.card.done{visibility:hidden}',
    jsCode:'var v=["🐶","🐱","🐭","🦊"];var deck=v.concat(v).sort(function(){return Math.random()-.5;});var grid=document.getElementById("grid"),first=null,lock=false,done=0;deck.forEach(function(e,i){var b=document.createElement("button");b.className="card";b.dataset.v=e;b.textContent="?";b.onclick=function(){if(lock||b.classList.contains("up")||b.classList.contains("done"))return;b.textContent=e;b.classList.add("up");if(!first){first=b;return;}if(first.dataset.v===e){first.classList.add("done");b.classList.add("done");done+=2;if(done===deck.length)document.getElementById("msg").textContent="全部完成！";first=null;}else{lock=true;setTimeout(function(){[first,b].forEach(function(c){c.textContent="?";c.classList.remove("up");});first=null;lock=false;},700);}};grid.appendChild(b);});' });
  add({ id:"gm-012", title:"是非快問快答（計時）", titleEn:"Timed True/False", type:"遊戲化學習",
    subjects:["跨領域學習","自然科學"], topics:["快答","計時","計分"], difficulty:"初階", interactionTypes:["點擊","遊戲控制"],
    description:"限時內盡量答對是非題，訓練反應與判斷。", teachingApplication:"複習概念的快問快答挑戰。",
    learningObjectives:["快速判斷","即時計分"], tags:["快答","計時","遊戲"],
    htmlCode:'<p>時間：<b id="tm">10</b>　分數：<b id="sc">0</b></p><p id="q"></p><button id="t">對</button><button id="f">錯</button>',
    cssCode:'body{font-family:sans-serif;text-align:center}button{padding:10px 20px;border:none;border-radius:8px;margin:6px;color:#fff}#t{background:#10b981}#f{background:#ef4444}',
    jsCode:'var bank=[["1公斤=1000公克",true],["蜘蛛有6隻腳",false],["水結冰體積變大",true],["聲音能在真空傳播",false]];var i=0,sc=0,tm=10,timer;function show(){document.getElementById("q").textContent=bank[i%bank.length][0];}function ans(v){if(v===bank[i%bank.length][1]){sc++;document.getElementById("sc").textContent=sc;}i++;show();}document.getElementById("t").onclick=function(){ans(true);};document.getElementById("f").onclick=function(){ans(false);};timer=setInterval(function(){tm--;document.getElementById("tm").textContent=tm;if(tm<=0){clearInterval(timer);document.getElementById("q").textContent="時間到！得分 "+sc;}},1000);show();' });
  add({ id:"gm-013", title:"平衡計分板", titleEn:"Scoreboard", type:"遊戲化學習",
    subjects:["資訊教育","跨領域學習"], topics:["計分","競賽","本地儲存"], difficulty:"初階",
    technologies:["HTML","CSS","JavaScript","LocalStorage"], interactionTypes:["點擊"],
    description:"雙隊加減分計分板，重整後保留。", teachingApplication:"課堂分組競賽計分。",
    learningObjectives:["管理狀態","本地儲存"], tags:["計分","競賽","遊戲"],
    htmlCode:'<div class="sb"><div><h3>紅隊</h3><b id="a">0</b><br><button data-t="a" data-d="1">+1</button><button data-t="a" data-d="-1">-1</button></div><div><h3>藍隊</h3><b id="b">0</b><br><button data-t="b" data-d="1">+1</button><button data-t="b" data-d="-1">-1</button></div></div>',
    cssCode:'body{font-family:sans-serif;text-align:center}.sb{display:flex;justify-content:center;gap:30px}b{font-size:2.5rem;color:#2563eb}button{padding:6px 12px;border:none;border-radius:8px;background:#0ea5a4;color:#fff;margin:2px}',
    jsCode:'var s={a:0,b:0};try{s=JSON.parse(localStorage.getItem("demo-sb"))||s;}catch(e){}function draw(){document.getElementById("a").textContent=s.a;document.getElementById("b").textContent=s.b;try{localStorage.setItem("demo-sb",JSON.stringify(s));}catch(e){}}document.querySelector(".sb").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;s[b.dataset.t]=Math.max(0,s[b.dataset.t]+ +b.dataset.d);draw();});draw();' });
  add({ id:"gm-014", title:"專注力舒爾特方格", titleEn:"Schulte Table", type:"遊戲化學習",
    subjects:["健康教育","數學"], topics:["專注","注意力","計時"], difficulty:"中階", interactionTypes:["點擊","遊戲控制"],
    description:"依序點擊 1–25 的數字，訓練專注與視覺搜尋。", teachingApplication:"注意力與視覺搜尋訓練。",
    learningObjectives:["訓練專注","視覺搜尋"], tags:["專注","舒爾特","遊戲"],
    htmlCode:'<p>下一個：<b id="next">1</b>　用時：<b id="tm">0.0</b>s</p><div id="grid"></div>',
    cssCode:'body{font-family:sans-serif;text-align:center}#grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;max-width:260px;margin:auto}button{aspect-ratio:1;border:1px solid #cbd5e1;border-radius:6px;background:#fff;font-size:1rem}button.ok{background:#10b981;color:#fff}',
    jsCode:'var nums=[];for(var i=1;i<=25;i++)nums.push(i);nums.sort(function(){return Math.random()-.5;});var next=1,t0=null,grid=document.getElementById("grid");nums.forEach(function(n){var b=document.createElement("button");b.textContent=n;b.onclick=function(){if(n===next){if(!t0)t0=Date.now();b.classList.add("ok");next++;document.getElementById("next").textContent=next>25?"完成":next;if(next>25)document.getElementById("tm").textContent=((Date.now()-t0)/1000).toFixed(1);}};grid.appendChild(b);});' });

  /* ---------- 測驗與評量（4） ---------- */
  add({ id:"qz-009", title:"看圖辨識選擇題", titleEn:"Picture Choice Quiz", type:"測驗與評量",
    subjects:["自然科學","語文教育"], topics:["圖像","選擇","辨識"], difficulty:"初階", interactionTypes:["點擊","問答測驗"],
    description:"看 emoji 圖像選出正確名稱的選擇題。", teachingApplication:"圖像與名詞對應的辨識評量。",
    learningObjectives:["圖文對應","辨識評量"], tags:["看圖","選擇","測驗"],
    htmlCode:'<div id="pic" style="font-size:4rem"></div><div id="opts"></div><p id="sc" aria-live="polite"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center}#opts button{margin:4px;padding:10px 16px;border:1px solid #cbd5e1;border-radius:8px;background:#fff}',
    jsCode:'var q=[["🦋",["蝴蝶","蜜蜂","蜻蜓"],0],["🌋",["山","火山","冰山"],1],["🔬",["望遠鏡","顯微鏡","放大鏡"],1]];var i=0,sc=0;function show(){if(i>=q.length){document.getElementById("pic").textContent="✅";document.getElementById("opts").innerHTML="";document.getElementById("sc").textContent="得分："+sc+"/"+q.length;return;}document.getElementById("pic").textContent=q[i][0];document.getElementById("opts").innerHTML="";q[i][1].forEach(function(t,k){var b=document.createElement("button");b.textContent=t;b.onclick=function(){if(k===q[i][2])sc++;i++;show();};document.getElementById("opts").appendChild(b);});}show();' });
  add({ id:"qz-010", title:"滑桿估算題", titleEn:"Estimation Slider Quiz", type:"測驗與評量",
    subjects:["數學","自然科學"], topics:["估算","數感","誤差"], difficulty:"初階", interactionTypes:["滑桿","問答測驗"],
    description:"用滑桿估答數值，依接近程度給回饋。", teachingApplication:"培養數感與估算能力。",
    learningObjectives:["培養數感","認識誤差"], tags:["估算","數感","測驗"],
    htmlCode:'<p id="q">地球到月球約幾萬公里？</p><input id="s" type="range" min="1" max="100" value="50"><b id="v">50</b> 萬<br><button id="c">作答</button><p id="r" aria-live="polite"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center}input{width:70%}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var ans=38,s=document.getElementById("s");s.addEventListener("input",function(){document.getElementById("v").textContent=s.value;});document.getElementById("c").onclick=function(){var d=Math.abs(s.value-ans);document.getElementById("r").textContent=d<5?"很接近！約 38 萬公里":d<15?"還不錯，答案約 38 萬":"再想想，約 38 萬公里";};' });
  add({ id:"qz-011", title:"配對連線題", titleEn:"Matching Lines Quiz", type:"測驗與評量",
    subjects:["自然科學","跨領域學習"], topics:["配對","連線","對應"], difficulty:"中階", interactionTypes:["點擊","問答測驗"],
    description:"點左右兩欄項目建立配對，檢查對應是否正確。", teachingApplication:"概念與定義、器官與功能的配對評量。",
    learningObjectives:["建立對應","配對評量"], tags:["配對","連線","測驗"],
    htmlCode:'<div class="cols"><div id="L"></div><div id="R"></div></div><p id="msg" aria-live="polite"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center}.cols{display:flex;justify-content:center;gap:40px}button{display:block;margin:6px 0;padding:8px 12px;border:1px solid #cbd5e1;border-radius:8px;background:#fff}button.sel{background:#2563eb;color:#fff}button.ok{background:#10b981;color:#fff}',
    jsCode:'var pairs=[["心臟","打血"],["肺","呼吸"],["胃","消化"]];var L=document.getElementById("L"),R=document.getElementById("R"),rs=pairs.map(function(p){return p[1];}).sort(function(){return Math.random()-.5;});var selL=null,done=0;pairs.forEach(function(p){var b=document.createElement("button");b.textContent=p[0];b.dataset.k=p[1];b.onclick=function(){if(b.classList.contains("ok"))return;L.querySelectorAll("button").forEach(function(x){x.classList.remove("sel");});b.classList.add("sel");selL=b;};L.appendChild(b);});rs.forEach(function(r){var b=document.createElement("button");b.textContent=r;b.onclick=function(){if(!selL||b.classList.contains("ok"))return;if(selL.dataset.k===r){selL.classList.add("ok");b.classList.add("ok");selL.classList.remove("sel");done++;if(done===pairs.length)document.getElementById("msg").textContent="全部配對正確！";}else{document.getElementById("msg").textContent="配對錯誤";}selL=null;};R.appendChild(b);});' });
  add({ id:"qz-012", title:"即時投票統計", titleEn:"Live Poll", type:"測驗與評量",
    subjects:["社會領域","數學","資訊教育"], topics:["投票","統計","即時"], difficulty:"初階", interactionTypes:["點擊","互動圖表"],
    description:"點選選項即時更新投票長條與百分比。", teachingApplication:"課堂即時投票與意見蒐集。",
    learningObjectives:["即時統計","解讀比例"], tags:["投票","統計","測驗"],
    htmlCode:'<p>你最喜歡哪一科？</p><div id="poll"></div>',
    cssCode:'body{font-family:sans-serif;max-width:280px;margin:auto;text-align:center}.opt{margin:6px 0}.opt button{width:100%;padding:8px;border:none;border-radius:8px;background:#2563eb;color:#fff}.bar{height:10px;background:#0ea5a4;border-radius:5px;margin-top:3px}',
    jsCode:'var data={"自然":0,"數學":0,"語文":0},total=0,el=document.getElementById("poll");function draw(){el.innerHTML="";for(var k in data){var pct=total?Math.round(data[k]/total*100):0;var d=document.createElement("div");d.className="opt";d.innerHTML="<button data-k=\'"+k+"\'>"+k+"（"+pct+"%）</button><div class=bar style=width:"+pct+"%></div>";el.appendChild(d);}}el.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;data[b.dataset.k]++;total++;draw();});draw();' });

  /* ---------- 虛擬實驗（6） ---------- */
  add({ id:"lab-009", title:"擺錘能量轉換", titleEn:"Pendulum Energy", type:"虛擬實驗",
    subjects:["自然科學","物理"], topics:["能量","動能","位能"], difficulty:"中階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["拖曳","即時模擬"],
    description:"拖起擺錘放開，觀察動能與位能的週期轉換。", teachingApplication:"以單擺說明能量守恆與轉換。",
    learningObjectives:["理解能量轉換","認識能量守恆"], tags:["擺錘","能量","虛擬實驗"],
    htmlCode:'<canvas id="p" width="300" height="200"></canvas><p style="text-align:center;font-family:sans-serif">拖曳擺錘放開</p>',
    cssCode:'canvas{background:#0b1020;border-radius:8px;display:block;margin:auto;touch-action:none}',
    jsCode:'var c=document.getElementById("p"),x=c.getContext("2d"),ang=0.8,v=0,drag=false,ox=150,oy=20,L=140;function pos(){return[ox+Math.sin(ang)*L,oy+Math.cos(ang)*L];}c.addEventListener("pointerdown",function(){drag=true;});c.addEventListener("pointerup",function(){drag=false;v=0;});c.addEventListener("pointermove",function(e){if(drag){var r=c.getBoundingClientRect();ang=Math.atan2(e.clientX-r.left-ox,e.clientY-r.top-oy);}});function loop(){if(!drag){v+=-9.8/L*Math.sin(ang)*0.16;v*=0.999;ang+=v;}var p=pos();x.clearRect(0,0,300,200);x.strokeStyle="#94a3b8";x.beginPath();x.moveTo(ox,oy);x.lineTo(p[0],p[1]);x.stroke();x.fillStyle="#0ea5a4";x.beginPath();x.arc(p[0],p[1],14,0,7);x.fill();requestAnimationFrame(loop);}loop();' });
  add({ id:"lab-010", title:"斜面小車加速度", titleEn:"Inclined Cart Acceleration", type:"虛擬實驗",
    subjects:["自然科學","物理","數學"], topics:["斜面","加速度","重力分量"], difficulty:"進階",
    interactionTypes:["滑桿","即時模擬"], description:"調整斜面角度，觀察小車加速度隨角度變化。",
    teachingApplication:"探究斜面角度與加速度的關係。", learningObjectives:["理解重力分量","分析加速度"],
    scienceFairApplication:"以軌道與計時器測量斜面加速度。", tags:["斜面","加速度","虛擬實驗"] });
  add({ id:"lab-011", title:"混合顏料預測", titleEn:"Paint Mixing Predict", type:"虛擬實驗",
    subjects:["藝術教育","自然科學"], topics:["混色","顏料","預測"], difficulty:"入門",
    interactionTypes:["點擊","即時模擬"], description:"選兩色顏料預測混合結果，再驗證（減法混色）。",
    teachingApplication:"顏料減法混色的探究。", learningObjectives:["認識減法混色","預測與驗證"], tags:["混色","顏料","虛擬實驗"] });
  add({ id:"lab-012", title:"聲音頻率與音高", titleEn:"Frequency & Pitch", type:"虛擬實驗",
    subjects:["自然科學","物理","藝術教育"], topics:["頻率","音高","聲音"], difficulty:"中階",
    technologies:["HTML","JavaScript","Web Audio API"], interactionTypes:["滑桿","聲音互動"],
    description:"調整頻率聽音高變化（需點擊啟動聲音，不自動播放）。", teachingApplication:"連結頻率與音高。",
    learningObjectives:["認識頻率與音高","體會聲音關係"], accessibilityNotes:"不自動播放聲音，需使用者啟動；提供文字狀態。", tags:["頻率","音高","虛擬實驗"],
    htmlCode:'<button id="tg">▶ 播放</button><label>頻率 <input id="f" type="range" min="100" max="1000" value="440"> <b id="v">440</b>Hz</label>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:20px}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}input{width:60%}',
    jsCode:'var ctx,osc,on=false,f=document.getElementById("f");document.getElementById("tg").onclick=function(){if(!on){ctx=new(window.AudioContext||window.webkitAudioContext)();osc=ctx.createOscillator();osc.frequency.value=+f.value;osc.connect(ctx.destination);osc.start();on=true;this.textContent="⏸ 停止";}else{osc.stop();ctx.close();on=false;this.textContent="▶ 播放";}};f.addEventListener("input",function(){document.getElementById("v").textContent=f.value;if(osc)osc.frequency.value=+f.value;});' });
  add({ id:"lab-013", title:"溶液導電度", titleEn:"Solution Conductivity", type:"虛擬實驗",
    subjects:["自然科學","化學","物理"], topics:["導電","電解質","離子"], difficulty:"中階",
    interactionTypes:["點擊","即時模擬"], description:"測試不同溶液是否導電，燈泡亮度反映導電度。",
    teachingApplication:"認識電解質與非電解質。", learningObjectives:["區分電解質","理解離子導電"], tags:["導電","電解質","虛擬實驗"] });
  add({ id:"lab-014", title:"種子發芽條件", titleEn:"Germination Conditions", type:"虛擬實驗",
    subjects:["自然科學","生物"], topics:["發芽","水分","溫度","對照"], difficulty:"初階",
    interactionTypes:["點擊","即時模擬"], description:"設定水分、光照與溫度，觀察哪組種子會發芽。",
    teachingApplication:"探究發芽條件與對照實驗設計。", learningObjectives:["認識發芽條件","設計對照組"],
    scienceFairApplication:"以實際種子做發芽條件對照實驗。", tags:["發芽","對照","虛擬實驗"] });

  /* ---------- 教材版面/無障礙/行動（4） ---------- */
  add({ id:"nav-007", title:"分頁式教材導覽", titleEn:"Tabbed Lesson Nav", type:"教材版面與導覽",
    subjects:["資訊教育"], topics:["分頁","導覽","課程"], difficulty:"初階", interactionTypes:["點擊"],
    description:"以頂部分頁在課程各節間切換，並記住目前節次。", teachingApplication:"單元多節內容的導覽版面。",
    learningObjectives:["認識分頁導覽","狀態管理"], tags:["分頁","導覽","版面"],
    htmlCode:'<nav class="tabs" id="tabs"></nav><div id="content"></div>',
    cssCode:'body{font-family:sans-serif}.tabs{display:flex;gap:2px}.tabs button{flex:1;padding:10px;border:none;background:#e2e8f0}.tabs button.on{background:#2563eb;color:#fff}#content{padding:20px;background:#eef4ff}',
    jsCode:'var secs=["引起動機","發展活動","綜合活動"],tabs=document.getElementById("tabs"),content=document.getElementById("content");secs.forEach(function(s,i){var b=document.createElement("button");b.textContent=s;b.onclick=function(){tabs.querySelectorAll("button").forEach(function(x){x.classList.remove("on");});b.classList.add("on");content.textContent=s+" 的內容。";};tabs.appendChild(b);});tabs.firstChild.click();' });
  add({ id:"a11y-007", title:"色盲友善配色檢查", titleEn:"Color-blind Safe Palette", type:"無障礙互動",
    subjects:["資訊教育","藝術教育","自然科學"], topics:["色盲","配色","無障礙"], difficulty:"中階", interactionTypes:["點擊","即時模擬"],
    description:"切換色盲模擬濾鏡，檢視配色是否仍可分辨。", teachingApplication:"認識色覺無障礙與安全配色。",
    learningObjectives:["認識色盲","檢視配色可及性"], accessibilityNotes:"提醒顏色不應為唯一資訊來源。", tags:["色盲","配色","無障礙"] });
  add({ id:"a11y-008", title:"語音朗讀（TTS）", titleEn:"Text-to-Speech", type:"無障礙互動",
    subjects:["資訊教育","語文教育","健康教育"], topics:["朗讀","語音","無障礙"], difficulty:"中階",
    technologies:["HTML","JavaScript","Web Audio API"], interactionTypes:["點擊","聲音互動"],
    description:"以瀏覽器語音合成朗讀輸入文字（需使用者點擊觸發）。", teachingApplication:"閱讀輔助與語言學習發音。",
    learningObjectives:["認識語音合成","閱讀輔助"], accessibilityNotes:"由使用者點擊觸發，不自動發聲。", tags:["朗讀","TTS","無障礙"],
    htmlCode:'<textarea id="t" rows="3" cols="26">科學使人進步。</textarea><br><button id="say">🔊 朗讀</button>',
    cssCode:'body{font-family:sans-serif;text-align:center}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin-top:8px}',
    jsCode:'document.getElementById("say").onclick=function(){if("speechSynthesis" in window){var u=new SpeechSynthesisUtterance(document.getElementById("t").value);u.lang="zh-TW";speechSynthesis.speak(u);}else{alert("此瀏覽器不支援語音合成");}};' });
  add({ id:"mob-007", title:"搖一搖偵測", titleEn:"Shake Detection", type:"行動載具互動",
    subjects:["資訊教育","物理"], topics:["加速度計","搖動","感測"], difficulty:"進階",
    technologies:["HTML","JavaScript"], interactionTypes:["裝置方向感測"],
    description:"偵測裝置搖動（加速度變化）觸發動作（需行動裝置與權限）。", teachingApplication:"感測器應用與互動設計。",
    learningObjectives:["認識加速度計","感測觸發"], mobileNotes:"iOS 需權限；桌機無感測器時顯示提示。",
    accessibilityNotes:"另提供按鈕備援，感測為輔助。", tags:["搖一搖","加速度計","行動"],
    htmlCode:'<button id="en">啟用搖動偵測</button><p id="out">搖動裝置試試（或用按鈕備援）</p><button id="fake">模擬搖動</button>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:20px}button{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:4px}',
    jsCode:'var out=document.getElementById("out"),last={x:0,y:0,z:0},n=0;function shook(){n++;out.textContent="偵測到搖動！第 "+n+" 次";}function handle(e){var a=e.accelerationIncludingGravity||{};if(Math.abs((a.x||0)-last.x)+Math.abs((a.y||0)-last.y)+Math.abs((a.z||0)-last.z)>30)shook();last={x:a.x||0,y:a.y||0,z:a.z||0};}document.getElementById("en").onclick=function(){if(typeof DeviceMotionEvent!=="undefined"&&DeviceMotionEvent.requestPermission){DeviceMotionEvent.requestPermission().then(function(s){if(s==="granted")addEventListener("devicemotion",handle);}).catch(function(){out.textContent="無法取得權限";});}else if("DeviceMotionEvent" in window){addEventListener("devicemotion",handle);out.textContent="已啟用，搖動看看";}else out.textContent="此裝置不支援";};document.getElementById("fake").onclick=shook;' });
})();
