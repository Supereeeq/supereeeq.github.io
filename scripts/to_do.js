let container = document.getElementById("things");
let submit;
let ilosc = 0; 
let licznikOpcji = 1;
let licznikZakreslen = 1

showEmpty();

function showEmpty() 
{
    container.innerHTML = "";

    let przyklad = document.createElement("div");
    przyklad.classList.add("przyklad");

    let wpis = document.createElement("input");
    wpis.classList.add("wpis");
    wpis.placeholder = "Co masz do zrobienia?"
    wpis.id = "wpis";

    let submit = document.createElement("input");
    submit.classList.add("submit");
    submit.setAttribute("type", "submit");

    container.appendChild(przyklad);
    przyklad.appendChild(wpis);
    przyklad.appendChild(submit);

    submit.addEventListener("click", function() {
        send();
    });

    wpis.addEventListener("keydown", function(event) {
        if (event.keyCode === 13 ) {
            event.preventDefault();
            send();
        }
    });
}

function send (){
    let wartosc = wpis.value;
        wpis.value = ""

        if (ilosc >= 5) { 
            console.log("You've reached the maximum limit for items.");
        }
        else if (wartosc.trim() !== "" && wartosc.length < 23) {
            let zrobienie = document.createElement("div");
            zrobienie.classList.add("zrobienie");

                let odznacz = document.createElement("div");
                odznacz.classList.add("odznacz");

                    let zaznaczenie = document.createElement("div")
                    zaznaczenie.classList.add("zaznaczenie")
                    zaznaczenie.classList.add("hide")

                let tekst = document.createElement("p");
                tekst.classList.add("tekst");
                tekst.innerText = wartosc;

            let dotts = document.createElement("img")
            dotts.classList.add("dotts")
            dotts.src = "../images/dotts.png"

            tekst.appendChild(dotts);

            container.appendChild(zrobienie);
            zrobienie.appendChild(odznacz);
            odznacz.appendChild(zaznaczenie)
            zrobienie.appendChild(tekst);
            ilosc++;

            dotts.addEventListener("click", function() {
                let options = zrobienie.querySelector(".options");

                if (!options) {
                    createOptions(zrobienie, tekst);   
                }
                else 
                {
                    hideOptions();
                }
                licznikOpcji++; 
            });

            odznacz.addEventListener("click", function()
            {
                if (licznikOpcji % 2 !== 0) {
                    
                    zaznaczenie.classList.add("show")
                    tekst.classList.add("zrobione")
                }
                else 
                {
                    zaznaczenie.classList.remove("show")
                    tekst.classList.remove("zrobione")
                }
                licznikOpcji++

                console.log("JD")
            });

        } 
        else if (wartosc.length >= 23) {
            let blad = document.createElement("div")
            blad.classList.add("blad")
            blad.innerText = "Maks. ilość znaków - 22"

            things.appendChild(blad)

            setTimeout(function() {
                things.removeChild(blad)
            }, 2000);
        }
}

function createOptions (zrobienie, tekst) 
{
    let options = document.createElement("div");
    options.classList.add("options");
                
        let usun = document.createElement("div");
        usun.classList.add("usun");
        usun.innerText = "Usuń";
    
            let smietnik = document.createElement("img");
            smietnik.classList.add("smietnik");
            smietnik.src = "../images/smietnik.png";

        let edytuj = document.createElement("div")
        edytuj.classList.add("edytuj")
        edytuj.innerText = "Edytuj"

            let pencil = document.createElement("img")
            pencil.classList.add("pencil")
            pencil.src = "../images/pencil.png"

            
    zrobienie.appendChild(options);

    options.appendChild(usun);
    usun.appendChild(smietnik);

    options.appendChild(edytuj)
    edytuj.appendChild(pencil)

    usun.addEventListener("click", function() {
        hideOptions();
        container.removeChild(zrobienie);

        ilosc--;
    });

    edytuj.addEventListener("click", function() {

        hideOptions();
        wpiszNowyTekst(tekst, zrobienie);
    });

}

function hideOptions () {
    let options = document.querySelector('.options');

    if (options) {
        options.parentNode.removeChild(options);

    } 
    else 
    {
        console.log("Parent element not found!");
    }
}

function wpiszNowyTekst(tekst, zrobienie) { //from here
    tekst.contentEditable = "true";
    tekst.focus(); // Set focus to the text element after making it editable

    tekst.addEventListener("blur", function() {
        // Call a function to save the edited text when the element loses focus
        zapiszEdycje(tekst, zrobienie);
        hideOptions();
    });

}

function zapiszEdycje(tekst, zrobienie) {
    // Remove the editing focus from the text element
    tekst.contentEditable = "false";

    // Call the function to recreate the options menu
    createOptions(zrobienie, tekst); //to here i have no idea what is happening
}


function dodajNowyTekst(nowyTekst, tekst, zrobienie)
{
    if (nowyTekst.value.trim() !== "") 
    {
        tekst.innerText = nowyTekst.value.trim(); 
        nowyTekst.parentNode.replaceChild(tekst, nowyTekst); // Zmień stary na nowy
        let dotts = document.createElement("img")
            dotts.classList.add("dotts")
            dotts.src = "../images/dotts.png"

        tekst.appendChild(dotts);   

    } 
    else 
    {
        tekst.innerText = tekst.innerText; 
        nowyTekst.parentNode.replaceChild(tekst, nowyTekst); 
    }
    createOptions(zrobienie, tekst);
    console.log(zrobienie, tekst)
}