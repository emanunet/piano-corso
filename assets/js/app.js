
// Progress tracking
function saveProgress(){
  const boxes=document.querySelectorAll('.progress input[type=checkbox]');
  const data={}; boxes.forEach(b=>data[b.id]=b.checked);
  localStorage.setItem('pianoCourseProgress', JSON.stringify(data));
}
function loadProgress(){
  const data=JSON.parse(localStorage.getItem('pianoCourseProgress')||'{}');
  for(const id in data){ const el=document.getElementById(id); if(el) el.checked=data[id]; }
}
// Register service worker for offline
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js').catch(console.warn);
  });
}
window.addEventListener('DOMContentLoaded',loadProgress);
