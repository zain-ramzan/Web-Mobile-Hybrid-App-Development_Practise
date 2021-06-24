var email = document.getElementById('email');
var user = document.getElementById("username")
var pass = document.getElementById("password")
var card = document.getElementById("container")
function signup() {
  firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((result) => {
      console.log("Result Message ===>", result);

    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
    });


    document.write(`<h1>Name: ${user.value}</h1>`)

    














  email.value = ""
  pass.value = ""
  user.value = ""
}





//FOR LOGIN USER
var em = document.getElementById('l-email');
var pas = document.getElementById("l-password")
function login() {
  firebase.auth().signInWithEmailAndPassword(em.value, pas.value)
    .then((result) => {
      console.log("Result Message ==>", result);
      // window.location = "home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  em.value = ""
  pas.value = ""
}