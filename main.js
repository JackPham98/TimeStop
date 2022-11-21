//Declaration

const time_el = document.querySelector('.time');
const start_btn = document.querySelector('.start');
const stop_btn = document.querySelector('.stop');
const reset_btn = document.querySelector('.reset');

let second = 0;
let interval = null;

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

//Timer
function count(){
    second++;

    let hours = Math.floor(second/3600);
    let mins = Math.floor((second-(hours*3600))/60);
    let secs = Math.floor((second - (hours*3600) - (mins*60)));

    //Add Zero
    if(hours < 10) {hours = '0'+ hours};  
    if(mins < 10) {mins = '0'+ mins};
    if(secs < 10) {secs = '0'+ secs};

    time_el.innerText = `${hours}:${mins}:${secs}`
}

function start(){
    if(interval){return};
    // => End function immediately if there is an interval right there.

    interval = setInterval(count, 1000)

}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    second = 0;

    time_el.innerText = '00:00:00';
}

