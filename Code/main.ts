let startTime: number = 0;
let elapsedTime: number = 0;
let timerInterval: number | undefined;

const display = document.getElementById("display") as HTMLElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

function timeToString(time: number): string {
  const diffInHrs = Math.floor(time / 3600000);
  const diffInMin = Math.floor((time % 3600000) / 60000);
  const diffInSec = Math.floor((time % 60000) / 1000);

  const formattedHrs = diffInHrs.toString().padStart(2, "0");
  const formattedMin = diffInMin.toString().padStart(2, "0");
  const formattedSec = diffInSec.toString().padStart(2, "0");

  return `${formattedHrs}:${formattedMin}:${formattedSec}`;
}