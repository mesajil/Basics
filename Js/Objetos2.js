class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

    saludar (){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi lenguaje de programación es ${this.language}`)
    }
}

let per = new Desarrollador("Luis", "Mesajil", 1.7, "Javascript")

console.log(per)
