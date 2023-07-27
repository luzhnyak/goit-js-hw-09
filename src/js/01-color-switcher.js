function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStartEl = document.querySelector('button[data-start]');
btnStopEl = document.querySelector('button[data-stop]');

btnStartEl.addEventListener('click', onStartClick);
btnStopEl.addEventListener('click', onStopClick);
btnStopEl.disabled = true;

let interval;

function onStartClick(event) {
  console.log('Start interval');
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick(event) {
  console.log('Stop interval');
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
  clearInterval(interval);
}
