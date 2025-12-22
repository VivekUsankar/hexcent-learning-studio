document.querySelectorAll(".review").forEach(box => {
    const course = box.dataset.course;
    const starsEl = box.querySelector(".stars");
    const ratingEl = box.querySelector(".rating-text");

    const reviews =
        JSON.parse(localStorage.getItem(course + "_reviews")) || [];

    if (reviews.length === 0) {
        starsEl.textContent = "☆☆☆☆☆";
        ratingEl.textContent = "0.0";
        return;
    }

    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avg = (total / reviews.length).toFixed(1);

    starsEl.textContent =
        "★".repeat(Math.round(avg)) + "☆".repeat(5 - Math.round(avg));

    ratingEl.textContent = avg;
});
