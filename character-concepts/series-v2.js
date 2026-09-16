const cast = {
  yanyan:{hair:'#ee78a5',shade:'#c9487a',accent:'#f24886',eye:'#9b5279',coat:'#fff',inner:'#30303c',skin:'#ffe8de',style:'long',role:'RESEARCH LEAD',prop:'tablet'},
  momo:{hair:'#ebe6ff',shade:'#b8a8e4',accent:'#ff6fa5',eye:'#7462b5',coat:'#44405c',inner:'#f7f3ff',skin:'#ffe8de',style:'bob',role:'AI ASSISTANT',prop:'holo'},
  cipher:{hair:'#292c3b',shade:'#171923',accent:'#f24886',eye:'#45b9d5',coat:'#303443',inner:'#f24886',skin:'#f8ddd4',style:'long',role:'CYBER SECURITY',prop:'visor'},
  paper:{hair:'#cbbcf5',shade:'#9b87d3',accent:'#f24886',eye:'#7563ae',coat:'#fff',inner:'#ff8db5',skin:'#ffe8de',style:'tails',role:'PAPER FAIRY',prop:'book'},
  campus:{hair:'#3b3545',shade:'#25212e',accent:'#f24886',eye:'#675168',coat:'#fff',inner:'#f24886',skin:'#ffe8de',style:'pony',role:'CAMPUS RESEARCHER',prop:'bag'}
};

function extraHair(c){
  if(c.style==='tails')return `<path d="M257 145Q157 165 153 304t81 225q34-83 13-178t36-171zM423 145q100 20 104 159t-81 225q-34-83-13-178t-36-171z" fill="${c.hair}" stroke="#27222c" stroke-width="7"/><path d="M197 217q-14 134 34 230M483 217q14 134-34 230" fill="none" stroke="${c.shade}" stroke-width="11" opacity=".65"/>`;
  if(c.style==='pony')return `<path d="M409 132q113 15 118 148t-102 219q24-107-13-194z" fill="${c.hair}" stroke="#27222c" stroke-width="7"/><path d="M456 192q36 116-18 220" fill="none" stroke="${c.shade}" stroke-width="12" opacity=".65"/>`;
  return '';
}

function prop(c){
  if(c.prop==='tablet')return `<g transform="rotate(-8 448 472)"><rect x="407" y="408" width="83" height="125" rx="9" fill="#ffe6ef" stroke="#27222c" stroke-width="6"/><rect x="419" y="423" width="59" height="76" rx="3" fill="#fff"/><path d="M438 453l-10 9 10 9M460 453l10 9-10 9M454 443l-11 39" fill="none" stroke="${c.accent}" stroke-width="5" stroke-linecap="round"/></g><path d="M270 125l-14-16 14-16 16 16z" fill="#f4df73" stroke="#27222c" stroke-width="4"/>`;
  if(c.prop==='holo')return `<path d="M469 337q72-49 118 6t-18 112" fill="none" stroke="${c.accent}" stroke-width="7" stroke-linecap="round" class="series-ribbon"/><circle cx="559" cy="389" r="29" fill="#fff" stroke="#27222c" stroke-width="5"/><path d="M545 389h28M559 375v28" stroke="${c.accent}" stroke-width="5"/><path d="M274 99l-24-35 39 17zM406 99l24-35-39 17z" fill="${c.accent}" stroke="#27222c" stroke-width="6"/>`;
  if(c.prop==='visor')return `<g transform="rotate(-2 340 172)"><rect x="281" y="145" width="118" height="49" rx="15" fill="#aee6f1" stroke="#27222c" stroke-width="6" opacity=".92"/><path d="M293 171h24l9-11 14 22 12-11h34" fill="none" stroke="${c.accent}" stroke-width="4"/><text x="286" y="135" fill="${c.accent}" class="series-note">0x VERIFIED</text></g><path d="M445 408l55 20-8 79-47 34-47-34-8-79z" fill="${c.accent}" stroke="#27222c" stroke-width="6"/><path d="M424 471l15 15 28-38" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`;
  if(c.prop==='book')return `<g transform="rotate(4 446 457)"><path d="M383 405q39-14 69 8v111q-34-19-69-5z" fill="#fff" stroke="#27222c" stroke-width="6"/><path d="M452 413q37-21 69-6v111q-35-7-69 6z" fill="#fff" stroke="#27222c" stroke-width="6"/><path d="M452 413v111M397 437h38M397 454h42M469 437h36M469 454h29" stroke="${c.accent}" stroke-width="4"/></g><g fill="#fff" stroke="#27222c" stroke-width="4" class="series-ribbon"><rect x="153" y="166" width="70" height="43" rx="5"/><rect x="477" y="248" width="73" height="43" rx="5"/></g><text x="169" y="192" fill="${c.accent}" class="series-note">[12]</text><text x="491" y="274" fill="${c.accent}" class="series-note">Eq.3</text>`;
  if(c.prop==='bag')return `<path d="M222 357q-69 13-75 102v144h91V430q0-40 28-56z" fill="#f4df73" stroke="#27222c" stroke-width="7"/><path d="M175 380q9-50 56-59" fill="none" stroke="#27222c" stroke-width="7"/><g transform="rotate(-7 442 408)"><rect x="416" y="370" width="54" height="77" rx="6" fill="#fff" stroke="#27222c" stroke-width="5"/><circle cx="443" cy="394" r="10" fill="${c.accent}"/><text x="425" y="429" fill="#27222c" class="series-note">NUPT</text></g>`;
  return '';
}

