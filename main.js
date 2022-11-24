//Declaration

const time_el = document.querySelector('.time');
const start_btn = document.querySelector('.start');
const stop_btn = document.querySelector('.stop');
const reset_btn = document.querySelector('.reset');
const lap_btn = document.querySelector('.lap')

let percentSecs = 0;
let interval = null;
 

let percentSecsLap = 0;
let intervalLap = null;
let lapCount = 0;

// let recordTimer = `00:00:00:000`;
let recordTimerLap = `00:00:00:000`;

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)
lap_btn.addEventListener('click', lap)

//Timer
function count(){
    // let hours = Math.floor(second/3600);
    // let mins = Math.floor((second-(hours*3600))/60);
    // let secs = Math.floor((second - (hours*3600) - (mins*60)));

    let hours = Math.floor(percentSecs / 360000)
    let mins = Math.floor((percentSecs - (hours*360000)) / 6000);
    let secs = Math.floor((percentSecs - (hours*360000) - (mins*6000)) / 100 );
    let perSecs = Math.floor((percentSecs - (hours*360000) - (mins*6000)) - (secs*100) )

    //Add Zero
    if(hours < 10) {hours = '0'+ hours};  
    if(mins < 10) {mins = '0'+ mins};
    if(secs < 10) {secs = '0'+ secs};
    if(perSecs < 10) {perSecs = '0'+ perSecs}
    if(perSecs < 100) {perSecs = '0'+ perSecs}


    time_el.innerText = `${hours}:${mins}:${secs}:${perSecs}`
    percentSecs++;
}


function countLap(){


    let hoursLap = Math.floor(percentSecsLap / 360000)
    let minsLap = Math.floor((percentSecsLap - (hoursLap*360000)) / 6000);
    let secsLap = Math.floor((percentSecsLap - (hoursLap*360000) - (minsLap*6000)) / 100 );
    let percecsLap = Math.floor((percentSecsLap - (hoursLap*360000) - (minsLap*6000)) - (secsLap*100) )

    //Add Zero
    if(hoursLap < 10) {hoursLap = '0'+ hoursLap};  
    if(minsLap < 10) {minsLap = '0'+ minsLap};
    if(secsLap < 10) {secsLap = '0'+ secsLap};
    if(percecsLap < 10) {percecsLap = '0'+ percecsLap}
    if(percecsLap < 100) {percecsLap = '0'+ percecsLap}

    recordTimerLap = `${hoursLap}:${minsLap}:${secsLap}:${percecsLap}`;
    percentSecsLap++;
}

function start(){
    if(interval){return};
    if(intervalLap){return};
    // => End function immediately if there is an interval right there.

    interval = setInterval(count, 10)
    intervalLap = setInterval(countLap, 10)

}

function stop(){
    clearInterval(interval);
    clearInterval(intervalLap);
    interval = null;
    intervalLap = null;
}

function reset(){
    stop();
    percentSecs = 0;
    percentSecsLap = 0;

    //Set lap counter
    countLap();

    time_el.innerText = '00:00:00:000';
}

function lap(){

    percentSecsLap = 0;
    lapCount++;

    const time_record_el = document.querySelector('.time-record')


    const time_lap_el = document.createElement('div');
    time_lap_el.classList.add('time-lap');


    const lap_el = document.createElement('span');
    lap_el.classList.add('lap');

    const info_el = document.createElement('span');
    info_el.classList.add('info');

    time_record_el.appendChild(time_lap_el);
    time_lap_el.appendChild(lap_el);
    time_lap_el.appendChild(info_el);


    lap_el.innerText = `Lap ${lapCount}`;
    info_el.innerText = recordTimerLap;
    console.log(info_el.innerText)
}

