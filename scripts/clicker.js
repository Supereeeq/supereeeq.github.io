const clicked = document.getElementById("zdj-carrot");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let points = 0;
let p = 0;
let q = 0;
let r = 0;
showPoints();
showButtons(p, q, r);

function showPoints(){
    let wynik = document.getElementById("wynik");
    wynik.innerText = points;
}

function showButtons(){
  switch(p){
    case 0:
      button1.innerText = "20";
      break;
    case 1:
      button1.innerText = "50";
      break;
    case 2:
      button1.innerText = "100";
      break;
  }

  button2.innerText = q;
  button3.innerText = r;
}

function backgroundPoints(p, points){
  points++;
  showPoints();
  console.log(points);
}

clicked.addEventListener("click", function() {
  clicked.classList.add("zdj-carrot-clicked");
  points ++
  showPoints();
});

clicked.addEventListener("animationend", function() {
    clicked.classList.toggle("zdj-carrot-clicked");
});

button1.addEventListener("click", function(){
  button1.classList.add("button-clicked");

  setTimeout(function() {
    button1.classList.remove("button-clicked");
},  120);

  changeButton1(p, points);
}
);

function changeButton1(p, points){
  switch(p){
    case 0:
      if (points >= 20)
      {
        points = points - 20;
        p++;
        showPoints();
        showButtons(p);
        setInterval(backgroundPoints, 1000);
        
      }
      else{
        console.log("gae")
      }
      break;
    case 1:
      if (points >= 50)
      {
        points = points - 50;
        p++;
        showPoints();
        backgroundPoints(p, points);
        showButtons(p);
        setInterval(backgroundPoints, 1000);
      }
      else{}
      break;
    case 2:
      if (points >= 100)
      {
        points = points - 100;
        p++;
        showPoints();
      }
      else{}
      break;
    deafult:
      console.log("gae");

  }
  
}



button2.addEventListener("click", function(){
  button2.classList.add("button-clicked");
  setTimeout(function() {
    button2.classList.remove("button-clicked");
},  120);

}
);

button3.addEventListener("click", function(){
  button3.classList.add("button-clicked");
  setTimeout(function() {
    button3.classList.remove("button-clicked");
},  120);

}
);