var orangeTotalEl = document.getElementById("Oranges");
//localStorage.removeItem("oranges");
//localStorage.removeItem("clickPower");
//localStorage.removeItem("upgrades");


if (localStorage.getItem("orangesPerSec") === null) {
	var orangesPerSec = 0; 
}
else{
	var orangesPerSec = parseInt(localStorage.getItem("orangesPerSec"));
}

if (localStorage.getItem("oranges") === null) {
	var oranges = 0; //The number of oranges the player has
}
else{
	var oranges = parseInt(localStorage.getItem("oranges"));
}

if (localStorage.getItem("dismissed") === null) {
	
}
else{
	dismissText();
}

if (localStorage.getItem("clickPower") === null) {
	var clickPower = 1;
}
else{
	var clickPower = parseInt(localStorage.getItem("clickPower"));
}

if(clickPower >= 2) {
	hide("upgrade1");
}

if (clickPower >= 4){
	hide("upgrade2");
}

if (clickPower >= 6){
	hide("upgrade3");
}

if (clickPower >= 10){
	hide("upgrade4");
}
if (clickPower >= 15){
	hide("upgrade5");
}

updateDisplay();

//orangeClicked();

function orangeClicked() {
	oranges+=clickPower;
	updateDisplay();
}

function upgradeClickPower(upgradeAmount, price, elementId, requiredClickPower) {
	if (oranges >= price && clickPower >= requiredClickPower){
		clickPower+=upgradeAmount;
		oranges-= price;
		updateDisplay();
		localStorage.setItem("clickPower", clickPower);
		hide(elementId);
	}
	else {
		if (clickPower < requiredClickPower){
			alert("You must buy the previous upgrades first.");
		}
		else if (oranges < price){
			alert("You do not have enough oranges. You need " + (price - oranges) + " more oranges to buy this.");
		}
	}
	
}

function dismissText() {
	hide("storageNote");
	localStorage.setItem("dismissed", true);
}

function hide(elementId){
	var El = document.getElementById(elementId);
	El.style.visibility = "hidden";
}

function harvestOranges(){
	oranges+= orangesPerSec;
	updateDisplay();
}

function updateDisplay(){
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
	localStorage.setItem("oranges", oranges);
	document.title = "Oranges: " + oranges;
}

setInterval(harvestOranges,1000);


