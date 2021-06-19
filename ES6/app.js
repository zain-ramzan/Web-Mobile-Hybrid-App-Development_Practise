//------------------------- Templete Literals-------------------------
document.write(`<h1>------------------------- Template Literals-------------------------</h1>`)


        let fname = "Zain";
        let lname = "Ramzan"
        document.write(`My name is ${fname} ${lname} <br> <br> `)
            //e.g firebase.database().ref(`school/class/section/rollno/name`)  


            let data = {
                "id": 1,
                "name": "Bulbasaur",
                "base_experience": 64,
                "height": 7,
                "is_default": true,
                "order": 1,
                "weight": 69
            };
            document.write(`<h3> The name of seller is ${data.name}, his experience is ${data.base_experience}. His weight is ${data.weight}.</h3>`)


//------------------------- Spread Operators-------------------------
document.write(`<h1>------------------------- Spread Operators-------------------------</h1>`)



        var teacher1 = ["Zia Khan", "Aamir Pinger"];
        var teacher2 = ["Daniya Nagori", "Mohsin", "Ameen"];
                
                //If we want to merge both arry then
                var mergeTeacher = teacher1.concat(teacher2);
                document.write(mergeTeacher );
document.write("<br><br><br>")
                //If we want to add 1st arry into 2nd arry then
                var companies1 = ["Google", " Microsoft"]
                var companies2 = [...companies1," facebook"]
                document.write(companies2)
