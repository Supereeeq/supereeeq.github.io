const wiek = document.getElementById("wiek");

console.log(wiek);

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

button.addEventListener(
    "click",
    function(item){
        item.preventDefault();
        console.log(wiek.value, imie.value)
        alert(`${wiek.value} ${imie.value}`);
    }
)