// JavaScript source code
window.onscroll = function () { myFunction() };

function myFunction() {
    if ((document.body.scrollTop > 280 && document.body.scrollTop < 700) || (document.documentElement.scrollTop > 280 && document.documentElement.scrollTop < 700)) {
        document.getElementById("PersonTalk").className = "slideUp";
        document.getElementById("BitePerson").className = "slideUp";
    }
    else if ((document.body.scrollTop > 700 && document.body.scrollTop < 1100) || (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1100)) {

        document.getElementById("Aedes").className = "mosquito1";
    }
    else {
        document.getElementById("PersonTalk").className = "transmission";
        document.getElementById("BitePerson").className = "transmission";
        document.getElementById("Aedes").className = "mosquito";
    }
}

function getSize() {
    var size = document.getElementById("size");
    
    if (size[1].selected) {
        sizeMessage = 'Size: Yes. Aedes is smaller than other mosquitos in size.'
    }
        
    else if (size[2].selected) {
        sizeMessage = 'Size: No. Aedes is not bigger than other mosquitos in size.'                       
    }
    return sizeMessage;
}

function getBody() {
    var body = document.getElementById("body");

    if (body[1].selected) {
        bodyMessage = 'Body Feature: No. Aedes body is not only black stripe.'
    }

    else if (body[2].selected) {
        bodyMessage = 'Body Feature: Yes. Aedes body is black and white stripe.'
    }
    return bodyMessage;
}

function getActive() {
    var active = document.getElementById("active");

    if (active[1].selected) {
        activeMessage = 'Active Hours: Yes. Aedes is active during the day.'
    }

    else if (active[2].selected) {
        activeMessage = 'Active Hours: No. Aedes is not active during the night.'
    }
    return activeMessage;
}

function getAppearance() {
    var appearance = document.getElementById("appearance");

    if (appearance[1].selected) {
        appearanceMessage = 'Bite Appearance: No. Aedes bite is not slight red and itchy.'
    }

    else if (appearance[2].selected) {
        appearanceMessage = 'Bite Appearance: Yes. Aedes bite will appear redder and more itchy.'
    }
    return appearanceMessage;
}

function getHabits() {
    var habits = document.getElementById("habits");

    if (habits[1].selected) {
        habitsMessage = 'Bite Habits: Yes. Aedes usually bite at a person\'s ankle and elbow.'
    }

    else if (habits[2].selected) {
        habitsMessage = 'Bite Habits: No. Aedes usually will not bite a person\'s neck.'
    }
    return habitsMessage;
}

function submitForm() {
    var sizeMessage = document.getElementById("sizeMessage");
    var bodyMessage = document.getElementById("bodyMessage");
    var activeMessage = document.getElementById("activeMessage");
    var appearanceMessage = document.getElementById("appearanceMessage");
    var habitsMessage = document.getElementById("habitsMessage");
    sizeMessage.innerHTML = getSize();
    bodyMessage.innerHTML = getBody();
    activeMessage.innerHTML = getActive();
    appearanceMessage.innerHTML = getAppearance();
    habitsMessage.innerHTML = getHabits();
}

