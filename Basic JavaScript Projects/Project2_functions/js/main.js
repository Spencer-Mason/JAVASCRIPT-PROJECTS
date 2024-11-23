function aFunc() { //Defines a function with the name "aFunc"
    var str = "This is the button text"; //Creates a variable with a string value within the function
    str += " and so is this."; //Updates the variable by concatenating another string value
    document.getElementById("button_text").innerHTML = str; //Changes the value of the HTML element when the function is called
}