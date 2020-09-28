const MAYOR_EDAD = 18;

persona = {
    name: "Juan",
    isStudent: true,
    age: 18
}


function myFun ({name, age} = {name: "Luis", age: 23}){
    console.log(`Hola me llamo ${name} y tengo ${age} años`);
}

function createNewOb ({ ...ob}){
    ob.age = 10
    console.log(ob.age);
}

function esMayor(x,y){
    return x >= y;
}

createNewOb(persona);
if (persona.isStudent){
    console.log(`${persona.name} is student`);
}
if (esMayor(persona.age, MAYOR_EDAD)) console.log("Es mayor de edad");
else console.log("No es mayor de edad");