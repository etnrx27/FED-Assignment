// JavaScript source code
function submitForm() {
    if ((document.getElementById("name").value != "") && (document.getElementById("email").value != "")) {
        var subscriber = document.getElementById("name").value
        document.getElementById("confirmmsg").innerHTML = "Thank you for signing up, " + subscriber;
    }
}

function resetForm() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
}