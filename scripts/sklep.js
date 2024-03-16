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
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Mieszanka orzechowa",
        cena: 29.99,
        image: "../images/mieszanka_orzechowa.jpg",
        link: "./sklep/mieszanka_orzechowa.html",
        tags: "owoce orzechy zdrowe przekąski",
        type: "jedzenie",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },    
    {
        name: "Chia Seeds Organic",
        cena: 19.99,
        image: "../images/chia_seeds.jpg",
        link: "./sklep/chia_seeds.html",
        tags: "chia nasiona organiczne superfoods",
        type: "jedzenie",
        stars: 3,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Kwasy omega-3",
        cena: 24.99,
        image: "../images/omega3.jpg",
        link: "./sklep/omega3.html",
        tags: "omega-3 zdrowa dieta suplementy",
        type: "dieta",
        stars: 4,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Legginsy sportowe",
        cena: 49.99,
        image: "../images/legginsy_sportowe.jpg",
        link: "./sklep/legginsy_sportowe.html",
        tags: "ubrania sportowe fitness legginsy",
        type: "ubranie",
        stars: 2,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Koszulka termoaktywna",
        cena: 34.99,
        image: "../images/koszula_termoaktywna.jpg",
        link: "./sklep/koszula_termoaktywna.html",
        tags: "odzież sportowa termoaktywna fitness",
        type: "ubranie",
        stars: 4,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Trening ABS",
        cena: 59.99,
        image: "../images/trening_brzucha.jpg",
        link: "./sklep/trening_brzucha.html",
        tags: "trening brzuch fitness plan",
        type: "plan",
        stars: 1,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Kettlebell Workout Plan",
        cena: 69.99,
        image: "../images/kettlebell.jpg",
        link: "./sklep/kettlebell.html",
        tags: "trening kettlebell siła fitness",
        type: "plan",
        stars: 5,
        promocja: false,
        iloscWKoszyku:0
    },    
    {
        name: "Quinoa Organiczna",
        cena: 12.99,
        image: "../images/quinoa.jpg",
        link: "./sklep/quinoa.html",
        tags: "quinoa zdrowe jedzenie organiczne",
        type: "jedzenie",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Mieszanka superfoods",
        cena: 49.99,
        image: "../images/mieszanka_superfoods.jpg",
        link: "./sklep/superfoods.html",
        tags: "superfoods dieta zdrowie",
        type: "dieta",
        stars: 3,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Buty do biegania",
        cena: 89.99,
        image: "../images/buty_do_biegania.jpg",
        link: "./sklep/buty_bieganie.html",
        tags: "buty sportowe bieganie fitness",
        type: "ubranie",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Yoga Guide",
        cena: 29.99,
        image: "../images/yoga.jpg",
        link: "./sklep/yoga.html",
        tags: "yoga plan treningowy mindfulness",
        type: "plan",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Kasza jaglana",
        cena: 12.99,
        image: "../images/kasza_jaglana.jpg",
        link: "./sklep/kasza_jaglana.html",
        tags: "kasza jaglana dieta zdrowe jedzenie",
        type: "dieta",
        stars: 3,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Top sportowy",
        cena: 29.99,
        image: "../images/top_sportowy.jpg",
        link: "./sklep/top_sportowy.html",
        tags: "top sport ubranie fitness",
        type: "ubranie",
        stars: 3,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Sałatka z kurczakiem",
        cena: 24.99,
        image: "../images/salatka_z_kurczakiem.jpg",
        link: "./sklep/salatka_z_kurczakiem.html",
        tags: "sałatka kurczak zdrowe jedzenie",
        type: "jedzenie",
        stars: 5,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Spodnie do biegania",
        cena: 49.99,
        image: "../images/spodnie_biegowe.jpg",
        link: "./sklep/spodnie_biegowe.html",
        tags: "spodnie bieganie ubranie sportowe",
        type: "ubranie",
        stars: 4,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Omlet ze szpinakiem",
        cena: 14.99,
        image: "../images/omlet_ze_szpinakiem.jpg",
        link: "./sklep/omlet_ze_szpinakiem.html",
        tags: "omlet szpinak dieta zdrowe jedzenie",
        type: "jedzenie",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Sałatka grecka",
        cena: 18.99,
        image: "../images/salatka_grecka.jpg",
        link: "./sklep/salatka_grecka.html",
        tags: "sałatka grecka dieta zdrowe jedzenie",
        type: "jedzenie",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Hantle",
        cena: 49.99,
        image: "../images/hantle.jpg",
        link: "./sklep/zestaw_treningowy.html",
        tags: "hantle zestaw treningowy fitness",
        type: "plan",
        stars: 5,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Kurtka narciarska",
        cena: 129.99,
        image: "../images/kurtka_narciarska.jpg",
        link: "./sklep/kurtka_narciarska.html",
        tags: "kurtka narciarska ubranie sportowe",
        type: "ubranie",
        stars: 5,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "Shake białkowy",
        cena: 34.99,
        image: "../images/shake_bialkowy.jpg",
        link: "./sklep/shake_bialkowy.html",
        tags: "shake białko dieta trening",
        type: "dieta",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Plan treningowy masa",
        cena: 59.99,
        image: "../images/plan_treningowy_masa.jpg",
        link: "./sklep/plan_treningowy_masa.html",
        tags: "trening plan treningowy masa mięśnie",
        type: "plan",
        stars: 4,
        promocja: false,
        iloscWKoszyku:0
    },
    {
        name: "Płatki owsiane",
        cena: 9.99,
        image: "../images/platki_owsiane.jpg",
        link: "./sklep/platki_owsiane.html",
        tags: "płatki owsiane śniadanie dieta",
        type: "Dieta",
        stars: 3,
        promocja: true,
        iloscWKoszyku:0
    },
    {
        name: "T-shirt",
        cena: 19.99,
        image: "../images/tshirt.jpg",
        link: "./sklep/tshirt_krotki_rekaw.html",
        tags: "t-shirt ubranie casual",
        type: "ubranie",
        stars: 3,
        promocja: false,
        iloscWKoszyku:0
    } ,
    {
        name: "Pilatesowa mata",
        cena: 24.99,
        image: "../images/pilates_mata.jpg",
        link: "./sklep/pilatesowy_mat.html",
        tags: "mat pilates trening fitness",
        type: "plan",
        stars: 4,
        promocja: true,
        iloscWKoszyku:0
    }
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

