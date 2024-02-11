let container = document.getElementById('container');

let pozycjaBokow = "right"
let pozycjaGorna = "top"

let predkoscPilkiPozioma = 2
let predkoscPilkiPionowa = 4

let licznikPunktow1 = 0

let licznikPunktow2 = 0

wyswietlPostaci()



function wyswietlPostaci() 
{
    let postac1 = document.createElement('div');
    postac1.classList.add('postac');
    postac1.classList.add('postac1');

    postac1.style.top = "350px"
    let obecnaPozycja1 = 350
    postac1.style.left = "0"

    let postac2 = document.createElement('div');
    postac2.classList.add('postac');
    postac2.classList.add('postac2');

    postac2.style.top = "350px"
    let obecnaPozycja2 = 350
    postac2.style.right = "0"

    container.appendChild(postac1);
    container.appendChild(postac2);


    document.addEventListener('keydown', function(event) {

        switch (event.key)
        {
            case "w":
                if(obecnaPozycja1 > 10)
                {
                    obecnaPozycja1 -= 20;
                    postac1.style.top = obecnaPozycja1 + "px";
                }
                break
            case "s":
                if(obecnaPozycja1 < 680)
                {
                    obecnaPozycja1 += 20;
                    postac1.style.top = obecnaPozycja1 + "px";
                }
                break
            case "ArrowUp":
                if(obecnaPozycja2 > 10)
                {
                    obecnaPozycja2 -= 20;
                    postac2.style.top = obecnaPozycja2 + "px";
                }
                break
            case "ArrowDown":
                if(obecnaPozycja2 < 680)
                {
                    obecnaPozycja2 += 20;
                    postac2.style.top = obecnaPozycja2 + "px";
                }
                break
    
        }
    });

    wyswietlPunkty()
    stworzPilke()
}


function wyswietlPunkty ()
{
    let punkt1 = document.getElementById("punkt1")
    punkt1.innerText = ""
    punkt1.innerText = licznikPunktow1


    let punkt2 = document.getElementById("punkt2")
    punkt2.innerText = ""
    punkt2.innerText = licznikPunktow2
}

function stworzPilke() {
    let pilka = document.createElement('div');
    pilka.classList.add('pilka');
    pilka.id = 'pilka';

    pilka.style.top = "350px"
    let pilkaTop = 350
    pilka.style.left = "430px"
    let pilkaLeft = 430

    container.appendChild(pilka);
    setInterval(ruszPilke, 10)

    function ruszPilke()
    {
        switch (pozycjaBokow)
        {
            case "left":
                moveLeft();
                break;
            case "right":
                moveRight();
                break;
        }

        switch (pozycjaGorna)
        {
            case "top":
                moveTop();
                break;
            case "bottom":
                moveBottom();
                break;
        }

        let pilka = document.getElementById('pilka');
        let postac1 = document.querySelector('.postac1');
        let postac2 = document.querySelector('.postac2');

        // Check collision with postac1
        if (checkCollision(pilka, postac1)) {
            pozycjaBokow = "right"
        }

        // Check collision with postac2
        if (checkCollision(pilka, postac2)) {
            pozycjaBokow = "left"
        }
    }

    function moveLeft()
    { 
        if(pilkaLeft < 0)
        {
            licznikPunktow2++
            wyswietlPunkty()
            pozycjaBokow = "right"

            pilkaTop = 350;
            pilkaLeft = 430;
        }
        pilkaLeft -= predkoscPilkiPionowa;
        pilka.style.left = pilkaLeft + "px";
    }

    function moveRight()
    {
        if(pilkaLeft > 1180)
        {
            licznikPunktow1++
            wyswietlPunkty()
            pozycjaBokow = "left"

            pilkaTop = 350;
            pilkaLeft = 430;
        }
        else
        {
            pilkaLeft += predkoscPilkiPionowa;
            pilka.style.left = pilkaLeft + "px";
        }
    }

    function moveTop()
    {
        if(pilkaTop < 20)
        {
            pozycjaGorna = "bottom"
        }
        else
        {
            pilkaTop -= predkoscPilkiPozioma;
            pilka.style.top = pilkaTop + "px";
        }


    }

    function moveBottom()
    {
        if(pilkaTop > 780)
        {
            pozycjaGorna = "top"
        }
        else
        {
            pilkaTop += predkoscPilkiPozioma;
            pilka.style.top = pilkaTop + "px";
        }


    }

    function checkCollision(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }

}
