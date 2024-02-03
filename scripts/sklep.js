let waga = document.querySelectorAll('input[name="waga"]')

let cena = document.getElementById("cena")
let napis = document.getElementById("pokazCeny")


cena.addEventListener("input",function(){
    napis.innerHTML = ""

    console.log(cena.value)
    let obecnaCena = document.createElement("div")
    obecnaCena.innerText = "Cena: " + cena.value + "zł"
    obecnaCena.classList.add("obecnaCena")

    napis.appendChild(obecnaCena)
})


/*
waga.forEach(function(waga) {
    if (waga.checked) {
    }
})
*/