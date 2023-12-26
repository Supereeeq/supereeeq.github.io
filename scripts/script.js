const wiek = document.getElementById("wiek");


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


const button = document.getElementById("submit");

const wzrost = document.getElementById("wzrost");

const waga = document.getElementById("waga");

const bmi = Number(waga) / (Number(wzrost) * Number(wzrost));

button.addEventListener(
    "click",
    function(item){
        item.preventDefault();
        alert(bmi);
    }
)