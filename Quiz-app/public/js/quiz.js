function submitData(e){
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    localStorage.setItem("name",name)
    let warn = document.querySelector("#warn");


    if(name.length < 3 || name.length > 20){
        warn.innerHTML = "name should consists 3 to 20 alphabets"
        warn.style.visibility ="visible";
    }
    else{
        warn.style.visibility ="hidden";
        location.href = "quiz.html"
    }
    name = "";
}


const dataBase = [
    {
        question : "The 'function' and 'var' are known as:",
        a : "Keywords",
        b : "Data types",
        c : "Declaration statements",
        d : "Formalities",
        ans : "ans3"
    },
    {
        question : "Javascript is _________ language.",
        a : "Application",
        b : "Scripting",
        c : "Difficult",
        d : "Programming",
        ans : "ans2"
    },
    {
        question : "Output of 2 + '8' is :",
        a : "10",
        b : "6",
        c : "82",
        d : "28",
        ans : "ans4"
    },
    {
        question : "Which built-in method returns the character at the specified index?",
        a : "charAt()",
        b : "getCharAt()",
        c : "characterAt()",
        d : "None of the above",
        ans : "ans1"
    }
    
];


let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let answers = document.querySelectorAll(".answer");

let submit = document.getElementById("submit");

let count = 0;
let score = 0;

const questionLoad = () =>{
   let db = dataBase[count]
   
    question.innerHTML = `${count +1}. ${db.question}`;
    option1.innerText = db.a;
    option2.innerText = db.b;
    option3.innerText = db.c;
    option4.innerText = db.d;
}

questionLoad()


let getUserData = () => {
    let answer;
    answers.forEach((clickOption) => {
        if (clickOption.checked) {
            answer = clickOption.id;
        }
    })
    return answer;
}

const resetSelection = () => {
    answers.forEach((clickOption) => {
        clickOption.checked = false;
    })
}

submit.addEventListener('click', () => {
    const userClicked = getUserData();
    if (userClicked != undefined) {

        if (userClicked == dataBase[count].ans) {
            score ++;
            localStorage.setItem("score",score);
        }
        count++;

        resetSelection();

        if (count < dataBase.length) {

            questionLoad()
        }
        else{
            location.href = "end.html";
           return;
        }

    }
})
