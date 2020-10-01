var yoink = console.log;

let HMSship = [
    {   
        class: "Illustrious-class",
        ship1: "HMS Illustrious",
        ship2: "HMS Victorious",
        ship3: "HMS Furious",
        ship4: "HMS Indomitable"
    },
    { 
        class: "Implacable-class",
        ship1: "HMS Implacable",
        ship2: "HMS Indefatigable"
    },
    {   
        class: "Admiral-class",
        ship1: "HMS Hood",
        ship2: "HMS Anson",
        ship3: "HMS Howe",
        ship4: "HMS Rodney"
    },
    {   
        class: "Revenge-class",
        ship1: "HMS Revenge",
        ship2: "HMS Resolution",
        ship3: "HMS Royal Oak",
        ship4: "HMS Royal Sovereign",
        ship5: "HMS Ramillies"
    },
    { 
        class: "Renown-class",
        ship1: "HMS Renown",
        ship2: "HMS Repulse"
    },
    { 
        class: "King George-class",
        ship1: "HMS King George V",
        ship2: "HMS Prince of Wales",
        ship3: "HMS Duke of York",
        ship4: "HMS Anson",
        ship5: "HMS Howe"
    },
    {   
        class: "Nelson-class",
        ship1: "HMS Nelson",
        ship2: "HMS Rodney"
    },
    {
        class: "Queen Elizabeth-class",
        ship1: "HMS Queen Elizabeth",
        ship2: "HMS Warspite",
        ship3: "HMS Valiant",
        ship4: "HMS Barham",
        ship5: "HMS Malaya"
    },
    {
        class: "Ironduke-class",
        ship1: "HMS Iron Duke",
        ship2: "HMS Marlborough",
        ship3: "HMS Benbow",
        ship4: "HMS Emperor of India"
    },
    {
        class: "Southampton-class",
        ship1: "HMS Southampton",
        ship2: "HMS Newcastle",
        ship3: "HMS Sheffield",
        ship4: "HMS Glasgow",
        ship5: "HMS Birmingham"
    },
    {
        class: "Glouchester-class",
        ship2: "HMS Liverpool",
        ship3: "HMS Manchester",
        ship1: "HMS Glouchester"
    },
    {   
        class: "Laforey-class",
        ship1: "HMS Laforey",
        ship2: "HMS Llewellyn",
        ship3: "HMS Lennox",
        ship4: "HMS Loyal",
        ship5: "HMS Legion",
        ship6: "HMS Lawford",
        ship7: "HMS Louis",
        ship8: "HMS Lydiard",
        ship9: "HMS Leonidas",
        ship10: "HMS Lucifer",
        ship11: "HMS Laertes",
        ship12: "HMS Lysander",
        ship13: "HMS Lance",
        ship14: "HMS Lookout",
        ship15: "HMS Laurel",
        ship16: "HMS Liberty",
        ship17: "HMS Lark",
        ship18: "HMS Linnet",
        ship19: "HMS Laverock",
        ship20: "HMS Landrail",
        ship21: "HMS Lochinvar",
        ship22: "HMS Lassoo"
    }];

    let HMSshipList = document.getElementById("HMSshiplist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newHMSShipDiv(HMSship){
        let myDiv = document.createElement("div");
        myDiv.className = "HMSship";
    
        let myTitle = newTextElem(HMSship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(HMSship);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    HMSship.forEach(HMSship => {
        let elem = newHMSShipDiv(HMSship);
        HMSshipList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(HMSship){
        let myDiv = document.createElement("div");
    
        let myShip1 = newTextElem(HMSship.ship1, "p");
        let myShip2 = newTextElem(HMSship.ship2, "p");
        let myShip3 = newTextElem(HMSship.ship3, "p");
        let myShip4 = newTextElem(HMSship.ship4, "p");
        let myShip5 = newTextElem(HMSship.ship5, "p");
        let myShip6 = newTextElem(HMSship.ship6, "p");
        let myShip7 = newTextElem(HMSship.ship7, "p");
        let myShip8 = newTextElem(HMSship.ship8, "p");
        let myShip9 = newTextElem(HMSship.ship9, "p");
        let myShip10 = newTextElem(HMSship.ship10, "p");
        let myShip11 = newTextElem(HMSship.ship11, "p");
        let myShip12 = newTextElem(HMSship.ship12, "p");
        let myShip13 = newTextElem(HMSship.ship13, "p");
        let myShip14 = newTextElem(HMSship.ship14, "p");
        let myShip15 = newTextElem(HMSship.ship15, "p");
        let myShip16 = newTextElem(HMSship.ship16, "p");
        let myShip17 = newTextElem(HMSship.ship17, "p");
        let myShip18 = newTextElem(HMSship.ship18, "p");
        let myShip19 = newTextElem(HMSship.ship19, "p");
        let myShip20 = newTextElem(HMSship.ship20, "p");
        let myShip21 = newTextElem(HMSship.ship21, "p");
        let myShip22 = newTextElem(HMSship.ship22, "p");


        myDiv.append(myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22);

        return myDiv;
    };

    function toggleData(item) {
        if(item.style.display === "none"){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        };
    };

let KMSship = [
    {   
        class: "Bismarck-class",
        ship1: "KMS Bismarck",
        ship2: "KMS Tirpitz"
    },
    {   
        class: "Scharnhorst-class",
        ship1: "KMS Scharnhorst",
        ship2: "KMS Gneisenau"
    },
    {   
        class: "Zerstörer 1934",
        ship1: "KMS Z1 Leberecht Maas",
        ship2: "KMS Z2 Georg Thiele",
        ship3: "KMS Z3 Max Schultz",
        ship4: "KMS Z4 Richard Beitzen"
    },
    {
        class: "Zerstörer 1934A",
        ship1: "KMS Z5 Paul Jacobi",
        ship2: "KMS Z6 Theodor Riedel",
        ship3: "KMS Z7 Hermann Schoemann",
        ship4: "KMS Z8 Bruno Heinemann",
        ship5: "KMS Z9 Wolfgang Zenker",
        ship6: "KMS Z10 Hans Lody",
        ship7: "KMS Z11 Bernd von Arnim",
        ship8: "KMS Z12 Erich Giese",
        ship9: "KMS Z13 Erich koellner",
        ship10: "KMS Z14 Friedrich Ihn",
        ship11: "KMS Z15 Erich Steinbrinck",
        ship12: "KMS Z16 Friedrich Eckoldt"
    },
    {   
        class: "Zerstörer 1936",
        ship1: "KMS Z17 Diether von Roeder",
        ship2: "KMS Z18 Hans Lüdemann",
        ship3: "KMS Z19 Hermann Künne",
        ship4: "KMS Z20 Karl Galster",
        ship5: "KMS Z21 Wilhelm Heidkamp",
        ship6: "KMS Z22 Anton Schmitt"
    },
    {   
        class: "Zerstörer 1936A",
        ship1: "KMS Z23",
        ship2: "KMS Z24",
        ship3: "KMS Z25",
        ship4: "KMS Z26",
        ship5: "KMS Z27",
        ship6: "KMS Z28",
        ship7: "KMS Z29",
        ship8: "KMS Z30"
    },
    {
        class: "Zerstörer 1936A (Mobilmachung)",
        ship1: "KMS Z31",
        ship2: "KMS Z32",
        ship3: "KMS Z33",
        ship4: "KMS Z34",
        ship7: "KMS Z37",
        ship8: "KMS Z38",
        ship9: "KMS Z39"
    },
    {
        class: "Zerstörer 1936B",
        ship1: "KMS Z35",
        ship2: "KMS Z36",
        ship3: "KMS Z43",
        ship4: "KMS Z44",
        ship5: "KMS Z45"
    },
    {
        class: "Zerstörer 1936C",
        ship1: "KMS Z46",
        ship2: "KMS Z47"
    },
    {
        class: "Zerstörer 1942",
        ship1: "KMS Z51"
    },
    {
        class: "Zerstörer 1944",
        ship1: "KMS Z52",
        ship2: "KMS Z53",
        ship3: "KMS Z54",
        ship4: "KMS Z55",
        ship5: "KMS Z56"
    },
    {   
        class: "Elbing-class",
        ship1: "KMS T22",
        ship2: "KMS T23",
        ship3: "KMS T24",
        ship4: "KMS T25",
        ship5: "KMS T26",
        ship6: "KMS T27",
        ship7: "KMS T28",
        ship8: "KMS T29",
        ship9: "KMS T30",
        ship10: "KMS T31",
        ship11: "KMS T32",
        ship12: "KMS T33",
        ship13: "KMS T34",
        ship14: "KMS T35",
        ship15: "KMS T36"
    },
    {  
        class: "Helgoland-class",
        ship1: "SMS Helgoland",
        ship2: "SMS Ostfriesland",
        ship3: "SMS Thüringen",
        ship4: "SMS Oldenburg"
    },
    { 
        class: "Nassau-class",
        ship1: "SMS Nassau",
        ship2: "SMS Westfalen",
        ship3: "SMS Rheinland",
        ship4: "SMS Posen"
    },
    { 
        class: "Kaiser-class",
        ship1: "SMS Kaiser",
        ship2: "SMS Friedrich der Große",
        ship3: "SMS Kaiserin",
        ship4: "SMS Prinzregent luitpold",
        ship5: "SMS König Albert"
    },
    { 
        class: "König-class",
        ship1: "SMS König",
        ship2: "SMS Großer Kurfürst",
        ship3: "SMS Markgraf",
        ship4: "SMS Kronprinz"
    }];

    let KMSshipList = document.getElementById("KMSshiplist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newKMSShipDiv(KMSship){
        let myDiv = document.createElement("div");
        myDiv.className = "KMSship";
    
        let myTitle = newTextElem(KMSship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(KMSship);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    KMSship.forEach(KMSship => {
        let elem = newHMSShipDiv(KMSship);
        KMSshipList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(KMSship){
        let myDiv = document.createElement("div");
    
        let myShip1 = newTextElem(KMSship.ship1, "p");
        let myShip2 = newTextElem(KMSship.ship2, "p");
        let myShip3 = newTextElem(KMSship.ship3, "p");
        let myShip4 = newTextElem(KMSship.ship4, "p");
        let myShip5 = newTextElem(KMSship.ship5, "p");
        let myShip6 = newTextElem(KMSship.ship6, "p");
        let myShip7 = newTextElem(KMSship.ship7, "p");
        let myShip8 = newTextElem(KMSship.ship8, "p");
        let myShip9 = newTextElem(KMSship.ship9, "p");
        let myShip10 = newTextElem(KMSship.ship10, "p");
        let myShip11 = newTextElem(KMSship.ship11, "p");
        let myShip12 = newTextElem(KMSship.ship12, "p");
        let myShip13 = newTextElem(KMSship.ship13, "p");
        let myShip14 = newTextElem(KMSship.ship14, "p");
        let myShip15 = newTextElem(KMSship.ship15, "p");
        let myShip16 = newTextElem(KMSship.ship16, "p");
        let myShip17 = newTextElem(KMSship.ship17, "p");
        let myShip18 = newTextElem(KMSship.ship18, "p");
        let myShip19 = newTextElem(KMSship.ship19, "p");
        let myShip20 = newTextElem(KMSship.ship20, "p");
        let myShip21 = newTextElem(KMSship.ship21, "p");
        let myShip22 = newTextElem(KMSship.ship22, "p");


        myDiv.append(myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22);

        return myDiv;
    };

    function toggleData(item) {
        if(item.style.display === "none"){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        };
    };