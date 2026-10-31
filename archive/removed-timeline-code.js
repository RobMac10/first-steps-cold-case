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

