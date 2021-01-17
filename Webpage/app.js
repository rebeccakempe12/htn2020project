function greeting() {
    var greeting;
    var hour = new Date().getHours();

    if (hour < 3) {
        greeting = "Good Morning!";
    } else if (hour >= 3 && hour < 6) {
    } else if (hour >= 6 && hour < 12) {
    } else if (hour >= 12 && hour < 15) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("greetingArea").innerHTML = greeting;
}