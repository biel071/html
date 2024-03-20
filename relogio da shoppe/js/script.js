//dom

const Horas =document.querySelector('#Horas')
const Minutos =document.querySelector('#Minutos')
const Segundos =document.querySelector('#Segundos')

//Eventos
setInterval(relogio,1000)

//função

function relogio() {
    
    let dia = new Date()

    let h = dia.getHours() 
    let m = dia.getMinutes() 
    let s = dia.getSeconds() 

    if (h<10) {
        h="0" + h
    }

    if (m<10) {
        m="0" + m
    }
    if (s<10) {
        s="0" + s
    }
    

    Horas.textContent = h
    Minutos.textContent = m
    Segundos.textContent = s


}