// Link On Click Listener
document.getElementById("showTime").onclick = function() {showTime()};

// Display Current Time
function showTime() {
    let date = new Date();
    document.getElementById("time").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}