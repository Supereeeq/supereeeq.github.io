/*
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

*/

const button = document.getElementById("submit");



button.addEventListener(
    "click",
    function(item){
        item.preventDefault();
        const wiek = document.getElementById("wiek").value;
        const wzrost = document.getElementById("wzrost").value;
        const mWzrost = Number(wzrost) / 100;
        const waga = document.getElementById("waga").value;
        const bmi = Number(waga) / (Number(mWzrost) * Number(mWzrost));

        console.log('WZ:',wzrost, 'mWZ:',mWzrost,'Wag', waga,'BMI', bmi);

        switch(bmi) {
            case(Number(bmi) < 16):
                console.log("You are only bonse")
                break;
            case(Number(bmi) >= 16)&&(Number(bmi) < 17):
                console.log("You are slim")
                break;
            case(Number(bmi) >= 17)&&(Number(bmi) < 18.5):
                console.log("You are skiny")
                break;
            case((Number(bmi) >= 18.5)&&(Number(bmi) < 24.9)):
                console.log("You are ok");
                break;
            case((Number(bmi) >= 24.9)&&(Number(bmi) < 29.9)):
                console.log("You are fluffy");
                break;
            case((Number(bmi) >= 29.8)&&(Number(bmi) < 34.9)):
                console.log("You are big")
                break;
            case((Number(bmi) >= 34.9)&&(Number(bmi) < 39.9)):
                console.log("You are MONSTER")
                break;
            case(Number(bmi) >= 39.9):
                console.log("You are GORLOCK THE DESTROYER OF WORLDS!!!")
                break;
        

        }
        
        
    }
)