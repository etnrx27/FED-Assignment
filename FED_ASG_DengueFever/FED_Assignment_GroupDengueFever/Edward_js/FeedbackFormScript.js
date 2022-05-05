// JavaScript source code
function submitform() {
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var comment = document.getElementById("comments").value;
    if (name.length != 0 && title.length !=0 && comment.length !=0) {
        document.getElementById("Thankyou").innerHTML = "Thank you for your feedback " + name+"!";
    }
    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("comments").value = "";
}
function reset() {
    document.getElementById("name").innerHTML = " ";
    document.getElementById("title").innerHTML = " ";
    document.getElementById("comments").innerHTML = " ";
    document.getElementById("Thankyou").innerHTML = " ";
}

