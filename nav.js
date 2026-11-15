(function(){
  var btn = document.querySelector('.burger');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  function setOpen(open){
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function(){ setOpen(!nav.classList.contains('open')); });
  nav.addEventListener('click', function(e){ if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
})();
