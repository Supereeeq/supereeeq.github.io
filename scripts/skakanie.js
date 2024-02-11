let container = document.getElementById('container')

stworzGre()


function stworzGre() {
    stworzPostac()
    stworzPrzeszkody()

    setInterval(ruszPrzeszkode, 100)

}

function stworzPostac() {
    let postac = document.createElement('div')
    postac.classList.add('postac')
    postac.style.bottom = "16px"
    postac.style.left = "16px"

    container.appendChild(postac)
}

function stworzPrzeszkody() {
    let przeszkodaZiemna = document.createElement('div')
    przeszkodaZiemna.classList.add('przeszkodaZiemna')
    przeszkodaZiemna.id = 'przeszkodaZiemna'

    przeszkodaZiemna.style.bottom = "16px"
    przeszkodaZiemna.style.left = "700px"

    container.appendChild(przeszkodaZiemna)
}

function ruszPrzeszkode() {
    let przeszkodaZiemna = document.getElementById('przeszkodaZiemna')

    let left = parseInt(przeszkodaZiemna.style.left) || 700
    left = left - 5


    przeszkodaZiemna.style.left = left + "px"

    if(left < 17)
    {
        stworzPrzeszkody()
    }
}
