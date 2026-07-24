/* ============================================================
   data-phase4e.js — 第四階段擴充（收尾補充，突破 500 案例）
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var P = window.__P2, MK = window.__P2mk;
  function add(o) { P.push(MK(o)); }

  /* ---------- 綜合補充（14） ---------- */
  add({ id:"js-034", title:"進位制轉換器", titleEn:"Base Converter", type:"JavaScript 特效",
    subjects:["資訊教育","數學"], topics:["進位制","二進位","十六進位"], difficulty:"中階", interactionTypes:["鍵盤操作","即時模擬"],
    description:"輸入十進位數，即時轉換成二、八、十六進位。", teachingApplication:"認識不同進位制與電腦數字表示。",
    learningObjectives:["認識進位制","進行轉換"], tags:["進位制","二進位","JS"],
    htmlCode:'<label>十進位 <input id="d" type="number" value="42"></label><ul id="out"></ul>',
    cssCode:'body{font-family:sans-serif;text-align:center}ul{list-style:none;padding:0}li{margin:4px 0}',
    jsCode:'var d=document.getElementById("d");function u(){var n=parseInt(d.value)||0;document.getElementById("out").innerHTML=["二進位: "+n.toString(2),"八進位: "+n.toString(8),"十六進位: "+n.toString(16).toUpperCase()].map(function(s){return "<li>"+s+"</li>";}).join("");}d.addEventListener("input",u);u();' });
  add({ id:"js-035", title:"隨機名言產生器", titleEn:"Random Quote", type:"JavaScript 特效",
    subjects:["語文教育","跨領域學習"], topics:["名言","隨機","展示"], difficulty:"入門", interactionTypes:["點擊"],
    description:"點擊隨機顯示一則勵志或科學名言。", teachingApplication:"每日一句、閱讀引言。",
    learningObjectives:["陣列隨機取值","內容展示"], tags:["名言","隨機","JS"],
    htmlCode:'<blockquote id="q">點擊看看名言</blockquote><button id="n">下一則</button>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:20px}blockquote{font-size:1.2rem;color:#2563eb;min-height:3em}button{padding:8px 16px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
    jsCode:'var qs=["科學始於好奇。","想像力比知識更重要。—愛因斯坦","失敗為成功之母。","學而不思則罔。—孔子","觀察是探究的起點。"];document.getElementById("n").onclick=function(){document.getElementById("q").textContent=qs[Math.floor(Math.random()*qs.length)];};' });
  add({ id:"js-036", title:"翻轉計數器", titleEn:"Tally Counter", type:"JavaScript 特效",
    subjects:["數學","自然科學"], topics:["計數","統計","觀察"], difficulty:"入門", interactionTypes:["點擊"],
    description:"點擊累加的計數器，適合觀察計數與統計。", teachingApplication:"觀察活動的即時計數。",
    learningObjectives:["認識計數","觀察統計"], tags:["計數","統計","JS"],
    htmlCode:'<div class="n" id="n">0</div><button id="add">+1</button> <button id="rs">歸零</button>',
    cssCode:'body{font-family:sans-serif;text-align:center}.n{font-size:4rem;color:#2563eb}button{padding:10px 18px;border:none;border-radius:8px;background:#0ea5a4;color:#fff;margin:2px}',
    jsCode:'var n=0,el=document.getElementById("n");document.getElementById("add").onclick=function(){el.textContent=++n;};document.getElementById("rs").onclick=function(){n=0;el.textContent=0;};' });
  add({ id:"css-032", title:"載入進度圓點軌道", titleEn:"Orbit Loader", type:"CSS 動畫",
    subjects:["藝術教育","資訊教育"], topics:["載入","軌道","動畫"], difficulty:"初階",
    technologies:["HTML","CSS","CSS Animation"], interactionTypes:["滑鼠移入"],
    description:"小圓點沿圓形軌道公轉的載入動畫。", teachingApplication:"載入指示或軌道運動示意。",
    learningObjectives:["認識旋轉動畫","transform-origin"], tags:["載入","軌道","CSS"],
    htmlCode:'<div class="orbit"><i></i></div>',
    cssCode:'body{display:flex;justify-content:center;padding:50px}.orbit{width:60px;height:60px;border:2px dashed #cbd5e1;border-radius:50%;position:relative;animation:sp 2s linear infinite}.orbit i{position:absolute;top:-6px;left:50%;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:#2563eb}@keyframes sp{to{transform:rotate(360deg)}}\n@media(prefers-reduced-motion:reduce){*{animation:none!important}}' });
  add({ id:"cv-010", title:"Canvas 彈珠台", titleEn:"Canvas Pinball Drop", type:"Canvas 案例",
    subjects:["自然科學","物理","數學"], topics:["碰撞","機率","高爾頓板"], difficulty:"進階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["點擊","即時模擬"],
    description:"珠子落下經釘子隨機左右偏移，堆成常態分布（高爾頓板）。", teachingApplication:"以高爾頓板體會常態分布與機率。",
    learningObjectives:["認識常態分布","理解隨機累積"], scienceFairApplication:"探究珠數與分布形狀的關係。", tags:["高爾頓板","機率","分布","Canvas"],
    htmlCode:'<canvas id="g" width="300" height="240"></canvas><br><button id="drop">投 50 顆</button>',
    cssCode:'body{text-align:center;font-family:sans-serif}canvas{background:#0b1020;border-radius:8px}button{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var c=document.getElementById("g"),x=c.getContext("2d"),bins=new Array(11).fill(0);function draw(){x.clearRect(0,0,300,240);x.fillStyle="#334155";for(var r=0;r<6;r++)for(var i=0;i<=r;i++){x.beginPath();x.arc(150+(i-r/2)*22,20+r*18,2,0,7);x.fill();}var max=Math.max.apply(null,bins)||1;x.fillStyle="#0ea5a4";bins.forEach(function(b,i){var h=b/max*90;x.fillRect(i*26+6,240-h,22,h);});}document.getElementById("drop").onclick=function(){for(var n=0;n<50;n++){var pos=5;for(var r=0;r<5;r++)pos+=Math.random()<.5?-0.5:0.5;bins[Math.round(pos)]++;}draw();};draw();' });
  add({ id:"phy-031", title:"槓桿投石器", titleEn:"Catapult Lever", type:"虛擬實驗",
    subjects:["自然科學","物理","數學"], topics:["槓桿","拋射","能量"], difficulty:"進階",
    interactionTypes:["滑桿","即時模擬"], description:"調整配重與臂長，發射投石器並比較射程。",
    teachingApplication:"整合槓桿、能量與拋射運動。", learningObjectives:["整合槓桿與拋射","分析射程"],
    scienceFairApplication:"製作投石器探究射程變因。", tags:["槓桿","投石器","物理"] });
  add({ id:"che-026", title:"燃料電池概念", titleEn:"Fuel Cell", type:"自然科互動網站",
    subjects:["自然科學","化學","環境教育"], topics:["燃料電池","氫能","能源"], difficulty:"進階",
    interactionTypes:["點擊","流程動畫"], description:"呈現氫氧燃料電池發電並產生水的過程。",
    teachingApplication:"認識潔淨能源與燃料電池。", learningObjectives:["認識燃料電池","連結潔淨能源"], tags:["燃料電池","氫能","化學"] });
  add({ id:"bio-030", title:"生物多樣性指數", titleEn:"Biodiversity Index", type:"Chart.js 與資料視覺化",
    subjects:["自然科學","生物","環境教育","數學"], topics:["多樣性","指數","生態"], difficulty:"進階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["滑桿","互動圖表"], description:"調整各物種數量，計算並比較生物多樣性指數。",
    teachingApplication:"以指數量化生態系的多樣性。", learningObjectives:["認識多樣性指數","量化生態"],
    scienceFairApplication:"以校園調查資料計算多樣性指數。", tags:["多樣性","指數","生物"] });
  add({ id:"ess-026", title:"星系與宇宙尺度", titleEn:"Cosmic Scale", type:"捲動敘事",
    subjects:["自然科學","地球科學","數學"], topics:["宇宙","尺度","冪次"], difficulty:"中階",
    interactionTypes:["捲動","即時模擬"], description:"以捲動由人類尺度縮放到星系與宇宙，體會冪次尺度。",
    teachingApplication:"建立宇宙尺度與科學記號的概念。", learningObjectives:["認識宇宙尺度","理解冪次"], tags:["宇宙","尺度","天文"] });
  add({ id:"mth-031", title:"黃金比例與螺線", titleEn:"Golden Ratio Spiral", type:"Canvas 案例",
    subjects:["數學","藝術教育","自然科學"], topics:["黃金比例","費氏","螺線"], difficulty:"中階",
    technologies:["HTML","Canvas","JavaScript"], interactionTypes:["即時模擬"],
    description:"由費氏數列方格畫出黃金螺線，連結自然界的比例之美。", teachingApplication:"連結數學比例與自然/藝術。",
    learningObjectives:["認識黃金比例","連結費氏數列"], tags:["黃金比例","螺線","數學"],
    htmlCode:'<canvas id="g" width="300" height="200"></canvas>',
    cssCode:'canvas{background:#fff;border:1px solid #cbd5e1;border-radius:8px;display:block;margin:auto}',
    jsCode:'var c=document.getElementById("g"),x=c.getContext("2d");var fib=[1,1,2,3,5,8,13,21];var px=140,py=110,dir=0;x.strokeStyle="#2563eb";fib.forEach(function(f){var s=f*4;x.strokeRect(px,py,s,s);x.beginPath();var cx,cy,a0,a1;if(dir===0){cx=px;cy=py+s;a0=-Math.PI/2;a1=-Math.PI;}else if(dir===1){cx=px;cy=py;a0=Math.PI/2;a1=0;}else if(dir===2){cx=px+s;cy=py;a0=Math.PI;a1=Math.PI/2;}else{cx=px+s;cy=py+s;a0=0;a1=-Math.PI/2;}x.strokeStyle="#ef4444";x.arc(cx,cy,s,a0,a1,true);x.stroke();x.strokeStyle="#2563eb";if(dir===0)px-=0;dir=(dir+1)%4;});' });
  add({ id:"ai-017", title:"強化學習尋寶", titleEn:"Reinforcement Learning", type:"自然科互動網站",
    subjects:["人工智慧","數學","資訊教育"], topics:["強化學習","獎勵","試誤"], difficulty:"專業",
    interactionTypes:["點擊","即時模擬"], description:"代理人在格子世界透過獎勵試誤學習最佳路徑。",
    teachingApplication:"以格子世界介紹強化學習概念。", learningObjectives:["認識強化學習","理解獎勵機制"], tags:["強化學習","獎勵","AI"] });
  add({ id:"cs-019", title:"檔案壓縮概念", titleEn:"Compression Concept", type:"自然科互動網站",
    subjects:["資訊教育","數學"], topics:["壓縮","編碼","重複"], difficulty:"中階", interactionTypes:["鍵盤操作","即時模擬"],
    description:"以連續重複字元的行程編碼示範資料壓縮概念。", teachingApplication:"認識資料壓縮與編碼。",
    learningObjectives:["認識壓縮","理解行程編碼"], tags:["壓縮","編碼","資訊教育"],
    htmlCode:'<input id="in" value="aaabbbcccd" style="width:70%"><p id="out"></p>',
    cssCode:'body{font-family:sans-serif;text-align:center;padding:16px}',
    jsCode:'var inp=document.getElementById("in");function rle(s){return s.replace(/(.)\\1*/g,function(m,c){return c+m.length;});}function u(){var s=inp.value,r=rle(s);document.getElementById("out").textContent="壓縮後："+r+"（"+s.length+"→"+r.length+" 字元）";}inp.addEventListener("input",u);u();' });
  add({ id:"soc-013", title:"人口成長模型", titleEn:"Population Growth", type:"Chart.js 與資料視覺化",
    subjects:["社會領域","數學","環境教育"], topics:["人口","成長","預測"], difficulty:"進階",
    technologies:["HTML","JavaScript","Canvas","Chart.js"], libraries:["Chart.js"], offlineFriendly:false,
    interactionTypes:["滑桿","互動圖表"], description:"調整成長率，預測未來人口變化曲線。", teachingApplication:"人口議題與指數成長。",
    learningObjectives:["認識人口成長","理解指數變化"], tags:["人口","成長","社會"] });
  add({ id:"hlt-010", title:"視力保健 20-20-20", titleEn:"Eye Care Timer", type:"JavaScript 特效",
    subjects:["健康教育","資訊教育"], topics:["視力","護眼","計時"], difficulty:"初階", interactionTypes:["點擊"],
    description:"每 20 分鐘提醒看遠 20 秒的護眼計時器。", teachingApplication:"用眼健康與護眼習慣。",
    learningObjectives:["認識護眼原則","建立習慣"], tags:["視力","護眼","健康"],
    htmlCode:'<div class="t" id="t">20:00</div><p id="msg">專注用眼中</p><button id="go">開始</button>',
    cssCode:'body{font-family:sans-serif;text-align:center}.t{font-size:3rem;font-variant-numeric:tabular-nums}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode:'var sec=1200,timer;function fmt(){document.getElementById("t").textContent=String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0");}document.getElementById("go").onclick=function(){clearInterval(timer);sec=1200;timer=setInterval(function(){if(sec>0){sec--;fmt();}else{document.getElementById("msg").textContent="休息一下！看遠 20 秒 👀";clearInterval(timer);}},1000);document.getElementById("msg").textContent="專注用眼中";};fmt();' });
})();
