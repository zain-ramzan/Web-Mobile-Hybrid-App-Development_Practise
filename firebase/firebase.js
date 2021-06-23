var email = document.getElementById('email');
var pass = document.getElementById("password")
function signup(){
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((result) => {
        console.log("Result Message ==>",result);
        window.location = "home.html"

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
    email.value = ""
    pass.value = ""
}


//FOR LOGIN USER
var em = document.getElementById('l-email');
var pas = document.getElementById("l-password")
function login(){
    firebase.auth().signInWithEmailAndPassword(em.value, pas.value)
    .then((result) => {
        console.log("Result Message ==>",result);
        window.location = "home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
    em.value = ""
    pas.value = ""
}

var card = document.getElementById("container");

card.style.backgroundColor = "goldenrod"
card.style.color = "white"
card.style.margin = "30px auto"
card.style.borderRadius = "10px"
card.style.width = "50%"
// card.style.height = "500px"
var main_content = document.createElement("p")
var main_text = document.createElement("h1")
var name_text = document.createTextNode("Name:")
main_text.appendChild(name_text)

var main_email = document.createElement("h1")
var email_text = document.createTextNode("Email:")
main_email.appendChild(email_text)


main_content.style.padding = "30px 50px"

main_content.appendChild(main_email)
main_content.appendChild(main_text)

main_content.style.display = "display-block"
// main_content.style.margin = "100px 50px"

container.appendChild(main_content)

console.log(main_content);