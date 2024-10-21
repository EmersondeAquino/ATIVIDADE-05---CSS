
const screenshot = document.querySelectorAll('.Screenshot')
const screenshots = document.querySelectorAll('.Screenshot img');

let Atual = 0;

function mostrarScreenshot(index) {
    screenshot.forEach((screenshot) => screenshot.classList.remove('ativa'));
    screenshot[index].classList.add('ativa');
}

screenshots.forEach((img, index) => {
    img.addEventListener('click', () => {
        Atual = (Atual + 1) % screenshots.length;
        mostrarScreenshot(Atual);
    });
});
const menuIcon = document.getElementById('logo-menu');
const menu = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});