(function(){
'use strict';
const T=window.FS,KEY='first-steps-cold-case-v1';
let st={};try{st=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){st={}}
const fresh=()=>{st.unlocked=st.unlocked||{};st.items=st.items||{};st.board=st.board||{};st.finding=st.finding||{};st.write=st.write||{};st.tl=st.tl||{r:true,f:true,c:true,w:true,src:'all',q:''};st.hyp=st.hyp||'';};fresh();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const P=a=>a.map(x=>'<p>'+esc(x)+'</p>').join('');
const typed=lines=>'<div class="typed">'+lines.map((l,i)=>i==0?'<b>'+esc(l)+'</b>':esc(l)).join('\n')+'</div>';
const BADGE={real:['b-real','Record'],made:['b-made','From the story'],book:['b-book','In the book'],check:['b-check','Still being checked']};
const badge=k=>'<span class="badge '+BADGE[k][0]+'">'+BADGE[k][1]+'</span>';
const panel=(k,title,items)=>items&&items.length?'<section class="panel '+(k=='book'?'book':k)+'" aria-label="'+esc(BADGE[k][1]+': '+title)+'"><h3>'+badge(k)+esc(title)+'</h3>'+(items.length>1?'<ul>'+items.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'<p style="margin:0">'+esc(items[0])+'</p>')+'</section>':'';
const srcLinks=keys=>keys&&keys.length?'<p class="srcs"><strong>Sources:</strong> '+keys.map(k=>{const s=T.S[k];return s?'<a href="'+esc(s[1])+'" target="_blank" rel="noopener noreferrer">'+esc(s[0])+' (opens in a new tab)</a>':''}).join('')+'</p>':'';
const unlocked=n=>!!(st.classAll||st.unlocked[n]||(n==4&&st.unlocked[3]));
const topicDone=id=>!!(st.board[id]&&st.board[id].locked);
const board=id=>st.board[id]||(st.board[id]={});
const item=id=>st.items[id]||(st.items[id]={clues:{}});
const W=n=>T.witnesses[n-1];
const wsum=s=>(s||'').trim().split(/\s+/).filter(Boolean).length;

function figure(img){
 return '<figure><img src="'+esc(img.src)+'" alt="'+esc(img.alt)+'" loading="lazy"><figcaption>'+esc(img.cap)+'<span class="credit">'+esc(img.credit)+'</span></figcaption></figure>';
}
const screens={};

/* ---------- HOME ---------- */
screens.home=()=>{
 const nW=[1,2,3,4].filter(unlocked).length,nT=T.topics.filter(t=>topicDone(t.id)).length,nI=T.items.filter(i=>st.items[i.id]&&st.items[i.id].rel).length;
 return '<h1>Case file</h1><p class="lead">A companion to <em>First Steps on Ancient Ground</em> by Robin McKean. Read the book. Use this app to look at the evidence.</p>'+
 '<div class="cta"><a class="btn dark" href="'+esc(T.flipbook)+'" target="_blank" rel="noopener noreferrer">Open the book (opens in a new tab)</a></div>'+
 typed(T.caseFile)+
 '<h2>The case</h2>'+P(T.summary)+
 '<section class="care" aria-labelledby="carehd"><h2 id="carehd">Before you start</h2><p>'+esc(T.content)+'</p>'+P(T.care)+'<p><a href="#/about">Read the acknowledgement and credits</a></p></section>'+
 '<h2>How to use this app</h2><p>The app keeps spoilers back. Each witness file opens when you say you have finished that character’s story in the book. Nobody checks. It works best if you read first.</p><ol class="steps">'+T.readingPath.map(s=>'<li>'+esc(s[0])+'<small>'+esc(s[1])+'</small></li>').join('')+'</ol>'+
 '<div class="status" aria-label="Your progress"><span class="'+(nW==4?'done':'')+'">Witness files open: '+nW+' of 4</span><span class="'+(nI==5?'done':'')+'">Clues scored: '+nI+' of 5</span><span class="'+(nT==T.topics.length?'done':'')+'">Board questions locked in: '+nT+' of '+T.topics.length+'</span></div>'+
 '<h2>In the book, in the record, from the story</h2><p>Every card in this app keeps these apart.</p><p>'+badge('book')+'What the book says. It is not a record.</p><p>'+badge('real')+'Something in a public record, with the source named.</p><p>'+badge('made')+'Written for the story. This app found no record for it. The book says some dialogue and thoughts are imagined.</p><p>'+badge('check')+'The book and the records do not fit, or the app could not check.</p>'+
 '<div class="grid c2"><a class="btn dark" href="#/witnesses/1">Open the witness files</a><a class="btn" href="#/timeline">See the timeline</a></div>';
};

/* ---------- WITNESSES ---------- */
function wtabs(cur){
 return '<div class="wtabs" role="navigation" aria-label="Witness files">'+T.witnesses.map(w=>'<a class="btn'+(w.n==cur?' dark':'')+'" href="#/witnesses/'+w.n+'"'+(w.n==cur?' aria-current="page"':'')+'>File '+w.n+': '+esc(w.name)+'<span class="lockmark">'+(unlocked(w.n)?'open':'locked')+'</span></a>').join('')+'</div>';
}
screens.witnesses=(arg)=>{
 const n=[1,2,3,4].includes(+arg)?+arg:1,w=W(n);
 let h='<h1>Witness files</h1>'+wtabs(n)+'<h2>'+esc(w.fileLabel)+': '+esc(w.name)+'</h2>';
 if(!unlocked(n)){
  h+=typed(['WITNESS FILE '+n,'Name: '+w.name,'Role: '+w.role,'Status: '+w.teaser,'Evidence: hidden until you finish the story.'])+
  '<div class="lockwall"><p><strong>This file is locked so it does not spoil the book.</strong></p><p>Unlock it when you have finished <em>'+esc(w.chapter)+'</em> in the book.</p><button class="btn dark" data-unlock="'+n+'">I have finished this story. Unlock the file.</button></div>';
  return h;
 }
 h+=typed(w.box)+
 '<h2>Background</h2>'+w.background.map(x=>'<p>'+esc(x)+'</p>').join('')+'<p class="note">'+badge('book')+'This section is what the book says. It is not a record.</p>'+
 '<h2>What they said</h2>'+w.said.map(e=>'<div class="entry"><div class="tag">'+esc(e[0])+'</div><p>'+esc(e[1])+'</p></div>').join('')+
 '<h2>What the records show</h2>'+w.records.map(r=>'<div class="rec"><p>'+badge('real')+esc(r.t)+'</p>'+srcLinks(r.src)+'</div>').join('')+
 (w.image?figure(w.image):'')+
 '<h2>Not asked</h2><p>These are questions nobody put to the witness, or that the sources leave open.</p>'+w.notAsked.map(e=>'<div class="entry"><div class="tag">'+esc(e[0])+'</div><p>'+esc(e[1])+'</p></div>').join('')+
 '<h2>What is real, what is from the story</h2>'+panel('real','In a record',w.real)+panel('made','From the story',w.made)+
 '<div class="pager">'+(n>1?'<a class="btn" href="#/witnesses/'+(n-1)+'">&larr; File '+(n-1)+'</a>':'')+(n<4?'<a class="btn dark" href="#/witnesses/'+(n+1)+'">File '+(n+1)+' &rarr;</a>':'<a class="btn dark" href="#/clues">Go to the clues &rarr;</a>')+'</div>'+
 (st.classAll?'':'<p style="margin-top:14px"><button class="btn small" data-relock="'+n+'">Hide this file again</button></p>');
 return h;
};

/* ---------- CLUES ---------- */
const KIND={present:'What is there',missing:'What is missing',contradiction:'Cautions'};
screens.clues=(arg)=>{
 const it=T.items.find(x=>x.id==arg);
 if(!it){
  const cards=T.items.map(i=>{const s=st.items[i.id]||{clues:{}};const got=Object.keys(s.clues).filter(k=>s.clues[k]).length;return '<a class="itemcard" href="#/clues/'+i.id+'"><b>'+esc(i.title)+'</b><span>'+esc(i.type)+'<br>Clues collected: '+got+' of '+i.clues.length+(s.rel?' · Score: '+s.rel+' of 5':'')+'</span></a>'}).join('');
  return '<h1>Clues</h1><p class="lead">'+esc(T.cluesIntro)+'</p><div class="itemgrid">'+cards+'</div>'+
  '<h2>My first idea</h2><p>The book asks for an initial hypothesis after you have looked at A to E. Who do you think the Resistor is? What events do you think happened? What questions remain?</p><label for="hyp">My first idea, from Items A to E only</label><textarea id="hyp" data-hyp="1">'+esc(st.hyp)+'</textarea>'+
  '<h2>Then, the archive hunt</h2><p>The book asks you to find sources outside the Log Book. <a href="#/records">Go to the records page</a> for starting points, then use the Board to compare them with the book.</p>';
 }
 const s=item(it.id),i=T.items.indexOf(it);
 const kinds=['present','missing','contradiction'];
 let h='<p><a href="#/clues">&larr; All clues</a></p><h1>'+esc(it.title)+'</h1><p class="lead">'+esc(it.type)+'</p>'+
 '<div class="typed">'+it.text.map(esc).join('\n\n')+'</div><p class="note">'+badge('book')+'This text is from the Log Book. The book says the items are teaching fragments, not original records.</p>'+
 '<h2>Collect the clues</h2><p>Tick each clue you can see in the text.</p>'+
 kinds.map(k=>{const cl=it.clues.filter(c=>c[1]==k);return cl.length?'<div class="kind">'+KIND[k]+'</div><ul class="cluelist">'+cl.map(c=>'<li><label><input type="checkbox" data-clue="'+c[0]+'"'+(s.clues[c[0]]?' checked':'')+'> <span>'+esc(c[2])+'</span></label></li>').join('')+'</ul>':''}).join('')+
 '<h2>Your evidence log</h2><fieldset><legend>How far do I trust this item? (1 = very low, 5 = very high)</legend><div class="scale">'+[1,2,3,4,5].map(n=>'<label><input type="radio" name="rel" value="'+n+'" data-ik="rel"'+(s.rel==n?' checked':'')+'> '+n+'</label>').join('')+'</div></fieldset>'+
 '<label for="why">Why? Whose view is it, and what is left out?</label><textarea id="why" data-ik="why">'+esc(s.why||'')+'</textarea>';
 if(s.rel&&wsum(s.why)>2){
  h+='<section class="reveal" aria-labelledby="rv"><h2 id="rv">Check against the records</h2><p>'+badge('check')+esc(it.bias)+'</p><p>'+badge('real')+esc(it.check)+'</p>'+srcLinks(it.src)+'</section>';
 }else{
  h+='<p class="wc" id="rvhelp">Give a score and write a reason to see the notes on this item.</p>';
 }
 h+='<div class="pager">'+(i>0?'<a class="btn" href="#/clues/'+T.items[i-1].id+'">&larr; Item '+T.items[i-1].id+'</a>':'<a class="btn" href="#/clues">&larr; All clues</a>')+(i<T.items.length-1?'<a class="btn dark" href="#/clues/'+T.items[i+1].id+'">Item '+T.items[i+1].id+' &rarr;</a>':'<a class="btn dark" href="#/board">Go to the Board &rarr;</a>')+'</div>';
 return h;
};

/* ---------- BOARD ---------- */
function statement(c,b,locked){
 const sel=b.a==c[0]||b.b==c[0];
 return '<button class="sc" data-pick="'+c[0]+'" aria-pressed="'+sel+'"'+(locked?' disabled':'')+'><span class="who">'+esc(T.who[c[1]])+' · '+esc(c[2])+(sel?'<span class="mark">PAIRED</span>':'')+'</span><span class="t">'+esc(c[3])+'</span></button>';
}
const topicGateOK=t=>unlocked(t.gate);
screens.board=(arg)=>{
 if(arg=='finding')return findingScreen();
 const t=T.topics.find(x=>x.id==arg);
 if(!t){
  const nT=T.topics.filter(x=>topicDone(x.id)).length;
  return '<h1>The board</h1><p class="lead">'+esc(T.boardIntro)+'</p><div class="status"><span class="'+(nT==T.topics.length?'done':'')+'">Locked in: '+nT+' of '+T.topics.length+'</span></div>'+
  '<ol class="q" style="list-style:none;padding:0">'+T.topics.map((x,i)=>{const b=st.board[x.id]||{};const ok=topicGateOK(x);const s=!ok?'Locked':(b.locked?'Locked in':(b.a&&b.b?'Paired, not locked':'Not started'));return '<li><a class="btn" style="display:flex;justify-content:space-between;text-align:left;width:100%" href="#/board/'+x.id+'"><span>'+(i+1)+'. '+esc(x.title)+'</span><span class="wc">'+s+'</span></a></li>'}).join('')+'</ol>'+
  '<h2>Then, your finding</h2><p>When you are ready, write your solved case.</p><a class="btn dark" href="#/board/finding">My finding</a>'+
  '<p class="note">The book does not give one answer, and neither does this app. The board only shows where statements in the book and in public records match and where they do not.</p>';
 }
 const i=T.topics.indexOf(t);
 if(!topicGateOK(t)){
  return '<p><a href="#/board">&larr; All questions</a></p><h1>'+(i+1)+'. '+esc(t.title)+'</h1><div class="lockwall"><p><strong>This question is locked so it does not spoil the book.</strong></p><p>Unlock '+esc(W(t.gate).fileLabel)+' ('+esc(W(t.gate).name)+') first.</p><a class="btn dark" href="#/witnesses/'+t.gate+'">Go to the witness file</a></div>';
 }
 const b=board(t.id),L=!!b.locked;
 let h='<p><a href="#/board">&larr; All questions</a></p><h1>'+(i+1)+'. '+esc(t.title)+'</h1><p class="lead">'+esc(t.ask)+'</p>'+
 '<h2>Step 1. Pair two statements that do not fit together</h2><p>Tap two statements. Tap one again to take it off.</p><div id="stmts">'+t.cards.map(c=>statement(c,b,L)).join('')+'</div><p id="paircount" class="wc" aria-live="polite">'+(b.a&&b.b?'Pair chosen.':b.a?'One chosen. Pick one more.':'None chosen yet.')+'</p>'+
 '<h2>Step 2. Whom do you trust most on this question?</h2><fieldset><legend>I trust most:</legend><div class="opts">'+T.trustOptions.map(o=>'<label><input type="radio" name="trust_'+t.id+'" value="'+esc(o)+'" data-bk="trust"'+(b.trust==o?' checked':'')+(L?' disabled':'')+'> '+esc(o)+'</label>').join('')+'</div></fieldset>'+
 '<h2>Step 3. Write your finding</h2><label for="note">In one or two sentences: how do the two statements differ, and what do you think that means? Use only what is in the book and the records.</label><textarea id="note" data-bk="note"'+(L?' disabled':'')+'>'+esc(b.note||'')+'</textarea>';
 if(!L){
  const ok=b.a&&b.b&&b.trust&&(b.note||'').trim().length>2;
  h+='<p><button class="btn dark" id="lockbtn" data-lock="'+t.id+'"'+(ok?'':' disabled')+' aria-describedby="lockhelp">Lock in my finding</button></p><p id="lockhelp" class="wc">'+(ok?'Once you lock it in, you can read what the sources say.':'To lock in, pick a pair, choose whom you trust and write your finding.')+'</p>';
 }else{
  const cd=id=>{const k=t.cards.find(y=>y[0]==id);return k?'“'+k[3]+'” ('+k[2]+')':''};
  h+='<div class="locked-note">Locked in. Your finding is saved on this device.</div>'+
  '<section class="reveal" aria-labelledby="rv"><h2 id="rv">What the sources say</h2>'+
  '<p><em>One pair that is worth noticing:</em></p><p>'+esc(cd(t.pair[0]))+'</p><p>'+esc(cd(t.pair[1]))+'</p>'+
  (b.a&&b.b&&!(t.pair.includes(b.a)&&t.pair.includes(b.b))?'<p class="wc">You paired a different two. That is fine. Compare your pair with this one.</p>':'')+
  P(t.reveal)+(t.check?'<p>'+badge('check')+esc(t.check)+'</p>':'')+srcLinks(t.src)+'</section>';
 }
 h+='<div class="pager">'+(i>0?'<a class="btn" href="#/board/'+T.topics[i-1].id+'">&larr; Previous</a>':'<a class="btn" href="#/board">&larr; All questions</a>')+(i<T.topics.length-1?'<a class="btn dark" href="#/board/'+T.topics[i+1].id+'">Next question &rarr;</a>':'<a class="btn dark" href="#/board/finding">My finding &rarr;</a>')+'</div>';
 return h;
};
function findingScreen(){
 const f=st.finding,L=!!f.locked,nT=T.topics.filter(x=>topicDone(x.id)).length;
 let h='<p><a href="#/board">&larr; The board</a></p><h1>Case file: finding</h1><p class="lead">'+esc(T.findingIntro)+'</p>'+
 '<div class="status"><span class="'+(nT==T.topics.length?'done':'')+'">Board questions locked in: '+nT+' of '+T.topics.length+'</span></div>'+
 '<fieldset><legend>Case status</legend><div class="opts" style="flex-direction:column">'+T.statusOptions.map(o=>'<label><input type="radio" name="status" value="'+esc(o)+'" data-fk="status"'+(f.status==o?' checked':'')+(L?' disabled':'')+'> '+esc(o)+'</label>').join('')+'</div></fieldset>'+
 [['what','Who do I think the Resistor is, and what happened? Use the evidence.'],['revised','How has my thinking changed since my first idea?'],['trust','The sources I trust most, and why'],['silences','Whose voices are missing?'],['unchecked','What is still missing, and how could I find out?']].map(x=>'<label for="f_'+x[0]+'">'+esc(x[1])+'</label><textarea id="f_'+x[0]+'" data-fk="'+x[0]+'"'+(L?' disabled':'')+'>'+esc(f[x[0]]||'')+'</textarea>').join('')+
 '<fieldset><legend>How sure am I?</legend><div class="opts">'+T.sureOptions.map(o=>'<label><input type="radio" name="sure" value="'+esc(o)+'" data-fk="sure"'+(f.sure==o?' checked':'')+(L?' disabled':'')+'> '+esc(o)+'</label>').join('')+'</div></fieldset>';
 if(!L){
  const ok=f.status&&(f.what||'').trim().length>2&&f.sure;
  h+='<p><button class="btn dark" id="lockfind"'+(ok?'':' disabled')+' aria-describedby="fhelp">Lock in my finding</button></p><p id="fhelp" class="wc">'+(ok?'Locking it in shows what the records can and cannot tell us.':'To lock in, choose the case status and how sure you are, and write what you think happened.')+'</p>';
 }else{
  h+='<div class="locked-note">Locked in. Your finding is saved on this device.</div><section class="reveal" aria-labelledby="rv1"><h2 id="rv1">What the records can and cannot tell us</h2>'+P(T.findingReveal)+srcLinks(['tench','nmaPem','adbPem','dosPem'])+'</section><p><button class="btn small" data-unlockfind="1">Unlock my finding to edit it</button></p>';
 }
 h+='<p><button class="btn dark" id="printbtn">Print or save my work</button></p>';
 return h;
}

/* ---------- TIMELINE ---------- */
const FROM={book:'In the book',record:'In the records',both:'In both',story:'From the story'};
const yearOf=e=>e.k>=99999990?'No date in the book':String(Math.floor(e.k/10000));
function tlFiltered(){
 const tl=st.tl,q=(tl.q||'').toLowerCase().trim();
 return T.events.filter(e=>{
  if(!e.s.some(x=>tl[x]))return false;
  if(tl.src=='book'&&!['book','both','story'].includes(e.f))return false;
  if(tl.src=='record'&&!['record','both'].includes(e.f))return false;
  if(q&&(e.t+' '+e.x+' '+e.d).toLowerCase().indexOf(q)<0)return false;
  return true;
 }).sort((a,b)=>a.k-b.k);
}
function tlItem(e){
 return '<article class="ev'+(e.f=='story'?' story':'')+'" id="ev-'+e.id+'" tabindex="-1" aria-labelledby="h-'+e.id+'"><div class="dt">'+esc(e.d)+'</div><h3 id="h-'+e.id+'">'+esc(e.t)+'</h3><div class="tags">'+badge(e.b)+'<span>'+esc(FROM[e.f])+'</span>'+e.s.map(x=>'<span>'+esc(T.strands[x])+'</span>').join('')+'</div><p>'+esc(e.x)+'</p>'+srcLinks(e.src)+'</article>';
}
function tlList(){
 const ev=tlFiltered();let h='',yr='';
 if(!ev.length)return '<p class="note">No events match. Tick more characters, or clear the search.</p>';
 ev.forEach(e=>{const y=yearOf(e);if(y!=yr){yr=y;h+='<h2 class="yr">'+esc(y)+'</h2>';}h+=tlItem(e);});
 return h;
}
function tlStrip(){
 const ev=tlFiltered().filter(e=>e.k<99999990&&e.k<19000000),x0=1788,x1=1850,W=1000,H=118,px=y=>30+(y-x0)/(x1-x0)*(W-50);
 const rows={r:20,f:42,c:64,w:86};
 let s='<svg viewBox="0 0 '+W+' '+H+'" aria-hidden="true" focusable="false">';
 for(let y=1790;y<=1850;y+=10){s+='<line x1="'+px(y)+'" x2="'+px(y)+'" y1="6" y2="98" stroke="#b9a77d" stroke-width="1"/><text x="'+px(y)+'" y="114" text-anchor="middle">'+y+'</text>';}
 ev.forEach(e=>{const yr=Math.floor(e.k/10000)+((Math.floor(e.k/100)%100)-1)/12;e.s.forEach(sk=>{s+='<circle class="dot '+sk+'" data-jump="'+e.id+'" cx="'+px(yr).toFixed(1)+'" cy="'+rows[sk]+'" r="6"><title>'+esc(e.d+': '+e.t)+'</title></circle>';});});
 return s+'</svg>';
}
screens.timeline=()=>{
 const tl=st.tl,ev=tlFiltered(),years=[...new Set(ev.map(yearOf))];
 return '<h1>Timeline</h1><p class="lead">'+esc(T.tlIntro)+'</p>'+
 '<form class="filters" onsubmit="return false" aria-label="Timeline filters"><fieldset><legend>Show events for</legend><div class="chk">'+Object.keys(T.strands).map(k=>'<label><input type="checkbox" data-tls="'+k+'"'+(tl[k]?' checked':'')+'> '+esc(T.strands[k])+'</label>').join('')+'</div></fieldset>'+
 '<fieldset><legend>Where the date comes from</legend><div class="chk">'+[['all','Everything'],['book','Dates the book gives, and story scenes'],['record','Public records']].map(o=>'<label><input type="radio" name="tlsrc" value="'+o[0]+'" data-tlsrc="1"'+(tl.src==o[0]?' checked':'')+'> '+esc(o[1])+'</label>').join('')+'</div></fieldset>'+
 '<label for="tlq">Search the timeline</label><input type="search" id="tlq" data-tlq="1" value="'+esc(tl.q||'')+'" autocomplete="off">'+
 '<label for="tlj">Jump to a year</label><select id="tlj" data-tljump="1">'+'<option value="">Choose a year</option>'+years.map(y=>'<option value="'+esc(y)+'">'+esc(y)+'</option>').join('')+'</select>'+
 '<p class="wc" id="tlcount" aria-live="polite">Showing '+ev.length+' of '+T.events.length+' events.</p></form>'+
 '<div class="legend" aria-hidden="true"><span class="r">The Resistor</span><span class="f">Thomas Freeman</span><span class="c">Thomas Curtis</span><span class="w">Wider history</span></div>'+
 '<div class="tlstrip" id="tlstrip">'+tlStrip()+'</div><p class="wc">The strip shows 1788 to 1850. The 1992 entry is only in the list. Tap a dot to jump to it.</p>'+
 figure(T.tlImage)+
 '<div id="tlist">'+tlList()+'</div>';
};
function tlUpdate(){
 const ev=tlFiltered();
 const l=document.getElementById('tlist'),s=document.getElementById('tlstrip'),c=document.getElementById('tlcount'),j=document.getElementById('tlj');
 if(l)l.innerHTML=tlList();if(s)s.innerHTML=tlStrip();if(c)c.textContent='Showing '+ev.length+' of '+T.events.length+' events.';
 if(j){const years=[...new Set(ev.map(yearOf))];j.innerHTML='<option value="">Choose a year</option>'+years.map(y=>'<option value="'+esc(y)+'">'+esc(y)+'</option>').join('');}
}
function tlGo(id){const el=document.getElementById('ev-'+id);if(el){el.scrollIntoView({block:'start'});el.focus({preventScroll:true});}}

/* ---------- RECORDS ---------- */
screens.records=()=>{
 const used=Object.keys(T.S).filter(k=>k!='flip');
 return '<h1>Real records</h1><p class="lead">The public sources behind the “In the record” cards, and starting points for the archive hunt.</p>'+
 '<h2>Archive hunt: starting points</h2><p>'+esc(T.huntNote)+'</p>'+
 '<div class="entry">'+T.hunt.map(h=>{const s=T.S[h[2]];return '<div class="rec"><p><strong>'+esc(h[0])+'</strong><br>'+esc(h[1])+'</p><p class="srcs"><a href="'+esc(s[1])+'" target="_blank" rel="noopener noreferrer">Open the source (opens in a new tab)</a></p></div>'}).join('')+'</div>'+
 '<h2>All sources used in this app</h2><ul class="placelist">'+used.map(k=>'<li><a href="'+esc(T.S[k][1])+'" target="_blank" rel="noopener noreferrer">'+esc(T.S[k][0])+' (opens in a new tab)</a></li>').join('')+'</ul>'+
 '<h2>Read next</h2>'+P(T.readNext)+
 '<p class="note">'+badge('check')+'Some sites were read in full for this app, and some were read through search summaries. Open each link and check the wording yourself before you quote it. The About page lists what still needs checking.</p>';
};

/* ---------- CLASS ---------- */
screens.class=()=>{
 const wr=T.writing,w=st.write;
 const wcount=wr.fields.map(f=>wsum(w[f[0]])).reduce((a,b)=>a+b,0);
 return '<h1>Class mode</h1>'+P([T.classIntro])+
 '<details><summary>Notes for teachers</summary><div><ul>'+T.teacherNotes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul><p>Teacher tools:</p><p><button class="btn small" data-classall="1">'+(st.classAll?'All files are unlocked on this device. Tap to lock again':'Unlock everything on this device')+'</button></p></div></details>'+
 '<h2>Discussion questions</h2><p>Each group matches a part of the book. Use the group after you reach that part.</p>'+
 T.questions.map((g,i)=>'<details'+(i==0?' open':'')+'><summary>'+esc(g.h)+'</summary><div><ol class="q">'+g.q.map(q=>'<li>'+esc(q)+'</li>').join('')+'</ol></div></details>').join('')+
 '<h2>'+esc(wr.title)+'</h2><p class="wc">'+esc(wr.time)+'</p><ol class="q">'+wr.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol><p><strong>Sentence starters:</strong> '+wr.starters.map(esc).join(' &nbsp;·&nbsp; ')+'</p>'+
 wr.fields.map(f=>'<label for="w_'+f[0]+'">'+esc(f[1])+'</label>'+(f[2]?'<textarea id="w_'+f[0]+'" data-wk="'+f[0]+'">'+esc(w[f[0]]||'')+'</textarea>':'<input type="text" id="w_'+f[0]+'" data-wk="'+f[0]+'" value="'+esc(w[f[0]]||'')+'">')).join('')+
 '<p class="wc" id="wcount" aria-live="polite">Words so far: '+wcount+'</p><p><button class="btn dark" id="printbtn">Print or save my work</button></p>';
};

/* ---------- ABOUT ---------- */
screens.about=()=>
 '<h1>About</h1><p class="lead">'+esc(T.about)+' <a href="'+esc(T.flipbook)+'" target="_blank" rel="noopener noreferrer">First Steps on Ancient Ground (opens in a new tab)</a>.</p>'+
 '<section class="care" aria-labelledby="c1"><h2 id="c1">Cultural care</h2>'+P(T.care)+'<p>'+esc(T.content)+'</p></section>'+
 '<h2>Acknowledgement</h2>'+P(T.ack)+
 '<h2>In the book, in the record, from the story</h2><p>The book is historical fiction. Its front pages say some dialogue and personal thoughts “have been imagined”. This app keeps three things apart: what the book says, what public records say, and what was written for the story. Where this app could not find a record for something in the story, it says so. It does not say the thing did not happen.</p>'+
 '<h2>Text and pictures</h2><p>Quotes from the book are by Robin McKean and are shown here to go with the book. Records are quoted briefly and linked. All pictures are public domain and credited. None is made by artificial intelligence. The app does not reuse the book’s plates, because they are labelled reconstructions.</p><ul>'+T.credits.map(c=>'<li><strong>'+esc(c[0])+'.</strong> '+esc(c[1])+'</li>').join('')+'</ul>'+
 '<h2>Still being checked</h2>'+panel('check','Open questions for the author',T.openChecks)+
 '<h2>Privacy</h2><p>This app has no accounts, no tracking, no cookies and no adverts. Your answers are saved only in this browser on this device. Nothing is sent anywhere. Printing is how you share your work. Tap “Clear my answers” at the bottom of any page to delete everything.</p>'+
 '<p><a href="https://github.com/RobMac10/first-steps-cold-case" target="_blank" rel="noopener noreferrer">Source files on GitHub (opens in a new tab)</a></p>';

/* ---------- PRINT ---------- */
function buildPrint(){
 const g=v=>esc(v||'—').replace(/\n/g,'<br>');
 const f=st.finding;
 let h='<h1>CASE FILE: FINDING</h1><p>Case 1788–01 / RESISTOR · Companion to First Steps on Ancient Ground · Investigator: me</p>';
 h+='<h4>My first idea (Items A to E only)</h4><p>'+g(st.hyp)+'</p>';
 h+='<h4>Case status</h4><p>'+g(f.status)+'</p><h4>Who I think the Resistor is, and what happened</h4><p>'+g(f.what)+'</p><h4>How my thinking changed</h4><p>'+g(f.revised)+'</p><h4>The sources I trust most, and why</h4><p>'+g(f.trust)+'</p><h4>Whose voices are missing</h4><p>'+g(f.silences)+'</p><h4>What is still missing</h4><p>'+g(f.unchecked)+'</p><h4>How sure am I?</h4><p>'+g(f.sure)+'</p>';
 h+='<h4>My evidence log</h4>'+T.items.map(i=>{const s=st.items[i.id]||{clues:{}};const got=i.clues.filter(c=>s.clues[c[0]]).map(c=>esc(c[2]));return '<p><strong>'+esc(i.title)+'</strong><br>Score: '+g(s.rel)+' of 5<br>Why: '+g(s.why)+'<br>Clues collected: '+(got.length?got.join('; '):'—')+'</p>'}).join('');
 h+='<h4>My Board findings</h4>'+T.topics.map(t=>{const b=st.board[t.id]||{};const c=x=>{const k=t.cards.find(y=>y[0]==x);return k?esc(T.who[k[1]])+' ('+esc(k[2])+'): '+esc(k[3]):'—'};return '<p><strong>'+esc(t.title)+'</strong><br>Pair: '+c(b.a)+'<br>and: '+c(b.b)+'<br>Trust most: '+g(b.trust)+'<br>My finding: '+g(b.note)+'</p>'}).join('');
 if(T.writing.fields.some(x=>st.write[x[0]]))h+='<h4>Writing task: a source check</h4>'+T.writing.fields.map(x=>'<p><strong>'+esc(x[1])+'</strong><br>'+g(st.write[x[0]])+'</p>').join('');
 document.getElementById('print').innerHTML=h;
}

/* ---------- ROUTER ---------- */
const NAV=[['home','Case file'],['witnesses','Witnesses'],['clues','Clues'],['board','Board'],['timeline','Timeline'],['records','Records'],['class','Class'],['about','About']];
const TITLES={home:'Case file',witnesses:'Witness files',clues:'Clues',board:'The board',timeline:'Timeline',records:'Real records',class:'Class mode',about:'About'};
const main=document.getElementById('main'),nav=document.getElementById('nav');
let first=true;
function draw(){
 const parts=(location.hash.replace(/^#\/?/,'')||'home').split('/');
 const name=screens[parts[0]]?parts[0]:'home';
 main.innerHTML=screens[name](parts[1],parts[2]);
 nav.innerHTML=NAV.map(([id,l])=>'<a href="#/'+(id=='home'?'':id)+'"'+(id==name?' aria-current="page"':'')+'>'+l+'</a>').join('');
 document.title=TITLES[name]+' · Cold Case · First Steps on Ancient Ground';
 return name;
}
function route(){
 draw();
 if(!first){const h=main.querySelector('h1');if(h){h.setAttribute('tabindex','-1');h.focus({preventScroll:true});}window.scrollTo(0,0);}
 first=false;
}
function rerender(focusSel){
 const y=window.scrollY;draw();window.scrollTo(0,y);
 if(focusSel){const el=main.querySelector(focusSel);if(el){if(!el.matches('button,a,input,textarea,select,[tabindex]'))el.setAttribute('tabindex','-1');el.focus({preventScroll:true});}}
}
window.addEventListener('hashchange',route);

document.addEventListener('click',e=>{
 const dot=e.target.closest('[data-jump]');if(dot){tlGo(dot.dataset.jump);return;}
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.unlock){st.unlocked[b.dataset.unlock]=true;save();rerender('h2');}
 else if(b.dataset.relock){delete st.unlocked[b.dataset.relock];save();rerender('h1');}
 else if(b.dataset.pick){const t=T.topics.find(x=>x.id==location.hash.split('/')[2]);if(!t)return;const bd=board(t.id);const id=b.dataset.pick;
  if(bd.a==id){bd.a=bd.b;bd.b=undefined;}else if(bd.b==id)bd.b=undefined;else if(!bd.a)bd.a=id;else if(!bd.b)bd.b=id;else{bd.b=id;}
  save();rerender('[data-pick="'+id+'"]');}
 else if(b.dataset.lock){const bd=board(b.dataset.lock);if(bd.a&&bd.b&&bd.trust&&(bd.note||'').trim().length>2){bd.locked=Date.now();save();rerender('#rv');const r=document.getElementById('rv');if(r){r.setAttribute('tabindex','-1');r.focus();}}}
 else if(b.id=='lockfind'){st.finding.locked=Date.now();save();rerender('#rv1');const r=document.getElementById('rv1');if(r){r.setAttribute('tabindex','-1');r.focus();}}
 else if(b.dataset.unlockfind){delete st.finding.locked;save();rerender('h1');}
 else if(b.dataset.classall){st.classAll=!st.classAll;save();rerender();}
 else if(b.id=='printbtn'){buildPrint();window.print();}
 else if(b.id=='clear'){if(confirm('Clear all your answers and unlocks from this browser?')){localStorage.removeItem(KEY);st={};fresh();route();}}
});
document.addEventListener('change',e=>{
 const d=e.target.dataset||{};
 if(d.clue){const s=item(location.hash.split('/')[2]);s.clues[d.clue]=e.target.checked;save();}
 else if(d.tls){st.tl[d.tls]=e.target.checked;save();tlUpdate();}
 else if(d.tlsrc){st.tl.src=e.target.value;save();tlUpdate();}
 else if(d.tljump){const y=e.target.value;if(y){const f=tlFiltered().find(x=>yearOf(x)==y);if(f)tlGo(f.id);}}
 else if(d.ik=='rel'){const s=item(location.hash.split('/')[2]);s.rel=+e.target.value;save();rerender('[data-ik="rel"]:checked');}
});
document.addEventListener('input',e=>{
 const d=e.target.dataset||{};
 if(d.bk){const t=location.hash.split('/')[2];const bd=board(t);bd[d.bk]=e.target.value;save();
  if(d.bk=='trust'||d.bk=='note'){const btn=document.getElementById('lockbtn');if(btn){const ok=bd.a&&bd.b&&bd.trust&&(bd.note||'').trim().length>2;btn.disabled=!ok;document.getElementById('lockhelp').textContent=ok?'Once you lock it in, you can read what the sources say.':'To lock in, pick a pair, choose whom you trust and write your finding.';}}}
 else if(d.fk){st.finding[d.fk]=e.target.value;save();const btn=document.getElementById('lockfind');if(btn){const f=st.finding;const ok=f.status&&(f.what||'').trim().length>2&&f.sure;btn.disabled=!ok;document.getElementById('fhelp').textContent=ok?'Locking it in shows what the records can and cannot tell us.':'To lock in, choose the case status and how sure you are, and write what you think happened.';}}
 else if(d.wk){st.write[d.wk]=e.target.value;save();document.getElementById('wcount').textContent='Words so far: '+['claim','record','agree','missing'].map(k=>wsum(st.write[k])).reduce((a,b)=>a+b,0);}
 else if(d.hyp){st.hyp=e.target.value;save();}
 else if(d.ik=='why'){const s=item(location.hash.split('/')[2]);const had=s.rel&&wsum(s.why)>2;s.why=e.target.value;save();const now=s.rel&&wsum(s.why)>2;if(now&&!had){const pos=e.target.selectionStart;rerender('#why');const t=document.getElementById('why');if(t&&pos!=null){try{t.setSelectionRange(pos,pos)}catch(x){}}}}
 else if(d.tlq){st.tl.q=e.target.value;save();tlUpdate();}
});
window.addEventListener('beforeprint',buildPrint);
document.getElementById('foot').innerHTML='<p><strong>No tracking. Your answers are saved only in this browser. Nothing is sent anywhere.</strong> <button class="btn small" id="clear">Clear my answers</button></p><p>Cultural care: this book and app deal with killing, kidnapping, disease and the removal of children, and use words of the period. <a href="#/about">Read the care note and acknowledgement.</a></p><p>Public-domain pictures, all credited. No AI images. A companion to the book by Robin McKean. <a href="'+esc(T.flipbook)+'" target="_blank" rel="noopener noreferrer">Open the book (opens in a new tab)</a>.</p>';
route();
})();
