const yoink = console.log;

let bellinfolist = document.getElementById("bellinfolist")

let bellhb = document.getElementById("bellhb");
let bellhr = document.getElementById("bellhr");
let bellb = document.getElementById("bellb");
let bellr = document.getElementById("bellr");
let bellheader = document.getElementById("bellheader");

bellhr.style.display = "none";
bellr.style.display = "none";

bellheader.addEventListener("click", () => toggleData(bellhb));
bellheader.addEventListener("click", () => toggleData(bellhr));
bellheader.addEventListener("click", () => toggleData(bellb));
bellheader.addEventListener("click", () => toggleData(bellr));

function toggleData(item) {
    if(item.style.display === "none"){
        item.style.display = "block";
    } else {
        item.style.display = "none";
    };
};