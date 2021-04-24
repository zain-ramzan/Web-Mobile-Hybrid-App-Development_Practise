
var text = document.getElementById('input-div');
text.style.textAlign = "center"

var input = document.getElementById('text')
input.style.width = "50%"
input.style.height = "30px"
input.style.borderRadius = "5px 5px 5px"
// input.style.backgroundColor = "grey"
input.style.border = "white"


var btn = document.getElementById('btn')
btn.style.width = "60px"
btn.style.borderRadius = "5px 5px 5px"
btn.style.height = "35px"



var bcolor = document.getElementById('mesg')
// bcolor.style.backgroundImage = "linear-gradient(to right, green, grey)"
bcolor.style.color = "white"





function sendMesg() {

	var text = document.getElementById('text');

	var textMessage = document.createTextNode("User Message : " + text.value);
	var h = document.createElement('h4');
	h.appendChild(textMessage)
      h.style.backgroundImage = "linear-gradient(to right, green, grey)"
      h.style.borderRadius = "10px 10px 10px"
      h.style.wordWrap = "normal"


	// var user = document.createText("Your Message:") ;
	// var pEl = document.createElement('p');
	// pEl.appendChild(user)
	// var h = h4, pEl


	var message = document.getElementById('mesg');
	message.appendChild(h);
	message.style.width = "400px"
	message.style.textAlign = "center"


	text.value = "";




}








var input = document.getElementById("text");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		document.getElementById("btn").click();
	}
});