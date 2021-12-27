'use strict';

/* VARIALBES */
const body = document.querySelector('body');
const clocksBody = document.getElementById('clock'); 
const dateInfo = document.querySelector('.clock__date');
const date = new Date();
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const btnTimeFormat = document.querySelector('.button__timeformat');
const btnMode = document.querySelector('.mode');
let timeFormat = true;
let modeState = true;

/* FUNCTIONS */

// Set the clocks
function clocks () {
    setInterval(() => {
        const date = new Date();
        const time = document.querySelector('.clock__time');
        const hours = String(date.getHours()).padStart(2, 0);
        const mins = String(date.getMinutes()).padStart(2, 0);
        const secs = String(date.getSeconds()).padStart(2, 0);
        let dayTimeUSA = hours > 0 && hours <= 12 ? 'AM' : 'PM';
        let hoursUSA = hours > 12 ? hours - 12 : hours;
        
        if (timeFormat) {
            time.textContent = `${hours} : ${mins} : ${secs}`;
        } else {
            time.textContent = `${hoursUSA} : ${mins} : ${secs} ${dayTimeUSA}`;
        }
        

    }, 1000);
}

function changeTimeFormat () {
    timeFormat = !timeFormat;
}

// Changing colors
function defineColors (bodyColor, clocksColor, borderColor) {
    body.style.backgroundColor = `var(${bodyColor})`; 
    clocksBody.style.backgroundColor = `var(${clocksColor})`;
    clocksBody.style.border = `10px solid var(${borderColor})`;
    btnTimeFormat.style.backgroundColor = `var(${clocksColor})`;
    btnMode.style.backgroundColor = `var(${clocksColor})`;
}

// Switching modes
function switchMode () {
    if (modeState) {
        defineColors('--bgc-light-theme', '--clock-color-light-theme', '--clock-border-light-theme'); 
        modeState = false;
    } else {
        defineColors('--bgc-dark-theme', '--clock-color-dark-theme', '--clock-border-dark-theme');
        modeState = true;
    }
}

/* Action code */

dateInfo.textContent = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}th ${date.getFullYear()}`;

clocks();

btnTimeFormat.addEventListener('click', changeTimeFormat);
btnMode.addEventListener('click', switchMode);

