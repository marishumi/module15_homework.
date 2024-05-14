const btn = document.querySelector('.j-btn-test');


//Размер окна браузера (без прокрутки)
const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

//Размер окна браузера с прокруткой
const windowinnerWidth =  window.innerWidth;
const windowinnerHeight = window.innerHeight;

//Размер документа 
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;




btn.addEventListener('click', () => {

alert(`Размер окна браузера : ${windowWidth}px x ${windowHeight}px.
Размер окна браузера с прокруткой : ${windowinnerWidth}px x ${windowinnerHeight}px.
Размер документа : ${pageWidth}px x ${pageHeight}px
`);

});