import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTimeInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysTime = document.querySelector('span[data-days]');
const daysHours = document.querySelector('span[data-hours]');
const daysMinutes = document.querySelector('span[data-minutes]');
const daysSeconds = document.querySelector('span[data-seconds]');

const CURRENT_DATE = new Date();
let SELECTED_DATE = new Date();
let deltaTime;
let timerId = null;

btnStart.disabled = false;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < CURRENT_DATE) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      SELECTED_DATE = selectedDates[0];
      console.log(dateTimeInput.value);
    }
  },
};
// function onClose(selectedDates)

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
flatpickr(dateTimeInput, options);

btnStart.addEventListener('click', onStartTimer);

function onStartTimer() {
  btnStart.disabled = true;
  dateTimeInput.disabled = false;
  getTime();
}
function getTime() {
  timerId = setInterval(() => {
    deltaTime = SELECTED_DATE - Date.now();
    // const { days, hours, minutes, seconds } = convertMs(deltaTime);
    const setDate = convertMs(deltaTime);
    if (deltaTime <= 0) {
      clearInterval(timerId);
    } else {
      viewTime(setDate);
    }
  }, 1000);
}

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

function viewTime(setDate) {
  daysTime.textContent = setDate.days;
  daysHours.textContent = setDate.hours;
  daysMinutes.textContent = setDate.minutes;
  daysSeconds.textContent = setDate.seconds;
}
