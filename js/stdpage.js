
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
  
// document.querySelectorAll('.review').forEach(review => {
//   const stars = review.querySelectorAll('.stars span');
//   const ratingText = review.querySelector('.rating-text');
//   const submitBtn = review.querySelector('.review-link');
//   const courseId = review.dataset.courseId;

//   let selectedRating = null;

//   // Load saved rating
//   const savedRating = localStorage.getItem('rating-' + courseId);
//   if (savedRating) {
//     applyRating(savedRating);
//     ratingText.textContent = savedRating + '.0';
//   }

//   stars.forEach(star => {
//     star.addEventListener('mouseenter', () => {
//       highlightStars(star.dataset.value);
//     });

//     star.addEventListener('mouseleave', () => {
//       highlightStars(selectedRating);
//     });

//     star.addEventListener('click', () => {
//       selectedRating = star.dataset.value;
//       highlightStars(selectedRating);
//     });
//   });

//   submitBtn.addEventListener('click', e => {
//     e.preventDefault();

//     if (!selectedRating) {
//       alert('Please select a rating');
//       return;
//     }

//     localStorage.setItem('rating-' + courseId, selectedRating);
//     ratingText.textContent = selectedRating + '.0';
//     submitBtn.textContent = 'Reviewed';
//     submitBtn.style.pointerEvents = 'none';
//     submitBtn.style.color = '#16a34a';
//   });

//   function highlightStars(value) {
//     stars.forEach(star => {
//       star.classList.toggle(
//         'active',
//         value && star.dataset.value <= value
//       );
//     });
//   }

//   function applyRating(value) {
//     selectedRating = value;
//     highlightStars(value);
//     submitBtn.textContent = 'Reviewed';
//     submitBtn.style.pointerEvents = 'none';
//     submitBtn.style.color = '#16a34a';
//   }
// });


