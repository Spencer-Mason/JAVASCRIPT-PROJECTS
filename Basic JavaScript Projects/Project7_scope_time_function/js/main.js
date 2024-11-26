//Demonstrates scope
var X = 9;
function works() {
    var Y = 13;
    console.log(X + Y);
}
function doesnt_work() {
    console.log(X + Y);
}
works();
doesnt_work();

//Uses if, else if, and else to display the time of day
function date_func() {
    if (new Date().getHours() < 12) {
        document.getElementById("greeting").innerHTML = "Good morning.";
    }
    else if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon.";
    }
    else {
        document.getElementById("greeting").innerHTML = "Good evening.";
    }
}
function sentence() { //This part could be made better by using a variable
    if (document.getElementById("greeting").innerHTML == "Good morning.") {
        document.getElementById("next_part").innerHTML = "This will print if it is morning.";
    }
    else if (document.getElementById("greeting").innerHTML == "Good afternoon.") {
        document.getElementById("next_part").innerHTML = "This will print if it is afternoon.";
    }
    else {
        document.getElementById("next_part").innerHTML = "This will print if it is evening.";
    }
}

//Tells you that you like the movie "The Princess Bride"
function princessBride() {
    var answer = document.getElementById("princess_bride").value;
    if (answer == "yes") {
        var response = "Of course you do, everyone does.";
    }
    else {
        response = "Wrong, the correct answer is 'yes'.";
    }
    document.getElementById("answer").innerHTML = response;
}