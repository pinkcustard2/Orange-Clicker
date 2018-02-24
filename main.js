var orangeTotalEl = document.getElementById("Oranges");
//localStorage.removeItem("oranges");

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

if (localStorage.getItem("upgrades") === null) {
	var upgrades = 0;
}
else{
	var upgrades = parseInt(localStorage.getItem("upgrades"));
}

if(upgrades >= 1) {
	hide("upgrade1");
}

orangeTotalEl.innerHTML = "Oranges: " + oranges;

//orangeClicked();

function orangeClicked() {
	oranges+=clickPower;
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
	localStorage.setItem("oranges", oranges);
}

function upgradeClickPower(upgradeAmount, price, elementId) {
	if (oranges >= price){
		clickPower+=upgradeAmount;
		oranges-= price;
		orangeTotalEl.innerHTML = "Oranges: " + oranges;
		localStorage.setItem("oranges", oranges);
		localStorage.setItem("clickPower", clickPower);
		hide(elementId);
		upgrades++;
		localStorage.setItem("upgrades", upgrades);
	}
	else {
		alert("You do not have enough oranges. You need " + (price - oranges) + " more oranges to buy this.");
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


