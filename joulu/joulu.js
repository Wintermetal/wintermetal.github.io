let joulu = document.getElementById("joulu");
let no1 = document.getElementById("no1");
let link1 = document.getElementById("link1");
let no2 = document.getElementById("no2");
let link2 = document.getElementById("link2");
let no3 = document.getElementById("no3");
let link3 = document.getElementById("link3");

link1.style.display = "none";
link2.style.display = "none";
link3.style.display = "none";

no1.addEventListener("mouseover", () => changeColor(no1, "#e1c699"));
no1.addEventListener("mouseout", () => changeColor(no1, "#000000"));
no1.addEventListener("click", () => toggleData(link1));

no2.addEventListener("mouseover", () => changeColor(no2, "#e1c699"));
no2.addEventListener("mouseout", () => changeColor(no2, "#000000"));
no2.addEventListener("click", () => toggleData(link2));

no3.addEventListener("mouseover", () => changeColor(no3, "#e1c699"));
no3.addEventListener("mouseout", () => changeColor(no3, "#000000"));
no3.addEventListener("click", () => toggleData(link3));

function changeColor(elem, color){
    elem.style.color = color;
};

function toggleData(item) {
    if(item.style.display === "none"){
        item.style.display = "block";
    } else {
        item.style.display = "none";
    };
};