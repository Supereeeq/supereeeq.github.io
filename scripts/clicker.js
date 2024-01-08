const clicked = document.getElementById("zdj-carrot");
let points = 0;

showPoints();

function showPoints(){
    let wynik = document.createElement("div");
    wynik.classList.add = "wynik";
    console.log("JD")
}

clicked.addEventListener("click", function() {
  clicked.classList.add("zdj-carrot-clicked");

});

clicked.addEventListener("animationend", function() {
    clicked.classList.toggle("zdj-carrot-clicked");
});