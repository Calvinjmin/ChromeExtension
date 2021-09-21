// Link On Click Listener
document.getElementById("showTime").onclick = function() {showTime()};
document.getElementById("startTimer").onclick = function() {startTimer()};

// Constants
const timeMap = new Map();
timeMap.set("10m", 600);
timeMap.set("20m", 1200);
timeMap.set("30m", 1800);
timeMap.set("1h", 3600);

// Display Current Time
function startTimer() {
    //Select Element
    const selectedTimeOpt = document.querySelector("#timer-value");
    const selectedTime = [].filter
        .call(selectedTimeOpt.options, option => option.selected)
        .map(option => option.value);

    //Selected Time is the Value Input
    alert(timeMap.get(selectedTime[0]));
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