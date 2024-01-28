let zapytanie = {
    pytanie: "Co?",
    odpowiedz1: "A",
    odpowiedz2: "B",
    odpowiedz3: "C",
    odpowiedz4: "D",
    poprawnaOdpowiedz: "B"
}

let quiz = document.getElementById("quiz")
let submit = document.getElementById("submit")
let numberOfLifes = 0;
let numberOfWins = 0;
showNumberOfLifes(numberOfLifes);
zapytaj();


function zapytaj() {
    if(numberOfLifes !== 0){

        let pytanie = document.createElement("div");
        pytanie.innerText = zapytanie.pytanie;
        pytanie.classList.add("pytanie")
        quiz.appendChild(pytanie);

        let odpowiedz1 = document.createElement("div");
        odpowiedz1.classList.add("odpowiedz");
        quiz.appendChild(odpowiedz1);

            let zawartosc1 = document.createElement("input");
            zawartosc1.setAttribute("type", "radio");
            zawartosc1.setAttribute("name", "odpowiedz")
            zawartosc1.id = "odpowiedz1"
            odpowiedz1.appendChild(zawartosc1)

            let label1 = document.createElement("label");
            label1.setAttribute("for", "odpowiedz1");
            label1.textContent = zapytanie.odpowiedz1;
            odpowiedz1.appendChild(label1)

        let odpowiedz2 = document.createElement("div");
        odpowiedz2.classList.add("odpowiedz");
        quiz.appendChild(odpowiedz2);

            let zawartosc2 = document.createElement("input");
            zawartosc2.setAttribute("type", "radio");
            zawartosc2.setAttribute("name", "odpowiedz")
            zawartosc2.id = "odpowiedz2"
            odpowiedz2.appendChild(zawartosc2)

            let label2 = document.createElement("label");
            label2.setAttribute("for", "odpowiedz2");
            label2.textContent = zapytanie.odpowiedz2;
            odpowiedz2.appendChild(label2)

        let odpowiedz3 = document.createElement("div");
        odpowiedz3.classList.add("odpowiedz");
        quiz.appendChild(odpowiedz3);

            let zawartosc3 = document.createElement("input");
            zawartosc3.setAttribute("type", "radio");
            zawartosc3.setAttribute("name", "odpowiedz")
            zawartosc3.id = "odpowiedz3"
            odpowiedz3.appendChild(zawartosc3)

            let label3 = document.createElement("label");
            label3.setAttribute("for", "odpowiedz3");
            label3.textContent = zapytanie.odpowiedz3;
            odpowiedz3.appendChild(label3)

        let odpowiedz4 = document.createElement("div");
        odpowiedz4.classList.add("odpowiedz");
        quiz.appendChild(odpowiedz4);
        
            let zawartosc4 = document.createElement("input");
            zawartosc4.setAttribute("type", "radio");
            zawartosc4.setAttribute("name", "odpowiedz")
            zawartosc4.id = "odpowiedz4"
            odpowiedz4.appendChild(zawartosc4)

            let label4 = document.createElement("label");
            label4.setAttribute("for", "odpowiedz4");
            label4.textContent = zapytanie.odpowiedz4;
            odpowiedz4.appendChild(label4)

    }
    else
    {
        let healthBar = document.getElementById("healthBar")

        submit.classList.add("noLives")
        healthBar.classList.add("noLives")

    }
}

function showNumberOfLifes () 
{
    if(numberOfLifes !== 0){
        let healthBar = document.getElementById("healthBar")

        healthBar.innerHTML = ""; //Usuwanie zawartości 

        let napisIlosciZyc = document.createElement("div");
        napisIlosciZyc.classList.add("napisIloscZyc")
        napisIlosciZyc.innerText = "Ilość żyć: " + numberOfLifes;
        healthBar.appendChild(napisIlosciZyc);

        if(numberOfLifes > 2)
        {
            let life3 = document.createElement("div");
            life3.classList.add("life3");
            life3.classList.add("life");
            healthBar.appendChild(life3);
        }
        if(numberOfLifes > 1)
        {
            let life2 = document.createElement("div");
            life2.classList.add("life2");
            life2.classList.add("life");
            healthBar.appendChild(life2);
        }
        if(numberOfLifes > 0)
        {
            let life1 = document.createElement("div");
            life1.classList.add("life1");
            life1.classList.add("life");
            healthBar.appendChild(life1);
        }
        if(numberOfLifes < 1)
        {
            console.log("Koniec żyć")
        }  
    }
    else
    {
        let koniec = document.createElement("div");
            koniec.classList.add("koniec");
            koniec.innerText = "Koniec gry"

            let iloscWygranych = document.createElement("div")
            iloscWygranych.classList.add("iloscWygranych");
            iloscWygranych.innerText = "Ilość wygranych to: " + numberOfWins;

            let playAgain = document.createElement("div")
            playAgain.classList.add("playAgain")

            quiz.appendChild(koniec);
            koniec.appendChild(iloscWygranych);
            koniec.appendChild(playAgain);
        
    }
}


