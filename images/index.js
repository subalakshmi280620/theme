const slider = document.getElementById("slider");
const weekBtn = document.getElementById("weekBtn");
const monthBtn = document.getElementById("monthBtn");

weekBtn.addEventListener("click", () => {
  slider.style.left = "5px"; // Move to left
  weekBtn.classList.add("active");
  monthBtn.classList.remove("active");
});

monthBtn.addEventListener("click", () => {
  slider.style.left = "175px"; // Move to right
  monthBtn.classList.add("active");
  weekBtn.classList.remove("active");
});
