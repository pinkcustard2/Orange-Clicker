var orangeTotalEl = document.getElementById("Oranges");
//localStorage.removeItem("oranges");

var oranges = 0; //The number of oranges the player has
if (localStorage.getItem("oranges") === null) {
	var oranges = 0;
}
else{
	oranges = parseInt(localStorage.getItem("oranges"));
}


var clickPower = 1

orangeTotalEl.innerHTML = "Oranges: " + oranges;

//orangeClicked();

function orangeClicked() {
	oranges+=clickPower;
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
	localStorage.setItem("oranges", oranges);
}



function upgradeClickPower(upgradeAmount) {
	clickPower+=upgradeAmount;
}

function dismissText() {
	var storeEl = document.getElementById("storageNote");
	storeEl.style.visibility = "hidden";
}