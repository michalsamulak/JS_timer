import "../scss/main.scss";
import Timer from "./Timer";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const durationInput = document.querySelector(".duration");
const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log('Timer started');
  },

  onTick() {
    console.log('Timer ticked');
  },
  onComplete() {
    console.log('Timer finish');
  }
});
