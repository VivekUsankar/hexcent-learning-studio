
  // Sidebar open/close logic for small screens
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburger = document.getElementById('hamburger');
  const hamburgerTop = document.getElementById('hamburgerTop');
  const sidebarToggle = document.getElementById('sidebarToggle');

  function openSidebar(){
    sidebar.classList.add('open');
    overlay.style.display='block';
    setTimeout(()=>overlay.classList.add('show'),10);
    sidebarToggle.setAttribute('aria-expanded','true');
  }
  function closeSidebar(){
    overlay.classList.remove('show');
    setTimeout(()=>overlay.style.display='none',220);
    sidebar.classList.remove('open');
    sidebarToggle.setAttribute('aria-expanded','false');
  }

  // attach events (guard in case element not present)
  if(hamburger) hamburger.addEventListener('click', openSidebar);
  if(hamburgerTop) hamburgerTop.addEventListener('click', openSidebar);
  if(sidebarToggle) sidebarToggle.addEventListener('click', closeSidebar);
  if(overlay) overlay.addEventListener('click', closeSidebar);

  // ensure correct display after resize
  window.addEventListener('resize', () => {
    if(window.innerWidth > 780){
      sidebar.classList.remove('open');
      overlay.style.display='none';
      overlay.classList.remove('show');
    }
  });
