let left = document.getElementById("scrollLewo")
let right = document.getElementById("scrollPrawo")
let poprzedni = document.getElementById("poprzedniaFunkcja")
let następny = document.getElementById("nastepnaFunkcja")
let obecny =  document.getElementById("obecnaFunkcja")
let licznikObrazkow1 = 0
let licznikObrazkow2 = 1
let licznikObrazkow3 = 2
let height = 160;

let wybieranie = 
[
    {
        nazwa:"Kalkulator BMI",
        link:"./podstrona/kalkulatory/bmi_calculator.html",
        innerCode:'<a href="./podstrona/kalkulatory/calories_calculator.html"><div id="BMI" class="BMI front"><p>Kalkulator BMI</p><img src="./images/bmi.jpg" alt="Kalkulator BMI"></div></a>'
    },
    {
        nazwa:"Kalkulator Kalorii",
        link:"./podstrona/kalkulatory/calories_calculator.html",
        innerCode: '<a href="./podstrona/kalkulatory/bmi_calculator.html"><div id="kalorie" class="kalorie front"><p>Kalkulator Kalorii</p><img src="./images/kalorie.jpg" alt="Kalkulator kalorii "></div></a>'
    },
    {
        nazwa:"Kliker",
        link:"./podstrona/clicker.html",
        innerCode: '<a href="./podstrona/gry/clicker.html"><div id="kliker" class="kliker front"><p>Gra Cliker</p><img src="./images/kliker.png" alt="Gra Kliker"></div></a>'
    },
    {
        nazwa:"Quiz",
        link:"./podstrona/quiz.html",
        innerCode: '<a href="./podstrona/quiz.html"><div id="quiz" class="quiz front"><p>Quiz</p><img src="./images/quiz.jpg" alt="Quiz"></div></a>'
    },
    {
        nazwa:"To do",
        link:"./podstrona/to_do.html",
        innerCode: '<a href="./podstrona/to_do.html"><div id="do" class="do front"><p>To do</p><img src="./images/to_do.png" alt="To do"></div></a>'
    },
    {
        nazwa:"Button",
        link:"./podstrona/gry/button.html",
        innerCode:'<a href="./podstrona/gry/button.html"><div id="button" class="button front"><p>Button</p><img src="./images/button.png" alt="Button the game"></div></a>'
    }
]
createFront()

function createFront()
{
    poprzedni.innerHTML = ""
    obecny.innerHTML = ""
    następny.innerHTML = ""

    let lewyObrazek = document.createElement("div")
    lewyObrazek.innerHTML = wybieranie[licznikObrazkow1].innerCode

        let lewyObrazekZdjecie = document.createElement("img")
        lewyObrazekZdjecie.classList.add()

    let obecnyObrazek = document.createElement("div")
    obecnyObrazek.innerHTML = wybieranie[licznikObrazkow2].innerCode

    let przyszlyObrazek = document.createElement("div")
    przyszlyObrazek.innerHTML = wybieranie[licznikObrazkow3].innerCode



    poprzedni.appendChild(lewyObrazek)
    obecny.appendChild(obecnyObrazek)
    następny.appendChild(przyszlyObrazek)
}

left.addEventListener("click", function() {
    licznikObrazkow1--
    licznikObrazkow2--
    licznikObrazkow3--
    if (licznikObrazkow1 < 0) {
        licznikObrazkow1 = wybieranie.length - 1;
    }
    else if (licznikObrazkow2 < 0) {
        licznikObrazkow2 = wybieranie.length - 1;
    }
    else if (licznikObrazkow3 < 0) {
        licznikObrazkow3= wybieranie.length - 1;
    }
    createFront();
});

right.addEventListener("click", function() {
    licznikObrazkow1++;
    licznikObrazkow2++;
    licznikObrazkow3++;
    if (licznikObrazkow1 >= wybieranie.length) {
        licznikObrazkow1 = 0;
    }
    else if (licznikObrazkow2 >= wybieranie.length) {
        licznikObrazkow2 = 0;
    }
    else if (licznikObrazkow3 >= wybieranie.length) {
        licznikObrazkow3 = 0;
    }
    createFront();
});

