if (localStorage.getItem("achievementsEarned") === null) {
	var achievementsEarned = [];
	for(var i = 0; i < 499; i++){
		achievementsEarned.push(false);
	}
}
else{
	var achievementsEarned = parseInt(localStorage.getItem("achievementsEarned"));
}

achievementsEarned[0] = true;
achievementsUpdate("achievement0");

function achievementsUpdate(elementId){
	var El = document.getElementById(elementId);
	El.innerHTML = "Earned"
	localStorage.setItem("achievementsEarned", achievementsEarned);
}