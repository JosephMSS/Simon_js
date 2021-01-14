//Obtenemos el elemento por medio del id
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.inicializar();
        
    }

    inicializar() {
        //De esta manera agregamos clases css en el DOM
        btnEmpezar.classList.add('hide')
    }
}

function empezarJuego() {
    var juego = new Juego()
}