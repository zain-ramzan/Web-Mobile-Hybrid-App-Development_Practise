var email = document.getElementById('email');
var pass = document.getElementById("password")
function signup(){
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((result) => {
        alert("User Sign Up Successfully!")
        console.log("Result Message ==>",result);
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
        alert("User Login Up Successfully!")
        console.log("Result Message ==>",result);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
    em.value = ""
    pas.value = ""
}