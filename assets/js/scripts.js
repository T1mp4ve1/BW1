let seconds = 60;
const display = document.getElementsByClassName("number")[0];

const timer = setInterval(() => {
  const remaining = seconds --;
  display.innerText = remaining;
  if (remaining <= 0) {
    clearInterval(timer)
  }
}, 1000);
timer()