var yoink = console.log;
function namebutton() {
    var name = prompt("Anna nimesi.");
    window.alert(`Hei, ${name} oletko valmis aloittamaan?`);
};
function agebutton() {
    var age = prompt("Anna ikäsi.");
    if(age <= 17){
        window.alert(`Olet vain ${age} eli olet liian nuori.`);
    } else {
        window.alert(`Olet ${age} eli olet tarpeeksi vanha.`);
    };
};

    var y = Math.floor(Math.random() * 10 + 1);
    var guess = 0;

function gamebutton() {
    var guess = prompt('Arvaa numeroa (1-10):');
    if(guess == y) {
        window.alert("Onneksi olkoon! Arvauksesi " + guess + " oli oikein. Pitäisikö lotota?");
        window.alert("Ei pitäisi.");
        location.reload(true);
    } else if(guess > y) {
        guess++;
        window.alert("Väärin! Kokeile pienempää numeroa.");
    } else {
        guess++;
        window.alert("Väärin! Kokeile suurempaa numeroa.");
    };
};
