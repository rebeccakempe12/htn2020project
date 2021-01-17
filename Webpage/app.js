<p id = "text"></p>

function text() {
    var greeting;
    var hour = date.getHours();

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (time >= 12 && time < 3) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("text").innerHTML = greeting;
}