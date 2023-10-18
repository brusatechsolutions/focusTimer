import state from "./FocusTimer/state.js";

import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.body.classList.toggle("running");
  timer.countDown();
}

export function stop() {
  state.isRunning = false;
  document.body.classList.remove("running");
  timer.updateDisplay();
}

export function toggleMusic() {
  state.isMute = document.body.classList.toggle("music-on");
}

export function set() {
    
}
