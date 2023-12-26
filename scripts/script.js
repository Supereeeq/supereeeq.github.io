/*
wiek.addEventListener(
    "focusout",
    function(item){
        console.log(wiek.value);
    }
)

const imie = document.getElementById("imie");

imie.addEventListener(
    "focusout",
     function(item)
     {
        console.log(imie.value);
     }
    )

*/

const button = document.getElementById("submit");


button.addEventListener(
    "click",
    function(item){
        item.preventDefault();
        const wzrost = document.getElementById("wzrost").value;
        const mWzrost = Number(wzrost) / 100;
        const waga = document.getElementById("waga").value;
        const bmi = Number(waga) / (Number(mWzrost) * Number(mWzrost));

        const result = getResult(bmi)
        console.log(result);
        showResult(result, wzrost, waga);
    }
)

function getResult (bmi){

    switch(bmi > 0) {
        case(Number(bmi) < 16):
            return" You are only bones";
        case(Number(bmi) >= 16)&&(Number(bmi) < 17):
            return "You are slim";
        case(Number(bmi) >= 17)&&(Number(bmi) < 18.5):
            return"You are skinny";
        case((Number(bmi) >= 18.5)&&(Number(bmi) < 24.9)):
            return"You are OK";
        case((Number(bmi) >= 24.9)&&(Number(bmi) < 29.9)):
            return"You are fluffy";
        case((Number(bmi) >= 29.8)&&(Number(bmi) < 34.9)):
            return"You are BIG";
        case((Number(bmi) >= 34.9)&&(Number(bmi) < 39.9)):
            return"You are MONSTER";
        case(Number(bmi) >= 39.9):
            return"You are GORLOCK THE DESTROYER OF WORLDS";
        default:
            return"DEFAULT";
    }

}

function showResult (result) {

    console.log("Wynik", result);
    const score = document.getElementById("wynik");
    score.innerText = ("Wynik: " + result);
    document.getElementById("wynik").classList.add("show-wynik")
}