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
        this.siguienteNivel();

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
        // console.log('fin de inicializar');
    }
    generarSecuencia() {
        /**
         * .fill llena el array de 0, una ves que tenemos numero definido
         * map () se encarga de cambiar esos 0 por numeros random(randon retona valores entre 0 y 1)
         * math.floor redondea hacia abajo los numeros 
         *  */
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }
    siguienteNivel() { 
        this.iluminarSecuencia();
    }
    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';

            default:
                break;
        }
    }
    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i]);

            setTimeout(() => {
                this.iluminarColor(color)
            }, 1000 * i);
            //Al multiplicar el tiempo por i el tiempo se va a prolongar y asi evitamos que los colores se ejecuten de una sola vez.
        }
    }
    iluminarColor(color) {
        /**
         * Colores contiene botones del DOM, por lo que le podemos agreagar clases css para modificarlo
         */
        this.colores[color].classList.add('light');
        /**
         * Definimos el tiempo que va a tardar la funcion en ejecutarse
         */
        setTimeout(() => {
            return this.apagarColor(color)
        }, 350);
    }
    apagarColor(color) {
        this.colores[color].classList.remove('light');
    }
}

function empezarJuego() {
    window.juego = new Juego()
}
