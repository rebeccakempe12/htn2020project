function greeting() {
    var greeting;
    var hour = new Date().getHours();

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 3) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("greetingArea").innerHTML = greeting;
}