var orangeTotalEl = document.getElementById("Oranges");
var clickPowerEl = document.getElementById("ClickPower");
var OPSEl = document.getElementById("OPS");
/*var news = [
	"You enjoy making oranges but nobody likes them",
	"You have discovered a new way to make oranges quicker",
	"Your family enjoys your oranges",
	"Your road enjoys your oranges",
	"Your town enjoys your oranges",
	"Scientists wonder how you produce oranges so quickly",
];*/




		localStorage.removeItem("dismissed");


if (localStorage.getItem("OPS") === null) {
	var OPS = 0; 
}
else{
	var OPS = parseInt(localStorage.getItem("OPS"));
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

if (localStorage.getItem("achievementsEarned") === null) {
	var achievementsEarned = [];
	for(var i = 0; i < 499; i++){
		achievementsEarned.push(false);
	}
}
else{
	var achievementsEarned = JSON.parse(localStorage.getItem("achievementsEarned"));
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

updateOranges();

updateClickPower();

updateOPS();

//orangeClicked();

function orangeClicked() {
	oranges+=clickPower;
	updateOranges();
}

function upgradeClickPower(upgradeAmount, price, elementId, requiredClickPower) {
	if (oranges >= price && clickPower >= requiredClickPower){
		clickPower+=upgradeAmount;
		oranges-= price;
		updateOranges();
		localStorage.setItem("clickPower", clickPower);
		hide(elementId);
		updateClickPower();
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
	oranges+=OPS;
	updateOranges();
}

function updateOranges(){
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
	localStorage.setItem("oranges", oranges);
	document.title = "Oranges: " + oranges;
	if (oranges >= 1 && achievementsEarned[1] == false){
		achievementsEarned[1] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Getting Started'. View the achievements menu to see all the other achievements.");
	}
	if (clickPower >= 1 && achievementsEarned[2] == false){
		achievementsEarned[2] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Getting An Upgrade'. Collect more oranges or buy more upgrades to receive more achievements.");
	}
	if (oranges >= 250 && achievementsEarned[3] == false){
		achievementsEarned[3] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'A Crate Full Of Oranges'. The next one will be a bit harder.");
	}
	if (oranges >= 2500 && achievementsEarned[4] == false){
		achievementsEarned[4] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'A Truck Full Of Oranges'.");
	}
	if (oranges >= 10000 && achievementsEarned[5] == false){
		achievementsEarned[5] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'A Ton Of Oranges'.");
	}
	if (clickPower >= 15 && achievementsEarned[6] == false){
		achievementsEarned[6] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Scientists Are Interested'.");
	}
}

function updateClickPower(){
	clickPowerEl.innerHTML = "Click Power: " + clickPower;
}

function updateOPS(){
	OPSEl.innerHTML = "Oranges Per Second: " + OPS;
}

function resetProgress(){
	alert("hi");
	if (confirm("Are you sure you want to reset. This cannot be undone.")) {
		localStorage.removeItem("oranges");
		localStorage.removeItem("clickPower");
		localStorage.removeItem("OPS");
		localStorage.removeItem("achievementsEarned");
		location.reload();
	}
}


setInterval(harvestOranges,1000);


