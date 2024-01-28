const clicked = document.getElementById("carrot");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let plus = document.getElementById("plusJeden")
let points = 0;
let p = 0;
let q = 0;
showPoints();
showButton1(p);
showButton2(q);

function showPoints(){
    let wynik = document.getElementById("wynik");
    wynik.innerText = points;
}

function showButton1() {
  let existingOpis1 = button1.querySelector("h1");
  if (existingOpis1) {
    button1.removeChild(existingOpis1);
  }
  let opis1 = document.createElement("h1");
  opis1.classList.add("opis1");
  opis1.textContent = '';

  switch (p) {
    case 0:
      opis1.textContent = "20";
      break;
    case 1:
      opis1.textContent = "50";
      break;
    case 2:
      opis1.textContent = "100";
      break;
    case 3:
      opis1.textContent = "150";
      break;
    case 4:
      opis1.textContent = "200";
      break;
    case 5:
      opis1.textContent = "250";
      break;
    case 6:
      opis1.textContent = "300";
      break;
    case 7:
      opis1.textContent = "400";
      break;
    case 8:
      opis1.textContent = "500";
      break;
    case 9:
      opis1.textContent = "750";
      break;
    deafult:
      opis1.textContent = "Kupiłeś wszystko"
      break;
  }

  button1.appendChild(opis1);

  let existingCursor = button1.querySelector("img");
  if(existingCursor){
    button1.removeChild(existingCursor)
  }
  let cursor = document.createElement("img");
  cursor.src = "../images/cursor-auto.png";
  cursor.classList.add("cursor");
  cursor.height = 100;
  cursor.width = 100;  

  button1.appendChild(cursor);
}

function showButton2() {
  let existingOpis2 = button2.querySelector("h1");
  if (existingOpis2) {
    button2.removeChild(existingOpis2);
  }
  let opis2 = document.createElement("h1");
  opis2.classList.add("opis2");
  opis2.textContent = '';

  switch (q) {
    case 0:
      opis2.textContent = "200";
      break;
    case 1:
      opis2.textContent = "500";
      break;
    case 2:
      opis2.textContent = "1000";
      break;
    case 3:
      opis2.textContent = "1500";
      break;
    case 4:
      opis2.textContent = "2000";
      break;
    case 5:
      opis2.textContent = "2500";
      break;
    case 6:
      opis2.textContent = "5000";
      break;
    case 7:
      opis2.textContent = "7500";
      break;
    case 8:
      opis2.textContent = "10000";
      break;
    case 9:
      opis2.textContent = "15000";
      break;
  }

  button2.appendChild(opis2);

  let existingCursor = button2.querySelector("img");
  if(existingCursor){
    button2.removeChild(existingCursor)
  }
  let cursor = document.createElement("img");
  cursor.src = "../images/cursor2x.png";
  cursor.classList.add("cursor2x");
  cursor.height = 100;
  cursor.width = 100;  

  button2.appendChild(cursor);
}

function backgroundPoints(){
  points++;
  showPoints(points);
  let q = 0;
  animatePlus(q);
}

clicked.addEventListener("click", function() {
  clicked.classList.add("zdj-carrot-clicked");
  onClick(q)

});

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    onClick(q)
  }
});

function onClick() {
  howManyAdd(q)
  animatePlus(q)
}

function howManyAdd(q){
  switch(q){
    case 0:
      points++;
      break;
    case 1:
      points = points + 2;
      break;
    case 2:
      points = points + 4;
      break;
    case 4:
      points = points + 8;
      break;
  }
  showPoints();

}

clicked.addEventListener("animationend", function() {
    clicked.classList.toggle("zdj-carrot-clicked");
});

button1.addEventListener("click", function(){
  button1.classList.add("button-clicked");

  setTimeout(function() {
    button1.classList.remove("button-clicked");
},  120);

  changeButton1(points);
}
);

