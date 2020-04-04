let timer;
let countSec = 0
let countMin = 0
let countHour = 0

// Buttons events
let start_btn = document.getElementById("start" )
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let timer_element = document.getElementById("timer");

// Start button
start_btn.addEventListener("click", function () {
  timer = setInterval(TimerHandler, 1000);
  reset_btn.disabled = true;
});
// Stop
stop_btn.addEventListener("click", function () {
  timer = clearInterval(timer);
  reset_btn.disabled = false;
});
// Reset
reset_btn.addEventListener("click", function () {
  timer = clearInterval(timer);
  reset_btn.disabled = true;
  countSec = 0;
  countMin = 0;
  countHour = 0;
  timer_element.innerHTML = "00:00:00"
});

function TimerHandler() {
  countSec++;

  if (countSec == 60) {
    countSec = 0;
    countMin++;
  }
  if (countMin == 60) {
    countMin = 0;
    countHour++;
  }
  DisplayTime();
}

function DisplayTime() {
  let countSec_pretty = countSec;
  let countMin_pretty = countMin;
  let countHour_pretty = countHour;

  if (countSec < 10) {
    countSec_pretty = "0"+countSec;
  }
  if (countMin < 10) {
    countMin_pretty = "0"+countMin;
  }
  if (countHour < 10) {
    countHour_pretty = "0"+countHour;
  }

  timer_element.innerHTML = countHour_pretty + ":" + countMin_pretty + ":" + countSec_pretty;
}
