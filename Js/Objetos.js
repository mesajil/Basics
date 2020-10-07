

function Persona (name, lastname, altura){
    this.name = name
    this.lastname = lastname
    this.altura = altura
}
Persona.prototype.saludar = function(){
    console.log (`Hola, me llamo ${this.name} ${this.lastname}`)
}
Persona.prototype.soyAlto = function(){
    return this.altura >= 1.8
}

let per = new Persona("Luis", "Mesajil", 1.8)
let per2 = new Persona("Sacha", "Lif", 1.76)