function changeButton1(){
  switch(p){
    case 0:
      if (points >= 20)
      {
        points = points - 20;
        p++;
        showPoints(points);
        showButton1(p);
        setInterval(backgroundPoints, 5000);
      }
      break;
    case 1:
      if (points >= 50)
      {
        points = points - 50;
        p++;
        showPoints();
        showButton1(p);
        setInterval(backgroundPoints, 4000);
      }
    break;
    case 2:
      if (points >= 100)
      {
        points = points - 100;
        p++;
        showPoints();
        showButton1(p);
        setInterval(backgroundPoints, 3000);
      }
      case 3:
      if (points >= 150)
      {
        points = points - 150;
        p++;
        showPoints();
        showButton1(p);
        setInterval(backgroundPoints, 3000);
      }
      case 4:
        if (points >= 200)
        {
          points = points - 200;
          p++;
          showPoints(points);
          showButton1(p);
          setInterval(backgroundPoints, 2500);
        }
        break;
      case 5:
        if (points >= 250)
        {
          points = points - 250;
          p++;
          showPoints();
          showButton1(p);
          setInterval(backgroundPoints, 2000);
        }
      break;
      case 6:
        if (points >= 300)
        {
          points = points - 300;
          p++;
          showPoints();
          showButton1(p);
          setInterval(backgroundPoints, 1800);
        }
        case 7:
        if (points >= 400)
        {
          points = points - 400;
          p++;
          showPoints();
          showButton1(p);
          setInterval(backgroundPoints, 1500);
        }    
      case 8:
      if (points >= 500)
      {
        points = points - 500;
        p++;
        showPoints(points);
        showButton1(p);
        setInterval(backgroundPoints, 1000);
      }
      break;
    case 9:
      if (points >= 750)
      {
        points = points - 750;
        p++;
        showPoints();
        showButton1(p);
        setInterval(backgroundPoints, 900);
      }
    break;
  }
  
}

button2.addEventListener("click", function(){
  button2.classList.add("button-clicked");
  setTimeout(function() {
    button2.classList.remove("button-clicked");
},  120);
  changeButton2(points);
}
);

function changeButton2(){
  switch(q){
    case 0:
      if (points >= 200)
      {
        points = points - 200;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 1:
      if (points >= 500)
      {
        points = points - 500;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 2:
      if (points >= 1000)
      {
        points = points - 1000;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 3:
      if (points >= 1500)
      {
        points = points - 1500;
        q++;
        showPoints(points);
        showButton2(q);
        howManyAdd();
      }
      break;
    case 4:
      if (points >= 2000)
      {
        points = points - 2000;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 5:
      if (points >= 2500)
      {
        points = points - 2500;
        q++;
        showPoints(points);
        showButton2(q);
        howManyAdd();
      }
      break;
    case 6:
      if (points >= 5000)
      {
        points = points - 5000;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 7:
      if (points >= 7500)
      {
        points = points - 7500;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 8:
      if (points >= 10000)
      {
        points = points - 10000;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
    case 9:
      if (points >= 15000)
      {
        points = points - 15000;
        q++;
        showPoints();
        showButton2(q);
        howManyAdd();
      }
      break;
  }
}

function animatePlus (q)
{
  let plus = document.createElement("img");
  plus.classList.add("plus");
  switch(q){
    case 0:
      plus.src = "../images/plus1.png";
      break;
    case 1:
      plus.src = "../images/plus2.png";
      break;
    case 2:
      plus.src = "../images/plus4.png";
      break;
    case 3:
      plus.src = "../images/plus8.png";
      break;
  }

  let positionX = Math.floor(Math.random() * (901 - 400) + 400);
  let positionY = Math.floor(Math.random() * (501 - 400) + 400);
  plus.style.left = positionX + 'px';
  plus.style.top = positionY + 'px';
  document.body.appendChild(plus);

  plus.addEventListener('click', function() {
    onClick(q);
});

  let intervalId = setInterval(function() {
      moveUp(plus, intervalId);
  }, 20);
}

function moveUp(plus, intervalId) {
  let currentTop = parseInt(plus.style.top) || positionY;
  if (currentTop > 180) {
      plus.style.top = (currentTop - 2) + 'px';
  } 
  else {
    plus.style.display="none"
    clearInterval(intervalId);
  }
}