function person(c){
  const hairEnd=c.style==='bob'?318:408;
  return `<g class="series-figure">${extraHair(c)}
  <path d="M254 131Q270 42 340 39q70 3 86 92l12 ${hairEnd}q-49 39-98 18-49 21-98-18z" fill="${c.hair}" stroke="#27222c" stroke-width="7"/>
  <path d="M267 165q-25-10-26 22t31 34M413 165q25-10 26 22t-31 34" fill="${c.skin}" stroke="#27222c" stroke-width="6"/>
  <path d="M271 112q69-54 138 0l-4 96q-7 55-65 73-58-18-65-73z" fill="${c.skin}" stroke="#27222c" stroke-width="7"/>
  <path d="M317 263v55h46v-55" fill="${c.skin}" stroke="#27222c" stroke-width="6"/>
  <path d="M262 124q12-81 78-82 66 1 78 82-31-10-51-52-17 35-44 46-25-9-39-39-8 27-22 45z" fill="${c.hair}" stroke="#27222c" stroke-width="7"/>
  <path d="M278 91q18-33 45-42M379 53q22 10 34 38" fill="none" stroke="${c.shade}" stroke-width="9" stroke-linecap="round" opacity=".62"/>
  <path d="M294 146q19-11 36 1M351 147q18-12 36 0" fill="none" stroke="#5f4551" stroke-width="4" stroke-linecap="round"/>
  <g class="series-eye"><ellipse cx="312" cy="176" rx="17" ry="25" fill="#fff" stroke="#27222c" stroke-width="5"/><ellipse cx="312" cy="181" rx="10" ry="17" fill="${c.eye}"/><ellipse cx="312" cy="184" rx="6" ry="12" fill="#27222c"/><circle cx="307" cy="173" r="4" fill="#fff"/></g><g class="series-eye"><ellipse cx="368" cy="176" rx="17" ry="25" fill="#fff" stroke="#27222c" stroke-width="5"/><ellipse cx="368" cy="181" rx="10" ry="17" fill="${c.eye}"/><ellipse cx="368" cy="184" rx="6" ry="12" fill="#27222c"/><circle cx="363" cy="173" r="4" fill="#fff"/></g>
  <ellipse cx="286" cy="211" rx="15" ry="6" fill="${c.accent}" opacity=".2"/><ellipse cx="394" cy="211" rx="15" ry="6" fill="${c.accent}" opacity=".2"/><path d="M334 206q6 4 12 0M326 230q14 12 28 0" fill="none" stroke="${c.accent}" stroke-width="4" stroke-linecap="round"/>
  ${c.prop==='bag'?prop(c):''}
  <path d="M304 299l-61 25q-24 13-31 55l-27 202q21 20 57 8l25-153 3 151 27 38h86l27-38 3-151 25 153q36 12 57-8l-27-202q-7-42-31-55l-61-25q-35 30-70 0z" fill="${c.coat}" stroke="#27222c" stroke-width="7" stroke-linejoin="round"/>
  <path d="M318 319h44v254h-44z" fill="${c.inner}"/><path d="M340 323v254" stroke="#27222c" stroke-width="5" opacity=".65"/>
  <path d="M218 405l-33 176M462 405l33 176" fill="none" stroke="#27222c" stroke-width="6"/><circle cx="189" cy="581" r="21" fill="${c.skin}" stroke="#27222c" stroke-width="6"/><circle cx="491" cy="581" r="21" fill="${c.skin}" stroke="#27222c" stroke-width="6"/>
  <path d="M270 587h140l25 74H245z" fill="${c.prop==='holo'?'#353149':'#525766'}" stroke="#27222c" stroke-width="7"/><path d="M269 657h58l-8 128h-62zM353 657h58l12 128h-62z" fill="${c.skin}" stroke="#27222c" stroke-width="7"/><path d="M257 781h68v22h-91q-3-22 23-22M423 781h-68v22h91q3-22-23-22" fill="#27222c" stroke="#27222c" stroke-width="6"/>
  ${c.prop==='bag'?'':prop(c)}</g>`;
}

