let container = document.getElementById("things")
showEmpty();
let submit;


function showEmpty(){
    container.innerHTML= "";

    let przyklad = document.createElement("div");
    przyklad.classList.add("przyklad");

    let wpis = document.createElement("input")
    wpis.classList.add("wpis");
    wpis.id = "wpis"

    let submit = document.createElement("input")
    submit.classList.add("submit")
    submit.setAttribute("type", "submit");


    container.appendChild(przyklad);
    przyklad.appendChild(wpis)
    przyklad.appendChild(submit)



    submit.addEventListener("click", function() {
        let wartosc = wpis.value;
        let elementy = document.querySelector("tekst")


        console.log(elementy)

        if (wartosc !== "" && wartosc !== " " && wartosc.length < 31 )
        {
        
            
        let zrobienie = document.createElement("div")
        zrobienie.classList.add("zrobienie")

        let odznacz = document.createElement("input")
        odznacz.classList.add("odznacz")
        odznacz.setAttribute("type", "radio")

        let tekst = document.createElement("p")
        tekst.classList.add("tekst")
        tekst.innerText = wartosc;

        container.appendChild(zrobienie)
        zrobienie.appendChild(odznacz)
        zrobienie.appendChild(tekst)

        console.log(wartosc)
        }
        else if (wartosc.length > 30)
        {
            console.log("Dokończysz to")
        }
    });

    

}

