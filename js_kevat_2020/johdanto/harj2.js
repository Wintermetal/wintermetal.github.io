var yoink = console.log;
yoink("-=Tehtävä 1=-");

let pistols = ["Borchardt c93", "Mauser c96", "Mars Automatic", "Bergmann m1896", "Schönberger-Laumann 1892"];
let revolvers = ["Webley Mk VI", "Nagant m1895", "Colt SAA", "MAS Modele 1892", "Pistola a Rotazione Modello 1889"];
let rifles = ["Lebel mle 1886", "Lee-Enfield", "Mosin-Nagant m91", "Mauser m1898 (Gewehr 98)", "Carcano Modello 1891"];

yoink("for-loop:");
for(let i=0; i < pistols.length; i++){
    yoink("-", pistols[i]);
}
yoink("foreach:");
revolvers.forEach(element => {
    yoink("-", element)
});
yoink("tostring:");
yoink(pistols.toString());

yoink("-=Tehtävä 2=-");
rifles.push("Martini-Henry Mk I-IV");
rifles.shift();
for(let i=0; i < rifles.length; i++){
    yoink("-", rifles[i]);
}

yoink("-=Tehtävä 3=-");
let farcry3 = {name: "Jason", lastname: "Brody", email: "jason@bigwangers.co.uk"};
let farcry3bd = {name: "Rex", lastname: "Colt", email: "rex@bigwangers.co.uk"};
let farcry4 = {name: "Ajay", lastname: "Ghale", email: "ajay@bigwangers.co.uk"};
let farcry8 = {name: "Xi", lastname: "Jinping", email: "nalle.puh@kiina.gov"};

function printfarcry(farcry){
    return(`Etunimi: ${farcry.name}\nSukunimi: ${farcry.lastname}\nSähköposti: ${farcry.email}`);
}
yoink(printfarcry(farcry4));

yoink("-=Tehtävä 4=-");

for(let i=0; i < 1; i++){
    yoink(printfarcry(farcry3));
};
for(let i=0; i < 1; i++){
    yoink(printfarcry(farcry3bd));
};
for(let i=0; i < 1; i++){
    yoink(printfarcry(farcry4));
};
for(let i=0; i < 1; i++){
    yoink(printfarcry(farcry8));
};

// © Lauri Särkioja 2020