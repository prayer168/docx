/* ============================================================
   data-phase2c.js — 第二階段擴充（續二）：測驗與評量、虛擬實驗、
                     教材版面與導覽、無障礙互動、行動載具互動
   須於 data-phase2.js 之後、data.js 之前載入。
   ============================================================ */
(function () {
  "use strict";
  if (!window.__P2 || !window.__P2mk) return;
  var push = function (o) { window.__P2.push(window.__P2mk(o)); };

  /* ================= 測驗與評量（8） ================= */
  push({ id: "qz-001", title: "多選題複選測驗", titleEn: "Multiple-Answer Quiz", type: "測驗與評量",
    subjects: ["自然科學", "跨領域學習"], topics: ["複選", "評量"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "問答測驗"],
    description: "可勾選多個正確答案的複選題，送出後標示對錯。",
    teachingApplication: "評量需辨識多個正確選項的概念。",
    learningObjectives: ["辨識多個正確答案", "自我檢核"],
    tags: ["複選題", "測驗", "評量"],
    htmlCode: '<p>下列哪些是哺乳類？（複選）</p>\n<label><input type="checkbox" value="1">鯨魚</label><br>\n<label><input type="checkbox" value="0">鯊魚</label><br>\n<label><input type="checkbox" value="1">蝙蝠</label><br>\n<label><input type="checkbox" value="0">企鵝</label><br>\n<button id="submit">送出</button><p id="res" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;max-width:300px;margin:auto}label{display:inline-block;padding:6px}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin-top:8px}',
    jsCode: 'document.getElementById("submit").onclick=function(){var ok=true;document.querySelectorAll("input").forEach(function(c){var should=c.value==="1";if(c.checked!==should)ok=false;});document.getElementById("res").textContent=ok?"全對！🎉":"再想想，哺乳類會用肺呼吸、以乳汁哺育幼獸。";};' });

  push({ id: "qz-002", title: "是非題快答", titleEn: "True/False Quiz", type: "測驗與評量",
    subjects: ["自然科學", "數學", "跨領域學習"], topics: ["是非", "即時回饋"],
    difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "問答測驗"],
    description: "連續是非題，作答後立即回饋並進入下一題。",
    teachingApplication: "快速檢核概念，適合暖身或複習。",
    learningObjectives: ["快速判斷對錯", "即時修正迷思"],
    tags: ["是非題", "測驗", "快答"],
    htmlCode: '<p id="q"></p><button id="t">✔ 對</button><button id="f">✘ 錯</button><p id="sc" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}button{padding:10px 20px;border:none;border-radius:8px;margin:6px;color:#fff}#t{background:#10b981}#f{background:#ef4444}',
    jsCode: 'var qs=[["水在 0°C 結冰。",true],["蜘蛛是昆蟲。",false],["地球繞太陽公轉。",true],["聲音可在真空中傳播。",false]];var i=0,score=0;\nvar q=document.getElementById("q"),sc=document.getElementById("sc");\nfunction show(){if(i<qs.length){q.textContent=(i+1)+". "+qs[i][0];}else{q.textContent="完成！";sc.textContent="得分："+score+"/"+qs.length;}}\nfunction ans(v){if(i>=qs.length)return;if(v===qs[i][1])score++;i++;show();}\ndocument.getElementById("t").onclick=function(){ans(true);};document.getElementById("f").onclick=function(){ans(false);};show();' });

  push({ id: "qz-003", title: "填空測驗", titleEn: "Fill-in-the-Blank", type: "測驗與評量",
    subjects: ["語文教育", "自然科學"], topics: ["填空", "關鍵字"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["鍵盤操作", "問答測驗"],
    description: "輸入答案填空，比對時忽略前後空白，答對標示綠色。",
    teachingApplication: "檢核關鍵名詞或詞彙的記憶與拼寫。",
    learningObjectives: ["回想關鍵字", "自我檢核拼寫"],
    tags: ["填空", "測驗", "關鍵字"],
    htmlCode: '<p>植物行光合作用會放出 <input id="a1" size="4"> 氣。</p>\n<p>水的化學式是 <input id="a2" size="4">。</p>\n<button id="check">檢查</button><p id="res" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;max-width:320px;margin:auto}input{border:1px solid #cbd5e1;border-radius:4px;padding:4px}input.ok{background:#dcfce7}input.no{background:#fee2e2}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'function norm(s){return s.trim().toLowerCase();}\ndocument.getElementById("check").onclick=function(){var a1=document.getElementById("a1"),a2=document.getElementById("a2");var ans=[[a1,["氧","o2"]],[a2,["h2o","h₂o"]]];var right=0;ans.forEach(function(p){var ok=p[1].indexOf(norm(p[0].value))>-1;p[0].className=ok?"ok":"no";if(ok)right++;});document.getElementById("res").textContent="答對 "+right+"/2";};' });

  push({ id: "qz-004", title: "拖曳配對測驗", titleEn: "Drag Match Quiz", type: "測驗與評量",
    subjects: ["自然科學", "語文教育"], topics: ["配對", "拖曳"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["拖曳", "問答測驗"],
    tabletFriendly: false, accessible: false,
    description: "將名詞拖到對應的定義上完成配對，答對即固定。",
    teachingApplication: "名詞與定義、符號與意義的配對評量。",
    learningObjectives: ["建立概念連結", "配對辨識"],
    accessibilityNotes: "原生拖曳在部分行動裝置支援有限，建議另提供下拉選單備援。",
    tags: ["配對", "拖曳", "測驗"],
    htmlCode: '<div class="items">\n<span class="item" draggable="true" data-k="a">🌞 太陽</span>\n<span class="item" draggable="true" data-k="b">🌍 地球</span>\n</div>\n<div class="drop" data-k="b">我們居住的行星</div>\n<div class="drop" data-k="a">太陽系的恆星</div>\n<p id="msg" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.item{display:inline-block;padding:8px 12px;background:#2563eb;color:#fff;border-radius:8px;margin:6px;cursor:grab}\n.drop{border:2px dashed #94a3b8;border-radius:8px;padding:14px;margin:8px auto;max-width:240px}\n.drop.ok{border-color:#10b981;background:#dcfce7}',
    jsCode: 'var dragged=null,done=0;\ndocument.querySelectorAll(".item").forEach(function(it){it.addEventListener("dragstart",function(){dragged=it;});});\ndocument.querySelectorAll(".drop").forEach(function(d){d.addEventListener("dragover",function(e){e.preventDefault();});d.addEventListener("drop",function(){if(dragged&&dragged.dataset.k===d.dataset.k){d.classList.add("ok");d.textContent=dragged.textContent+" ✓";dragged.remove();done++;if(done===2)document.getElementById("msg").textContent="全部配對完成！";}else{document.getElementById("msg").textContent="配對錯誤，再試一次";}});});' });

  push({ id: "qz-005", title: "排序題", titleEn: "Ordering Question", type: "測驗與評量",
    subjects: ["自然科學", "數學", "社會領域"], topics: ["排序", "順序"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "問答測驗"],
    description: "以上移／下移按鈕排列項目，送出後檢查是否為正確順序（鍵盤友善）。",
    teachingApplication: "評量事件先後、大小或流程順序。",
    learningObjectives: ["建立順序概念", "邏輯排序"],
    accessibilityNotes: "以按鈕排序，完全支援鍵盤操作。",
    tags: ["排序題", "順序", "測驗"],
    htmlCode: '<p>請排出行星由近到遠的順序：</p><ul id="list"></ul><button id="check">檢查</button><p id="res" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;max-width:300px;margin:auto}ul{list-style:none;padding:0}li{display:flex;justify-content:space-between;align-items:center;background:#eef4ff;margin:4px 0;padding:8px;border-radius:8px}li button{border:none;background:#2563eb;color:#fff;border-radius:6px;width:30px;height:30px;margin-left:4px}#check{padding:8px 16px;border:none;border-radius:8px;background:#0ea5a4;color:#fff}',
    jsCode: 'var correct=["水星","金星","地球","火星"],items=["火星","水星","地球","金星"],list=document.getElementById("list");\nfunction draw(){list.innerHTML="";items.forEach(function(t,i){var li=document.createElement("li");li.innerHTML="<span>"+t+"</span><span><button data-d=-1 data-i="+i+" aria-label=上移>▲</button><button data-d=1 data-i="+i+" aria-label=下移>▼</button></span>";list.appendChild(li);});}\nlist.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var i=+b.dataset.i,j=i+ +b.dataset.d;if(j>=0&&j<items.length){var t=items[i];items[i]=items[j];items[j]=t;draw();}});\ndocument.getElementById("check").onclick=function(){document.getElementById("res").textContent=items.join()===correct.join()?"順序正確！🎉":"順序還不對，再調整看看。";};draw();' });

  push({ id: "qz-006", title: "限時測驗計時器", titleEn: "Timed Quiz", type: "測驗與評量",
    subjects: ["跨領域學習", "資訊教育"], topics: ["計時", "壓力測驗"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "問答測驗"],
    description: "在倒數時間內盡量答對題目，時間到自動結算。",
    teachingApplication: "增加挑戰性的計時測驗，或作為搶答活動。",
    learningObjectives: ["在時間壓力下作答", "認識倒數計時"],
    tags: ["限時", "計時", "測驗"],
    htmlCode: '<p>剩餘時間：<b id="time">20</b> 秒　得分：<b id="score">0</b></p><p id="q"></p><div id="opts"></div><button id="start">開始</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}#opts button{display:block;width:200px;margin:6px auto;padding:10px;border:1px solid #cbd5e1;border-radius:8px;background:#fff}#start{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'var bank=[["3×4=?",["12","7","34"],0],["台灣最高山？",["玉山","阿里山","陽明山"],0],["H2O 是？",["水","氧","鹽"],0],["1 公里=?公尺",["1000","100","10"],0]];\nvar time=20,score=0,timer,cur;\nvar q=document.getElementById("q"),opts=document.getElementById("opts");\nfunction ask(){cur=bank[Math.floor(Math.random()*bank.length)];q.textContent=cur[0];opts.innerHTML="";cur[1].forEach(function(t,k){var b=document.createElement("button");b.textContent=t;b.onclick=function(){if(k===cur[2]){score++;document.getElementById("score").textContent=score;}ask();};opts.appendChild(b);});}\ndocument.getElementById("start").onclick=function(){score=0;time=20;document.getElementById("score").textContent=0;clearInterval(timer);ask();timer=setInterval(function(){time--;document.getElementById("time").textContent=time;if(time<=0){clearInterval(timer);q.textContent="時間到！得分 "+score;opts.innerHTML="";}},1000);};' });

  push({ id: "qz-007", title: "圖片熱區點選題", titleEn: "Image Hotspot Quiz", type: "測驗與評量",
    subjects: ["自然科學", "生物", "地球科學"], topics: ["熱區", "圖片辨識"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "問答測驗"],
    description: "在圖上點選正確位置作答，適合構造辨識題。",
    teachingApplication: "辨識圖上特定部位，如器官、地形或元件位置。",
    learningObjectives: ["圖上定位辨識", "空間對應"],
    tags: ["熱區", "圖片題", "辨識", "測驗"],
    htmlCode: '<p id="q">請點選「細胞核」的位置</p><div class="stage" id="stage"><button class="hs" style="left:45%;top:45%" data-ok="1"></button><button class="hs" style="left:15%;top:20%" data-ok="0"></button><button class="hs" style="left:75%;top:65%" data-ok="0"></button></div><p id="res" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.stage{position:relative;width:260px;height:180px;background:#dbeafe;border-radius:50%;margin:10px auto}\n.hs{position:absolute;width:30px;height:30px;border-radius:50%;border:2px solid #2563eb;background:#ffffff88}\n.hs.ok{background:#10b981}.hs.no{background:#ef4444}',
    jsCode: 'document.getElementById("stage").addEventListener("click",function(e){var h=e.target.closest(".hs");if(!h)return;if(h.dataset.ok==="1"){h.className="hs ok";document.getElementById("res").textContent="答對了！";}else{h.className="hs no";document.getElementById("res").textContent="不是這裡喔";}});' });

  push({ id: "qz-008", title: "自我評量問卷（Likert）", titleEn: "Likert Self-Assessment", type: "測驗與評量",
    subjects: ["健康教育", "跨領域學習"], topics: ["問卷", "量表", "自評"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "以五點量表填寫自評問卷，送出後計算平均分數。",
    teachingApplication: "課後自評、學習態度或滿意度問卷。",
    learningObjectives: ["認識李克特量表", "計算平均"],
    tags: ["問卷", "Likert", "量表", "自評"],
    htmlCode: '<form id="f"><p>我理解今天的內容</p><div class="lk" data-n="q1"></div><p>我能應用所學</p><div class="lk" data-n="q2"></div><button type="button" id="calc">計算</button></form><p id="res" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;max-width:320px;margin:auto}.lk{display:flex;gap:6px;justify-content:center}.lk label{display:flex;flex-direction:column;align-items:center;font-size:.8rem}#calc{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'document.querySelectorAll(".lk").forEach(function(g){for(var v=1;v<=5;v++){var l=document.createElement("label");l.innerHTML="<input type=radio name="+g.dataset.n+" value="+v+">"+v;g.appendChild(l);}});\ndocument.getElementById("calc").onclick=function(){var vals=[],names=["q1","q2"];names.forEach(function(n){var c=document.querySelector("input[name="+n+"]:checked");if(c)vals.push(+c.value);});document.getElementById("res").textContent=vals.length?"平均分數："+(vals.reduce(function(a,b){return a+b;})/vals.length).toFixed(1):"請先作答";};' });

  /* ================= 虛擬實驗（8） ================= */
  push({ id: "lab-001", title: "酸鹼指示劑變色", titleEn: "pH Indicator", type: "虛擬實驗",
    subjects: ["自然科學", "化學"], topics: ["酸鹼", "pH", "指示劑"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "拖動 pH 滑桿，溶液顏色依酸鹼度變化（模擬廣用指示劑）。",
    teachingApplication: "認識 pH 值與酸鹼性，觀察指示劑變色。",
    learningObjectives: ["認識 pH 尺度", "連結顏色與酸鹼性"],
    scienceFairApplication: "以紫甘藍汁自製指示劑測試家中液體。",
    tags: ["酸鹼", "pH", "指示劑", "虛擬實驗"],
    htmlCode: '<div class="tube" id="tube"></div><p>pH = <b id="v">7</b>（<b id="lbl">中性</b>）</p><input id="ph" type="range" min="0" max="14" value="7">',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.tube{width:60px;height:140px;border:3px solid #94a3b8;border-radius:0 0 20px 20px;margin:10px auto;transition:background .3s}\ninput{width:70%}',
    jsCode: 'var ph=document.getElementById("ph"),tube=document.getElementById("tube");\nfunction col(p){if(p<3)return"#e11d48";if(p<6)return"#f59e0b";if(p<8)return"#22c55e";if(p<11)return"#0ea5a4";return"#7c3aed";}\nfunction upd(){var p=+ph.value;tube.style.background=col(p);document.getElementById("v").textContent=p;document.getElementById("lbl").textContent=p<6?"酸性":p>8?"鹼性":"中性";}\nph.addEventListener("input",upd);upd();' });

  push({ id: "lab-002", title: "浮沉與密度", titleEn: "Density Float/Sink", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["密度", "浮力", "浮沉"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整物體密度，觀察它在水中上浮或下沉。",
    teachingApplication: "說明密度大於水則下沉、小於水則上浮。",
    learningObjectives: ["理解密度與浮沉關係", "比較物體與液體密度"],
    scienceFairApplication: "探究鹽水濃度對浮力的影響。",
    tags: ["密度", "浮力", "浮沉", "虛擬實驗"],
    htmlCode: '<div class="water"><div class="obj" id="obj"></div></div><p>物體密度：<b id="d">0.5</b> g/cm³（水為 1.0）</p><input id="dens" type="range" min="0.2" max="2" step="0.1" value="0.5">',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.water{position:relative;width:200px;height:180px;background:linear-gradient(#bfdbfe,#3b82f6);margin:10px auto;border-radius:8px;overflow:hidden}\n.obj{position:absolute;left:50%;transform:translateX(-50%);width:40px;height:40px;background:#7c3aed;border-radius:6px;transition:top .4s}\ninput{width:70%}',
    jsCode: 'var dens=document.getElementById("dens"),obj=document.getElementById("obj");\nfunction upd(){var d=+dens.value;document.getElementById("d").textContent=d.toFixed(1);var top=d<1?10:(d>1?130:70);obj.style.top=top+"px";}\ndens.addEventListener("input",upd);upd();' });

  push({ id: "lab-003", title: "槓桿平衡天平", titleEn: "Lever Balance", type: "虛擬實驗",
    subjects: ["自然科學", "物理", "數學"], topics: ["槓桿", "力矩", "平衡"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整兩端重量與距離，觀察槓桿是否平衡（力矩相等）。",
    teachingApplication: "示範力矩＝力×力臂，理解槓桿平衡原理。",
    learningObjectives: ["認識力矩", "理解槓桿平衡條件"],
    scienceFairApplication: "製作實體天平驗證力矩公式。",
    tags: ["槓桿", "力矩", "平衡", "虛擬實驗"],
    htmlCode: '<div class="fulcrum"><div class="beam" id="beam"><span class="w left" id="wl"></span><span class="w right" id="wr"></span></div></div>\n<label>左重 <input id="lw" type="range" min="1" max="5" value="3"></label>\n<label>左臂 <input id="ld" type="range" min="1" max="5" value="3"></label>\n<p id="state" aria-live="polite"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.fulcrum{width:220px;height:120px;margin:20px auto;position:relative}\n.beam{position:absolute;top:50%;left:0;right:0;height:8px;background:#334155;transform-origin:center;transition:.4s}\n.w{position:absolute;top:-14px;width:20px;height:20px;background:#f59e0b;border-radius:4px}\n.left{left:0}.right{right:0}\nlabel{display:block;margin:4px}input{width:50%}',
    jsCode: 'var lw=document.getElementById("lw"),ld=document.getElementById("ld"),beam=document.getElementById("beam");\nvar rw=3,rd=3;\nfunction upd(){var left=lw.value*ld.value,right=rw*rd;var ang=Math.max(-15,Math.min(15,(right-left)*2));beam.style.transform="rotate("+ang+"deg)";document.getElementById("state").textContent=left===right?"平衡！力矩相等 ("+left+")":"左力矩 "+left+"，右力矩 "+right;}\n[lw,ld].forEach(function(el){el.addEventListener("input",upd);});upd();' });

  push({ id: "lab-004", title: "溫度計讀數練習", titleEn: "Thermometer Reading", type: "虛擬實驗",
    subjects: ["自然科學", "數學"], topics: ["溫度", "讀數", "刻度"],
    difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "拖動滑桿改變溫度計液柱高度，練習讀取刻度。",
    teachingApplication: "練習讀取溫度刻度與單位。",
    learningObjectives: ["讀取刻度", "認識溫度單位"],
    tags: ["溫度計", "讀數", "刻度", "虛擬實驗"],
    htmlCode: '<div class="thermo"><div class="fill" id="fill"></div></div><p>目前：<b id="t">20</b> °C</p><input id="temp" type="range" min="-10" max="50" value="20">',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.thermo{width:24px;height:160px;background:#e2e8f0;border-radius:12px;margin:10px auto;position:relative;overflow:hidden}\n.fill{position:absolute;bottom:0;left:0;right:0;background:#ef4444;transition:height .2s}\ninput{width:70%}',
    jsCode: 'var temp=document.getElementById("temp"),fill=document.getElementById("fill");\nfunction upd(){var t=+temp.value;document.getElementById("t").textContent=t;fill.style.height=((t+10)/60*100)+"%";}\ntemp.addEventListener("input",upd);upd();' });

  push({ id: "lab-005", title: "電阻與電流（歐姆定律）", titleEn: "Ohm's Law Lab", type: "虛擬實驗",
    subjects: ["自然科學", "物理"], topics: ["歐姆定律", "電流", "電阻"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整電壓與電阻，即時計算電流（I = V / R）並以燈泡亮度呈現。",
    teachingApplication: "示範歐姆定律中電壓、電流、電阻的關係。",
    learningObjectives: ["認識歐姆定律", "理解三者關係"],
    scienceFairApplication: "以實體電路量測驗證歐姆定律。",
    tags: ["歐姆定律", "電流", "電阻", "虛擬實驗"],
    htmlCode: '<div id="bulb">💡</div>\n<label>電壓 V：<input id="v" type="range" min="0" max="12" value="6"> <b id="vv">6</b>V</label>\n<label>電阻 R：<input id="r" type="range" min="1" max="12" value="3"> <b id="rr">3</b>Ω</label>\n<p>電流 I = <b id="i">2.00</b> A</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}#bulb{font-size:3rem;transition:.2s}label{display:block;margin:6px}input{width:50%}',
    jsCode: 'var v=document.getElementById("v"),r=document.getElementById("r"),bulb=document.getElementById("bulb");\nfunction upd(){var I=v.value/r.value;document.getElementById("vv").textContent=v.value;document.getElementById("rr").textContent=r.value;document.getElementById("i").textContent=I.toFixed(2);bulb.style.filter="brightness("+Math.min(2,0.4+I*0.3)+")";bulb.style.textShadow=I>1?"0 0 "+(I*8)+"px #ffde59":"none";}\n[v,r].forEach(function(el){el.addEventListener("input",upd);});upd();' });

  push({ id: "lab-006", title: "光的三原色混色", titleEn: "RGB Color Mixing", type: "虛擬實驗",
    subjects: ["自然科學", "物理", "藝術教育"], topics: ["光", "三原色", "加法混色"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整紅綠藍三色光強度，觀察加法混色的結果。",
    teachingApplication: "說明光的加法三原色與白光形成。",
    learningObjectives: ["認識光的三原色", "理解加法混色"],
    tags: ["光", "三原色", "RGB", "虛擬實驗"],
    htmlCode: '<div class="swatch" id="sw"></div>\n<label>紅 <input id="r" type="range" min="0" max="255" value="200"></label>\n<label>綠 <input id="g" type="range" min="0" max="255" value="100"></label>\n<label>藍 <input id="b" type="range" min="0" max="255" value="50"></label>\n<p id="val"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.swatch{width:120px;height:120px;border-radius:12px;margin:10px auto;border:1px solid #cbd5e1}\nlabel{display:block;margin:4px}input{width:60%}',
    jsCode: 'var r=document.getElementById("r"),g=document.getElementById("g"),b=document.getElementById("b"),sw=document.getElementById("sw");\nfunction upd(){var c="rgb("+r.value+","+g.value+","+b.value+")";sw.style.background=c;document.getElementById("val").textContent=c;}\n[r,g,b].forEach(function(el){el.addEventListener("input",upd);});upd();' });

  push({ id: "lab-007", title: "投影角度與影長", titleEn: "Shadow Length Lab", type: "虛擬實驗",
    subjects: ["自然科學", "地球科學", "數學"], topics: ["影子", "太陽角度", "三角"],
    difficulty: "中階", technologies: ["HTML", "Canvas", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "調整太陽仰角，觀察物體影子長度的變化（連結正切函數）。",
    teachingApplication: "說明太陽高度角與影長關係，連結日晷與季節。",
    learningObjectives: ["理解仰角與影長關係", "連結三角比"],
    scienceFairApplication: "實測不同時刻的影長推算太陽仰角。",
    tags: ["影子", "太陽角度", "三角", "虛擬實驗"],
    htmlCode: '<canvas id="c" width="300" height="180"></canvas><br><label>太陽仰角：<input id="ang" type="range" min="10" max="80" value="45"> <b id="a">45</b>°</label>',
    cssCode: 'body{font-family:sans-serif;text-align:center}canvas{background:#e0f2fe;border-radius:8px}input{width:60%}',
    jsCode: 'var c=document.getElementById("c"),x=c.getContext("2d"),ang=document.getElementById("ang");\nfunction draw(){var a=+ang.value;document.getElementById("a").textContent=a;x.clearRect(0,0,300,180);x.strokeStyle="#94a3b8";x.beginPath();x.moveTo(0,150);x.lineTo(300,150);x.stroke();\nvar poleX=120,poleH=60;x.strokeStyle="#334155";x.lineWidth=6;x.beginPath();x.moveTo(poleX,150);x.lineTo(poleX,150-poleH);x.stroke();\nvar shadow=poleH/Math.tan(a*Math.PI/180);x.strokeStyle="#64748b";x.lineWidth=8;x.beginPath();x.moveTo(poleX,150);x.lineTo(poleX+shadow,150);x.stroke();\nx.fillStyle="#f59e0b";x.beginPath();x.arc(poleX-90,150-90-poleH+Math.sin(a*Math.PI/180)*0,0,0,7);\nx.beginPath();x.arc(poleX- Math.cos(a*Math.PI/180)*120, 150-Math.sin(a*Math.PI/180)*120,14,0,7);x.fill();}\nang.addEventListener("input",draw);draw();' });

  push({ id: "lab-008", title: "彈簧伸長（虎克定律）", titleEn: "Hooke's Law Spring", type: "虛擬實驗",
    subjects: ["自然科學", "物理", "數學"], topics: ["彈簧", "虎克定律", "正比"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["滑桿", "即時模擬"],
    description: "增加掛重，彈簧伸長量與重量成正比（F = kx）。",
    teachingApplication: "示範虎克定律與正比關係。",
    learningObjectives: ["認識虎克定律", "理解正比關係"],
    scienceFairApplication: "以實體彈簧測量彈性係數 k。",
    tags: ["彈簧", "虎克定律", "正比", "虛擬實驗"],
    htmlCode: '<div class="rig"><div class="spring" id="spring"></div><div class="mass" id="mass">🔩</div></div><label>掛重：<input id="w" type="range" min="0" max="10" value="2"> <b id="wv">2</b> N</label><p>伸長：<b id="x">4</b> cm</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.rig{height:180px;position:relative;width:80px;margin:10px auto}\n.spring{width:4px;background:repeating-linear-gradient(#334155 0 4px,transparent 4px 8px);margin:0 auto;transition:height .2s}\n.mass{font-size:1.6rem}input{width:60%}',
    jsCode: 'var w=document.getElementById("w"),k=0.5;\nfunction upd(){var f=+w.value,x=f/k;document.getElementById("wv").textContent=f;document.getElementById("x").textContent=x.toFixed(0);document.getElementById("spring").style.height=(30+x*8)+"px";}\nw.addEventListener("input",upd);upd();' });

  /* ================= 教材版面與導覽（6） ================= */
  push({ id: "nav-001", title: "課程目錄側欄", titleEn: "Course Sidebar", type: "教材版面與導覽",
    subjects: ["資訊教育", "跨領域學習"], topics: ["目錄", "側欄", "導覽"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "可收合的課程目錄側欄，點選章節切換主內容。",
    teachingApplication: "多單元教材的章節導覽版面。",
    learningObjectives: ["認識側欄導覽版面", "章節內容切換"],
    tags: ["目錄", "側欄", "導覽", "版面"],
    htmlCode: '<div class="layout"><nav class="side" id="side"></nav><main id="main">選擇章節</main></div>',
    cssCode: 'body{font-family:sans-serif;margin:0}.layout{display:flex;min-height:220px}\n.side{width:120px;background:#0f172a;padding:8px}\n.side button{display:block;width:100%;text-align:left;padding:10px;border:none;background:none;color:#cbd5e1;border-radius:6px}\n.side button.on{background:#2563eb;color:#fff}\nmain{flex:1;padding:20px}',
    jsCode: 'var ch=["導論","觀察","實驗","結論"],side=document.getElementById("side"),main=document.getElementById("main");\nch.forEach(function(t,i){var b=document.createElement("button");b.textContent=t;b.onclick=function(){side.querySelectorAll("button").forEach(function(x){x.classList.remove("on");});b.classList.add("on");main.textContent="第 "+(i+1)+" 章："+t+" 的內容。";};side.appendChild(b);});' });

  push({ id: "nav-002", title: "學習進度追蹤清單", titleEn: "Progress Checklist", type: "教材版面與導覽",
    subjects: ["資訊教育", "跨領域學習"], topics: ["進度", "清單", "完成度"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"], interactionTypes: ["點擊"],
    description: "勾選完成的學習項目，進度以百分比顯示並儲存於本地。",
    teachingApplication: "讓學生追蹤學習任務完成度，提供成就感。",
    learningObjectives: ["管理學習進度", "以本地儲存保存勾選"],
    tags: ["進度", "清單", "完成度", "localStorage"],
    htmlCode: '<h3>學習進度 <span id="pct">0%</span></h3><ul id="list"></ul>',
    cssCode: 'body{font-family:sans-serif;max-width:300px;margin:auto}ul{list-style:none;padding:0}li{padding:8px;background:#eef4ff;margin:4px 0;border-radius:8px}li label{display:flex;gap:8px;align-items:center}',
    jsCode: 'var tasks=["觀看影片","完成閱讀","做筆記","小測驗","討論"],KEY="demo-progress",done={};\ntry{done=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){}\nvar list=document.getElementById("list");\ntasks.forEach(function(t,i){var li=document.createElement("li");li.innerHTML="<label><input type=checkbox "+(done[i]?"checked":"")+" data-i="+i+"> "+t+"</label>";list.appendChild(li);});\nfunction pct(){var n=Object.keys(done).filter(function(k){return done[k];}).length;document.getElementById("pct").textContent=Math.round(n/tasks.length*100)+"%";}\nlist.addEventListener("change",function(e){var c=e.target;done[c.dataset.i]=c.checked;try{localStorage.setItem(KEY,JSON.stringify(done));}catch(e){}pct();});pct();' });

  push({ id: "nav-003", title: "頁內錨點平滑導覽", titleEn: "Anchor Smooth Nav", type: "教材版面與導覽",
    subjects: ["資訊教育"], topics: ["錨點", "平滑捲動", "導覽"],
    difficulty: "入門", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "捲動"],
    description: "點選導覽連結平滑捲動到對應段落，附回到頂部。",
    teachingApplication: "長頁教材的快速跳段與回頂。",
    learningObjectives: ["認識頁內錨點", "平滑捲動"],
    accessibilityNotes: "使用真實錨點連結，鍵盤與螢幕閱讀器皆可用。",
    tags: ["錨點", "平滑捲動", "導覽"],
    htmlCode: '<nav class="top"><a href="#a">A</a><a href="#b">B</a><a href="#c">C</a></nav>'+["a","b","c"].map(function(id){return '<section id="'+id+'"><h2>段落 '+id.toUpperCase()+'</h2></section>';}).join('')+'<a href="#top" class="up">↑</a>',
    cssCode: 'html{scroll-behavior:smooth}body{font-family:sans-serif;margin:0}\n.top{position:sticky;top:0;background:#2563eb;padding:10px;display:flex;gap:12px}\n.top a{color:#fff}\nsection{height:60vh;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #cbd5e1}\n.up{position:fixed;right:16px;bottom:16px;background:#0ea5a4;color:#fff;padding:8px 12px;border-radius:50%;text-decoration:none}\n@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}',
    jsCode: '' });

  push({ id: "nav-004", title: "卡片式儀表板", titleEn: "Dashboard Cards", type: "教材版面與導覽",
    subjects: ["資訊教育", "數學"], topics: ["儀表板", "版面", "總覽"],
    difficulty: "初階", technologies: ["HTML", "CSS"], interactionTypes: ["點擊"],
    description: "以響應式卡片網格呈現關鍵指標，適合學習總覽頁。",
    teachingApplication: "呈現學習數據總覽，如完成數、得分、時間。",
    learningObjectives: ["認識儀表板版面", "以 grid 響應式排列"],
    tags: ["儀表板", "卡片", "grid", "版面"],
    htmlCode: '<div class="dash">'+[["已完成","12"],["平均分","85"],["學習時數","6.5"],["徽章","3"]].map(function(d){return '<div class="kpi"><div class="v">'+d[1]+'</div><div class="l">'+d[0]+'</div></div>';}).join('')+'</div>',
    cssCode: 'body{font-family:sans-serif;padding:16px;background:#0f172a}\n.dash{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px}\n.kpi{background:#1e293b;color:#fff;border-radius:12px;padding:20px;text-align:center}\n.v{font-size:2rem;font-weight:900;color:#0ea5a4}\n.l{color:#94a3b8;font-size:.85rem}',
    jsCode: '' });

  push({ id: "nav-005", title: "學習地圖路徑", titleEn: "Learning Path Map", type: "教材版面與導覽",
    subjects: ["資訊教育", "跨領域學習"], topics: ["學習路徑", "關卡", "地圖"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "以關卡節點串成的學習路徑，已完成節點亮起。",
    teachingApplication: "以關卡地圖呈現課程進程，強化闖關動機。",
    learningObjectives: ["認識路徑式學習設計", "以狀態呈現進度"],
    tags: ["學習地圖", "路徑", "關卡", "版面"],
    htmlCode: '<div class="path" id="path"></div><button id="next">完成下一關</button>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.path{display:flex;align-items:center;justify-content:center;gap:0;margin:20px 0}\n.step{width:44px;height:44px;border-radius:50%;background:#cbd5e1;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold}\n.step.on{background:#0ea5a4}\n.link{width:30px;height:4px;background:#cbd5e1}\n.link.on{background:#0ea5a4}\nbutton{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'var n=5,done=1,path=document.getElementById("path");\nfunction draw(){path.innerHTML="";for(var i=0;i<n;i++){var s=document.createElement("div");s.className="step"+(i<done?" on":"");s.textContent=i+1;path.appendChild(s);if(i<n-1){var l=document.createElement("div");l.className="link"+(i<done-1?" on":"");path.appendChild(l);}}}\ndocument.getElementById("next").onclick=function(){if(done<n){done++;draw();}};draw();' });

  push({ id: "nav-006", title: "抽屜式選單", titleEn: "Drawer Menu", type: "教材版面與導覽",
    subjects: ["資訊教育"], topics: ["抽屜", "選單", "行動版"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊", "觸控"],
    description: "點擊按鈕從側邊滑出的抽屜選單，適合行動版導覽。",
    teachingApplication: "行動版教材的主選單收納方式。",
    learningObjectives: ["認識抽屜選單", "行動優先導覽"],
    accessibilityNotes: "按鈕具 aria-expanded，可用 Esc 關閉，焦點管理友善。",
    tags: ["抽屜", "選單", "行動版", "版面"],
    htmlCode: '<button id="open" aria-expanded="false">☰ 選單</button><div class="mask" id="mask"></div><nav class="drawer" id="drawer"><button id="close" aria-label="關閉">✕</button><a href="#">首頁</a><a href="#">單元</a><a href="#">測驗</a></nav>',
    cssCode: 'body{font-family:sans-serif;margin:0;padding:16px}\n#open{padding:10px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff}\n.mask{position:fixed;inset:0;background:#0007;opacity:0;pointer-events:none;transition:.2s}\n.mask.on{opacity:1;pointer-events:auto}\n.drawer{position:fixed;top:0;left:0;bottom:0;width:200px;background:#0f172a;padding:16px;transform:translateX(-100%);transition:.2s;display:flex;flex-direction:column;gap:10px}\n.drawer.on{transform:none}\n.drawer a{color:#cbd5e1;text-decoration:none;padding:8px}\n.drawer button{align-self:flex-end;background:none;border:none;color:#fff;font-size:1.2rem}',
    jsCode: 'var d=document.getElementById("drawer"),m=document.getElementById("mask"),o=document.getElementById("open");\nfunction open(){d.classList.add("on");m.classList.add("on");o.setAttribute("aria-expanded","true");}\nfunction close(){d.classList.remove("on");m.classList.remove("on");o.setAttribute("aria-expanded","false");}\no.onclick=open;document.getElementById("close").onclick=close;m.onclick=close;\ndocument.addEventListener("keydown",function(e){if(e.key==="Escape")close();});' });

  /* ================= 無障礙互動（6） ================= */
  push({ id: "a11y-001", title: "字級調整控制", titleEn: "Font Size Control", type: "無障礙互動",
    subjects: ["資訊教育", "健康教育"], topics: ["字級", "可讀性", "無障礙"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"], interactionTypes: ["點擊"],
    description: "提供 A- / A / A+ 調整內文字級，並記住偏好。",
    teachingApplication: "示範可讀性調整，照顧不同視力需求的讀者。",
    learningObjectives: ["認識無障礙字級調整", "以 rem 縮放"],
    accessibilityNotes: "按鈕具 aria-label，設定以 localStorage 保存。",
    tags: ["字級", "可讀性", "無障礙", "a11y"],
    htmlCode: '<div class="ctl"><button id="dec" aria-label="縮小字級">A-</button><button id="rst" aria-label="預設字級">A</button><button id="inc" aria-label="放大字級">A+</button></div><p id="text">這是一段示範內文，可調整字級大小以符合閱讀需求。</p>',
    cssCode: 'body{font-family:sans-serif;padding:20px}\n.ctl button{padding:8px 12px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:2px}\n#text{font-size:var(--fs,1rem);margin-top:12px}',
    jsCode: 'var KEY="demo-fs",fs=1;try{fs=+localStorage.getItem(KEY)||1;}catch(e){}\nfunction apply(){document.getElementById("text").style.setProperty("--fs",fs+"rem");try{localStorage.setItem(KEY,fs);}catch(e){}}\ndocument.getElementById("inc").onclick=function(){fs=Math.min(1.8,fs+0.15);apply();};\ndocument.getElementById("dec").onclick=function(){fs=Math.max(0.7,fs-0.15);apply();};\ndocument.getElementById("rst").onclick=function(){fs=1;apply();};apply();' });

  push({ id: "a11y-002", title: "高對比模式切換", titleEn: "High Contrast Toggle", type: "無障礙互動",
    subjects: ["資訊教育", "健康教育"], topics: ["對比", "無障礙", "視覺"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["點擊"],
    description: "一鍵切換高對比配色，提升低視力者的可讀性。",
    teachingApplication: "示範對比對可讀性的重要，體會無障礙設計。",
    learningObjectives: ["認識對比與可讀性", "以 class 切換主題"],
    accessibilityNotes: "顏色非唯一資訊來源，切換以文字回饋狀態。",
    tags: ["高對比", "無障礙", "對比", "a11y"],
    htmlCode: '<button id="hc" aria-pressed="false">切換高對比</button><article class="demo"><h3>示範標題</h3><p>這是一段內文，用於示範高對比模式對可讀性的影響。</p></article>',
    cssCode: 'body{font-family:sans-serif;padding:16px}\n.demo{padding:16px;border-radius:8px;background:#eef4ff;color:#334155}\nbody.hc .demo{background:#000;color:#fff;border:2px solid #ff0}\nbody.hc a{color:#0ff}\nbutton{padding:10px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin-bottom:12px}',
    jsCode: 'var hc=document.getElementById("hc");hc.addEventListener("click",function(){var on=document.body.classList.toggle("hc");hc.setAttribute("aria-pressed",on);hc.textContent=on?"關閉高對比":"切換高對比";});' });

  push({ id: "a11y-003", title: "鍵盤焦點導覽示範", titleEn: "Keyboard Focus Demo", type: "無障礙互動",
    subjects: ["資訊教育"], topics: ["鍵盤", "焦點", "無障礙"],
    difficulty: "初階", technologies: ["HTML", "CSS"], interactionTypes: ["鍵盤操作"],
    description: "以 Tab 鍵在元件間移動，清楚的焦點外框示範鍵盤可及性。",
    teachingApplication: "示範鍵盤操作與焦點指示的重要性。",
    learningObjectives: ["體驗鍵盤導覽", "認識 focus-visible"],
    accessibilityNotes: "使用 :focus-visible 提供明顯焦點外框。",
    tags: ["鍵盤", "焦點", "無障礙", "a11y"],
    htmlCode: '<p>用 Tab 鍵在下列元件間移動：</p><button>按鈕一</button> <a href="#">連結</a> <input placeholder="輸入框"> <button>按鈕二</button>',
    cssCode: 'body{font-family:sans-serif;padding:20px;line-height:2.4}\nbutton,a,input{font-size:1rem}\n:focus-visible{outline:3px solid #f59e0b;outline-offset:3px;border-radius:4px}',
    jsCode: '' });

  push({ id: "a11y-004", title: "螢幕閱讀器即時公告", titleEn: "ARIA Live Announce", type: "無障礙互動",
    subjects: ["資訊教育"], topics: ["aria-live", "公告", "無障礙"],
    difficulty: "中階", technologies: ["HTML", "JavaScript"], interactionTypes: ["點擊"],
    description: "操作後以 aria-live 區域公告狀態，讓螢幕閱讀器讀出變化。",
    teachingApplication: "示範動態內容如何讓螢幕閱讀器使用者得知。",
    learningObjectives: ["認識 aria-live", "動態狀態公告"],
    accessibilityNotes: "以 role=status（polite）公告，不打斷使用者。",
    tags: ["aria-live", "公告", "無障礙", "a11y"],
    htmlCode: '<button id="add">加入購物車</button><p id="live" role="status" aria-live="polite"></p><p id="count">目前 0 件</p>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:20px}button{padding:10px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'var n=0;document.getElementById("add").onclick=function(){n++;document.getElementById("count").textContent="目前 "+n+" 件";document.getElementById("live").textContent="已加入購物車，共 "+n+" 件";};' });

  push({ id: "a11y-005", title: "略過導覽連結", titleEn: "Skip Link", type: "無障礙互動",
    subjects: ["資訊教育"], topics: ["skip link", "鍵盤", "無障礙"],
    difficulty: "入門", technologies: ["HTML", "CSS"], interactionTypes: ["鍵盤操作"],
    description: "聚焦時才出現的「略過導覽」連結，讓鍵盤使用者直達主內容。",
    teachingApplication: "示範無障礙必備的略過導覽設計。",
    learningObjectives: ["認識 skip link", "改善鍵盤導覽效率"],
    accessibilityNotes: "連結預設隱藏，:focus 時出現並可跳至主內容。",
    tags: ["skip link", "略過導覽", "無障礙", "a11y"],
    htmlCode: '<a href="#main" class="skip">略過導覽，前往主內容</a>\n<nav>導覽列（許多連結…）</nav>\n<main id="main" tabindex="-1"><h1>主要內容</h1><p>按 Tab 後最先看到「略過導覽」連結。</p></main>',
    cssCode: 'body{font-family:sans-serif}\n.skip{position:absolute;left:-999px;background:#2563eb;color:#fff;padding:10px}\n.skip:focus{left:8px;top:8px}\nnav{background:#e2e8f0;padding:12px}main{padding:16px}',
    jsCode: '' });

  push({ id: "a11y-006", title: "無障礙表單驗證", titleEn: "Accessible Form Validation", type: "無障礙互動",
    subjects: ["資訊教育"], topics: ["表單", "驗證", "無障礙"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["鍵盤操作", "點擊"],
    description: "表單送出時以文字與 aria 屬性提示錯誤，並將焦點移到第一個錯誤欄位。",
    teachingApplication: "示範無障礙的表單錯誤提示方式。",
    learningObjectives: ["認識 aria-invalid 與錯誤提示", "焦點管理"],
    accessibilityNotes: "錯誤以文字說明並關聯 aria-describedby，非僅以顏色表示。",
    tags: ["表單", "驗證", "無障礙", "a11y"],
    htmlCode: '<form id="f" novalidate>\n<label for="name">姓名（必填）</label><br><input id="name" aria-describedby="e1"><span id="e1" class="err" aria-live="polite"></span><br>\n<label for="age">年齡（1-120）</label><br><input id="age" aria-describedby="e2"><span id="e2" class="err" aria-live="polite"></span><br>\n<button type="submit">送出</button></form>',
    cssCode: 'body{font-family:sans-serif;max-width:300px;margin:auto;padding:16px}input{padding:6px;margin:4px 0}input[aria-invalid=true]{border:2px solid #ef4444}.err{color:#ef4444;font-size:.85rem}button{padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();var name=document.getElementById("name"),age=document.getElementById("age");var first=null;\nfunction set(el,msg,eid){var ok=!msg;el.setAttribute("aria-invalid",!ok);document.getElementById(eid).textContent=msg||"";if(msg&&!first)first=el;}\nset(name,name.value.trim()?"":"請輸入姓名","e1");\nvar a=+age.value;set(age,(a>=1&&a<=120)?"":"請輸入 1 到 120 的年齡","e2");\nif(first)first.focus();else document.getElementById("e1").textContent="送出成功！";});' });

  /* ================= 行動載具互動（6） ================= */
  push({ id: "mob-001", title: "觸控滑動切換", titleEn: "Touch Swipe", type: "行動載具互動",
    subjects: ["資訊教育"], topics: ["觸控", "滑動", "手勢"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["觸控", "拖曳"],
    description: "以左右滑動手勢切換卡片（同時支援滑鼠拖曳），適合行動教材。",
    teachingApplication: "行動裝置上以滑動瀏覽內容或步驟。",
    learningObjectives: ["認識觸控手勢", "以 pointer 事件統一處理"],
    mobileNotes: "使用 pointer 事件同時支援觸控與滑鼠；設定 touch-action。",
    tags: ["觸控", "滑動", "手勢", "行動"],
    htmlCode: '<div class="card" id="card">← 左右滑動 →<br><b id="n">1</b> / 3</div>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:30px}\n.card{width:220px;height:130px;margin:auto;background:#2563eb;color:#fff;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;touch-action:pan-y;user-select:none}',
    jsCode: 'var card=document.getElementById("card"),i=0,x0=null;\ncard.addEventListener("pointerdown",function(e){x0=e.clientX;});\ncard.addEventListener("pointerup",function(e){if(x0==null)return;var dx=e.clientX-x0;if(Math.abs(dx)>40){i=(i+(dx<0?1:-1)+3)%3;document.getElementById("n").textContent=i+1;}x0=null;});' });

  push({ id: "mob-002", title: "下拉重新整理", titleEn: "Pull to Refresh", type: "行動載具互動",
    subjects: ["資訊教育"], topics: ["下拉", "更新", "手勢"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["觸控", "拖曳"],
    description: "在頂端下拉放開後觸發重新整理動作，模擬 App 常見手勢。",
    teachingApplication: "示範行動 App 的下拉更新互動模式。",
    learningObjectives: ["認識下拉更新手勢", "以位移門檻觸發動作"],
    mobileNotes: "以 pointer 事件實作，於頂端才啟用下拉。",
    tags: ["下拉更新", "手勢", "行動", "pull-to-refresh"],
    htmlCode: '<div class="hint" id="hint">下拉此區放開以更新</div><div class="pane" id="pane">內容區<br><span id="time"></span></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.hint{color:#64748b;padding:8px;font-size:.9rem}\n.pane{height:160px;background:#eef4ff;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;touch-action:pan-x;user-select:none}',
    jsCode: 'var pane=document.getElementById("pane"),hint=document.getElementById("hint"),y0=null;\nfunction refresh(){hint.textContent="更新中…";setTimeout(function(){document.getElementById("time").textContent="更新於 "+new Date().toLocaleTimeString();hint.textContent="下拉此區放開以更新";},600);}\npane.addEventListener("pointerdown",function(e){y0=e.clientY;});\npane.addEventListener("pointermove",function(e){if(y0!=null&&e.clientY-y0>60){hint.textContent="放開以更新 ↓";}});\npane.addEventListener("pointerup",function(e){if(y0!=null&&e.clientY-y0>60)refresh();y0=null;});' });

  push({ id: "mob-003", title: "長按觸發選單", titleEn: "Long Press Menu", type: "行動載具互動",
    subjects: ["資訊教育"], topics: ["長按", "手勢", "選單"],
    difficulty: "中階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["觸控", "點擊"],
    description: "長按元素約 0.6 秒觸發情境選單，示範長按手勢。",
    teachingApplication: "示範行動裝置的長按互動模式。",
    learningObjectives: ["認識長按手勢", "以計時器判斷長按"],
    mobileNotes: "以 pointerdown/up 搭配計時器實作，避免與點擊衝突。",
    tags: ["長按", "手勢", "選單", "行動"],
    htmlCode: '<div class="target" id="t">長按我 0.6 秒</div><div class="menu" id="menu" hidden>情境選單已開啟！</div>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:20px}\n.target{width:200px;height:100px;margin:auto;background:#7c3aed;color:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;user-select:none;touch-action:none}\n.menu{margin-top:12px;padding:12px;background:#eef4ff;border-radius:8px}',
    jsCode: 'var t=document.getElementById("t"),menu=document.getElementById("menu"),timer;\nt.addEventListener("pointerdown",function(){timer=setTimeout(function(){menu.hidden=false;},600);});\n["pointerup","pointerleave","pointercancel"].forEach(function(ev){t.addEventListener(ev,function(){clearTimeout(timer);});});' });

  push({ id: "mob-004", title: "裝置方向感測", titleEn: "Device Orientation", type: "行動載具互動",
    subjects: ["自然科學", "物理", "資訊教育"], topics: ["感測器", "方向", "陀螺儀"],
    difficulty: "進階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["裝置方向感測"],
    offlineFriendly: true,
    description: "讀取裝置傾斜角度移動畫面上的小球（需行動裝置與權限）。",
    teachingApplication: "連結感測器、角度與重力方向，作為感測器應用示範。",
    learningObjectives: ["認識裝置方向感測", "感測資料驅動互動"],
    mobileNotes: "iOS 需使用者手勢後請求權限；桌機無感測器時提供提示。",
    accessibilityNotes: "感測互動另提供文字說明，非必要功能不影響其他內容。",
    tags: ["感測器", "裝置方向", "陀螺儀", "行動"],
    htmlCode: '<div class="box" id="box"><div class="ball" id="ball"></div></div><button id="enable">啟用感測（行動裝置）</button><p id="info"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.box{width:200px;height:200px;border:2px solid #2563eb;border-radius:12px;margin:10px auto;position:relative;overflow:hidden}\n.ball{width:30px;height:30px;background:#f59e0b;border-radius:50%;position:absolute;left:85px;top:85px;transition:.1s}\nbutton{padding:8px 14px;border:none;border-radius:8px;background:#2563eb;color:#fff}',
    jsCode: 'var ball=document.getElementById("ball"),info=document.getElementById("info");\nfunction handle(e){var x=85+(e.gamma||0)*2,y=85+(e.beta||0)*2;ball.style.left=Math.max(0,Math.min(170,x))+"px";ball.style.top=Math.max(0,Math.min(170,y))+"px";info.textContent="傾斜 β:"+Math.round(e.beta||0)+" γ:"+Math.round(e.gamma||0);}\ndocument.getElementById("enable").onclick=function(){if(typeof DeviceOrientationEvent!=="undefined"&&DeviceOrientationEvent.requestPermission){DeviceOrientationEvent.requestPermission().then(function(s){if(s==="granted")addEventListener("deviceorientation",handle);}).catch(function(){info.textContent="無法取得感測權限";});}else if("DeviceOrientationEvent" in window){addEventListener("deviceorientation",handle);info.textContent="已啟用（請傾斜裝置）";}else{info.textContent="此裝置不支援方向感測";}};' });

  push({ id: "mob-005", title: "震動回饋", titleEn: "Vibration Feedback", type: "行動載具互動",
    subjects: ["資訊教育", "健康教育"], topics: ["震動", "回饋", "感官"],
    difficulty: "初階", technologies: ["HTML", "JavaScript"], interactionTypes: ["點擊", "觸控"],
    description: "點擊按鈕觸發裝置震動（支援的行動裝置），提供觸覺回饋。",
    teachingApplication: "示範觸覺回饋，連結感官與人機互動設計。",
    learningObjectives: ["認識 Vibration API", "了解觸覺回饋"],
    mobileNotes: "僅部分行動瀏覽器支援；桌機會顯示不支援提示。",
    accessibilityNotes: "震動為輔助回饋，另以文字提示動作結果。",
    tags: ["震動", "Vibration API", "回饋", "行動"],
    htmlCode: '<button id="short">短震</button> <button id="pat">節奏震動</button><p id="info"></p>',
    cssCode: 'body{font-family:sans-serif;text-align:center;padding:20px}button{padding:12px 18px;border:none;border-radius:8px;background:#2563eb;color:#fff;margin:4px}',
    jsCode: 'var info=document.getElementById("info");\nfunction vibe(p){if(navigator.vibrate){navigator.vibrate(p);info.textContent="已觸發震動";}else{info.textContent="此裝置不支援震動";}}\ndocument.getElementById("short").onclick=function(){vibe(80);};\ndocument.getElementById("pat").onclick=function(){vibe([100,50,100,50,200]);};' });

  push({ id: "mob-006", title: "點兩下縮放圖片", titleEn: "Double-Tap Zoom", type: "行動載具互動",
    subjects: ["資訊教育", "藝術教育"], topics: ["縮放", "手勢", "圖片"],
    difficulty: "初階", technologies: ["HTML", "CSS", "JavaScript"], interactionTypes: ["觸控", "點擊"],
    description: "點兩下在原始大小與放大之間切換，模擬行動看圖手勢。",
    teachingApplication: "示範行動裝置常見的雙擊縮放看圖互動。",
    learningObjectives: ["認識雙擊手勢", "以 transform 縮放"],
    mobileNotes: "以連續點擊時間差判斷雙擊；transform 縮放效能佳。",
    tags: ["雙擊", "縮放", "手勢", "行動"],
    htmlCode: '<div class="viewer"><div class="pic" id="pic">🖼️<br><small>點兩下縮放</small></div></div>',
    cssCode: 'body{font-family:sans-serif;text-align:center}\n.viewer{overflow:hidden;width:240px;height:180px;margin:auto;border-radius:12px;background:#0f172a}\n.pic{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-size:3rem;transition:transform .3s;transform-origin:center}\n.pic.zoom{transform:scale(2)}',
    jsCode: 'var pic=document.getElementById("pic"),last=0;\npic.addEventListener("click",function(){var now=Date.now();if(now-last<300){pic.classList.toggle("zoom");}last=now;});' });
})();
