document.write(typeof 9); //Returns the value type of a value

document.write("<br>19" + 92); //Demonstrates type coersion and tacks the 92 to the end of the "19" string value

document.write("<br>" + 0/0); //Returns NaN (Not a Number).

document.write("<br>" + isNaN("word")); //Checks if given value is "not a number". Returns "true" in this case, becasue it is not a number
document.write("<br>" + isNaN("12")); //Returns "false" in this case, because it is a number

function infin() { //Shows that a number above the limit for JavaScript is considered to be "infinity"
    document.getElementById("infin").innerHTML = 2E313;
}

function negInfin() { //Same as above, but negative
    document.getElementById("neg_infin").innerHTML = -2E1234;
}

document.write("<br>" + (6 < 9)); //Example of a comparison returning "true"
document.write("<br>" + (6 > 9)); //Example of a comparison returning "false"

console.log(52 + 468); //Example of a math operation as a log entry
console.log(12 > 21); //Example of a boolean value as a log entry

function compareTrue() { //Example of an equality comparison that returns "true"
    var x = (5 * 2) == 10;
    document.getElementById("true").innerHTML = x;
}

function compareFalse() { //Example of an equality comparison that returns "false"
    var password = "pasword1";
    var x = password == "password";
    document.getElementById("false").innerHTML = x;
}

//Examples of triple equal sign comparison, only returns "true" if both value and type are the same
document.write("<br>" + (19 === 19));
document.write("<br>" + (19 === "18"));
document.write("<br>" + (19 === "19"));
document.write("<br>" + (19 === 18));

//Examples of "AND" and "OR" operators
document.write("<br>" + (19 > 18 && 3 < 13));
document.write("<br>" + (19 > 18 && 3 > 13));
document.write("<br>" + (19 > 18 || 3 > 13));
document.write("<br>" + (19 < 18 || 3 > 13));

//Examples of "not" operator
document.write("<br>" + !(19 > 18));
document.write("<br>" + !(19 < 18));