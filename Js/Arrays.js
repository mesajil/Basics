var per1 = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var per2 = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var per3 = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}
let personas = [per1, per2, per3]

// Filtrar utilizando for of
// let filter = []
// for (let per of personas){
//     if (per.altura <= 1.85){
//         filter.push (per)
//     }
// }

// // Filtrar con el método filter

// let filter = personas.filter (
//     (per) => per.altura > 1.85
// )


// // Imprimir filtro
// for (let per of filter){
//     console.log (`${per.nombre} tiene una altura de ${per.altura}`)
// }


// // Crear array de apellidos utilizando el método map

// let apellidos = personas.map(
//     (per) => per.apellido
// )
// console.log(personas)
// // Imprimir apellidos
// for (apellido of apellidos){
//     console.log(apellido)
// }


// // Filtrar persona utilizando el método find

// let per = personas.some (p => p.nombre == "Sacha")
// console.log (per)

// Modificar altura de las personas a centímetros utilizando el método map

let cambiarAltura = (per) => ({...per, altura: per.altura * 100})
let personasCms = personas.map (cambiarAltura)
console.table(personasCms)
for (let per of personasCms){
    console.table(per)
}


