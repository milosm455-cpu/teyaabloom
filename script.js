(function(){
  var root=document.querySelector('.tya'),btn=document.getElementById('tema-btn');
  function setTema(t){root.setAttribute('data-tema',t);var l=t==='noc'?'Dnevna verzija':'Noćna verzija';btn.setAttribute('aria-label',l);btn.title=l;document.querySelector('meta[name=theme-color]').content=t==='noc'?'#1c1513':'#fbf6f0';}
  try{var s=localStorage.getItem('tab-tema');if(s)setTema(s);}catch(e){}
  btn.addEventListener('click',function(){var t=root.getAttribute('data-tema')==='noc'?'dan':'noc';setTema(t);try{localStorage.setItem('tab-tema',t)}catch(e){}});
  var els=document.querySelectorAll('.om, .sx');
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('vis')});}
  else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('vis');io.unobserve(x.target);}})},{threshold:.15});els.forEach(function(el){io.observe(el)});}
  var hero=document.getElementById('pocetak'),logo=document.getElementById('hero-logo');
  if(hero&&logo&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    hero.addEventListener('mousemove',function(e){var r=logo.getBoundingClientRect();var x=Math.max(-1,Math.min(1,(e.clientX-(r.left+r.width/2))/(innerWidth/2))),y=Math.max(-1,Math.min(1,(e.clientY-(r.top+r.height/2))/(innerHeight/2)));
      logo.style.setProperty('--ry',(x*22).toFixed(2)+'deg');logo.style.setProperty('--rx',(-y*22).toFixed(2)+'deg');logo.style.setProperty('--gx',(50+x*35).toFixed(1)+'%');logo.style.setProperty('--gy',(50+y*35).toFixed(1)+'%');});
    hero.addEventListener('mouseleave',function(){logo.style.setProperty('--rx','0deg');logo.style.setProperty('--ry','0deg');logo.style.setProperty('--gx','30%');logo.style.setProperty('--gy','25%');});
  }
})();
