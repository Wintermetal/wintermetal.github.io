var yoink = console.log;
yoink("Hello there!");
yoink("");
yoink("General Kenobi!");
yoink("You are a bold one!");

function sum(x, y){
    if(isNaN(x) || isNaN(y)) {
        return "Antaisitkos vähän numeroita?";
    } else {
        return Number(x)+Number(y);
    };
};

yoink(sum(42000, 69));
yoink(sum());
yoink(sum("150","2"));

yoink("---=Tehtävä 1=---");
function hello(name) {
    return `good afternoon ${name}. How have you been today?`;
}
yoink(hello("sir"));
yoink(hello("madam"));

yoink("-=Tehtävä 2=-");
function power(x) {
    return Math.pow(x, 2);
}
yoink(power(4));

yoink("---=Tehtävä 3=---");
function lolisareforheadpats(age) {
    if(age <= 18){
        yoink("Alaikäinen");
    } else {
        yoink("Täysikäinen");
        if(age==69){
            yoink("nice");
        };
    };
};
lolisareforheadpats(10);
lolisareforheadpats(20);
lolisareforheadpats(69);

yoink("---=Tehtävä 4=---")
function big(x, y) {
    if(x < y) {
        return `${y} is bigger than ${x}.`
    } else {
        return `${x} is bigger than ${y}.`
    }
};
yoink(big(1, 2));
yoink(big(501, 66));

yoink("---=Tehtävä 5=---");
function illuminati(x, y) {
    var vastaus = x * y /2;
    return Math.round(vastaus * 10) /10;
};
yoink(illuminati(5, 2));
yoink(illuminati(5, 3));

yoink("---=Tehtävä 6=---");

function div(jaettava, jakaja) {
    if(jakaja == 0) {
        return `Jakaja ei voi olla 0`
    } else{
        return jaettava / jakaja
    };
};
yoink(div(4, 2));
yoink(div(4, 0));

yoink("---=Tehtävä 7=---");

function colour(ap) {
    if(ap >= 380 && ap <= 450) {
        return `Violet`
    } else if(ap > 450 && ap <= 490) {
        return `Blue`
    } else if(ap > 490 && ap <= 560) {
        return `Green`
    } else if(ap > 560 && ap <= 590) {
        return `Yellow`
    } else if(ap > 590 && ap <= 630) {
        return `Orange`
    } else if(ap > 630 && ap <= 760) {
        return `Red`
    } else {
        return `I can't see!`
    };
};

yoink(colour(490));
yoink(colour(750));
yoink(colour(910));

yoink("---=Tehtävä 8=---");

function cab(pp, km) {
    if(pp == 1 || pp == 2) {
        return km * 1.6 + 5.40;
    } else if(pp == 3 || pp == 4) {
        return km * 1.9 + 5.40;
    } else if(pp == 5 || pp == 6) {
        return km * 2.0 + 5.40;
    } else if(pp > 6) {
        return km * 2.2 + 5.40;
    } else {
        return `ERROR 467: No one went for ride!`
    };
};

yoink(cab(1, 200));
yoink(cab(200, 1));

yoink("---=Tehtävä 9=---");

function rund(num) {
    return Math.round(num * 1) /1;
}

yoink(rund(5.65));
yoink(rund(8.2546));

yoink("---=Tehtävä 10=---");

function hinta(hinta, alvker) {
    if(hinta >= 100 && hinta <= 200) {
        return hinta * 0.95 * alvker
    } else if(hinta >= 200 && hinta < 500) {
        return hinta * 0.9 * alvker
    } else if(hinta >= 500) {
        return hinta * 0.85 * alvker
    } else {
        return `You've picked the wrong price fool!`
    };
};

yoink(hinta(358, 1.24));
yoink(hinta(666, 1.24));
yoink(hinta(166, 1.24));

// © Lauri Särkioja 2020