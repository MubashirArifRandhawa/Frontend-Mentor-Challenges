function runner() {
  const date = Date.now();
  const futureDate = new Date("December 31, 2021").getTime();
  msToTime(futureDate - date);
}
function formatNumbers(val) {
  return val < 10 ? `0${val}` : val;
}
function msToTime(duration) {
  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");
  let day = Math.floor(duration / (1000 * 3600 * 24));
  let hour = Math.floor((duration / (1000 * 3600)) % 24);
  let minute = Math.floor((duration / (1000 * 60)) % 60);
  let second = Math.floor((duration / 1000) % 60);

  days.innerText = formatNumbers(day);
  hours.innerText = formatNumbers(hour);
  minutes.innerText = formatNumbers(minute);
  seconds.innerText = formatNumbers(second);
}

window.addEventListener("load", runner);

setInterval(runner, 1000);
