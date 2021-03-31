var check = "zain  ramzan"
var mesglength = check.length;
for ( var i = 0; i< mesglength; i++){
	if( mesglength.slice(i, i + 2) === "  "){
		alert("Double Space Present in Your Message !")
	}
	else{document.write("Double Space Present in Your Message !")}
}