function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["message"].value;

    if (x == "") {
        alert("Please enter a valid email so we can reply to your message.");
        return false;
    } else if (y == "") {
        alert("Please enter a message.");
        return false;
    }
}