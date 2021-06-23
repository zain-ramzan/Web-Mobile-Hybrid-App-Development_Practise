// document.write(`<h1>------------------------- Template Literals-------------------------</h1>`)


// let fname = "Zain";
// let lname = "Ramzan"
// document.write(`My name is ${fname} ${lname} <br> <br> `)
// //e.g firebase.database().ref(`school/class/section/rollno/name`)  


// let data = {
//         "id": 1,
//         "name": "Bulbasaur",
//         "base_experience": 64,
//         "height": 7,
//         "is_default": true,
//         "order": 1,
//         "weight": 69
// };
// document.write(`<h3> The name of seller is ${data.name}, his experience is ${data.base_experience}. His weight is ${data.weight}.</h3>`)
`
`

// document.write(`<h1>------------------------- Spread Operators-------------------------</h1>`)



// var teacher1 = ["Zia Khan", "Aamir Pinger"];
// var teacher2 = ["Daniya Nagori", "Mohsin", "Ameen"];

// //If we want to merge both arry then
// var mergeTeacher = teacher1.concat(teacher2);
// document.write(mergeTeacher);
// document.write("<br><br><br>")
// //If we want to add 1st arry into 2nd arry then
// var companies1 = ["Google", " Microsoft"]
// var companies2 = [...companies1, " facebook"]
// document.write(companies2)


// document.write(`<h1>------------------------- Object Destructuring -------------------------</h1>`)


// let studentDetaile = {
//         sname: "Zain Ramzan",
//         school: "PIAIC",
//         rollno: "1234"
// }

// let { sname, school, rollno } = studentDetaile;
// document.write(sname, `<br>`, school, `<br>`, rollno)


// document.write(`<h1>------------------------- Array Destructuring -------------------------</h1>`)



// let arr = ["Zain", "Hamza", "Wahab"];
// let [name1, name2, name3] = arr;
// document.write(name1)


// document.write(`<h1>------------------------- Ternary Operators -------------------------</h1>`)



// var shop = "close"
// //Same like if else statement
// var check = shop == "open" ? "You can purchasing! Shop is open." : "Sorry! You cannot purchasing. Shop is close."
// document.write(check)

// //anothe ternary operator
// var status = true;
// var check = status && "Zain Ramzan"
// document.write(`<br>`, check)


console.log(`------------------------- Promise -------------------------`)

// var promise = new Promise(function (reslove, reject) {
//         var shop = "Open"
//         if (shop == "Open") {
//                 reslove("Wellcome! You can purchasing. Shop is OPEN.")
//         }
//         else {
//                 reject("Very Sorry! You cannot purchasing. Shop is CLOSE.")
//         }
// })
// promise.then(function (data) {
//         document.write("This is Reslove ==>  ", data);
// })
//         .catch(function (error) {
//                 document.write("This is Error ==>  ", error);
//         })


async function getData() {
        let promise = new Promise(function (resolve, reject) {

                fetch('https://jsonplaceholder.typicode.com/todos/1')
                        .then(response => response.json())
                        .then(function (data) {
                                resolve(data)
                        })
                        .catch(function (error) {
                                reject(error)
                        })
        })
        // promise
        //         .then(function (data) {
//                 console.log("Resullt ===>",data);

//         })
//         .catch(function (error) {
        //                 console.log("Error ===>",error);
        //         })
        
        
        
        //SHORT METHOD....comment the above line(106-113)
        let data = await promise;
        console.log(data);
        
}
getData()









// document.write(`<h1>------------------------- Function Expressions -------------------------</h1>`)


// let func = function () {
//         document.write("This is the Function which are stored in the variable!")
// }
// func();



// document.write(`<h1>------------------------- Arrow Function -------------------------</h1>`)


//                 let arrow1 = nm => {
//                         document.write(`Hi ${nm}! <br><br>`)
//                 }
//                 arrow1("PIAIC")

//                 //we can also write as
//                 let arrow = (name1,name2) => {
//                         document.write(`Hello ${name1} and ${name2}! <br><br>`)
//                 }
//                 arrow("Zain Ramzan","Hamza")

//                 //use of Return
//                 let hello = _ =>{
//                         return "Zain Ramzan Gorsi <br><br>"
//                 }
//                 document.write(hello())

//                 //Arrow function also use as
//                 let nm = () => "Zain Ramzan"
//                 document.write(nm())



// document.write(`<h1>------------------------- Callback Function -------------------------</h1>`)


//                 let getData =(render_data)=>{
//                         setTimeout(()=>render_data("Zain Ramzan"),3000)
//                 }
//                 let render_data = (nm) =>{
//                         document.write(nm)
//                 }
//                 getData(render_data)


// document.write(`<h1>------------------------- Filtering -------------------------</h1>`)


// let nm = [{name: "Zain Ramzan", age: 20},{name: "Hamza",age: 25},{name: "Saad",age:  15}];

// let filter = nm.filter(a=>a.age <= 20)
// console.log(filter);


// document.write(`<h1>------------------------- Searching -------------------------</h1>`)


// var nm = "Zain";
// let search = "Z";

// if(nm.startsWith(search)){
//         console.log(nm);
// }
// else{
//         console.log("Error");
// }


// document.write(`<h1>------------------------- Array Map -------------------------</h1>`)


//let nameArray = [2,3,4,5,6,7,8,9]
//                 console.log(nameArray);
//                 document.write(nameArray,`<br><br>`)

//                 let multiply_Array = nameArray.map(a => a*2)
//                 console.log(multiply_Array);
//                 document.write(multiply_Array)




// function Student (name,email){
//         this.name = name;
//         this.email = email;
// }

// 	let student1 = new Student("Zain","zain@gmail.com")
//        console.log(student1)




// console.log("======================  CONSTRUCTOR  ======================");

// class Student {
//         constructor(name, email) {
//                 this.name = name;
//                 this.email = email;
//         }
// }


// class Institude extends Student {
//         constructor(name, email, institude) {
//                 super(name, email);
//                 this.institude = institude
//         }
// }




// let student1 = new Institude("Zain", "zain@gmail.com", "PIAIC");
// console.log(student1);



