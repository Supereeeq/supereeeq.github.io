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
        else{
            const odpowiedz = document.createElement("div");
            odpowiedz.id = ("odpowiedz");
            odpowiedz.classList.add ("odpowiedz");
            odpowiedz.innerText = `${item}`;
            quiz.appendChild(odpowiedz);
        }
    });
}
