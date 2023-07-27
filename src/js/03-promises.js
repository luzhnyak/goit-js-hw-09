import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

inputDelayEl = document.querySelector('input[name="delay"]');
inputStepEl = document.querySelector('input[name="step"]');
inputAmountEl = document.querySelector('input[name="amount"]');

btnStartEl = document.querySelector('button');
btnStartEl.addEventListener('click', onCreateClick);

function onCreateClick() {
  delay = Number(inputDelayEl.value);
  step = Number(inputStepEl.value);
  amount = Number(inputAmountEl.value);

  console.log('Start create promise');
  console.log('Start create promise');

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}
