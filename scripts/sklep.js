let produkty = 
[
    {
        name:"Ryż niskokaloryczny",
        cena:19.99,
        image:"../images/ryz.jpg",
        link:"./sklep/ryz.html",
        tags:"ryż niskokaloryczny dieta chudnięcie",
        type:"dieta",
        stars:2,
        promocja: true
    },
    {
        name: "Mieszanka orzechowa",
        cena: 29.99,
        image: "../images/mieszanka_orzechowa.jpg",
        link: "./sklep/mieszanka_orzechowa.html",
        tags: "owoce orzechy zdrowe przekąski",
        type: "jedzenie",
        stars: 4,
        promocja: false
    },    
    {
        name: "Chia Seeds Organic",
        cena: 15.49,
        image: "../images/chia_seeds.jpg",
        link: "./sklep/chia_seeds.html",
        tags: "chia nasiona organiczne superfoods",
        type: "jedzenie",
        stars: 3,
        promocja: false
    },
    {
        name: "Kwasy omega-3",
        cena: 24.99,
        image: "../images/omega3.jpg",
        link: "./sklep/omega3.html",
        tags: "omega-3 zdrowa dieta suplementy",
        type: "dieta",
        stars: 4,
        promocja: true
    },
    {
        name: "Legginsy sportowe",
        cena: 49.99,
        image: "../images/legginsy_sportowe.jpg",
        link: "./sklep/legginsy_sportowe.html",
        tags: "ubrania sportowe fitness legginsy",
        type: "ubranie",
        stars: 2,
        promocja: false
    },
    {
        name: "Koszulka termoaktywna",
        cena: 34.99,
        image: "../images/koszula_termoaktywna.jpg",
        link: "./sklep/koszula_termoaktywna.html",
        tags: "odzież sportowa termoaktywna fitness",
        type: "ubranie",
        stars: 4,
        promocja: true
    },
    {
        name: "Trening ABS",
        cena: 59.99,
        image: "../images/trening_brzucha.jpg",
        link: "./sklep/trening_brzucha.html",
        tags: "trening brzuch fitness plan",
        type: "plan",
        stars: 1,
        promocja: true
    },
    {
        name: "Kettlebell Workout Plan",
        cena: 69.99,
        image: "../images/kettlebell.jpg",
        link: "./sklep/kettlebell.html",
        tags: "trening kettlebell siła fitness",
        type: "plan",
        stars: 5,
        promocja: false
    },    
    {
        name: "Quinoa Organiczna",
        cena: 12.99,
        image: "../images/quinoa.jpg",
        link: "./sklep/quinoa.html",
        tags: "quinoa zdrowe jedzenie organiczne",
        type: "jedzenie",
        stars: 4,
        promocja: false
    },
    {
        name: "Mieszanka superfoods",
        cena: 49.99,
        image: "../images/mieszanka_superfoods.jpg",
        link: "./sklep/superfoods.html",
        tags: "superfoods dieta zdrowie",
        type: "dieta",
        stars: 3,
        promocja: false
    },
    {
        name: "Buty do biegania",
        cena: 89.99,
        image: "../images/buty_do_biegania.jpg",
        link: "./sklep/buty_bieganie.html",
        tags: "buty sportowe bieganie fitness",
        type: "ubranie",
        stars: 4,
        promocja: false
    },
    {
        name: "Yoga Guide",
        cena: 29.99,
        image: "../images/yoga.jpg",
        link: "./sklep/yoga.html",
        tags: "yoga plan treningowy mindfulness",
        type: "plan",
        stars: 4,
        promocja: false
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

let wyszukaj = document.getElementById("wyszukaj")

let sort = document.getElementById("sortuj")

let zmienWyswietlanie = document.getElementById("widok")

let wyswietlanie = "galeria"

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

wyszukaj.addEventListener("click",function()
{
    generuj();
})

sort.addEventListener("input",function()
{
    let wartoscInputa = sort.value
    if(wartoscInputa == "brak")
    {
        produkty.sort((a,b) => a.tags.localeCompare(b.tags)) 
    }
    else if(wartoscInputa == "goraCena")
    {
        produkty.sort((a,b) => a.cena - b.cena) 
    }
    else if(wartoscInputa == "dolCena")
    {
        produkty.sort((a,b) => b.cena -  a.cena) 
    }
    else if(wartoscInputa == "goraNazwa")
    {
        produkty.sort((a,b) => a.name.localeCompare(b.name)) 
    }
    else if(wartoscInputa == "dolNazwa")
    {
        produkty.sort((a,b) => b.name.localeCompare(a.name)) 
    }
    else if(wartoscInputa == "goraGwiazdki")
    {
        produkty.sort((a,b) => a.stars - b.stars) 
    }
    else if(wartoscInputa == "dolGwiazdki")
    {
        produkty.sort((a,b) => b.stars -  a.stars) 
    }

    generuj();
})

zmienWyswietlanie.addEventListener("click",function()
{
    if(wyswietlanie == "galeria")
    {
        wyswietlanie = "lista"
    }
    else if(wyswietlanie == "lista")
    {
        wyswietlanie = "galeria"
    }
    console.log(wyswietlanie)
    generuj()
})


function generuj() {
    przedmioty.innerHTML = "";
    zmienWyswietlanie.innerHTML = ""

    let numerOkna = 1;
    if(wyswietlanie == "galeria")
    {
        zmienWyswietlanie.innerHTML = '<img src="../images/lista.png"</img>'

        let rzadPierwszy = document.createElement("div")
        rzadPierwszy.classList.add("rzad")
        rzadPierwszy.classList.add("rzad1")


        let rzadDrugi = document.createElement("div")
        rzadDrugi.classList.add("rzad")
        rzadDrugi.classList.add("rzad2")


        let rzadTrzeci = document.createElement("div")
        rzadTrzeci.classList.add("rzad")
        rzadTrzeci.classList.add("rzad3")


        let rzadCzwarty = document.createElement("div")
        rzadCzwarty.classList.add("rzad")
        rzadCzwarty.classList.add("rzad4")

        let rzadPiaty = document.createElement("div")
        rzadPiaty.classList.add("rzad")
        rzadPiaty.classList.add("rzad5")

        for (let i = 0; i < produkty.length; i++) 
        {
            if (cena.value >= produkty[i].cena) 
            {
                if (jedzenie.checked || ubranie.checked || dieta.checked || plan.checked) 
                {
                    if (
                        (jedzenie.checked && produkty[i].type === "jedzenie") ||
                        (ubranie.checked && produkty[i].type === "ubranie") ||
                        (dieta.checked && produkty[i].type === "dieta") ||
                        (plan.checked && produkty[i].type === "plan")
                    )
                    {
                        if 
                        (
                            produkty[i].cena <= cena.value &&
                            produkty[i].stars >= ranking.value
                        )
                        {

                            let okno = document.createElement("div");
                            okno.classList.add("okno");
                            okno.classList.add("okno" + numerOkna);
                            okno.innerHTML = '<div class="zdj' + numerOkna +' zdj"><img src="' + produkty[i].image +'"></div><div class="opis' + numerOkna + ' opis"><p>' + produkty[i].name + '</p></div>'
                    
                            let ocenaProduktu = document.createElement("div");
                            ocenaProduktu.classList.add("ocenaProduktu");

                            
                            let iloscOceny = produkty[i].stars;
                            
                            while (iloscOceny > 0) 
                            {
                                if (iloscOceny >= 1) 
                                {         
                                    let gwiazdka = document.createElement("img");
                                    gwiazdka.src = '../images/star.png';

                                    iloscOceny -= 1;
                                    ocenaProduktu.appendChild(gwiazdka);

                                } else if (iloscOceny >= 0.5) 
                                {                     
                                    let polGwiazdki = document.createElement("img");
                                    polGwiazdki.src = '../images/halfStar.png';

                                    iloscOceny -= 0.5;
                                    ocenaProduktu.appendChild(polGwiazdki);
                                
                                }
                            }
                            
                            okno.appendChild(ocenaProduktu);

                                                        
                            let addToCart = document.createElement("div")
                            addToCart.classList.add("addToCart")
                            
                            let shoppingBasket = document.createElement("i")
                            shoppingBasket.classList.add("icon-shopping-basket")

                            addToCart.appendChild(shoppingBasket)
                            okno.appendChild(addToCart)


                            let cenaProduktu = document.createElement("div")
                            cenaProduktu.classList.add("cenaProduktu")
                            cenaProduktu.innerText = produkty[i].cena + "zł"

                            okno.appendChild(cenaProduktu)

                            if(numerOkna < 4)
                            {
                                rzadPierwszy.appendChild(okno)
                                przedmioty.append(rzadPierwszy)
                            }
                            else if(numerOkna < 7)
                            {    
                                przedmioty.append(rzadDrugi)
                                rzadDrugi.appendChild(okno)
                            }
                            else if(numerOkna < 10)
                            {    
                                przedmioty.append(rzadTrzeci)
                                rzadTrzeci.appendChild(okno)
                            }
                            else if(numerOkna < 13)
                            {    
                                przedmioty.append(rzadCzwarty)
                                rzadCzwarty.appendChild(okno)
                            }
                            else if(numerOkna < 16)
                            {
                                przedmioty.appendChild(rzadPiaty)
                                rzadPiaty.appendChild(okno)
                            }

                            numerOkna++;
                        
                        }
                    }
                }
            }
        }
    }
    else if (wyswietlanie == "lista") {
        
        zmienWyswietlanie.innerHTML = '<img src="../images/galeria.png"</img>'

        let rzadek = document.createElement("div")
        rzadek.classList.add("rzadek")

        for (let i = 0; i < produkty.length; i++) 
        {
            if (cena.value >= produkty[i].cena) 
            {
                if (jedzenie.checked || ubranie.checked || dieta.checked || plan.checked) 
                {
                    if (
                        (jedzenie.checked && produkty[i].type === "jedzenie") ||
                        (ubranie.checked && produkty[i].type === "ubranie") ||
                        (dieta.checked && produkty[i].type === "dieta") ||
                        (plan.checked && produkty[i].type === "plan")
                    )
                    {
                        if 
                        (
                            produkty[i].cena <= cena.value &&
                            produkty[i].stars >= ranking.value
                        )
                        {

                            let okno = document.createElement("div");
                            okno.classList.add("okno");
                            okno.classList.add("oknoLista");
                            okno.classList.add("okno" + numerOkna);
                            okno.innerHTML = '<div class="zdj' + numerOkna +' zdj"><img src="' + produkty[i].image +'"></div><div class="opis' + numerOkna + ' opis"><p>' + produkty[i].name + '</p></div>'

                            if (produkty[i].promocja == true)
                            {
                                okno.classList.add("promocja");
                            }
                    
                            let ocenaProduktu = document.createElement("div");
                            ocenaProduktu.classList.add("ocenaProduktu");

                            
                            let iloscOceny = produkty[i].stars;
                            
                            while (iloscOceny > 0) 
                            {
                                if (iloscOceny >= 1) 
                                {         
                                    let gwiazdka = document.createElement("img");
                                    gwiazdka.src = '../images/star.png';

                                    iloscOceny -= 1;
                                    ocenaProduktu.appendChild(gwiazdka);

                                } else if (iloscOceny >= 0.5) 
                                {                     
                                    let polGwiazdki = document.createElement("img");
                                    polGwiazdki.src = '../images/halfStar.png';

                                    iloscOceny -= 0.5;
                                    ocenaProduktu.appendChild(polGwiazdki);
                                
                                }
                            }
                            
                            okno.appendChild(ocenaProduktu);

                            
                            let addToCart = document.createElement("div")
                            addToCart.classList.add("addToCart")

                            okno.appendChild(addToCart)

                            let cenaProduktu = document.createElement("div")
                            cenaProduktu.classList.add("cenaProduktu")
                            cenaProduktu.innerText = produkty[i].cena + "zł"

                            okno.appendChild(cenaProduktu)


                            rzadek.appendChild(okno)
                            przedmioty.append(rzadek)
           

                            numerOkna++;
                        
                        }
                    }
                }
            }
        }
    }
}
