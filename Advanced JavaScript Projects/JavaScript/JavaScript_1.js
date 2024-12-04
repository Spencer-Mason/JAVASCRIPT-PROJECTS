function class_function() {
    var class_output;
    var char_class = document.getElementById("class_choice").value;
    var string = " is a great choice! You will be strong, indeed.";
    switch(char_class) {
        case "Barbarian":
            class_output = "Barbarian" + string;
        break;
        case "Bard":
            class_output = "Bard" + string;
        break;
        case "Cleric":
            class_output = "Cleric" + string;
        break;
        case "Druid":
            class_output = "Druid" + string;
        break;
        case "Fighter":
            class_output = "Fighter" + string;
        break;
        case "Monk":
            class_output = "Monk" + string;
        break;
        case "Paladin":
            class_output = "Paladin" + string;
        break;
        case "Ranger":
            class_output = "Ranger" + string;
        break;
        case "Rogue":
            class_output = "Rogue" + string;
        break;
        case "Sorcerer":
            class_output = "Sorcerer" + string;
        break;
        case "Warlock":
            class_output = "Warlock" + string;
        break;
        case "Wizard":
            class_output = "Wizard" + string;
        break;
        default:
            class_output = "Please enter a class exactly as writen above.";
    }
    document.getElementById("output").innerHTML = class_output;
}

function change_function() {
    var x = document.getElementsByClassName("click");
    x[0].innerHTML = "I told you it would change.";
}

var c = document.getElementById("canvas_ID");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "green");
grd.addColorStop(1, "purple");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);