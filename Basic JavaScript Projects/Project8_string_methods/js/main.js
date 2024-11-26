//Uses concat to put all the seperate strings together into one string
function sentence() {
    var words1 = "These ";
    var words2 = "words ";
    var words3 = "make ";
    var words4 = "a ";
    var words5 = "sentence.";
    var all_words = words1.concat(words2, words3, words4, words5);
    document.getElementById("an_ID").innerHTML = all_words;
}

//Uses slice to return a specific range of characters from a string
function word() {
    var all_words = "These words make a sentence."
    var one_word = all_words.slice(6,10);
    document.getElementById("ID2").innerHTML = one_word;
}

//Changes a number value to a string value, not visually apparent
function stringMethod() {
    var number = 19;
    document.getElementById("numberString").innerHTML = number.toString();
}

//Formats a number to a specific length
function precision_Method() {
    var num = 123.456789;
    document.getElementById("precision").innerHTML = num.toPrecision(6);
}