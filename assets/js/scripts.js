let seconds = 60;
const count = document.getElementsByClassName("number")[0];
const progress = document.getElementsByClassName("progress")[0];

const radius = 45;
const circumference = 2 * Math.PI * radius;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progress.style.strokeDashoffset = offset;
}

const timer = setInterval(() => {
  const remaining = seconds--;
  count.innerText = remaining;

  const percent = (seconds / 60) * 100;
  setProgress(percent);

  if (remaining <= 0) {
    clearInterval(timer);
  }
}, 1000);