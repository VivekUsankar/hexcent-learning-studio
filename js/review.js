
let selectedRating = 0;
const stars = document.querySelectorAll("#review-stars span");

stars.forEach(star => {
  star.addEventListener("click", function () {
    const value = Number(this.dataset.value);
    selectedRating = (value === selectedRating) ? 0 : value;
    updateStars();
  });
});

function updateStars() {
  stars.forEach(star => {
    star.classList.toggle(
      "active",
      Number(star.dataset.value) <= selectedRating
    );
  });
}

// filter-logic
function filterReviews(rating) {
  const filters = document.querySelectorAll(".filter-item");
  const reviews = document.querySelectorAll(".review-card");

  // Reset active state
  filters.forEach(f => f.classList.remove("active"));

  // Set active filter
  event.currentTarget.classList.add("active");

  // Filter reviews
  reviews.forEach(review => {
    const reviewRating = Number(review.dataset.rating);
    review.style.display =
      rating === 0 || reviewRating >= rating ? "block" : "none";
  });
}

