//Obtenemos el elemento por medio del id
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();

    }

    inicializar() {
        //De esta manera agregamos clases css en el DOM
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        //En los casos que las variables se llamen igual a los campos que se van a asignar, javascript permite hacerlo de la siguiente manera:
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia() {
        /**
         * .fill llena el array de 0, una ves que tenemos numero definido
         * map () se encarga de cambiar esos 0 por numeros random(randon retona valores entre 0 y 1)
         * math.floor redondea hacia abajo los numeros 
         *  */
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }
}

function empezarJuego() {
    window.juego = new Juego()
}