function art(c){return `<svg class="series-art" viewBox="0 0 680 820" role="img" aria-label="${c.role} 动漫角色设定"><circle cx="340" cy="405" r="300" fill="#fff" opacity=".52"/><path d="M70 522Q340 286 610 522" fill="none" stroke="${c.accent}" stroke-width="2" opacity=".3"/><circle cx="102" cy="253" r="7" fill="${c.accent}"/><path d="M565 175l7 18 19 7-19 7-7 19-7-19-19-7 19-7z" fill="${c.accent}"/>${person(c)}</svg><div class="series-caption"><span>ORIGINAL CHARACTER</span><span>${c.role}</span><span>HTML / SVG</span></div>`}
function trioArt(){const sys={...cast.paper,hair:'#b9acec',shade:'#8d79c6',coat:'#f5f1ff',inner:'#655590',role:'SYSTEM',prop:''};return `<svg class="series-art" viewBox="0 0 680 820"><circle cx="340" cy="410" r="304" fill="#fff" opacity=".52"/><g transform="translate(-66 250) scale(.59)">${person(cast.yanyan)}</g><g transform="translate(139 230) scale(.59)">${person(cast.cipher)}</g><g transform="translate(344 250) scale(.59)">${person(sys)}</g><rect x="132" y="735" width="416" height="49" rx="25" fill="#fff" stroke="#27222c" stroke-width="5"/><text x="340" y="765" text-anchor="middle" class="series-note" fill="#27222c">AI · SECURITY · SYSTEM</text></svg><div class="series-caption"><span>ORIGINAL CAST</span><span>RESEARCH TEAM</span><span>HTML / SVG</span></div>`}
function render(el,id){el.innerHTML=id==='trio'?trioArt():art(cast[id]||cast.yanyan)}
const pageCharacter=document.body.dataset.character;if(pageCharacter){const board=document.querySelector('.artboard');board.className=`artboard series-board ${pageCharacter}-series`;board.innerHTML=`<div class="series-slot" data-series-character="${pageCharacter}"></div>`}
document.querySelectorAll('[data-series-character]').forEach(el=>render(el,el.dataset.seriesCharacter));
document.querySelectorAll('.concept-card').forEach(card=>{const id=card.getAttribute('href').replace('.html','').replace('paper-chan','paper');const old=card.querySelector('.card-face');if(old){const el=document.createElement('div');el.className='series-slot';el.dataset.seriesCharacter=id;old.replaceWith(el);render(el,id)}});
