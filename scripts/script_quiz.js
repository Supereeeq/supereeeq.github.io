const questions = ["Jak?", "japko", "ananas", "co?", "odpowiedź A"];
showQuestion(questions);

function showQuestion(questions) {
    const quiz = document.getElementById("quiz");

    questions.forEach((item, index) => {
        
        if (index === 0){
            const pytanie = document.createElement("div");
            pytanie.id = ("pytanie");
            pytanie.classList.add = ("pytanie");
            pytanie.innerText = `${item}`;
            quiz.appendChild(pytanie);
        }
        else if (index === 1){
            const odpowiedzInput = document.createElement("input");
            odpowiedzInput.type = "radio";
            odpowiedzInput.classList.add ("odpowiedz1");
            odpowiedzInput.classList.add = ("odpowiedz");
            quiz.appendChild(odpowiedzInput);
            const odpowiedzLabel = document.createElement("label");
            odpowiedzLabel.classList.add ("odpowiedz-label1");
            odpowiedzLabel.classList.add ("odpowiedz-label");
            odpowiedzLabel.innerText = `${item}`;
            quiz.appendChild(odpowiedzLabel);
        }else if (index === 2){
            const odpowiedzInput = document.createElement("input");
            odpowiedzInput.type = "radio";
            odpowiedzInput.classList.add = ("odpowiedz2");
            odpowiedzInput.classList.add = ("odpowiedz");
            quiz.appendChild(odpowiedzInput);
            const odpowiedzLabel = document.createElement("label");
            odpowiedzLabel.id = ("odpowiedz");
            odpowiedzLabel.classList.add ("odpowiedz-label2");
            odpowiedzLabel.classList.add ("odpowiedz-label");
            odpowiedzLabel.innerText = `${item}`;
            quiz.appendChild(odpowiedzLabel);
        }else if (index === 3){
            const odpowiedzInput = document.createElement("input");
            odpowiedzInput.type = "radio";
            odpowiedzInput.classList.add = ("odpowiedz3");
            odpowiedzInput.classList.add = ("odpowiedz");
            quiz.appendChild(odpowiedzInput);
            const odpowiedzLabel = document.createElement("label");
            odpowiedzLabel.id = ("odpowiedz");
            odpowiedzLabel.classList.add ("odpowiedz-label3");
            odpowiedzLabel.classList.add ("odpowiedz-label");
            odpowiedzLabel.innerText = `${item}`;
            quiz.appendChild(odpowiedzLabel);
        }else if (index === 4){
            const odpowiedzInput = document.createElement("input");
            odpowiedzInput.type = "radio";
            odpowiedzInput.classList.add = ("odpowiedz4");
            odpowiedzInput.classList.add = ("odpowiedz");
            quiz.appendChild(odpowiedzInput);
            const odpowiedzLabel = document.createElement("label");
            odpowiedzLabel.id = ("odpowiedz");
            odpowiedzLabel.classList.add ("odpowiedz-label4");
            odpowiedzLabel.classList.add ("odpowiedz-label");
            odpowiedzLabel.innerText = `${item}`;
            quiz.appendChild(odpowiedzLabel);
        }
    });
}
