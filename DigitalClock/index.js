let hourspan = document.getElementById('hour');
let minutespan = document.getElementById('minute');
let secondspan = document.getElementById('second');
let ampm = document.getElementById('amorpm');

function changetime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // Convert hour to 12-hour format
    if (hour >= 12) {
        hour = hour - 12;
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }

    // Format hours, minutes, and seconds with leading zeros if needed
    hourspan.innerHTML = hour < 10 ? "0" + hour : hour;
    minutespan.innerHTML = minute < 10 ? "0" + minute : minute;
    secondspan.innerHTML = second < 10 ? "0" + second : second;
}

// Run changetime every 1000 milliseconds (1 second)
setInterval(changetime, 1000);

// Initialize the clock immediately
changetime();