submit.addEventListener("click", function() {
    if(numberOfLifes !== 0){
        const radioInputs = document.querySelectorAll('input[type="radio"][name="odpowiedz"]');
    
        let checkedLabelValue = null;

        radioInputs.forEach(function(input) {
            if (input.checked) {
                const label = input.parentElement.querySelector("label");
                checkedLabelValue = label.textContent;
                return;
            }
        });

        if (checkedLabelValue !== null) {
            if (checkedLabelValue === zapytanie.poprawnaOdpowiedz) 
            {
                console.log("Correct answer!");
                numberOfWins ++;

            } 
            else 
            {
                console.log("Incorrect answer!");

                numberOfLifes -= 1;
                showNumberOfLifes(numberOfLifes);
            }
        } 
        else 
        {
            console.log("No input is checked.");

        }
    }
});





/*
// const questions = ["Co wspiera zdrowe kości?", "A) Żelazo", "B) Magnez", "C) Wapń", "D) Potas"];
// showQuestion(questions);


// function showQuestion(questions) {
//     const quiz = document.getElementById("question");

//     questions.forEach((item, index) => {
        
//         if (index === 0){
//             const pytanie = document.createElement("div");
//             pytanie.id = ("pytanie");
//             pytanie.classList.add  ("pytanie");
//             pytanie.innerText = `${item}`;
//             quiz.appendChild(pytanie);
//         }
//         else if (index === 1){
//             const odpowiedzContainer1 = document.createElement("div");
//             odpowiedzContainer1.classList.add("odpowiedzContainer")
//             const odpowiedzInput = document.createElement("input");
//             odpowiedzInput.type = "radio";
//             odpowiedzInput.id = "input1";
//             odpowiedzInput.name = "odpowiedzi"
//             odpowiedzInput.classList.add("odpowiedz1");
//             odpowiedzInput.classList.add("odpowiedz");
//             odpowiedzContainer1.appendChild(odpowiedzInput);
//             const odpowiedzLabel = document.createElement("label");
//             odpowiedzLabel.classList.add ("odpowiedz-label1");
//             odpowiedzLabel.classList.add ("odpowiedz-label");
//             odpowiedzLabel.htmlFor = "input1";
//             odpowiedzLabel.innerText = `${item}`;
//             odpowiedzContainer1.appendChild(odpowiedzLabel);
//             quiz.appendChild(odpowiedzContainer1)
//         }else if (index === 2){
//             const odpowiedzContainer2 = document.createElement("div");
//             odpowiedzContainer2.classList.add("odpowiedzContainer")
//             const odpowiedzInput = document.createElement("input");
//             odpowiedzInput.type = "radio";
//             odpowiedzInput.classList.add ("odpowiedz2");
//             odpowiedzInput.classList.add ("odpowiedz");
//             odpowiedzInput.id = "input2";
//             odpowiedzInput.name = "odpowiedzi"
//             odpowiedzContainer2.appendChild(odpowiedzInput);
//             const odpowiedzLabel = document.createElement("label");
//             odpowiedzLabel.id = ("odpowiedz");
//             odpowiedzLabel.classList.add ("odpowiedz-label2");
//             odpowiedzLabel.classList.add ("odpowiedz-label");
//             odpowiedzLabel.htmlFor = "input2";
//             odpowiedzLabel.innerText = `${item}`;
//             odpowiedzContainer2.appendChild(odpowiedzLabel);
//             quiz.appendChild(odpowiedzContainer2);
//         }else if (index === 3){
//             const odpowiedzContainer3 = document.createElement("div");
//             odpowiedzContainer3.classList.add("odpowiedzContainer")
//             const odpowiedzInput = document.createElement("input");
//             odpowiedzInput.type = "radio";
//             odpowiedzInput.classList.add ("odpowiedz3");
//             odpowiedzInput.classList.add ("odpowiedz");
//             odpowiedzInput.id = "input3"
//             odpowiedzInput.name = "odpowiedzi"
//             odpowiedzContainer3.appendChild(odpowiedzInput);
//             const odpowiedzLabel = document.createElement("label");
//             odpowiedzLabel.id = ("odpowiedz");
//             odpowiedzLabel.classList.add ("odpowiedz-label3");
//             odpowiedzLabel.classList.add ("odpowiedz-label");
//             odpowiedzLabel.htmlFor = "input3"
//             odpowiedzLabel.innerText = `${item}`;
//             odpowiedzContainer3.appendChild(odpowiedzLabel);
//             quiz.appendChild(odpowiedzContainer3);
//         }else if (index === 4){
//             const odpowiedzContainer4 = document.createElement("div");
//             odpowiedzContainer4.classList.add("odpowiedzContainer")
//             const odpowiedzInput = document.createElement("input");
//             odpowiedzInput.type = "radio";
//             odpowiedzInput.classList.add ("odpowiedz4");
//             odpowiedzInput.classList.add ("odpowiedz");
//             odpowiedzInput.id = "input4"
//             odpowiedzInput.name = "odpowiedzi"
//             odpowiedzContainer4.appendChild(odpowiedzInput);
//             const odpowiedzLabel = document.createElement("label");
//             odpowiedzLabel.id = ("odpowiedz");
//             odpowiedzLabel.classList.add ("odpowiedz-label4");
//             odpowiedzLabel.classList.add ("odpowiedz-label");
//             odpowiedzLabel.htmlFor = "input4"
//             odpowiedzLabel.innerText = `${item}`;
//             odpowiedzContainer4.appendChild(odpowiedzLabel);
//             quiz.appendChild(odpowiedzContainer4);
//         }
//     });
// }
hideQuestions();
const quiz = document.getElementById("quiz");

const questionsArray = [
    {
        name: "Ile costam",
        answers: [
            "Jeden",
            "Dwa",
            "Trzy"
        ],
        correct: "Jeden"
    },
    {
        name: "Ile costam 2",
        answers: [
            "Jeden",
            "Dwa",
            "Trzy"
        ],
        correct: "Dwa"
    },
];

function createQuestion(obj) {
    let question = document.createElement("div");
    question.classList.add("question");

    let title = document.createElement("h3");
    title.textContent = obj.name;

    question.appendChild(title)

    return question;
}

function createAnswer(answer) {
    let answerContainer = document.createElement("div");

    let input = document.createElement("input");
    input.type = "radio";
    input.classList.add ("odpowiedz");
    input.name = "odpowiedzi"

    let label = document.createElement("label");
    label.id = ("odpowiedz");
    label.classList.add ("odpowiedz-label");

    label.textContent = answer;

    answerContainer.appendChild(input);
    answerContainer.appendChild(label);
    return answerContainer;
}

function hideQuestions() {
    const hid_answer = document.querySelectorAll(".question");
    console.log(hid_answer);
}

questionsArray.map((obj) => {
    //console.log(obj)
    let hello = createQuestion(obj);

    quiz.appendChild(hello);
    obj.answers.map((ans) => quiz.appendChild(createAnswer(ans)))

    
})



// let questionMap = questionsArray.map((obj) => obj.name);

// console.log(questionMap.len);


// document.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {

//         const checked = document.querySelector("input[type=radio]:checked");
//         const result = document.getElementById("wynik");
//         if(checked.id === "input3")
//         {
//             result.classList.remove("wynik-hide");
//             result.innerText = "Poprawna odpowiedź";
//             result.classList.add("wynik-show");
//         }else
//         {
//             result.classList.remove("wynik-show");
//             result.innerText = "Zła odpowiedź";
//             result.classList.add("wynik-hide");
//         }
//     }
//     else if (event.key === "1")
//     {
//         const input = document.getElementById("input1");
//         input.checked = true;
//     }
//     else if (event.key === "2")
//     {
//         const input = document.getElementById("input2");
//         input.checked = true;
//     }
//     else if (event.key === "3")
//     {
//         const input = document.getElementById("input3");
//         input.checked = true;
//     }
//     else if (event.key === "4")
//     {
//         const input = document.getElementById("input4");
//         input.checked = true;
//     }
//   });

// const button = document.getElementById("submit");

// button.addEventListener("click", function(item)
//     {        
//         const checked = document.querySelector("input[type=radio]:checked");
//         const result = document.getElementById("wynik");
//         if(checked.id === "input3")
//         {
//             result.classList.remove("wynik-hide");
//             result.innerText = "Poprawna odpowiedź";
//             result.classList.add("wynik-show");
//         }else
//         {
//             result.classList.remove("wynik-show");
//             result.innerText = "Zła odpowiedź";
//             result.classList.add("wynik-hide");
//         }
        
//     }
// )

*/