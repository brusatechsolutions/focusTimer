import state from './state.js'
import * as timer from '../timer.js';
import  * as events from '../events.js';
import { controls } from '../elements.js';

export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds

    // setInterval(() => {
    //     state.seconds = state.seconds + 1;
    //     if (state.seconds > 59) {
    //         state.minutes++;
    //         state.seconds = 0;
    //     }
    //     timer.updateDisplay(state.seconds, state.minutes);
    // },1000);    

    events.registerControls()

}