let basket = document.getElementById("basket")

let rzeczyZakupione = []

let searchBar = document.getElementById("searchBar")

let container = document.getElementById("container")


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

basket.addEventListener("click",function()
{
    pokazKoszyk()
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
    generuj()
})

function generuj() 
{
    przedmioty.innerHTML = "";
    zmienWyswietlanie.innerHTML = ""

    let numerOkna = 1;
    if(wyswietlanie == "galeria")
    {
        zmienWyswietlanie.innerHTML = '<img src="../images/lista.png"</img>'

        
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
                            if (searchBar.value !== null && searchBar.value.trim() !== "") 
                            {
                                wyszukiwanie = searchBar.value.toLowerCase()
                        
                                wyszukiwanieSlowaKlucze = wyszukiwanie.split(" ")

                                if(produkty[i].tags.includes(wyszukiwanieSlowaKlucze))
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

                                    addToCart.addEventListener("click",function()
                                    { 
                                        rzeczyZakupione.push(produkty[i].name)

                                        produkty[i].iloscWKoszyku++
                                        
                                        changeBasket()
        
                                        uAddedToCart()
                                    })
                                    

                                    addToCart.appendChild(shoppingBasket)
                                    okno.appendChild(addToCart)


                                    let cenaProduktu = document.createElement("div")
                                    cenaProduktu.classList.add("cenaProduktu")

                                    cenaProduktu.innerText = produkty[i].cena + "zł"
                                
                                    okno.appendChild(cenaProduktu)


                                    przedmioty.appendChild(okno)

                                    numerOkna++

                                }
                        
                            }
                            else
                            {
                                wyszukiwanie = searchBar.value 
                        
                                wyszukiwanieSlowaKlucze = wyszukiwanie.split(" ")

                                if(produkty[i].tags.includes(wyszukiwanieSlowaKlucze))
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
        
                                    addToCart.addEventListener("click",function()
                                    {
                                        rzeczyZakupione.push(produkty[i].name)

                                        produkty[i].iloscWKoszyku++
                                        
                                        changeBasket()
        
                                        uAddedToCart()
                                    })
                                    
                                    addToCart.appendChild(shoppingBasket)
                                    okno.appendChild(addToCart)

                                    let cenaProduktu = document.createElement("div")
                                    cenaProduktu.classList.add("cenaProduktu")

                                    cenaProduktu.innerText = produkty[i].cena + "zł"
                                    

                                    okno.appendChild(cenaProduktu)


                                    przedmioty.appendChild(okno)


                                    numerOkna++;

                                }
                            }
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
                            
                            let shoppingBasket = document.createElement("i")
                            shoppingBasket.classList.add("icon-shopping-basket")

                            addToCart.addEventListener("click",function()
                            {
                                rzeczyZakupione.push(produkty[i].name)

                                produkty[i].iloscWKoszyku++
                                
                                changeBasket()

                                uAddedToCart()
                            })
                            

                            addToCart.appendChild(shoppingBasket)
                            okno.appendChild(addToCart)

                            let cenaProduktu = document.createElement("div")
                            cenaProduktu.classList.add("cenaProduktu")

                            
                            if(produkty[i].promocja == true)
                            {
                                let nowaCena = document.createElement("div");
                                nowaCena.innerText = (produkty[i].cena * 0.8).toFixed(2) + "zł"
                                nowaCena.classList.add("nowaCena")
                            
                                let staraCena = document.createElement("div")
                                staraCena.classList.add("staraCena")
                                staraCena.innerText = produkty[i].cena + "zł"

                                cenaProduktu.appendChild(nowaCena)
                                cenaProduktu.appendChild(staraCena)

                            }
                            else
                            {
                                cenaProduktu.innerText = produkty[i].cena + "zł"
                            }


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

