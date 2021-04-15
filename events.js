var nam = document.getElementById("nm");

nam.value = "Zain"



function getValue() {
	var para = document.getElementById("para");
	para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor adipisci, ratione quidem corporis id excepturi ullam quis tenetur nam unde magni eum maiores dolore esse necessitatibus error vitae optio!";

}

function removeValue() {
	var para = document.getElementById("para");
	para.innerHTML = "";
}


// --------------------------------
var param = document.getElementById("param");
param.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo dolorum, voluptatum, maxime quas explicabo ipsam totam impedit nihil provident repellat ab, perspiciatis vitae temporibus voluptates delectus perferendis alias asperiores? <span id='less' style='cursor: pointer'></span> <span id='more' style='display: none'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo dolorum, voluptatum, maxime quas explicabo ipsam totam impedit nihil provident repellat ab, perspiciatis vitae temporibus voluptates delectus perferendis alias asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo dolorum, voluptatum, maxime quas explicabo ipsam totam impedit nihil provident repellat ab, perspiciatis vitae temporibus voluptates delectus perferendis alias asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo dolorum, voluptatum, maxime quas explicabo ipsam totam impedit nihil provident repellat ab, perspiciatis vitae temporibus voluptates delectus perferendis alias asperiores?  </span><span onclick='text()' id='btn' style='cursor: pointer; color brown; font-weight: bold'>...See More</span>"

function text(){

	var lessText = document.getElementById("less");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("btn");

	if(lessText.style.display === "none"){
		lessText.style.display = "inline";
		moreText.style.display = "none";
		btnText.innerText = "...See More"
	}else{
		lessText.style.display = "none";
		moreText.style.display = "inline";
		btnText.innerText = "...See Less"
	}


}