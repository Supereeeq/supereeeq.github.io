let header = document.getElementById("header")
showHider()

function showHider ()
{
    let hider = document.createElement("div")
    hider.style.position = "absolute"
    hider.style.top = "200px"
    hider.style.right = "100px"
}

if (window.innerWidth <= 767){
    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.getElementById('menu-icon');
        const menuList = document.querySelector('.menu-list');

        menuIcon.addEventListener('click', function (event) {

            menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';

            event.stopPropagation();
        });
        
        document.addEventListener('click', function () {
            menuList.style.display = 'none';
        });
    });
}