var yoink = console.log;

let k18info = [
    {
        list: "ERP information",
        slot1: "Dom/Sub/Switch: Mainly sub, but can switch of necessary.",
        slot2: "Turn ons: Sailors, taller men, stronger men, having her head on the side while having sex, being fucked while her body and head aren't in the same place",
        slot3: "Turn offs: Gore, guro, scat, shorter men",
        slot4: "Sexuality: Straight",
        slot5: "Gender Preference: Male (or anyone with a dick)"
    }];

    let k18infoList = document.getElementById("k18infolist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newk18infoDiv(k18info){
        let myDiv = document.createElement("div");
        myDiv.className = "k18info";
    
        let myTitle = newTextElem(k18info.list,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(k18info);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    k18info.forEach(k18info => {
        let elem = newk18infoDiv(k18info);
        k18infoList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(k18info){
        let myDiv = document.createElement("div");
    
        let myslot1 = newTextElem(k18info.slot1, "li");
        let myslot2 = newTextElem(k18info.slot2, "li");
        let myslot3 = newTextElem(k18info.slot3, "li");
        let myslot4 = newTextElem(k18info.slot4, "li");
        let myslot5 = newTextElem(k18info.slot5, "li");

        myDiv.append(myslot1, myslot2, myslot3, myslot4, myslot5);

        return myDiv;
    };

    function toggleData(item) {
        if(item.style.display === "none"){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        };
    };