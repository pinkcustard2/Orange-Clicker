if (localStorage.getItem("eggSize") === null) {
	var eggSize = 5000;
}
else{
	var eggSize = parseInt(localStorage.getItem("eggSize"));
}

var eggEl = document.getElementById("egg");
var orangeTotalEl = document.getElementById("Oranges");

var oranges = 0;
updateOranges(0);

eggEl.width = (eggSize / 100).toString();

function eggGrow(growBy, cost){
	if (oranges >= cost){
		eggSize += growBy * 100;
		eggEl.width = (eggSize / 100).toString();
		updateOranges(-cost);
		localStorage.setItem("eggSize", eggSize);
	}
	else {
		alert("You don't have enough oranges to do this. Try one of the smaller amounts or save up some more oranges.");
	}
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
	localStorage.setItem("oranges", oranges);
	orangeTotalEl.innerHTML = "Oranges: " + oranges;
}