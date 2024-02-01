let button = document.getElementById("pojemnik")
let gorny = document.getElementById("gorny")
let dolny = document.getElementById("dolny")
let prawy = document.getElementById("prawy")
let lewy = document.getElementById("lewy")

let left = 600
let pTop = 300
position()

function position ()
{
    button.style.position = "absolute"
    button.style.left = `${left}px`
    button.style.top = `${pTop}px`
}

gorny.addEventListener("mouseover", function(){
    const intervalId = setInterval(() => {
        pTop += 30;
        if (pTop > 500) {
            pTop = 150;
        }
        position();
    }, 10);
    
    gorny.addEventListener("mouseout", function(){
        clearInterval(intervalId);
    });
});

dolny.addEventListener("mouseover", function(){
    const intervalId = setInterval(() => {
        pTop -= 30;
        if (pTop < 150) {
            pTop = 500;
        }
        position();
    }, 10);
    
    dolny.addEventListener("mouseout", function(){
        clearInterval(intervalId);
    });
});

lewy.addEventListener("mouseover", function(){
    const intervalId = setInterval(() => {
        left += 30;
        if (left > 1100) {
            left = 50;
        }
        position();
    }, 10);
    
    lewy.addEventListener("mouseout", function(){
        clearInterval(intervalId);
    });
});


prawy.addEventListener("mouseover", function(){
    const intervalId = setInterval(() => {
        left -= 30;
        if (left < 100) {
            left = 1100;
        }
        position();
    }, 10);
    
    prawy.addEventListener("mouseout", function(){
        clearInterval(intervalId);
    });
});
