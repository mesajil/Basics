class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (devolverSaludo){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (devolverSaludo){
            devolverSaludo(this.nombre, this.apellido)
        }
    }

    esAlto (){
        return this.altura >= 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, language){
        super(nombre, apellido, altura)
        this.language = language
    }

    saludar (devolverSaludo){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi lenguaje de programación es ${this.language}`)
        if (devolverSaludo) {
            devolverSaludo(this.nombre, this.apellido, true)
        }
    }
}
function devolverSaludo (nombre, apellido, isDev){
    console.log(`Hola, ${nombre} ${apellido}`)
    if (isDev){
        console.log(`No sabía que eras desarrollador.`)
    }
}

let per = new Desarrollador("Luis", "Mesajil", 1.7, "Javascript")
let per1 = new Persona("Pedro", "Gomez")
per.saludar(devolverSaludo)
