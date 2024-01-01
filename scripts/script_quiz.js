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


