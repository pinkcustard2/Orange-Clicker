if (localStorage.getItem("achievementsEarned") === null) {
	var achievementsEarned = [];
	for(var i = 0; i < 499; i++){
		achievementsEarned.push(false);
	}
}
else{
	var achievementsEarned = JSON.parse(localStorage.getItem("achievementsEarned"));
}

achievementsEarned[0] = true;
achievementsUpdate("achievement0");

function achievementsUpdate(elementId){
	var El = document.getElementById(elementId);
	El.innerHTML = "Earned"
	localStorage.setItem("achievementsEarned", JSON.stringify(achievementsEarned));
}

if (achievementsEarned[1] == true){
	achievementsUpdate("achievement1");
}

if (achievementsEarned[2] == true){
	achievementsUpdate("achievement2");
}

if (achievementsEarned[3] == true){
	achievementsUpdate("achievement3");
}


if (achievementsEarned[4] == true){
	achievementsUpdate("achievement4");
}

if (achievementsEarned[5] == true){
	achievementsUpdate("achievement5");
}

if (achievementsEarned[6] == true){
	achievementsUpdate("achievement6");
}

if (achievementsEarned[7] == true){
	achievementsUpdate("achievement7");
}

if (achievementsEarned[8] == true){
	achievementsUpdate("achievement8");
}

if (achievementsEarned[9] == true){
	achievementsUpdate("achievement9");
}