let myButton = document.querySelector("Button");
myButton.innerText = "Paina Tästä";
let myText = document.querySelector(".message");

function heippanappi() {
    var code = prompt('Anna 6-numeroinen koodi:');
    if (code > 10000 && code < 400000){
        open("https://nhentai.net/g/" + code,);
    } else {
        location.reload(true);
    }
}

myButton.addEventListener("click", changecolour);
myText.addEventListener("click", changecolour);

function changecolour() {
    myText.style.color="red";
}

let myGreeting = document.getElementById("greeting");
let myName = document.getElementById("name");
let myGo1 = document.getElementById("go1");

function greetings(){
    let name = myName.Value;
    myGreeting.innerText = "Hello there, " + name + "!";
}

myGo1.addEventListener("click", greetings);