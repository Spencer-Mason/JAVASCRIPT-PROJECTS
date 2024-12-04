function displayAbility(char_class) {
    var primary_ability = char_class.getAttribute("data-primary_ability");
    alert("A " + char_class.innerHTML + " uses " + primary_ability);
}