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


//you can't change any local data other than oranges from other documents, until their update functions are changed

//localStorage.removeItem("dismissed");


if (localStorage.getItem("OPS") === null) {
	var OPS = 0;
}
else{
	var OPS = parseInt(localStorage.getItem("OPS")) / 10;
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

var date = new Date().getDate();

if (localStorage.getItem("lastLoggedOn") === null) {
	localStorage.setItem("lastLoggedOn", date);
}
else if (localStorage.getItem("lastLoggedOn") != date) {
	alert("Welcome back! You earnt " + (OPS * 100 + clickPower * 50) + " oranges as a daily reward.");
	updateOranges(OPS * 100 + clickPower * 50);
	localStorage.setItem("lastLoggedOn", date);
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

var oranges = 0;

updateOranges(0);

updateClickPower();

updateOPS();

//orangeClicked();

function orangeClicked() {
	updateOranges(clickPower);
}

function upgradeClickPower(upgradeAmount, price, elementId, requiredClickPower) {
	if (oranges >= price && clickPower >= requiredClickPower){
		clickPower+=upgradeAmount;
		updateOranges(-price);
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

function upgradeOPS(upgradeAmount, basePrice, requiredOPS) {
	if (oranges >= (basePrice * OPS) && OPS >= requiredOPS){
		updateOranges(-basePrice * OPS);
		OPS+=upgradeAmount;
		localStorage.setItem("OPS", OPS * 10);
		updateOPS();
	}
	else {
		if (OPS < requiredOPS){
			alert("You need " + (requiredOPS - OPS) + " more oranges per second to buy this.");
		}
		else if (oranges < (basePrice * OPS)){
			alert("You do not have enough oranges. You need " + ((basePrice * OPS) - oranges) + " more oranges to buy this.");
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
	updateOranges(OPS);
}

function updateOranges(changeBy){
	if (localStorage.getItem("oranges") === null) {
		oranges = 0; //The number of oranges the player has
		localStorage.setItem("oranges", oranges);
	}
	else{
		oranges = parseInt(localStorage.getItem("oranges"));
	}
	oranges += changeBy;
	oranges = Math.round(oranges * 10) / 10;
	localStorage.setItem("oranges", oranges);
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
	document.title = "Oranges: " + oranges;
	if (oranges >= 1 && achievementsEarned[1] == false){
		achievementsEarned[1] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Getting Started'. View the achievements menu to see all the other achievements.");
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
	
}

function updateClickPower(){
	clickPowerEl.innerHTML = "Click Power: " + clickPower;
	if (clickPower >= 15 && achievementsEarned[6] == false){
		achievementsEarned[6] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Scientists Are Interested'.");
	}
	if (clickPower > 1 && achievementsEarned[2] == false){
		achievementsEarned[2] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Getting An Upgrade'. Collect more oranges or buy more upgrades to receive more achievements.");
	}
}

function updateOPS(){
	OPSEl.innerHTML = "Oranges Per Second: " + Math.round(OPS * 10) / 10;
	document.getElementById("building1").innerHTML = "+0.1 Oranges Per Second (cost: " + (Math.round(250 * OPS *10)/10) + " oranges)";
	document.getElementById("building2").innerHTML = "+0.5 Oranges Per Second (cost: " + (Math.round(1000 * OPS *10)/10) + " oranges)";
	document.getElementById("building3").innerHTML = "+2 Oranges Per Second (cost: " + (Math.round(2000 * OPS *10)/10) + " oranges)";
	if (OPS >= 0.1 && achievementsEarned[7] == false){
		achievementsEarned[7] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Builder'.");
	}
	if (OPS >= 1 && achievementsEarned[8] == false){
		achievementsEarned[8] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Super Builder'.");
	}
	if (OPS >= 3 && achievementsEarned[9] == false){
		achievementsEarned[9] = true;
		localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
		alert("You got the achievement 'Ultra Builder'.");
	}
}

function resetProgress(){
	if (confirm("Are you sure you want to reset. This cannot be undone.")) {
		localStorage.removeItem("oranges");
		localStorage.removeItem("clickPower");
		localStorage.removeItem("OPS");
		localStorage.removeItem("achievementsEarned");
		location.reload();
	}
}


setInterval(harvestOranges,1000);