function uAddedToCart() 
{
    let usun = document.querySelector(".popUp")
    if(usun)
    {
        document.body.removeChild(usun)
    }

    let popUp = document.createElement("div");
    popUp.innerHTML = "Dodałeś do koszyka";
    popUp.classList.add("popUp")

    let wybor = document.createElement("div");
    wybor.classList.add("wybor");

    let kontynuuje = document.createElement("div");
    kontynuuje.classList.add("kontynuuje");
    kontynuuje.innerText = "Kontynuuj";

    let ide = document.createElement("div")
    ide.classList.add("ide")
    ide.innerText = "Do koszyka";

    document.body.appendChild(popUp);
    popUp.appendChild(wybor);
    wybor.appendChild(kontynuuje);
    wybor.appendChild(ide);

    container.addEventListener('click', function(event) {
        let klikniete = event.target;

        if (!klikniete.closest('.addToCart')) {
            let usun = document.querySelector(".popUp")
            if(usun)
            {
                document.body.removeChild(usun)
            }
        }
    })

    kontynuuje.addEventListener("click", function()
    {
        let usun = document.querySelector(".popUp")
        if(usun)
        {
            document.body.removeChild(usun)
        }
    })

    ide.addEventListener("click", function()
    {
        pokazKoszyk()

        let usun = document.querySelector(".popUp")
        if(usun)
        {
            document.body.removeChild(usun)
        }
    })

    
}


