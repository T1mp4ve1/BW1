let sec = 30;
const display = document.getElementById("timer");
const countdown = setInterval(() => {
  display.textContent = `00:${sec < 10 ? "0" : ""}${sec}`;
  sec--;
  if (sec < 0) clearInterval(countdown);
}, 1000);
