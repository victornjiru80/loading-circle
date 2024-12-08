
window.onload=()=>{
const downloadButton = document.getElementById("downloadButton");

const percentageText = document.getElementById("percentage");
const circle = document.querySelector(".circle circle");

let progress = 0;
const totalLength = 226; // Full circumference of the circle

function simulateDownload() {
  const interval = setInterval(() => {
    progress += 2; // Increase progress by 2% every 50ms
    if (progress <= 100) {
      const dashOffset = totalLength - (progress / 100) * totalLength;
      circle.style.strokeDashoffset = dashOffset;
      percentageText.textContent = `${progress}%`;
    } else {
      clearInterval(interval);
      completeDownload();
    }
  }, 50);
}

function completeDownload() {
  downloadButton.classList.add("complete");
}

downloadButton.addEventListener("click", () => {
  if (!downloadButton.classList.contains("complete")) {
    simulateDownload();
  }
});
}
