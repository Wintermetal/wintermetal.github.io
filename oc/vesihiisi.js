var yoink = console.log;

let k18infolist = document.getElementById("k18infolist")
let k18info = document.getElementById("k18info");
let k18list = document.getElementById("k18list");

k18list.style.display = "none";

k18info.addEventListener("mouseover", () => changeColor(k18info, "#E1C699"));
k18info.addEventListener("mouseout", () => changeColor(k18info, "#000000"));
k18info.addEventListener("click", () => toggleData(k18list));

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