function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

btnStartEl.addEventListener('click', onStartClick);
btnStopEl.addEventListener('click', onStopClick);
btnStopEl.disabled = true;

let interval = null;

function onStartClick(event) {
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick(event) {
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
  clearInterval(interval);
}
