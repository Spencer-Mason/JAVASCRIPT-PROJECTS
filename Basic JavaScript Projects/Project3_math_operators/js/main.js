function plus() { //Demonstrates addition operator
    var add = 6 + 9;
    document.getElementById("math").innerHTML = "6 + 9 = " + add;
}

function minus() { //Demonstrates subtaction operator
    var sub = 6 - 9;
    document.getElementById("math").innerHTML += "<br>6 - 9 = " + sub;
}

function times() { //Demonstrates multiplication operator
    var mult = 6 * 9;
    document.getElementById("math").innerHTML += "<br>6 x 9 = " + mult;
}

function divided() { //Demonstrates division operator
    var div = 6 / 9;
    document.getElementById("math").innerHTML += "<br>6 / 9 = " + div;
}

function otherMath() { //Demonstrates several operators at once
    var math = 6 + 9 - 6 * 9 / 6;
    document.getElementById("more_math").innerHTML = "6 + 9 - 6 x 9 / 6 = " + math;
}

function remainder() { //Demonstrates modulus operator
    var mod = 9 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 9 by 6, the remainder is " + mod;
}

function neg() { //Demonstrates negation operator
    var x = 9;
    document.getElementById("negation").innerHTML = -x;
}

function inc() { //Demonstrates incrementation
    var x = 6;
    x++;
    document.getElementById("increment").innerHTML = x;
}

function dec() { //Demonstrates decrementation
    var x = 9;
    x--;
    document.getElementById("decrement").innerHTML = x;
}

function rand() { //Demonstrates the random function
    var num = Math.random() * 1000000;
    document.getElementById("random").innerHTML = "A random number between 0 and a million: " + num;
}

function euler() { //Demonstrates use of a math object
    var num = Math.E;
    document.getElementById("math_stuff").innerHTML = "Euler's number: " + num;
}