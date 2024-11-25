//Function that uses a ternary operator to return value based on user input
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Constructor for pet information
function Pet(species, color, age) {
    this.petSpecies = species;
    this.petColor = color;
    this.petAge = age;
}
//Creates new "Pet" instances using the Pet constructor
var Paul = new Pet("dog", "brown", 11);
var Patema = new Pet("cat", "gray tortoiseshell", 7);
var Tenebris = new Pet("cat", "black tortoiseshell", 5);
var NabooTheEnigma = new Pet("snake", "white", 6);
//Prints information based on previously created Pet instance
function petFunction(){
    document.getElementById("New_and_This").innerHTML = "Patema is a " + Patema.petAge + " year old " + Patema.petColor + " " + Patema.petSpecies + ".";
}

//Example of a nested function
function nested() {
    document.getElementById("Nested_Function").innerHTML = Counting();
    function Counting(){
        var x = 0;
        function Add() {x += 1;}
        Add();
        return x;
    }
}