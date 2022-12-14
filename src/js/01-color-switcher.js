function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.disabled = false;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
let timerId = null;

function onStartBtn() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function onStopBtn() {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
