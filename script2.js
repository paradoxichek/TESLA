document.getElementById('windoww').addEventListener('click', () => window.open('./index.html'));
let buttons = document.querySelectorAll('#btn')
let tesla = document.querySelector('.teslao')
let colorss = {
    black: './img/black.svg',
    wheat: './img/molochniy.svg',
    white: './img/white.svg',
}


buttons.forEach(element => {
    element.onclick = () => {
let pol = element.getAttribute('data-color')
console.log(pol);
let colorsss = colorss[pol]       

 tesla.src = colorsss
    }
});