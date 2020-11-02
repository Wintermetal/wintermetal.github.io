var yoink = console.log;
/*
let ma = {wkp: "Ma", date: "21.9.2020", ruoka: "Nakkikastike", lisä: "Peruna", rehu: "Kasvisnakkikastike", juoma: "Maito"};
let ti = {wkp: "Ti", date: "22.9.2020", ruoka: "Jauhelihalasagnette", lisä: "", rehu: "Kasvislasagnette", juoma: "Maito"};
let ke = {wkp: "Ke", date: "23.9.2020", ruoka: "Juustoinenkalakeitto", lisä: "Ruisbuigula", rehu: "Pinaattikeitto", juoma: "Maito"};
let to = {wkp: "To", date: "24.9.2020", ruoka: "Kebabkiusaus", lisä: "", rehu: "Juustoinen kasviskiusaus", juoma: "Maito"};
let pe = {wkp: "Pe", date: "25.9.2020", ruoka: "Broileria kiinalaiseen tapaan", lisä: "Tumma riisi", rehu: "Tahitilainen quornkasviskastike", juoma: "Maito"};
*/

var pirkka = [
    {   wkp: "Ma",
        date: "21.9.2020",
        ruoka: "Nakkikastike",
        lisä: "Peruna",
        rehu: "Kasvisnakkikastike",
        juoma: "Maito",
        kuva:"https://www.kotikokki.net/media/cache/large/recipeimage/large/52d6dc37d074a9ec0e075e0d/original.jpg?1297460445",
//      likes: tykkää
    },
    {   wkp: "Ti",
        date: "22.9.2020",
        ruoka: "Jauhelihalasagnette",
        lisä: "",
        rehu: "Kasvislasagnette",
        juoma: "Maito",
        kuva:"https://images.ctfassets.net/0yf82hjfqumz/4hTiaHiyPSKGgusS2UMwCm/b3d081d87b6e4d5b86ddef29a5940adc/c2af3a02-3156-5be9-9ea9-ca01673638ca.jpg?fit=fill&h=900&q=60&w=1600",
//      likes: tykkää
    },
    {   wkp: "Ke",
        date: "23.9.2020",
        ruoka: "Juustoinenkalakeitto",
        lisä: "Ruisbuigula",
        rehu: "Pinaattikeitto",
        juoma: "Maito",
        kuva:"https://anna.fi/wp-content/uploads/s/f/ruokaohje/947784-kala-kasviskeitto-1024x700.jpg",
//      likes: tykkää
    },
    {   wkp: "To",
        date: "24.9.2020",
        ruoka: "Kebabkiusaus",
        lisä: "",
        rehu: "Juustoinen kasviskiusaus",
        juoma: "Maito",
        kuva:"https://public.keskofiles.com/f/k-ruoka/recipe/4603?w=1440&h=640&fit=crop&q=60",
//      likes: tykkää
    },
    {   wkp: "Pe",
        date: "25.9.2020",
        ruoka: "Broileria kiinalaiseen tapaan",
        lisä: "Tumma riisi",
        rehu: "Tahitilainen quornkasviskastike",
        juoma: "Maito",
        kuva:"https://kohokohta.com/wp-content/uploads/2019/03/KANAAAA.jpg",
//      likes: tykkää
    }];

    varmistus();

    function varmistus() {
        if(tykkää === undefined) {
            var tykkää = 6;
            yoink("varmistettu");
            //yoink(`tykkää = ${tykkää}`);
            document.getElementById("kokoviikko").textContent = tykkää;
            var kokoviikko = document.getElementById("tykkäykset");
            kokoviikko.addEventListener("mouseover", () => changeColor(kokoviikko, "#ff4500"));
            kokoviikko.addEventListener("mouseout", () => changeColor(kokoviikko, "#000000"));
            kokoviikko.addEventListener("click", () => like(tykkää));
            return tykkää;
        } else {
            yoink("varmistusta ei tarvittu");
            //yoink(`tykkää = ${tykkää}`);
            return tykkää;
        };
    };

    var pirkkaList = document.getElementById("pirkkalist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newPirkkaDiv(pirkka){
        var myDiv = document.createElement("div");
        myDiv.className = "pirkka";
    
        var myTitle = newTextElem(pirkka.wkp,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        var myInfoDiv = newInfoDiv(pirkka);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    pirkka.forEach(pirkka => {
        var elem = newPirkkaDiv(pirkka);
        pirkkaList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(pirkka){
        var myDiv = document.createElement("div");
    
        var myDate = newTextElem("Päivämäärä: " + pirkka.date, "p");

        var myRuoka = newTextElem("Pääruoka: " + pirkka.ruoka, "p");

        var myLisä = newTextElem("lisuke: " + pirkka.lisä, "p");

        var myRehu = newTextElem("Kasvisruoka: " + pirkka.rehu, "p");

        var myImage = document.createElement("img");
        myImage.src = pirkka.kuva;
        
        myDiv.append(myDate, myRuoka, myLisä, myRehu, myImage);

        return myDiv;
    };

    function like(tykkää) {
        var tykkää = tykkää + 1;
        document.getElementById("kokoviikko").textContent = tykkää;
        return tykkää;
    };

    function toggleData(item) {
        if(item.style.display === "none"){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        };
    };