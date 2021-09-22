// Link On Click Listener
document.getElementById("showTime").onclick = function() {showTime()};
document.getElementById("startTimer").onclick = function() {startTimer()};
document.getElementById("stopTimer").onclick = function() {stopTimer()};

// Constants
const timeMap = new Map();
timeMap.set("10m", 600);
timeMap.set("20m", 1200);
timeMap.set("30m", 1800);
timeMap.set("1h", 3600);

let selectedTime = [];
let intervalID = 0;
let timeRemaining = 0;

// Initialize Timer Countdown
function startTimer() {
    //Select Element
    const selectedTimeOpt = document.querySelector("#timer-value");
    selectedTime = [].filter
        .call(selectedTimeOpt.options, option => option.selected)
        .map(option => option.value);

    // Grabs selected value - Converts into a number using the map
    timeRemaining = timeMap.get(selectedTime[0]);

    intervalID = setInterval(function () {
        timeRemaining -= 1;
        document.getElementById("countdown").innerHTML = String(timeRemaining);

        // Stop Timer
        if ( timeRemaining <= 0 ) {
            document.getElementById("countdown").innerHTML = "TIME UP!";
            clearInterval(intervalID);
        }
    }, 1000);
}

// Stop Countdown
function stopTimer() {
    alert("Stopped Timer");
    clearInterval(intervalID);
}



function showTime() {
    let date = new Date();
    let amOrPm = "AM";
    let hour = date.getHours();
    if ( hour > 12 ) {
        hour = (date.getHours() - 12)
        amOrPm = "PM";
    }
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + amOrPm;
}

