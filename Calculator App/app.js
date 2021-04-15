





function getNum(nm){
	var result = document.getElementById("result");
	result.value += nm;
}


function clearResult(){
	var result = document.getElementById("result")
	result.value = "";
}

function getResult(){
	var result = document.getElementById("result")
	result.value = eval(result.value)

	
}