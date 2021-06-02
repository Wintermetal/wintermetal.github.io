const yoink = console.log;

let bellinfolist = document.getElementById("bellinfolist")

let bellb = document.getElementById("bellb");
let bellr = document.getElementById("bellr");
let bellheaderb = document.getElementById("bellheader");

bellr.style.display = "none";

bellheader.addEventListener("mouseover", () => changeColor(bellheader, "#818181"));
bellheader.addEventListener("mouseout", () => changeColor(bellheader, "#FFFFFF"));
bellheader.addEventListener("click", () => toggleData(bellb));
bellheader.addEventListener("click", () => toggleData(bellr));

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