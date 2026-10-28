const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$('#menuBtn')?.addEventListener('click',()=>{const m=$('#mobMenu');m.classList.toggle('hidden');$('#menuBtn').setAttribute('aria-expanded',!m.classList.contains('hidden'))});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');const t=x.target;setTimeout(()=>{t.style.transitionDelay='';t.classList.add('done')},1700);io.unobserve(x.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
const co=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,t=+el.dataset.n,d=1400,s=performance.now();
(function f(n){const p=Math.min((n-s)/d,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+(el.dataset.s||'');if(p<1)requestAnimationFrame(f)})(s);co.unobserve(el)}),{threshold:.5});
$$('[data-n]').forEach(el=>co.observe(el));
const lb=$('#lb');$$('[data-lb]').forEach(a=>a.addEventListener('click',()=>{$('img',lb).src=a.dataset.lb;lb.classList.remove('hidden');lb.classList.add('flex')}));
lb?.addEventListener('click',()=>{lb.classList.add('hidden');lb.classList.remove('flex')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb?.click()});
$$('form[data-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
const body=Object.entries(d).map(([k,v])=>k+': '+v).join('\n');location.href='mailto:info@nexamia.org?subject='+encodeURIComponent(f.dataset.form)+'&body='+encodeURIComponent(body);
$('.ok',f).classList.remove('hidden');f.reset()}));
$$('.xf').forEach((x,n)=>{const run=()=>{const im=$$('img',x);if(im.length<2)return;let i=Math.max(0,im.findIndex(e=>e.classList.contains('on')));
im[i].classList.remove('on');im[(i+1)%im.length].classList.add('on')};
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;setTimeout(()=>setInterval(run,4500+(n%3)*700),(n*650)%4000)});

(()=>{const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const pre=$('#pre');let seen=0;try{seen=sessionStorage.getItem('nx')}catch(e){}
const go=()=>{document.body.classList.add('ready');if(pre){pre.classList.add('out');setTimeout(()=>pre.remove(),900)}};
if(!pre||seen||rm){pre&&pre.remove();document.body.classList.add('ready')}else{const t0=Date.now();addEventListener('load',()=>setTimeout(go,Math.max(0,1300-(Date.now()-t0))));setTimeout(go,4000);try{sessionStorage.setItem('nx',1)}catch(e){}}
$$('.rv').forEach(el=>{const sb=[...el.parentElement.children].filter(c=>c.classList.contains('rv')),i=sb.indexOf(el);
if(!el.dataset.a)el.dataset.a=sb.length==2?['l','r'][i]:['u','z','f'][i%3];el.style.transitionDelay=Math.min(i,8)*90+'ms'});
if(fine&&!rm){$$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{if(c.classList.contains('rv')&&!c.classList.contains('done'))return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(900px) rotateX(${(.5-y)*7}deg) rotateY(${(x-.5)*9}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
$$('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
const g=$('#glow');if(g){let tx=0,ty=0,x=0,y=0;addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;g.style.opacity=1});(function l(){x+=(tx-x)*.12;y+=(ty-y)*.12;g.style.transform=`translate(${x-200}px,${y-200}px)`;requestAnimationFrame(l)})()}}
const prog=$('#prog'),hd=$('header'),bt=$('#top');let ly=0,tk=false;
const onS=()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;prog.style.transform=`scaleX(${h>0?y/h:0})`;
hd.classList.toggle('-translate-y-full',y>ly&&y>300&&$('#mobMenu').classList.contains('hidden'));ly=y;
bt.classList.toggle('opacity-0',y<600);bt.classList.toggle('pointer-events-none',y<600);
if(!rm)$$('[data-par]').forEach(p=>{const r=p.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;p.style.transform=`translate3d(0,${(r.top+r.height/2-innerHeight/2)*-p.dataset.par}px,0)`});tk=false};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});onS();
if(!rm)$$('canvas.pt').forEach(cv=>{const c=cv.getContext('2d');let w=0,h=0,P=[],vis=true;
const rs=()=>{w=cv.width=cv.offsetWidth;h=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(70,w/16|0)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.4,vx:(Math.random()-.5)*.25,vy:-Math.random()*.4-.1}))};rs();addEventListener('resize',rs);
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
(function d(){requestAnimationFrame(d);if(!vis)return;c.clearRect(0,0,w,h);P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.y<-5){p.y=h+5;p.x=Math.random()*w}if(p.x<0)p.x=w;if(p.x>w)p.x=0;
c.fillStyle='rgba(246,214,118,.7)';c.beginPath();c.arc(p.x,p.y,p.r,0,7);c.fill();
for(let j=i+1;j<P.length;j++){const q=P[j],dx=p.x-q.x,dy=p.y-q.y,d2=dx*dx+dy*dy;if(d2<9000){c.strokeStyle=`rgba(228,183,60,${.18*(1-d2/9000)})`;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(q.x,q.y);c.stroke()}}})})()});
$$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(!h||h[0]==='#'||/^(https?:|mailto:|tel:)/.test(h)||a.target)return;
a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=h,380)})});
addEventListener('pageshow',e=>{if(e.persisted)document.body.classList.remove('leaving')});
const ev=new URLSearchParams(location.search).get('event');if(ev){const s=$('select[name=Subject]'),m=$('textarea[name=Message]');if(s)s.value='Event registration interest';if(m)m.value='I would like to register my interest in the '+ev.replace('-',' ')+' event.'}
})();
