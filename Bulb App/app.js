	function onBulb() {
		var bulb = document.getElementById("bulb");
		bulb.src = "onBulb.jpg"
	}

	function offBulb() {
		var bulb = document.getElementById("bulb");
		bulb.src = "offBulb.jpg"
	}




function bulb() {
	var btn = document.getElementById("btn");

	if(btn.innerHTML === "ON"){
		onBulb();
		btn.innerHTML = "OFF"
	}else{
		offBulb();
		btn.innerHTML = "ON"
	}
}

