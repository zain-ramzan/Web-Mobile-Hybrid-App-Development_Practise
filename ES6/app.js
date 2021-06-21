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


        // document.write(`<h1>------------------------- Promise -------------------------</h1>`)

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



        // document.write(`<h1>------------------------- Function Expressions -------------------------</h1>`)


                // let func = function () {
                //         document.write("This is the Function which are stored in the variable!")
                // }
                // func();



        document.write(`<h1>------------------------- Arrow Function -------------------------</h1>`)

                        
                        let arrow1 = nm => {
                                document.write(`Hi ${nm}! <br><br>`)
                        }
                        arrow1("PIAIC")

                        //we can also write as
                        let arrow = (name1,name2) => {
                                document.write(`Hello ${name1} and ${name2}! <br><br>`)
                        }
                        arrow("Zain Ramzan","Hamza")

                        //use of Return
                        let hello = _ =>{
                                return "Zain Ramzan Gorsi <br><br>"
                        }
                        document.write(hello())

                        //Arrow function also use as
                        let nm = () => "Zain Ramzan"
                        document.write(nm())
