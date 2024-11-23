window.alert("Hello, World?"); //Makes a pop-up window with quoted text

document.write("Hello, World?<br>"); //Prints the quoted text on the page

var A = "This is a string<br>"; //Creates a variable with the string value of the quoted text

document.write(A + "with another string concatenated<br>"); //Concatenates the previous variable with the quoted text and prints it on the page

var B = "Here's another string"; //Creates another variable with a string value

window.alert(B); //Makes a pop-up window with the value of the previously created variable

document.write("The assignment said \"write a string that contains an apostrophe and/or quotation marks.\" and so I did.<br>"); //Prints the quoted text with escaped quotes in the string on the page

var concat = "This is " + "two strings.<br>"; //Creates a variable with concatenated string values

document.write(concat); //Prints previously created variable on the page

var mom = "Mila", dad = "Jim", me = "Spencer", brother = "Nick", sister = "Rowan"; //Creates several variables with seperate values at the same time

document.write(me); //Prints one of the previously created variables

x = 6 * 9; //Assigns the result of an expression to a variable

document.write(x); //Prints the value of the variable on the page

var sent1 = "This is the begining of the string", sent2 = " and this is the end of the string."; //Creates two variables that will be concatenated later

document.write("<br>" + sent1 + sent2); //Concatenates and prints those strings