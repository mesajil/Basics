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

// // Modificar altura de las personas a centímetros utilizando el método map

// let cambiarAltura = (per) => ({...per, altura: per.altura * 100})
// let personasCms = personas.map (cambiarAltura)
// console.table(personasCms)
// for (let per of personasCms){
//     console.table(per)
// }

// Calcular la suma de pesos de las personas utilizando el método reduce

let incSuma = (suma, per) => suma + per.altura 
let totalAltura = personas.reduce(incSuma, 0)
console.log (`La suma total de las alturas es ${totalAltura}`)
console.log (typeof(totalAltura))

// Generar diccionario de nombres repetidos utilizando el método reduce

const nombres = ["Jorge", "Maria", "Jose", "Bob", "Pat", "Maria", "Jose", "Jose"]

function modificarDicc (dicc, e){
    // dicc[e] = (dicc[e] || 0) + 1
    if (e in dicc)
        dicc[e] ++
    else
        dicc[e] = 1
    return dicc
}
let dicc = nombres.reduce(modificarDicc, {})
console.log(dicc)





