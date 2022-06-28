const progress = document.querySelector(".progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveStep = 1;

nextButton.addEventListener("click", () => {
  currentActiveStep++;
  if (currentActiveStep > circles.length) {
    currentActiveStep = circles.length;
  }

  updateCircleStatus();
});

prev.addEventListener("click", () => {
  currentActiveStep--;
  if (currentActiveStep < 1) {
    currentActiveStep = 1;
  }

  updateCircleStatus();
});

function updateCircleStatus() {
  circles.forEach((circle, index) => {
    if (index < currentActiveStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");

  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActiveStep === 1) {
    prevButton.disabled = true;
  } else if (currentActiveStep === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
