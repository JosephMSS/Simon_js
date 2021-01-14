//Obtenemos el elemento por medio del id
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10;

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
        setTimeout(()=>{
            this.siguienteNivel();
        },500);

    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this);
        this.siguienteNivel=this.siguienteNivel.bind(this);
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
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }
    siguienteNivel() {
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick()
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
    transformarColorANumero(color) {
        switch (color) {
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;

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
    agregarEventosClick() {
        /**
         * Javascript puede perder el contexto del this, sin embargo nosotrso 
         * podemos decirle a quien  se refiere con bind )
         */
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }
    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }
    elegirColor(ev) {
        /**
         * Si no enviamos usamos el bind, el this.ev se va a referir a window, y si lo empleamos 
         * se va a referir a la instancia del objeto juego.
         * console.log(this);
         */
        /**
         * en los datos del target
         * se encuentran los dataset, estos los definimos en el html con data-nombre_atributo
         */
        // console.log(ev);
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++;
            if (this.subnivel === this.nivel) {
                this.nivel++;
                this.eliminarEventosClick();
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    //gano
                } else {
                    //Se hace refencia a la funcion , no se esta invocando (siguienteNivel())
                   setTimeout( this.siguienteNivel,1500);
                }
            }
        } else {
            ///perdio
        }


    }

}

function empezarJuego() {
    window.juego = new Juego()
}
