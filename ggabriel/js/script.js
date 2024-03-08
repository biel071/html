//dom

const jogador = document.querySelector('#jogador')
const bt01 = document.querySelector('#cr7')
const bt02 = document.querySelector('#neymar')
const bt03 = document.querySelector('#messi')
const bt04 = document.querySelector('#surpresa')

//eventos 

bt01.addEventListener('click', cr7)
bt02.addEventListener('click', neymar)
bt03.addEventListener('click', messi)
bt04.addEventListener('click', surpresa)

//funçoes

function cr7(){
    jogador.src='images/cr7.jpg'
}

function neymar() {
    jogador.src='images/images.jpg'
}

function messi() {
    jogador.src='images/messi careca.jpg'
}

function surpresa() {
    jogador.src='images/speed.jpg'
}




