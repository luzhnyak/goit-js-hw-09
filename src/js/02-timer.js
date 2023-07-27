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

spanDaysEl = document.querySelector('span[data-days]');
spanHoursEl = document.querySelector('span[data-hours]');
spanMinutesEl = document.querySelector('span[data-minutes]');
spanSecondsEl = document.querySelector('span[data-seconds]');

btnStartEl = document.querySelector('button[data-start]');
btnStartEl.addEventListener('click', onStartClick);
btnStartEl.disabled = true;

InputDateEl = document.querySelector('#datetime-picker');

let selectedDate;
let deltaDate;

flatpickr(InputDateEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    deltaDate = selectedDate - Date.now();
    if (deltaDate > 0) {
      btnStartEl.disabled = false;
    } else {
      // alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStartEl.disabled = true;
    }
  },
});

function onStartClick(event) {
  console.log('Start timer');
  btnStartEl.disabled = true;

  const interval = setInterval(() => {
    deltaDate = selectedDate - Date.now();
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
