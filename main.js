var orangeTotalEl = document.getElementById("Oranges");

var oranges = 0; //The number of oranges the player has

var clickPower = 1

orangeTotalEl.innerHTML = "Oranges: 0";

//orangeClicked();

function orangeClicked() {
	oranges+=clickPower;
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
}



function upgradeClickPower(upgradeAmount) {
	clickPower+=upgradeAmount;
}