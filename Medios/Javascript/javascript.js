
// creare un popUp para el visitante que quiera comprar bonos de carbono en el home
var buttonAbrirPopUp = document.getElementById('button_abrir-popUp'),
    overlay = document.getElementById('overlay'),
    popUp = document.getElementById('popUp'),
    buttonCerrarPopUp = document.getElementById('button_cerrar-popUp');

buttonAbrirPopUp.addEventListener('click', function () {
    overlay.classList.add('active');
    popUp.classList.add('active');
});

buttonCerrarPopUp.addEventListener('click', function () {
    overlay.classList.remove('active');
    popUp.classList.remove('active');
});
