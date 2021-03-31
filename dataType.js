
var nm = prompt("Enter the Student Name...")




// FOR LOWER CASE
var sName = nm.toLowerCase();
var studentName = ['hamza','saad','zain','ali']




// FOR UPPER CASE
var sName = nm.toUpperCase();
var studentName = ['HAMZA','SAAD','ZAIN','ALI']




// FOR COMMON CASE e.g Zain, Hamza
var firstChar = nm.slice(0,1);
firstChar = firstChar.toUpperCase();
var secondChar = nm.slice(1);
secondChar = secondChar.toLowerCase();

sName = firstChar + secondChar;
document.write(sName + '<br>' + '<hr>');





var studentName = ['Hamza','Saad','Zain','Ali']

for(var i = 0; i < studentName.length; i++){
	if(studentName[i] == sName){
		document.write('Present !'+ '<br>');
	}
	else{document.write('Not Present !' + '<br>')}
}