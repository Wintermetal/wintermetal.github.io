var yoink = console.log;

let ship = [
    {   class: "Illustrious-class",
        ship1: "HMS Illustrious",
        ship2: "HMS Victorious",
        ship3: "HMS Furious"
    },
    {   class: "King George-class",
        ship1: "HMS King George V",
        ship2: "HMS Prince of Wales",
        ship3: "HMS Duke of York"
    },
    {   class: "Laforey-Class",
        ship1: "HMS Laforey",
        ship2: "HMS Legion",
        ship3: "HMS Lance"
    },
    {   class: "Admiral-class",
        ship1: "HMS Hood"

    },
    {   class: "Revenge-class",
        ship1: "HMS Revenge",
        ship2: "HMS Royal Sovereign",
        ship3: "HMS Royal Oak"
    }];

    let shipList = document.getElementById("shiplist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newShipDiv(ship){
        let myDiv = document.createElement("div");
        myDiv.className = "ship";
    
        let myTitle = newTextElem(ship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#ff4500"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(ship);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    ship.forEach(ship => {
        let elem = newShipDiv(ship);
        shipList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(ship){
        let myDiv = document.createElement("div");
    
        let myFlagShip = newTextElem("Class flagship: " + ship.ship1, "p");
        let myShip2 = newTextElem(ship.ship2, "p");
        let myShip3 = newTextElem(ship.ship3, "p");


        myDiv.append(myFlagShip, myShip2, myShip3);

        return myDiv;
    };

    function toggleData(item) {
        if(item.style.display === "none"){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        };
    };