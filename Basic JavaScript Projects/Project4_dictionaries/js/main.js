function dictionary() {
    var companions = {
        Barbarian:"Karlach",
        Cleric:"Shadowheart",
        Fighter:"Lae'zel",
        Rogue:"Astarion",
        Warlock:"Wyll",
        Wizard:"Gale"
    };
    delete companions.Fighter
    document.getElementById("dictionary").innerHTML = companions.Fighter;
}