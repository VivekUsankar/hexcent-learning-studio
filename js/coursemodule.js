// Extract lesson id from URL
const params = new URLSearchParams(window.location.search);
const lessonId = params.get("lesson");

// Your course DATA
const courseData = {
    html: {
        title: "HTML & CSS Basics",
        modules: [
            {
                id: "l1",
                title: "Introduction to HTML",
                video: "https://www.youtube.com/watch?v=pcFoQFx5dHo&list=PL7MuobSaDmrCxDW9g8Fy-EasJOUw5qGLv",
                description: "Welcome to HTML introduction..."
            },
            {
                id: "l2",
                title: "CSS Basics",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                description: "Learn CSS styling..."
            }
        ]
    }
};

// Load course
const course = courseData["html"]; // You can change this to dynamic
document.getElementById("courseTitle").textContent = course.title;

// Fill modules list
const ul = document.getElementById("modulesUl");

course.modules.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="check-icon"></div><span>${m.title}</span>`;
    li.onclick = () => loadLesson(m.id);
    li.id = m.id;
    ul.appendChild(li);
});

// Load selected lesson
function loadLesson(id) {
    const lesson = course.modules.find(m => m.id === id);

    // Update UI
    document.getElementById("lessonTitle").textContent = lesson.title;
    document.getElementById("lessonDescription").textContent = lesson.description;
    document.getElementById("lessonVideo").src = lesson.video + "?autoplay=1";


    // Highlight active module
    document.querySelectorAll(".modules li").forEach(li => li.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Auto-load first lesson
loadLesson(course.modules[0].id);

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("show");
}
