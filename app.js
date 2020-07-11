var msec = 0;
var sec = 0;
var min = 0;
var msecHead = document.getElementById("msec");
var secHead = document.getElementById("sec");
var minHead = document.getElementById("min");
var time;
// var btn = document.getElementById("sB");

function timer() {
    msec++;
    msecHead.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 10) {
        min++;
        minHead.innerHTML = min;
        msec = 0;
        sec = 0;
    }


}

function start() {

    time = setInterval(timer, 10);
    var btn = document.getElementById("sB");
    btn.disabled = true;
}

function pause() {
    clearInterval(time)
    var btn = document.getElementById("sB");
    btn.disabled = false;
}

function stop() {
    msec = 0;
    sec = 0;
    min = 0;
    msecHead.innerHTML = msec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
}
