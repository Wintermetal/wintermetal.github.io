function taikanappi() {
    var code = prompt('Insert the 6-digit code:');
    if (code > 100 && code < 400000){
        open("https://nhentai.net/g/" + code,);
    } else {
        location.reload(true);
    }
};
function adbutton() {
    open("./ads/" + (Math.floor(Math.random() * 32)) + ".webp");
};
/*--------------- Snowrunner ---------------*/

// The data/time we want to countdown to
var countDownDate = new Date("May 18, 2021 03:05:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s " 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "Snowrunner has been released on Steam";
}
}, 1000);