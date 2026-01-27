// ===== MODE SOMBRE / CLAIR =====
const themeBtn = document.getElementById("themeToggle");
// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
themeBtn.textContent = "☀";
}
// Changer le thème au clic
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")) {
themeBtn.textContent = "☀";
localStorage.setItem("theme", "dark");
} else {
themeBtn.textContent = "🌙";
localStorage.setItem("theme", "light");
}
});
// ===== ANIMATION AU SCROLL =====
const sections = document.querySelectorAll("section");
function revealOnScroll() {
sections.forEach(section => {
const position = section.getBoundingClientRect().top;
const screenHeight = window.innerHeight;
if (position < screenHeight - 100) {
section.classList.add("show");
}
});
}

window.addEventListener("scroll", revealOnScroll)
