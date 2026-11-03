/* Transense AI V26: isolated decorative laptop demonstration and card reveals. */
(()=>{'use strict';
 const art=document.getElementById('v25LaptopArt');
 const viewport=art?.querySelector('.v25-laptop-screen-window');
 const ui=document.getElementById('v25LaptopScreenUI');
 const en=document.getElementById('v25-english');
 const caret=document.getElementById('v25-caret');
 const vi=document.getElementById('v25-vietnamese');
 const gemini=document.getElementById('v25-gemini');
 const status=document.getElementById('v25-status');
 const button=document.getElementById('v25-demo-button');
 if(art&&viewport&&ui&&en&&caret&&vi&&gemini&&status&&button){
  const english='Technology makes learning more convenient.';
  const vietnamese='Công nghệ giúp việc học trở nên thuận tiện hơn.';
  const duration=12000;
  art.dataset.animation='automatic-loop';
  // Decorative animation runs automatically in all standard motion profiles.
  // On explicit reduced-motion setting we use instant stage changes rather than animated typing.
  const reduce=!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  let elapsed=0,last=null,visible=true,running=true;
  const svgCheck='<svg class="v26-demo-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function resize(){const w=viewport.clientWidth;if(w>0)ui.style.setProperty('--v25-screen-scale',String(w/857));}
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(viewport);
  else window.addEventListener('resize',resize,{passive:true});
  resize();
  function render(ms){
   const typing=ms<3350,selected=ms>=3350,processing=ms>=4500&&ms<6100,revealing=ms>=6100,done=ms>=8200;
   const count=reduce?(ms>1900?english.length:0):Math.max(0,Math.min(english.length,Math.floor((ms-340)/64)));
   en.textContent=english.slice(0,count);
   caret.style.visibility=typing?'visible':'hidden';
   const n=revealing?(reduce?vietnamese.length:Math.max(0,Math.min(vietnamese.length,Math.floor((ms-6250)/36)))):0;
   vi.textContent=processing?'Đang xử lý bản dịch…':revealing?vietnamese.slice(0,n):'Bản dịch sẽ xuất hiện tại đây…';
   vi.style.color=revealing?'#243d64':'#91a8cb';
   gemini.classList.toggle('v25-selected',selected);
   status.className='v25-live-status'+(done?' v25-success':processing?' v25-working':'');
   status.textContent=processing?'Đang xử lý…':done?'✓ Đã hoàn thành':revealing?'Đang hiển thị kết quả':selected?'Đã chọn Gemini AI':'Nhập văn bản';
   button.className='v25-demo-button'+(processing?' v25-processing':done?' v25-finished':'');
   button.innerHTML=processing?'<span class="v25-wait-spinner" aria-hidden="true"></span>Đang dịch…':done?svgCheck+'<span>Dịch thành công</span>':'<span>Dịch ngay</span><span aria-hidden="true">→</span>';
   ui.classList.toggle('v25-loop-reset',false);
   art.dataset.demoStage=done?'done':processing?'processing':revealing?'translation':selected?'provider':'typing';
  }
  render(elapsed);

  if('IntersectionObserver' in window){
   new IntersectionObserver(entries=>{visible=!!entries[0]?.isIntersecting;last=null;},{threshold:.01}).observe(art);
  }
  function frame(now){
   if(last===null)last=now;
   const delta=Math.min(60,Math.max(0,now-last));last=now;
   if(running&&visible&&!document.hidden){elapsed=(elapsed+delta)%duration;render(elapsed);}
   requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
 }
 // Scroll reveal only starts when JS initializes; fallback is fully visible if observer unavailable.
 const section=document.getElementById('realTranslationExamples');
 const cards=section?.querySelectorAll('.v10-example-grid > article');
 if(section&&cards?.length&&!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
  cards.forEach((card,i)=>card.style.setProperty('--v26-delay',(i*150)+'ms'));
  const obs=new IntersectionObserver(entries=>{
   if(entries.some(e=>e.isIntersecting)){
    section.classList.add('v26-reveal-visible');obs.disconnect();
   }
  },{threshold:.1,rootMargin:'0px 0px -25px 0px'});
  obs.observe(section);
  section.classList.add('v26-reveal-ready');
 }
})();
