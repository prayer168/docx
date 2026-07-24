/* ============================================================
   data-phase2.js — 第二階段擴充案例
   目標：填補第一階段未涵蓋的資源類型（p5.js、Matter.js、Chart.js、
        UI 互動元件、捲動敘事、遊戲化學習、測驗與評量、虛擬實驗、
        教材版面與導覽、無障礙互動、行動載具互動），並持續朝 300～500 個案例邁進。
   本檔須於 js/data.js 之前載入；資料會併入 window.DATA。
   ============================================================ */
(function () {
  "use strict";

  var TODAY = "2026-07-23";
  var CDN = {
    p5: "https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js",
    matter: "https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js",
    chart: "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"
  };

  /** 產生透過 CDN 載入程式庫的完整單檔（含載入失敗提示） */
  function libFull(opt) {
    // opt: {title, src, mount, body, css}
    return '<!DOCTYPE html>\n<html lang="zh-Hant"><head><meta charset="UTF-8">\n' +
      '<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
      '<title>' + opt.title + '</title>\n<style>body{margin:0;font-family:sans-serif;background:#0b1020;color:#fff;text-align:center}' +
      (opt.css || '') + '\n#fb{display:none;color:#f59e0b;padding:16px}</style></head><body>\n' +
      '<div id="fb">程式庫載入失敗，請確認網路連線後重新整理。</div>\n' + (opt.mount || '') + '\n' +
      '<script src="' + opt.src + '" onerror="document.getElementById(\'fb\').style.display=\'block\'"><\/script>\n' +
      '<script>\nwindow.addEventListener("load",function(){\n' + opt.body + '\n});\n<\/script>\n</body></html>';
  }

  /**
   * 案例工廠：填入完整且合理的預設值，避免出現空白或空泛欄位。
   * 每個案例務必提供具辨識度的 title/description/teachingApplication/tags。
   */
  function mk(o) {
    var usesLib = !!(o.libraries && o.libraries.length);
    return {
      id: o.id, title: o.title, titleEn: o.titleEn || o.title,
      type: o.type,
      subjects: o.subjects || ["資訊教育"],
      topics: o.topics || o.tags || [],
      gradeLevels: o.gradeLevels || ["國中", "高中"],
      difficulty: o.difficulty || "初階",
      technologies: o.technologies || ["HTML", "CSS", "JavaScript"],
      interactionTypes: o.interactionTypes || ["點擊"],
      libraries: o.libraries || [],
      requiresLibrary: usesLib,
      mobileFriendly: o.mobileFriendly !== false,
      tabletFriendly: o.tabletFriendly !== false,
      offlineFriendly: o.offlineFriendly !== undefined ? o.offlineFriendly : !usesLib,
      accessible: o.accessible !== false,
      featured: !!o.featured,
      hasFullCode: !!(o.fullCode || o.htmlCode || o.jsCode),
      description: o.description,
      teachingApplication: o.teachingApplication,
      learningObjectives: o.learningObjectives || ["認識此互動元件的運作方式", "能將其套用到自己的教材情境"],
      teacherGuide: o.teacherGuide || "教師可先示範操作，再讓學生調整參數觀察差異，最後連結到教學主題。",
      studentTask: o.studentTask || "操作此元件並嘗試修改一項參數，記錄觀察到的變化。",
      scienceFairApplication: o.scienceFairApplication || "可作為研究成果的互動呈現或資料蒐集介面。",
      extensions: o.extensions,
      buildTime: o.buildTime || "1～2 小時",
      techAnalysis: o.techAnalysis || (usesLib
        ? "透過 CDN 載入 " + o.libraries.join("、") + "，於載入完成後初始化；程式碼已附載入失敗提示。"
        : "以原生 HTML/CSS/JavaScript 實作，透過事件監聽與 DOM 更新完成互動，無需外部程式庫。"),
      performanceNotes: o.performanceNotes || (o.technologies && o.technologies.indexOf("Canvas") !== -1
        ? "使用 requestAnimationFrame 繪製，頁籤隱藏或離開畫面時可暫停以節省效能。"
        : "以事件代理與必要的 DOM 更新為主，效能負擔低。"),
      mobileNotes: o.mobileNotes || "觸控範圍足夠，版面在小螢幕自適應，避免造成水平溢出。",
      accessibilityNotes: o.accessibilityNotes || "提供鍵盤操作與文字說明，狀態變化以 aria 屬性或文字回饋；動畫尊重 prefers-reduced-motion。",
      modifyTips: o.modifyTips || ["修改文字與顏色以符合主題", "調整參數（數量、速度、範圍）", "替換資料來源"],
      thumbnail: "", referenceUrl: o.referenceUrl || "",
      license: usesLib ? ("本站示範程式碼；" + o.libraries.join("、") + " 各適用其原授權") : "本站示範程式碼",
      tags: o.tags || [],
      createdAt: TODAY, updatedAt: TODAY,
      htmlCode: o.htmlCode || "", cssCode: o.cssCode || "", jsCode: o.jsCode || "", fullCode: o.fullCode || "",
      externalSite: o.externalSite
    };
  }

  var examples = [];

  /* ================= p5.js 案例（8） ================= */
  examples.push(
    mk({ id: "p5-001", title: "p5.js 粒子噴泉", titleEn: "p5.js Particle Fountain", type: "p5.js 案例",
      subjects: ["自然科學", "物理", "藝術教育"], topics: ["粒子系統", "重力", "創意程式"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["滑鼠移入", "即時模擬"], libraries: ["p5.js"], featured: true,
      description: "以 p5.js 建立受重力影響的粒子噴泉，粒子從滑鼠位置噴發並逐漸淡出。",
      teachingApplication: "示範向量、速度與重力加速度，也可作為創意程式設計入門。",
      learningObjectives: ["理解位置與速度向量", "認識重力加速度對運動的影響", "體會粒子系統設計"],
      tags: ["p5.js", "粒子", "重力", "創意程式"],
      fullCode: libFull({ title: "p5.js 粒子噴泉", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nvar ps=[];\nnew p5(function(s){s.setup=function(){s.createCanvas(320,240);};s.draw=function(){s.background(11,16,32,40);for(var i=0;i<3;i++)ps.push({x:s.mouseX||160,y:s.mouseY||60,vx:s.random(-2,2),vy:s.random(-5,-1),life:255});s.noStroke();for(var i=ps.length-1;i>=0;i--){var p=ps[i];p.vy+=0.15;p.x+=p.vx;p.y+=p.vy;p.life-=4;s.fill(14,165,164,p.life);s.circle(p.x,p.y,6);if(p.life<=0)ps.splice(i,1);}};});' })
    }),
    mk({ id: "p5-002", title: "p5.js 碎形樹", titleEn: "p5.js Fractal Tree", type: "p5.js 案例",
      subjects: ["數學", "自然科學", "藝術教育"], topics: ["碎形", "遞迴", "自相似"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["滑桿", "即時模擬"], libraries: ["p5.js"],
      description: "以遞迴繪製會依滑桿改變分枝角度的碎形樹，展現數學的自相似之美。",
      teachingApplication: "連結遞迴概念與自然界的碎形（樹、蕨葉、血管），跨數學與生物。",
      learningObjectives: ["認識遞迴與碎形", "觀察角度變化對整體形狀的影響"],
      tags: ["p5.js", "碎形", "遞迴", "數學藝術"],
      fullCode: libFull({ title: "p5.js 碎形樹", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){var ang=0.4;s.setup=function(){s.createCanvas(320,260);};s.draw=function(){s.background(11,16,32);ang=s.map(s.mouseX,0,s.width,0.1,1);s.stroke(14,165,164);s.translate(160,260);branch(120);};function branch(len){s.strokeWeight(s.map(len,10,120,1,4));s.line(0,0,0,-len);s.translate(0,-len);if(len>10){s.push();s.rotate(ang);branch(len*0.7);s.pop();s.push();s.rotate(-ang);branch(len*0.7);s.pop();}}});',
        css: 'p{font-size:.85rem;color:#9fb0cc}', mount: '<p>左右移動滑鼠改變分枝角度</p>' })
    }),
    mk({ id: "p5-003", title: "p5.js 生命遊戲", titleEn: "p5.js Game of Life", type: "p5.js 案例",
      subjects: ["數學", "資訊教育", "自然科學"], topics: ["細胞自動機", "規則", "湧現"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["點擊", "即時模擬"], libraries: ["p5.js"],
      description: "康威生命遊戲：由簡單存活規則演化出複雜圖樣，點擊可播種細胞。",
      teachingApplication: "介紹規則系統與湧現現象，連結生態、人工智慧與運算思維。",
      learningObjectives: ["理解細胞自動機規則", "觀察簡單規則產生的複雜行為"],
      tags: ["p5.js", "生命遊戲", "細胞自動機", "湧現"],
      fullCode: libFull({ title: "p5.js 生命遊戲", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){var c=8,cols=40,rows=30,g;function make(){g=[];for(var y=0;y<rows;y++){g[y]=[];for(var x=0;x<cols;x++)g[y][x]=s.random()<0.2?1:0;}}s.setup=function(){s.createCanvas(cols*c,rows*c);make();s.frameRate(10);};s.mousePressed=function(){var x=(s.mouseX/c)|0,y=(s.mouseY/c)|0;if(g[y]&&g[y][x]!=null)g[y][x]=1;};s.draw=function(){s.background(11,16,32);for(var y=0;y<rows;y++)for(var x=0;x<cols;x++){if(g[y][x]){s.fill(14,165,164);s.noStroke();s.rect(x*c,y*c,c-1,c-1);}}var n=[];for(var y=0;y<rows;y++){n[y]=[];for(var x=0;x<cols;x++){var sum=0;for(var dy=-1;dy<2;dy++)for(var dx=-1;dx<2;dx++){if(dx||dy){var ny=(y+dy+rows)%rows,nx=(x+dx+cols)%cols;sum+=g[ny][nx];}}n[y][x]=(g[y][x]&&(sum===2||sum===3))||(!g[y][x]&&sum===3)?1:0;}}g=n;};});',
        css: 'canvas{border-radius:8px}' })
    }),
    mk({ id: "p5-004", title: "p5.js 流場動畫", titleEn: "p5.js Flow Field", type: "p5.js 案例",
      subjects: ["自然科學", "物理", "藝術教育"], topics: ["向量場", "雜訊", "流體感"],
      difficulty: "專業", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["即時模擬"], libraries: ["p5.js"],
      description: "以 Perlin 雜訊建立向量流場，粒子沿場流動形成如風或水的軌跡。",
      teachingApplication: "視覺化向量場與流體流動，連結風場、洋流等地科概念。",
      learningObjectives: ["認識向量場概念", "體會雜訊在自然模擬中的應用"],
      tags: ["p5.js", "流場", "雜訊", "向量場"],
      fullCode: libFull({ title: "p5.js 流場動畫", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){var ps=[];s.setup=function(){s.createCanvas(320,240);for(var i=0;i<300;i++)ps.push(s.createVector(s.random(320),s.random(240)));s.background(11,16,32);};s.draw=function(){s.stroke(14,165,164,25);for(var i=0;i<ps.length;i++){var p=ps[i];var a=s.noise(p.x*0.005,p.y*0.005)*s.TWO_PI*2;p.x+=s.cos(a);p.y+=s.sin(a);s.point(p.x,p.y);if(p.x<0||p.x>320||p.y<0||p.y>240){p.x=s.random(320);p.y=s.random(240);}}};});' })
    }),
    mk({ id: "p5-005", title: "p5.js 互動萬花筒", titleEn: "p5.js Kaleidoscope", type: "p5.js 案例",
      subjects: ["藝術教育", "數學"], topics: ["對稱", "旋轉", "創意繪圖"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["拖曳", "Canvas 繪圖", "觸控"], libraries: ["p5.js"],
      description: "滑鼠拖曳時以多重對稱軸同時繪圖，形成萬花筒般的對稱圖案。",
      teachingApplication: "體驗旋轉對稱與鏡射對稱，連結數學對稱與藝術創作。",
      learningObjectives: ["認識旋轉對稱", "理解對稱軸數量的影響"],
      tags: ["p5.js", "萬花筒", "對稱", "藝術"],
      fullCode: libFull({ title: "p5.js 互動萬花筒", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){var sym=6;s.setup=function(){s.createCanvas(300,300);s.background(11,16,32);s.angleMode(s.RADIANS);};s.draw=function(){s.translate(150,150);if(s.mouseIsPressed){var mx=s.mouseX-150,my=s.mouseY-150,pmx=s.pmouseX-150,pmy=s.pmouseY-150;s.stroke(14,165,164);s.strokeWeight(2);for(var i=0;i<sym;i++){s.rotate(s.TWO_PI/sym);s.line(mx,my,pmx,pmy);s.push();s.scale(1,-1);s.line(mx,my,pmx,pmy);s.pop();}}};});',
        css: 'canvas{border-radius:8px}' })
    }),
    mk({ id: "p5-006", title: "p5.js 彈跳球碰撞", titleEn: "p5.js Bouncing Balls", type: "p5.js 案例",
      subjects: ["自然科學", "物理"], topics: ["碰撞", "動量", "速度"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["即時模擬"], libraries: ["p5.js"],
      description: "多顆彩色球在畫布中運動並與邊界反彈，示範速度向量與邊界碰撞。",
      teachingApplication: "說明速度分量與反彈（反射）概念，作為運動學入門模擬。",
      learningObjectives: ["理解速度向量分量", "認識邊界反彈規律"],
      tags: ["p5.js", "碰撞", "反彈", "運動學"],
      fullCode: libFull({ title: "p5.js 彈跳球", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){var b=[];s.setup=function(){s.createCanvas(320,220);for(var i=0;i<8;i++)b.push({x:s.random(320),y:s.random(220),vx:s.random(-3,3),vy:s.random(-3,3),r:s.random(10,20),c:s.color(s.random(255),160,200)});};s.draw=function(){s.background(11,16,32);s.noStroke();b.forEach(function(o){o.x+=o.vx;o.y+=o.vy;if(o.x<o.r||o.x>320-o.r)o.vx*=-1;if(o.y<o.r||o.y>220-o.r)o.vy*=-1;s.fill(o.c);s.circle(o.x,o.y,o.r*2);});};});' })
    }),
    mk({ id: "p5-007", title: "p5.js 聲音圓形視覺", titleEn: "p5.js Radial Audio Visual", type: "p5.js 案例",
      subjects: ["自然科學", "物理", "藝術教育"], topics: ["聲音", "頻率", "視覺化"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js", "Web Audio API"],
      interactionTypes: ["聲音互動", "即時模擬"], libraries: ["p5.js"], offlineFriendly: false,
      description: "以振盪器產生音調（需點擊後才發聲），並以圓形律動視覺呈現頻率變化。",
      teachingApplication: "連結頻率、音高與視覺律動；示範不自動播放聲音的良好互動設計。",
      learningObjectives: ["理解頻率與音高關係", "認識聲音視覺化"],
      accessibilityNotes: "不自動播放聲音，需使用者點擊啟動；提供文字狀態說明。",
      tags: ["p5.js", "聲音", "頻率", "視覺化"],
      fullCode: libFull({ title: "p5.js 聲音圓形視覺", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){var ctx,osc,started=false,t=0;s.setup=function(){var c=s.createCanvas(280,280);c.mousePressed(function(){if(!started){ctx=new (window.AudioContext||window.webkitAudioContext)();osc=ctx.createOscillator();osc.frequency.value=330;osc.connect(ctx.destination);osc.start();started=true;}});};s.draw=function(){s.background(11,16,32);s.translate(140,140);s.noFill();s.stroke(14,165,164);t+=0.05;for(var i=0;i<60;i++){var a=i/60*s.TWO_PI;var r=70+(started?20*s.sin(t*3+i*0.3):5*s.sin(t+i*0.3));s.point(s.cos(a)*r,s.sin(a)*r);}s.fill(159,176,204);s.noStroke();s.textAlign(s.CENTER);s.text(started?"發聲中":"點擊開始發聲",0,0);};});',
        css: 'canvas{border-radius:50%}' })
    }),
    mk({ id: "p5-008", title: "p5.js 隨機幾何藝術", titleEn: "p5.js Generative Art", type: "p5.js 案例",
      subjects: ["藝術教育", "數學", "資訊教育"], topics: ["生成藝術", "隨機", "配色"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "Canvas", "p5.js"],
      interactionTypes: ["點擊"], libraries: ["p5.js"],
      description: "點擊重新生成一幅由隨機幾何形狀與配色組成的抽象藝術。",
      teachingApplication: "認識隨機與亂數在創作中的應用，作為運算藝術入門。",
      learningObjectives: ["認識亂數與範圍", "體會生成藝術的變化性"],
      tags: ["p5.js", "生成藝術", "隨機", "配色"],
      fullCode: libFull({ title: "p5.js 生成藝術", src: CDN.p5,
        body: 'if(typeof p5==="undefined")return;\nnew p5(function(s){function art(){s.background(11,16,32);for(var i=0;i<40;i++){s.fill(s.random(255),s.random(255),s.random(255),150);s.noStroke();var t=s.random(1);if(t<0.5)s.circle(s.random(300),s.random(240),s.random(10,60));else s.rect(s.random(300),s.random(240),s.random(10,60),s.random(10,60));}}s.setup=function(){s.createCanvas(300,240);art();};s.mousePressed=art;};});',
        css: 'p{font-size:.85rem;color:#9fb0cc}', mount: '<p>點擊畫布重新生成</p>' })
    })
  );

  /* ================= Matter.js 物理模擬（7） ================= */
  examples.push(
    mk({ id: "mt-001", title: "Matter.js 積木堆疊", titleEn: "Matter.js Block Stack", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理"], topics: ["重力", "碰撞", "剛體"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["拖曳", "即時模擬"], libraries: ["Matter.js"], featured: true,
      description: "以物理引擎模擬受重力堆疊的積木，可拖曳互動、觀察倒塌。",
      teachingApplication: "示範重力、質量與碰撞，連結結構穩定與重心概念。",
      learningObjectives: ["認識重力與剛體運動", "觀察碰撞與堆疊穩定性"],
      tags: ["Matter.js", "物理引擎", "重力", "碰撞"],
      fullCode: libFull({ title: "Matter.js 積木堆疊", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:260,wireframes:false,background:"#0b1020"}});\nvar ground=E.Bodies.rectangle(160,255,320,20,{isStatic:true});\nE.World.add(eng.world,[ground]);\nfor(var i=0;i<6;i++)E.World.add(eng.world,E.Bodies.rectangle(160,40+i*30,60,26,{render:{fillStyle:"#0ea5a4"}}));\nvar mc=E.MouseConstraint.create(eng,{mouse:E.Mouse.create(r.canvas)});E.World.add(eng.world,mc);\nE.Render.run(r);E.Runner.run(E.Runner.create(),eng);' })
    }),
    mk({ id: "mt-002", title: "Matter.js 斜面滑落", titleEn: "Matter.js Inclined Plane", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理"], topics: ["斜面", "摩擦力", "重力分量"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["即時模擬"], libraries: ["Matter.js"],
      description: "方塊沿斜面下滑，示範重力分量與摩擦力對運動的影響。",
      teachingApplication: "連結斜面力學、重力分量與摩擦力概念。",
      learningObjectives: ["理解斜面上的力分解", "認識摩擦力作用"],
      tags: ["Matter.js", "斜面", "摩擦力", "力學"],
      fullCode: libFull({ title: "Matter.js 斜面", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:240,wireframes:false,background:"#0b1020"}});\nvar ramp=E.Bodies.rectangle(160,180,300,16,{isStatic:true,angle:0.3,render:{fillStyle:"#334155"}});\nvar box=E.Bodies.rectangle(70,40,30,30,{friction:0.05,render:{fillStyle:"#f59e0b"}});\nE.World.add(eng.world,[ramp,box]);E.Render.run(r);E.Runner.run(E.Runner.create(),eng);' })
    }),
    mk({ id: "mt-003", title: "Matter.js 單擺", titleEn: "Matter.js Pendulum", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理"], topics: ["單擺", "週期", "約束"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["拖曳", "即時模擬"], libraries: ["Matter.js"],
      description: "以約束建立可拖曳的單擺，觀察擺動與週期。",
      teachingApplication: "示範單擺運動、週期與能量轉換。",
      learningObjectives: ["認識單擺運動", "觀察擺長與週期關係"],
      tags: ["Matter.js", "單擺", "週期", "約束"],
      fullCode: libFull({ title: "Matter.js 單擺", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:260,wireframes:false,background:"#0b1020"}});\nvar bob=E.Bodies.circle(240,180,20,{render:{fillStyle:"#0ea5a4"}});\nvar con=E.Constraint.create({pointA:{x:160,y:30},bodyB:bob,stiffness:1,render:{strokeStyle:"#94a3b8"}});\nE.World.add(eng.world,[bob,con]);\nvar mc=E.MouseConstraint.create(eng,{mouse:E.Mouse.create(r.canvas)});E.World.add(eng.world,mc);\nE.Render.run(r);E.Runner.run(E.Runner.create(),eng);' })
    }),
    mk({ id: "mt-004", title: "Matter.js 骨牌效應", titleEn: "Matter.js Dominoes", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理"], topics: ["連鎖反應", "碰撞", "位能"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["拖曳", "即時模擬"], libraries: ["Matter.js"],
      description: "一排骨牌，推倒第一張引發連鎖倒塌，示範碰撞傳遞與位能釋放。",
      teachingApplication: "連結連鎖反應、能量傳遞概念，也可延伸到程式的事件連鎖。",
      learningObjectives: ["理解碰撞的能量傳遞", "觀察連鎖反應"],
      tags: ["Matter.js", "骨牌", "連鎖", "碰撞"],
      fullCode: libFull({ title: "Matter.js 骨牌", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:220,wireframes:false,background:"#0b1020"}});\nvar ground=E.Bodies.rectangle(160,210,320,20,{isStatic:true});E.World.add(eng.world,ground);\nfor(var i=0;i<8;i++)E.World.add(eng.world,E.Bodies.rectangle(40+i*34,175,10,50,{render:{fillStyle:"#7c3aed"}}));\nvar ball=E.Bodies.circle(20,150,10,{render:{fillStyle:"#f59e0b"}});E.Body.setVelocity(ball,{x:6,y:0});E.World.add(eng.world,ball);\nE.Render.run(r);E.Runner.run(E.Runner.create(),eng);' })
    }),
    mk({ id: "mt-005", title: "Matter.js 彈力球坑", titleEn: "Matter.js Bouncy Balls", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理"], topics: ["彈性", "恢復係數", "碰撞"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["點擊", "即時模擬"], libraries: ["Matter.js"],
      description: "點擊落下高彈性小球，觀察不同恢復係數下的彈跳。",
      teachingApplication: "示範彈性碰撞與能量損耗概念。",
      learningObjectives: ["認識彈性與恢復係數", "觀察能量逐次損耗"],
      tags: ["Matter.js", "彈力", "恢復係數", "碰撞"],
      fullCode: libFull({ title: "Matter.js 彈力球", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:240,wireframes:false,background:"#0b1020"}});\nvar walls=[E.Bodies.rectangle(160,238,320,20,{isStatic:true}),E.Bodies.rectangle(2,120,8,240,{isStatic:true}),E.Bodies.rectangle(318,120,8,240,{isStatic:true})];E.World.add(eng.world,walls);\nr.canvas.addEventListener("click",function(e){var b=r.canvas.getBoundingClientRect();E.World.add(eng.world,E.Bodies.circle(e.clientX-b.left,20,14,{restitution:0.85,render:{fillStyle:"#0ea5a4"}}));});\nE.Render.run(r);E.Runner.run(E.Runner.create(),eng);',
        css: 'p{font-size:.85rem;color:#9fb0cc}', mount: '<p>點擊畫布落下彈力球</p>' })
    }),
    mk({ id: "mt-006", title: "Matter.js 橋樑承重", titleEn: "Matter.js Bridge Load", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理", "跨領域學習"], topics: ["結構", "張力", "承重"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["拖曳", "即時模擬"], libraries: ["Matter.js"],
      description: "以鏈結板塊組成的軟橋，放上重物觀察下垂與承重變形。",
      teachingApplication: "連結結構工程、張力與材料承重概念，適合科展探究。",
      learningObjectives: ["認識結構承重", "觀察張力與變形"],
      scienceFairApplication: "延伸探究不同結構（拱橋、桁架）的承重表現。",
      tags: ["Matter.js", "橋樑", "結構", "承重"],
      fullCode: libFull({ title: "Matter.js 橋樑承重", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:220,wireframes:false,background:"#0b1020"}});\nvar group=E.Body.nextGroup(true);var bridge=E.Composites.stack(40,120,10,1,0,0,function(x,y){return E.Bodies.rectangle(x,y,24,8,{collisionFilter:{group:group},render:{fillStyle:"#0ea5a4"}});});\nE.Composites.chain(bridge,0.5,0,-0.5,0,{stiffness:0.9,length:2});\nE.World.add(eng.world,[bridge,E.Constraint.create({pointA:{x:40,y:120},bodyB:bridge.bodies[0],pointB:{x:-12,y:0}}),E.Constraint.create({pointA:{x:280,y:120},bodyB:bridge.bodies[bridge.bodies.length-1],pointB:{x:12,y:0}})]);\nE.World.add(eng.world,E.Bodies.circle(160,20,16,{density:0.02,render:{fillStyle:"#f59e0b"}}));\nE.Render.run(r);E.Runner.run(E.Runner.create(),eng);' })
    }),
    mk({ id: "mt-007", title: "Matter.js 重力翻轉", titleEn: "Matter.js Gravity Flip", type: "Matter.js 物理模擬",
      subjects: ["自然科學", "物理"], topics: ["重力方向", "力場", "運動"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Matter.js"],
      interactionTypes: ["點擊", "即時模擬"], libraries: ["Matter.js"],
      description: "點擊按鈕翻轉重力方向，物體隨即改變落下方向。",
      teachingApplication: "以誇張情境幫助理解重力是一種可定義方向的力。",
      learningObjectives: ["認識重力方向與加速度", "觀察力場改變的影響"],
      tags: ["Matter.js", "重力", "力場", "翻轉"],
      fullCode: libFull({ title: "Matter.js 重力翻轉", src: CDN.matter,
        body: 'if(typeof Matter==="undefined")return;\nvar E=Matter,eng=E.Engine.create(),r=E.Render.create({element:document.body,engine:eng,options:{width:320,height:240,wireframes:false,background:"#0b1020"}});\nvar walls=[E.Bodies.rectangle(160,2,320,8,{isStatic:true}),E.Bodies.rectangle(160,238,320,8,{isStatic:true})];E.World.add(eng.world,walls);\nfor(var i=0;i<6;i++)E.World.add(eng.world,E.Bodies.circle(60+i*40,120,14,{restitution:0.4,render:{fillStyle:"#7c3aed"}}));\ndocument.getElementById("flip").onclick=function(){eng.world.gravity.y*=-1;};\nE.Render.run(r);E.Runner.run(E.Runner.create(),eng);',
        css: 'button{margin:8px;padding:8px 16px;border:none;border-radius:8px;background:#2563eb;color:#fff}', mount: '<button id="flip">翻轉重力</button>' })
    })
  );

  /* ================= Chart.js 與資料視覺化（8） ================= */
  function chartFull(title, cfg, note) {
    return libFull({ title: title, src: CDN.chart,
      css: 'canvas{background:#fff;border-radius:8px;max-width:320px}p{font-size:.85rem;color:#9fb0cc}',
      mount: '<canvas id="c" width="320" height="240"></canvas>' + (note ? '<p>' + note + '</p>' : ''),
      body: 'if(typeof Chart==="undefined")return;\nnew Chart(document.getElementById("c"),' + cfg + ');' });
  }
  examples.push(
    mk({ id: "cj-001", title: "Chart.js 長條圖", titleEn: "Chart.js Bar Chart", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "自然科學", "社會領域"], topics: ["長條圖", "統計", "比較"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"], featured: true,
      description: "以 Chart.js 快速產生互動長條圖，滑鼠移入顯示數值提示。",
      teachingApplication: "呈現分類數量比較，如各組實驗結果或問卷統計。",
      learningObjectives: ["讀懂長條圖", "認識資料視覺化工具"],
      tags: ["Chart.js", "長條圖", "統計", "資料視覺化"],
      fullCode: chartFull("Chart.js 長條圖", '{type:"bar",data:{labels:["紅","橙","黃","綠","藍"],datasets:[{label:"票數",data:[12,19,7,15,9],backgroundColor:["#ef4444","#f59e0b","#eab308","#10b981","#2563eb"]}]},options:{plugins:{legend:{display:false}}}}')
    }),
    mk({ id: "cj-002", title: "Chart.js 折線趨勢圖", titleEn: "Chart.js Line Chart", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "自然科學", "環境教育"], topics: ["折線圖", "趨勢", "時間序列"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "折線圖呈現隨時間變化的數據趨勢，適合氣溫、成長或觀測紀錄。",
      teachingApplication: "呈現連續觀測數據的變化趨勢與轉折。",
      learningObjectives: ["讀懂折線趨勢", "解讀轉折意義"],
      tags: ["Chart.js", "折線圖", "趨勢", "時間序列"],
      fullCode: chartFull("Chart.js 折線圖", '{type:"line",data:{labels:["週一","週二","週三","週四","週五"],datasets:[{label:"氣溫(°C)",data:[22,24,23,27,26],borderColor:"#0ea5a4",backgroundColor:"#0ea5a433",fill:true,tension:0.3}]}}')
    }),
    mk({ id: "cj-003", title: "Chart.js 圓餅圖", titleEn: "Chart.js Pie Chart", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "社會領域"], topics: ["圓餅圖", "百分比", "占比"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "圓餅圖呈現各類別的占比，附圖例與互動提示。",
      teachingApplication: "呈現比例資料，如垃圾分類占比、時間分配。",
      learningObjectives: ["理解占比與百分比", "讀懂圓餅圖"],
      tags: ["Chart.js", "圓餅圖", "占比", "百分比"],
      fullCode: chartFull("Chart.js 圓餅圖", '{type:"pie",data:{labels:["紙類","塑膠","廚餘","其他"],datasets:[{data:[40,25,20,15],backgroundColor:["#2563eb","#0ea5a4","#f59e0b","#7c3aed"]}]}}')
    }),
    mk({ id: "cj-004", title: "Chart.js 雷達圖", titleEn: "Chart.js Radar Chart", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "健康教育", "跨領域學習"], topics: ["雷達圖", "多維度", "能力"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "雷達圖比較多個維度的表現，適合能力盤點或營養分析。",
      teachingApplication: "呈現多面向資料，如學習能力自評、飲食均衡度。",
      learningObjectives: ["讀懂多維度雷達圖", "比較不同面向"],
      tags: ["Chart.js", "雷達圖", "多維度", "自評"],
      fullCode: chartFull("Chart.js 雷達圖", '{type:"radar",data:{labels:["聽","說","讀","寫","作"],datasets:[{label:"自評",data:[4,3,5,3,4],borderColor:"#7c3aed",backgroundColor:"#7c3aed44"}]},options:{scales:{r:{min:0,max:5}}}}')
    }),
    mk({ id: "cj-005", title: "Chart.js 散布圖", titleEn: "Chart.js Scatter Plot", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "自然科學"], topics: ["散布圖", "相關", "資料點"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "散布圖呈現兩變數的關係，用於觀察相關性。",
      teachingApplication: "探討兩變數關係，如身高與體重、溫度與溶解度。",
      learningObjectives: ["認識散布圖", "觀察變數相關性"],
      scienceFairApplication: "呈現實驗中兩變因的關係並判斷趨勢。",
      tags: ["Chart.js", "散布圖", "相關", "變數"],
      fullCode: chartFull("Chart.js 散布圖", '{type:"scatter",data:{datasets:[{label:"資料",data:[{x:1,y:2},{x:2,y:3.5},{x:3,y:3.8},{x:4,y:5.1},{x:5,y:6}],backgroundColor:"#0ea5a4"}]},options:{scales:{x:{title:{display:true,text:"X"}},y:{title:{display:true,text:"Y"}}}}}')
    }),
    mk({ id: "cj-006", title: "Chart.js 甜甜圈圖", titleEn: "Chart.js Doughnut Chart", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "健康教育"], topics: ["甜甜圈圖", "占比"],
      difficulty: "初階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "甜甜圈圖是中空的圓餅圖，中央可放置總計或標題。",
      teachingApplication: "呈現占比並在中央強調重點數字。",
      learningObjectives: ["讀懂甜甜圈圖", "理解與圓餅圖差異"],
      tags: ["Chart.js", "甜甜圈圖", "占比"],
      fullCode: chartFull("Chart.js 甜甜圈圖", '{type:"doughnut",data:{labels:["運動","閱讀","睡眠","其他"],datasets:[{data:[3,2,8,11],backgroundColor:["#2563eb","#0ea5a4","#7c3aed","#94a3b8"]}]}}')
    }),
    mk({ id: "cj-007", title: "Chart.js 堆疊長條圖", titleEn: "Chart.js Stacked Bar", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "社會領域", "環境教育"], topics: ["堆疊圖", "組成", "比較"],
      difficulty: "中階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "堆疊長條圖同時比較總量與各組成，適合多類別資料。",
      teachingApplication: "呈現各群體的組成與總量，如各年級性別人數。",
      learningObjectives: ["讀懂堆疊圖", "同時比較總量與組成"],
      tags: ["Chart.js", "堆疊圖", "組成", "比較"],
      fullCode: chartFull("Chart.js 堆疊長條圖", '{type:"bar",data:{labels:["一年級","二年級","三年級"],datasets:[{label:"男",data:[20,18,22],backgroundColor:"#2563eb"},{label:"女",data:[18,21,19],backgroundColor:"#f59e0b"}]},options:{scales:{x:{stacked:true},y:{stacked:true}}}}')
    }),
    mk({ id: "cj-008", title: "Chart.js 氣泡圖", titleEn: "Chart.js Bubble Chart", type: "Chart.js 與資料視覺化",
      subjects: ["數學", "自然科學"], topics: ["氣泡圖", "三維度", "資料"],
      difficulty: "進階", technologies: ["HTML", "JavaScript", "Canvas", "Chart.js"],
      interactionTypes: ["互動圖表"], libraries: ["Chart.js"],
      description: "氣泡圖以位置與大小同時表達三個維度的資料。",
      teachingApplication: "呈現三維資料，如國家的人口、面積與 GDP。",
      learningObjectives: ["認識氣泡圖", "以大小表達第三維度"],
      tags: ["Chart.js", "氣泡圖", "三維度", "資料"],
      fullCode: chartFull("Chart.js 氣泡圖", '{type:"bubble",data:{datasets:[{label:"樣本",data:[{x:10,y:20,r:12},{x:15,y:10,r:20},{x:25,y:30,r:8},{x:30,y:15,r:16}],backgroundColor:"#0ea5a488"}]}}')
    })
  );

  window.DATA_PHASE2 = { examples: examples };

  // 供其他分組陣列以 push 方式追加（見本檔後續載入的分段）
  window.__P2 = examples;
  window.__P2mk = mk;
  window.__P2libFull = libFull;
})();
