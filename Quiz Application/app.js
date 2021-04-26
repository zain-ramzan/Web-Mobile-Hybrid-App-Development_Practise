var questionsArray = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];


var questionCount = 0;
var score = 0;

//Option
var option = document.getElementsByClassName("opt");
for (var i = 0; i < option.length; i++) {
    option[i].innerHTML = questionsArray[0].options[i]
}




//function for Question Rendering
function showQuestion(e) {
    //QUESTION
    var questions = document.getElementById("question");
    questions.innerHTML = questionsArray[e].question;
    //ANSWER
    for (var i = 0; i < option.length; i++) {
        option[i].innerHTML = questionsArray[e].options[i].toUpperCase();
    }
}


//Add ACTIVE Class to Options
function activeness(e){
    var activeness = document.getElementsByClassName("opt");
    for(var i=0; i<activeness.length; i++){
        activeness[i].classList.remove("active")
    }
    activeness[e].classList.add("active")
}