function changeBasket()
 {
    let usun = document.querySelector(".numerZakupow"); 

    if (usun) {
        basket.removeChild(usun); 
    }

    let numerZakupow = document.createElement("div");

    if(rzeczyZakupione.length < 9)
    {
        numerZakupow.innerText = rzeczyZakupione.length;
    }
    else
    {
        numerZakupow.innerText = "..."
    }

    numerZakupow.classList.add("numerZakupow");

    if(rzeczyZakupione.length !== 0)
    {
        basket.appendChild(numerZakupow);
    }
}

function pokazKoszyk()
{
    let stare = document.querySelector(".tlo")
    if(stare)
    {
        document.body.removeChild(stare)
    }


    let tlo = document.createElement("div")
            tlo.classList.add("tlo")

            let schowaj = document.createElement("div")
            schowaj.classList.add("schowaj")

                let zamknij = document.createElement("img")        
                zamknij.src = "../images/wrongAnswer.png"

            let opis = document.createElement("p")
            opis.innerText = "Przedmioty zakupione: "

            let przedmioty = document.createElement("div")
            przedmioty.classList.add("przedmiotyKupione")


    document.body.appendChild(tlo)

    tlo.appendChild(schowaj)
        
        schowaj.appendChild(zamknij)

    tlo.appendChild(opis)

    tlo.appendChild(przedmioty)

    schowaj.addEventListener("click",function()
    {
        document.body.removeChild(tlo)
    })


    for(let i = 0; i < produkty.length; i++)
    {
        if(produkty[i].iloscWKoszyku > 0)
        {

            let zakup = document.createElement("zakup")
            zakup.classList.add("zakup")

                let wartosc = document.createElement("div")
                wartosc.classList.add("wartosc")

                let zawartosc = document.createElement("div")
                zawartosc.classList.add("zawartosc")

                przedmioty.appendChild(zakup)
                zakup.appendChild(wartosc)
                zakup.appendChild(zawartosc)

                let dodaj = document.createElement("div")
                dodaj.classList.add("dodaj")
        
                    let plus = document.createElement("img")
                    plus.src = "../images/plus.png"
        
                let odejmij = document.createElement("div")
                odejmij.classList.add("odejmij")
        
                    let minus = document.createElement("img")
                    minus.src = "../images/minus.png"
        
                let numer = document.createElement("div")
                numer.classList.add("numer")
        
                numer.innerText =  produkty[i].iloscWKoszyku
                if(produkty[i].iloscWKoszyku > 99)
                {
                    numer.classList.add("dużo")
                }
        
                wartosc.appendChild(dodaj)
                dodaj.appendChild(plus)

                wartosc.appendChild(numer)

                wartosc.appendChild(odejmij)
                    odejmij.appendChild(minus)
        
                let okno = document.createElement("div");
                okno.classList.add("okno");
                okno.innerHTML = '<div class="zdj"><img src="' + produkty[i].image +'"></div><div class="opis"><p>' + produkty[i].name + '</p></div>'
        
                let ocenaProduktu = document.createElement("div");
                ocenaProduktu.classList.add("ocenaProduktu");

                let cenaProduktu = document.createElement("div")
                cenaProduktu.classList.add("cenaProduktu")
        
                cenaProduktu.innerText = produkty[i].cena + "zł"
    
                okno.appendChild(cenaProduktu)
                zawartosc.appendChild(okno)


                odejmij.addEventListener("click",function()
                {
                    produkty[i].iloscWKoszyku -= 1
                    pokazKoszyk()

                    function usunTablice(tablica, nazwa)
                    {
                        const index = tablica.indexOf(nazwa);
                        if (index !== -1) {
                            tablica.splice(index, 1);
                        }
                        return tablica;
                    }

                    usunTablice(rzeczyZakupione, produkty[i].name)

                    changeBasket()
                })

                dodaj.addEventListener("click",function()
                {
                    produkty[i].iloscWKoszyku += 1
                    pokazKoszyk()

                    rzeczyZakupione.push(produkty[i].name)

                    changeBasket()
                })
            
        }
    }

}