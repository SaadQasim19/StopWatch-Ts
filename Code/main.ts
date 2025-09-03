let startTime: number = 0;
let elapsedTime: number = 0;
let timerInterval: number | undefined;

const display = document.getElementById("display") as HTMLElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;