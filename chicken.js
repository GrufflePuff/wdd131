const chicken = document.getElementById("chicken");
const chickenImg = document.getElementById("chickenImg");

chicken.addEventListener("click", toggleChicken)

function toggleChicken() {
    chickenImg.classList.toggle("hidden");
    chicken.classList.toggle("shake");
}