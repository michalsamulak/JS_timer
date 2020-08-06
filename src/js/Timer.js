class Timer {
  constructor(durationInput, startBtn, pauseBtn, callback) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callback) {
      this.onStart = callback.onStart;
      this.onTick = callback.onTick;
      this.onComplete = callback.onComplete;
    }

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {

    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    }
    else {
      this.timeRemaining = this.timeRemaining - .02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}

export default Timer;