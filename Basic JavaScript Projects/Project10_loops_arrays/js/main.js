//"while" loop, continues until condition is met, "while this is true, do this"
function Call_Loop() {
    number = ""
    let x = 0;
    while (x < 5) {
        number += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = number;
}

//"for" loop that creates a list of instuments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array of dishes made for Thanksgiving
function array_Function() {
    var Thanksgiving_Dinner = [];
    Thanksgiving_Dinner[0] = "brisket";
    Thanksgiving_Dinner[1] = "mashed potatoes and gravy";
    Thanksgiving_Dinner[2] = "mac and cheese";
    Thanksgiving_Dinner[3] = "roasted vegtables";
    Thanksgiving_Dinner[4] = "ambrosia salad";
    Thanksgiving_Dinner[5] = "Hawaiian rolls";
    Thanksgiving_Dinner[6] = "cobbler";
    Thanksgiving_Dinner[7] = "mousse";
    document.getElementById("Array").innerHTML = "The most important part of Thanksgiving is the " + Thanksgiving_Dinner[0] + ".";
}

//Creating a constant with properties, and changing those properties and adding a new one
const soda = {brand:"Barq's", flavor:"root beer", amount:"12-pack"}
function constant_function() {
    document.getElementById("Constant").innerHTML = "I got some " + soda.brand + " " + soda.flavor + ".";
    soda.flavor = "cream soda";
    soda.size = "24oz";
    document.getElementById("Constant2").innerHTML = "Then I got a " + soda.size + " bottle of " + soda.flavor + ".";
}

//An object that describes a D&D character
let character = {
    player: "Katie ",
    name: "Bash ",
    level: "3 ",
    race: "Human ",
    class: "Barbarian ",
    background: "Folk Hero ",
    description: function() {
        return this.player + "plays a level " + this.level + this.race + this.class + "named " + this.name
    }
};
document.getElementById("character_object").innerHTML = character.description();
