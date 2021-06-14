const yoink = console.log;

let bellinfolist = document.getElementById("bellinfolist")

let bellb = document.getElementById("bellb");
let bellr = document.getElementById("bellr");
let bellheader = document.getElementById("bellheader");

bellr.style.display = "none";

bellheader.addEventListener("click", () => toggleData(bellb));
bellheader.addEventListener("click", () => toggleData(bellr));

function toggleData(item) {
    if(item.style.display === "none"){
        item.style.display = "block";
    } else {
        item.style.display = "none";
    };
};