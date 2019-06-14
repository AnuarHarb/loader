// Seleccionamos elementos del documento
const loader = document.querySelector('.loader');
const body = document.querySelector('body');

// Escuchamos el evento de apretar una tecla y le ligamos una función
document.addEventListener('keyup', randomBackground);

//Función para cambiar el color de fondo con las teclas
function randomBackground() {
  let randomColor = '#';
  randomColor += Math.floor(Math.random()*999999);
  body.style.backgroundColor = randomColor;
}

// Función para llenar la barra de carga
function fillLoader(loaderValue = 0) {
  loaderValue += Math.floor(Math.random()*100);
  let loaderSpeed = Math.random()*3;
  loader.style.transitionDuration = loaderSpeed + 's';
  loader.style.width = loaderValue + '%';
  if(loaderValue < 100) {
    setTimeout(function() {
      fillLoader(loaderValue);
    }, loaderSpeed * 1000)
  }
}

//Funciones que cambian el color de la barra de carga
function changeColorBlue() {
  loader.style.backgroundColor = 'blue';
}

function changeColorRed() {
  loader.style.backgroundColor = 'red';
}
