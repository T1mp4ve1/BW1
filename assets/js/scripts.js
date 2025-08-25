const display = document.getElementsByClassName("number")[0];
let seconds = 60;

const timer = setInterval(() => {
  let remaning = seconds - 1;
  display.innerText = remaning;
  if ((seconds = 0)) {
    clearInterval();
  }
}, 1000);