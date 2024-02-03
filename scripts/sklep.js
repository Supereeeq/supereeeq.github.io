let produkty = 
[
    {
        name:"ryż niskokaloryczny",
        cena:19.99,
        image:"../images/ryz.png",
        link:"./sklep/ryz.html",
        tags:"ryż niskokaloryczny dieta chudnięcie",
        type:"dieta",
        stars:4
    },
    {
        name:"ryż niskokaloryczny",
        cena:29.99,
        image:"../images/ryz.png",
        link:"./sklep/ryz.html",
        tags:"ryż niskokaloryczny dieta chudnięcie",
        type:"dieta",
        stars:4
    },
    {
        name:"ryż niskokaloryczny",
        cena:39.99,
        image:"../images/ryz.png",
        link:"./sklep/ryz.html",
        tags:"ryż niskokaloryczny dieta chudnięcie",
        type:"ubranie",
        stars:4
    },
    {
        name:"ryż niskokaloryczny",
        cena:19.99,
        image:"../images/ryz.png",
        link:"./sklep/ryz.html",
        tags:"ryż niskokaloryczny dieta chudnięcie",
        type:"plan",
        stars:4
    },
    {
        name:"ryż niskokaloryczny",
        cena:49.99,
        image:"../images/ryz.png",
        link:"./sklep/ryz.html",
        tags:"ryż niskokaloryczny dieta chudnięcie",
        type:"jedzenie",
        stars:4
    },
]

//kategorie
let ocena = document.getElementById("ranking")
let napisOceny = document.getElementById("pokazOceny")

let cena = document.getElementById("cena")
let napisCeny = document.getElementById("pokazCeny")

let jedzenie = document.getElementById("jedzenie")
let ubranie = document.getElementById("ubranie")
let dieta = document.getElementById("dieta")
let plan = document.getElementById("plan")


let przedmioty = document.getElementById("przedmioty")

let szukaj = document.getElementById("find")

generuj()


cena.addEventListener("input",function(){
    napisCeny.innerHTML = ""

    let obecnaCena = document.createElement("div")
    obecnaCena.innerText = "Max. Cena: " + cena.value + "zł"
    obecnaCena.classList.add("obecnaCena")

    napisCeny.appendChild(obecnaCena)
})

ocena.addEventListener("input",function(){
    napisOceny.innerHTML = ""
    let obecnaOcena = document.createElement("div")
    obecnaOcena.innerText = "Min. Ocena: " + ranking.value

    napisOceny.appendChild(obecnaOcena)
})

szukaj.addEventListener("click",function()
{
    generuj();
})

function generuj() {
    przedmioty.innerHTML = "";
    let numerOkna = 1;

    for (let i = 0; i < produkty.length; i++) 
    {

        if (cena.value >= produkty[i].cena) 
        {

            if (jedzenie.checked || ubranie.checked || dieta.checked || plan.checked) 
            {
                console.log("Product type: " + produkty[i].type);

                if (
                    (jedzenie.checked && produkty[i].type === "jedzenie") ||
                    (ubranie.checked && produkty[i].type === "ubranie") ||
                    (dieta.checked && produkty[i].type === "dieta") ||
                    (plan.checked && produkty[i].type === "plan")
                )
                {
                    console.log("KYS")

                   
                        console.log("JS")
                        
                        let okno = document.createElement("div");
                        okno.classList.add("okno");
                        okno.classList.add("okno" + numerOkna);
                        przedmioty.appendChild(okno);
                        numerOkna++;
                    
                    
                }
            }
        }
    }
}
