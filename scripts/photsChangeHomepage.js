let zdjecie = document.getElementById("dieta")
let numer = Math.floor(Math.random() * 5 + 1)
zmienslajd()

function schowaj()
{
	$(zdjecie).fadeOut(1000);
}

function zmienslajd() 
{	

	numer++;
	if (numer > 5) 
	{
		numer = 1;
	}
	zdjecie.src ="./images/dieta"+ numer +".jpg"


	$(zdjecie).fadeIn(1000);
	
	
	setTimeout(zmienslajd, 3000);
	setTimeout(schowaj, 2000);
}    