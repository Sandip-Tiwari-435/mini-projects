let remarks = ["I sincerely hope the next one gives u trouble","dont let akash barman distract u from the mega links.<br> way to go","Are you kidding me!", "Lol u did it", "u r not that useless", "freaking genius", "wait what!"];
let curses=["learn something from kaushikee. she is a player u arent","hahaha woman","come back again after having some horlicks","learn some determination skills from akash chetia<br>then come again","learn some gaming skills from raunak\nthen come again","i think cursors are just not your thing"];
let winremark = remarks[Math.floor(Math.random() * (remarks.length))];
let loseremark = curses[Math.floor(Math.random() * (curses.length))];

if(document.title=='Level 5') winremark="What if we remove the guide";
if(document.title=='Level 7') winremark="Think u can do it blindly";
if(document.title=='Level 9') winremark="Gotta smoke some cigarette coz u f***** me up.<br> Heck u won. u r a genius";

let left = 0;
let path = 0;
let right = 0;
var block = 0;


var l = document.getElementById('left-div');
var p = document.getElementById('path');
var r = document.getElementById('right-div');
var b = document.getElementById('container');
var results = document.getElementById('results');
var text = document.getElementById('text');
var next = document.getElementById('next');
var again = document.getElementById('again');
var all = document.getElementById('all');

b.addEventListener("mouseenter", function () { block = 0; })
b.addEventListener("mouseleave", function () { if(left==1&&right!=1) result(0); left = 0; right = 0; path = 0; block = 1; })


l.addEventListener("mouseenter", function () { if (block == 0) { console.log("You"); left = 1; } })
p.addEventListener("mouseenter", function () { if (block == 0 && left == 1) { console.log("You1"); path = 1; } })
r.addEventListener("mouseenter", function () { if (block == 0 && left == 1 && path == 1) { console.log("You2"); result(1);right=1;} })

function result(x){
    if(x==1){results.style.cssText = "display:block"; text.innerHTML = winremark; b.style.cssText = "display:none;"}
    else {next.style.display='none';again.style.display='inline';all.style.display='inline';results.style.cssText = "display:block"; text.innerHTML = loseremark; b.style.cssText = "display:none;"}
}
