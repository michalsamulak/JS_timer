import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const durationInput = document.querySelector('duration');
const startBtn = document.querySelector('btn-start');
const pauseBtn = document.querySelector('btn-pause');

class Timer {
    constructor(durationInput, startBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        this.startBtn.addEventListener('click', this.start);
    }

    start() {
        console.log('Timer started');
    }
}

const timer = new Timer(durationInput, startBtn, pauseBtn);