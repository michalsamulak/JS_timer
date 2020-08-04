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
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
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
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

export default Timer;