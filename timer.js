// Link On Click Listener
document.getElementById("showTime").onclick = function() {showTime()};

// Display Current Time
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