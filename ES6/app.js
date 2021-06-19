//------------------------- Template Literals-------------------------
let fname = "Zain";
let lname = "Ramzan"
document.write(`My name is ${fname} ${lname} <br> <br> `)


// firebase.database().ref(`school/class/section/rollno/name`)



let data = {
    "id": 1,
    "name": "Bulbasaur",
    "base_experience": 64,
    "height": 7,
    "is_default": true,
    "order": 1,
    "weight": 69
};
console.log(data.name);

document.write(`<h3> The name of seller is ${data.name}, his experience is ${data.base_experience}. His weight is ${data.weight}.</h3>`)

let getData =(string,value)=>{
    console.log(string,value);
}
let text = 'developer';
getData `zain  ${text} `


//------------------------- Template Literals-------------------------
