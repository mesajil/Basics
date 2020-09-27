let MAYOR_EDAD = 18;

persona = {
    name: "Juan",
    isStudent: true,
    age: 23
}


function myFun ({name, age} = {name: "Luis", age: 23}){
    console.log(`Hola me llamo ${name} y tengo ${age} años`);
}

function createNewOb ({ ...ob}){
    ob.age = 10
    console.log(ob.age);
}
createNewOb(persona);
if (persona.isStudent){
    console.log(`${persona.name} is student`);
}
if (persona.age >= MAYOR_EDAD) console.log("Es mayor de edad");
else console.log("No es mayor de edad");