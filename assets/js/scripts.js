const display = document.getElementsByClassName("number");
let seconds = 60;

const timer = setInterval(() => {
  let remaning = seconds - 1;
  (display.innerText = remaning), 1000;
  return remaning;
});
setInterval();
