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
