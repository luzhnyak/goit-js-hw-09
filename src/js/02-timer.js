import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const spanDaysEl = document.querySelector('span[data-days]');
const spanHoursEl = document.querySelector('span[data-hours]');
const spanMinutesEl = document.querySelector('span[data-minutes]');
const spanSecondsEl = document.querySelector('span[data-seconds]');

btnStartEl = document.querySelector('button[data-start]');
btnStartEl.addEventListener('click', onStartClick);
btnStartEl.disabled = true;

const InputDateEl = document.querySelector('#datetime-picker');

let selectedDate;

flatpickr(InputDateEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    const deltaDate = selectedDate - Date.now();

    if (deltaDate > 0) {
      btnStartEl.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStartEl.disabled = true;
    }
  },
});

function onStartClick(event) {
  console.log('Start timer');
  btnStartEl.disabled = true;

  const interval = setInterval(() => {
    const deltaDate = selectedDate - Date.now();

    if (deltaDate >= 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaDate);

      spanDaysEl.textContent = addLeadingZero(days);
      spanHoursEl.textContent = addLeadingZero(hours);
      spanMinutesEl.textContent = addLeadingZero(minutes);
      spanSecondsEl.textContent = addLeadingZero(seconds);
    } else {
      console.log('Finish timer');
      clearInterval(interval);
    }
  }, 1000);
}
