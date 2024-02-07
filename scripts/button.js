let button = document.getElementById("pojemnik")
let gorny = document.getElementById("gorny")
let dolny = document.getElementById("dolny")
let prawy = document.getElementById("prawy")
let lewy = document.getElementById("lewy")

let left = 45; 
let pTop = 45; 
position();

function position() {
    button.style.position = "absolute";
    button.style.left = `${left}vw`; 
    button.style.top = `${pTop}vh`;
}

gorny.addEventListener("mouseover", function() {
    const intervalId = setInterval(() => {
        pTop += 2; 
        if (pTop > 90) {
            pTop = 10;
        }
        position();
    }, 10);
    
    gorny.addEventListener("mouseout", function() {
        clearInterval(intervalId);
    });
});

dolny.addEventListener("mouseover", function() {
    const intervalId = setInterval(() => {
        pTop -= 2;
        if (pTop < 10) {
            pTop = 80; 
        }
        position();
    }, 10);
    
    dolny.addEventListener("mouseout", function() {
        clearInterval(intervalId);
    });
});

lewy.addEventListener("mouseover", function() {
    const intervalId = setInterval(() => {
        left += 2; 
        if (left > 90) {
            left = 10;
        }
        position();
    }, 10);
    
    lewy.addEventListener("mouseout", function() {
        clearInterval(intervalId);
    });
});

prawy.addEventListener("mouseover", function() {
    const intervalId = setInterval(() => {
        left -= 2; 
        if (left < 0) {
            left = 85; 
        }
        position();
    }, 10);
    
    prawy.addEventListener("mouseout", function() {
        clearInterval(intervalId);
    });
});
