import "../scss/main.scss";
import Timer from "./Timer";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const durationInput = document.querySelector(".duration");
const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const cirlce = document.querySelector(".clock_circle");

const perimeter = cirlce.getAttribute('r') * 2 * Math.PI;
cirlce.setAttribute('stroke-dasharray', perimeter);
console.log(perimeter);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    cirlce.setAttribute('stroke-dashoffset', 
      perimeter * timeRemaining / duration - perimeter
    );

  },
  onComplete() {
    //let fin = 
    durationInput.value = "30";
  }
});
