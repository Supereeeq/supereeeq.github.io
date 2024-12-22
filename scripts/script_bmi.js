const button = document.getElementById("submit");


button.addEventListener(
    "click",
    function(item){
        item.preventDefault();

        if (document.getElementById("wzrost").value.trim().length > 0 && document.getElementById("waga").value.trim().length > 0) {

            const wzrost = document.getElementById("wzrost").value;
            const waga = document.getElementById("waga").value;
            const mWzrost = Number(wzrost) / 100;
            const bmi = Number(waga) / (Number(mWzrost) * Number(mWzrost));

            const result = getResult(bmi)
            showResult(result);
        }
        else
        {
            const bmi = 0;
            const result = getResult(bmi)
        }
    }
)

function getResult (bmi){

    if(bmi > 0){
        if( bmi < 16){
            return Math.round(bmi) + "\nJesteś wygłodzony";
        }
        else if( bmi < 17){
            return Math.round(bmi) + "\nJesteś wychudzony";
        }
        else if( bmi < 18.5){
            return Math.round(bmi) + "\nMasz niedowagę";
        }
        else if( bmi < 24.9){
            return Math.round(bmi) + "\nMasz wagę prawidłową";
        }
        else if( bmi < 29.9){
            return Math.round(bmi) + "\nMasz nadwagę";
        }
        else if( bmi < 34.9){
            return Math.round(bmi) + "\nI stopień otyłości";
        }
        else if( bmi < 39.9){
            return Math.round(bmi) + "\nII stopień otyłości";
        }
        else if( bmi >= 39.9){
            return Math.round(bmi) + "\nIII stopień otyłości";
        }
        else
        {
            return "\nProszę podać wzrost i wagę";  
        }

    }

}

function showResult (result) {

    const score = document.getElementById("wynik");
        score.style.textAlign = "center";
        score.style.display = "flex";
        score.style.alignItems = "center";
        score.style.justifyContent = "center";
        score.style.boxShadow = "10px 10px 5px #888888"; 
        score.style.position = "relative";
        score.style.top = "65vh";
        score.style.left = "calc(50vw - 100px)";
    score.innerText = ("Wynik: " + result);
    document.getElementById("wynik").classList.add("show-wynik")

}