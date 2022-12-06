let joulu = document.getElementById("joulu");
let no1 = document.getElementById("no1");
let link1 = document.getElementById("link1");
let no2 = document.getElementById("no2");
let link2 = document.getElementById("link2");
/*let no3 = document.getElementById("no3");
let link3 = document.getElementById("link3");*/
let no4 = document.getElementById("no4");
let link4 = document.getElementById("link4");
let no5 = document.getElementById("no5");
let link5 = document.getElementById("link5");

link1.style.display = "none";
link2.style.display = "none";
/*link3.style.display = "none";*/
link4.style.display = "none";
link5.style.display = "none";

no1.addEventListener("mouseover", () => changeColor(no1, "#E8282C"));
no1.addEventListener("mouseout", () => changeColor(no1, "#000000"));
no1.addEventListener("click", () => toggleData(link1));

no2.addEventListener("mouseover", () => changeColor(no2, "#E8282C"));
no2.addEventListener("mouseout", () => changeColor(no2, "#000000"));
no2.addEventListener("click", () => toggleData(link2));
/*
no3.addEventListener("mouseover", () => changeColor(no3, "#E8282C"));
no3.addEventListener("mouseout", () => changeColor(no3, "#000000"));
no3.addEventListener("click", () => toggleData(link3));
*/
no4.addEventListener("mouseover", () => changeColor(no4, "#6B8E23"));
no4.addEventListener("mouseout", () => changeColor(no4, "#000000"));
no4.addEventListener("click", () => toggleData(link4));

no5.addEventListener("mouseover", () => changeColor(no5, "#E8282C"));
no5.addEventListener("mouseout", () => changeColor(no5, "#000000"));
no5.addEventListener("click", () => toggleData(link5));

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