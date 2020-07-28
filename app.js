

window.onload = function(){
    showquestion(0)
    start();
}


var myQuestion = [
    {id:1,
    question: "What is The Full Form Meaning Of SMS",
    answer: "Short Message Servise",
    options:[
        "Short Message Service",
        "Simple Message Service",
        "Short Manual Service",
        "Service Message System"
    ]
    },
    {id:2,
        question : "Who is The Founder JavaScript",
        answer: "Brandan Eich",
        options:[
            "Douglas Crockford",
            "Brandan Eich",
            "Chris Beard",
            "Bill Gates"
        ]
        },

        {id:3,
            question: "In Which Year S.M.I.T Was Established",
            answer: "2013",
            options:[
                "2014",
                "2015",
                "2013",
                "2009"
            ]
            },

            {id:4,
                question: "In Which Year JavaScript Was Developed",
                answer: "1995",
                options:[
                    "1990",
                    "1992",
                    "1995",
                    "1999"
                ]
                },

                {id:5,
                    question: "What is The Full Form Meaning of 'OOP'",
                    answer: "Object Oriented Programming",
                    options:[
                        "Object Oriented Programming",
                        "Online Object Programming",
                        "Object Of Programming",
                        "None of The Above"
                    ]
                    },
];


var questionCount = 0;
var points = 10;
function next(){
    validate();
    if(questionCount == myQuestion.length -1){
        alert("Yours Score is " + points + "\n"+ "In " + min + " minutes " +" and " + sec + " seconds.");
        clearInterval(interVal);

    }
    questionCount++ 
    showquestion(questionCount)

}
function validate(){
    let answerUser = document.querySelector("li.active");

    if(answerUser.innerHTML == myQuestion[questionCount].answer){
        points+=10  ;
        console.log(points)
    }

}


function showquestion(count){
    var question = document.getElementById("questions");
    question.innerHTML = `
    <h2>${myQuestion[count].question}</h2>
    <ul class="option-group">
                    <li class="option" onclick="toggleActiveClass(this)">${myQuestion[count].options[0]}</li>
                    <li class="option" onclick="toggleActiveClass(this)">${myQuestion[count].options[1]}</li>
                    <li class="option" onclick="toggleActiveClass(this)">${myQuestion[count].options[2]}</li>
                    <li class="option" onclick="toggleActiveClass(this)">${myQuestion[count].options[3]}</li>
    </ul>`


    
}

function toggleActiveClass(e){
    removeActiveClass();
    e.classList.add("active");
   
}
function removeActiveClass(){
    var z = document.getElementsByClassName("active");
    for(var i = 0; i < z.length; i++ ){
        z[i].classList.remove("active")
}
}
var sec = 0;
var min = 0;
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var interVal;
function timer(){
  sec++;
  seconds.innerHTML = sec;
    if(sec > 59){
        min++
        minutes.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interVal = setInterval(timer, 1000);

}
