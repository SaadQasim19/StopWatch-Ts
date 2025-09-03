let startTime: number = 0;
let elapsedTime: number = 0;
let timerInterval: number | undefined;

const display = document.getElementById("display") as HTMLElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

function addZero(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}

function timeToString(time: number): string {
  const diffInHrs = Math.floor(time / 3600000);
  const diffInMin = Math.floor((time % 3600000) / 60000);
  const diffInSec = Math.floor((time % 60000) / 1000);

  const formattedHrs = addZero(diffInHrs);
  const formattedMin = addZero(diffInMin);
  const formattedSec = addZero(diffInSec);

  return `${formattedHrs}:${formattedMin}:${formattedSec}`;
}


function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = window.setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.innerHTML = timeToString(elapsedTime);
  }, 1000);
}


function stop() {
  clearInterval(timerInterval);
}


function reset() {
  clearInterval(timerInterval);
  display.innerHTML = "00:00:00";
  elapsedTime = 0;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
