var yoink = console.log;

// Tehtävä 1 //

var ship = [
    {   
        class: "Leaper-class",
    },
    {   
        class: "Komodo-class",
    },
    {   
        class: "Laden-class",
    },
    {   
        class: "M-class",
    },
    {   
        class: "S-class",
    }];

    var shipList = document.getElementById("shiplist");

    function newTextElem(text, type){
        var myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newShipDiv(ship){
        var myDiv = document.createElement("div");
        myDiv.className = "ship";
    
        var myTitle = newTextElem(ship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("click", () => allmighty(myTitle));

        return myDiv;
    };

    var nappi = document.createElement("button"); 
    nappi.setAttribute("value", "reset"); 
    nappi.addEventListener("click", () => back());

    ship.forEach(ship => {
        var elem = newShipDiv(ship);
        shipList.appendChild(elem);
/*
        function back() {
            yoink("pitäisi toimia");
            var list = document.getElementsByClassName("ship");
            yoink(list);
            list.style.display = "block";
            list.style.color = "#000000";
        }
*/
    });

    function allmighty(elem) {
        if(elem.style.color === "rgb(255, 69, 0)") {
            elem.style.display = "none";
        } else {
            elem.style.color = "#ff4500";
        };
    };

    function reload() {
        location.reload(true);
    };
/*
    var nappi = document.createElement("button"); 
    nappi.setAttribute("value", "reset"); 
    nappi.addEventListener("click", () => back());
    
    function back() {
        yoink("pitäisi toimia");
        var list = document.getElementsByClassName("ship");
        yoink(list);
        list.style.display = "block";
        list.style.color = "#000000";
    }
*/
// Tehtävä 2 //

    var beans = [
        {   title: "Beans",
            text: "Heinz beans",
            kuva:"https://wintermetal.github.io/tin_of_beans.jpg",
        },
        {   title: "Acog",
            text: "Trijicon Advanced Combat Optical Gunsight",
            kuva:"https://wintermetal.github.io/siege/att/acog.jpg",
        },
        {   title: "Russian Acog",
            text: "PKA-S",
            kuva:"https://wintermetal.github.io/siege/att/r_acog.jpg",
        },
        {   title: "Reflex",
            text: "Trijicon rmr",
            kuva:"https://wintermetal.github.io/siege/att/reflex.jpg",

        },
        {   title: "Russian Reflex",
            text: "OKP-7",
            kuva:"https://wintermetal.github.io/siege/att/r_reflex.jpg",
        }];
    
        var beansList = document.getElementById("beanslist");
    
        function newTextElem(text, type){
            var myElem = document.createElement(type)
            myElem.textContent = text;
            return myElem;
        };

        function newBeansDiv(beans){
            var myDiv = document.createElement("div");
            myDiv.className = "beans";
        
            var myTitle = newTextElem(beans.title,"H3");
        
            myDiv.append(myTitle);
    
            myTitle.addEventListener("mouseover", () => toggleData(myInfoDiv));
            myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#ff4500"));
            myTitle.addEventListener("mouseout", () => toggleData(myInfoDiv));
            myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));
    
            var myInfoDiv = newBeansInfoDiv(beans);
            myDiv.append(myTitle, myInfoDiv);
        
            myInfoDiv.style.display = "none";
    
            return myDiv;
        };
    
        beans.forEach(beans => {
            var elem = newBeansDiv(beans);
            beansList.appendChild(elem);
        });
    
        function changeColor(elem, color){
            elem.style.color = color;
        };
    
        function newBeansInfoDiv(beans){
            var myDiv = document.createElement("div");
        
            var myText = newTextElem(beans.text, "p");

            var myImage = document.createElement("img");
            myImage.src = beans.kuva;
            
            myDiv.append(myText, myImage);
            
            return myDiv;
        };
    
        function toggleData(item) {
            if(item.style.display === "none"){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            };
        };

// Tehtävä 3 //

function stuff() {
    var laiva = prompt('Anna Tekstiä:');

    var IJNship = [
    {
        class: laiva
    }];

    var IJNshipList = document.getElementById("IJNshipList");

    function newTextElem(text, type) {
        var myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newIJNShipDiv(IJNship) {
        var myDiv = document.createElement("div");
        myDiv.className = "IJNship";

        var myTitle = newTextElem(IJNship.class,"p")
    
        myDiv.append(myTitle);

        return myDiv;
    };

    IJNship.forEach(IJNship => {
        var elem = newIJNShipDiv(IJNship);
        IJNshipList.appendChild(elem);
    });
};

// Tehtävä 4 //

var spot = document.getElementById("formspot"); 
            
// Create a break line element 
var br = document.createElement("br");  
function formmaker() { 
            
// Create a form synamically 
var form = document.createElement("form"); 
form.setAttribute("method", "post"); 
form.setAttribute("action", ""); 

// Create an input element for Full Name 
var name = document.createElement("input"); 
name.setAttribute("id", "FullName"); 
name.setAttribute("type", "text"); 
name.setAttribute("name", "FullName"); 
name.setAttribute("placeholder", "Full Name"); 

// Create an input element for date of birth 
var phone = document.createElement("input"); 
phone.setAttribute("id", "phone"); 
phone.setAttribute("type", "text"); 
phone.setAttribute("name", "phone"); 
phone.setAttribute("placeholder", "phone"); 

// Create an input element for emailID 
var mail = document.createElement("input"); 
mail.setAttribute("id", "email");
mail.setAttribute("type", "text"); 
mail.setAttribute("name", "email"); 
mail.setAttribute("placeholder", "E-Mail"); 

    // create a submit button 
    var submit = document.createElement("input"); 
    submit.setAttribute("type", "reset"); 
    submit.setAttribute("value", "Submit"); 
    submit.addEventListener("click", () => hide(spot));
              
    // Append the full name input to the form 
    spot.appendChild(name);  
              
    // Inserting a line break 
    spot.appendChild(br.cloneNode());  
              
    // Append the phone to the form 
    spot.appendChild(phone);  
    spot.appendChild(br.cloneNode());  
              
    // Append the email to the form 
    spot.appendChild(mail);  
    spot.appendChild(br.cloneNode());  
              
    // Append the submit button to the form 
    spot.appendChild(submit);  

    document.getElementsByTagName("body")[0] 
    .appendChild(spot); 
};
    
function hide(spot) {
    yoink(spot);
        if (document.getElementById("FullName").value === "") {
        alert("Plese enter your name.");
    } else if (document.getElementById("phone").value === "") {
        alert("Please enter your phone number.");
    } else if (document.getElementById("email").value === "") {
        alert("Please enter your email address.");
    } else {
        spot.style.display = "none";
        alert("Thank you for your co-operation!");
    };
};
/*
function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}
*/