const MAYOR_EDAD = 18;

persona = {
    name: "Juan",
    isStudent: true,
    age: 18
}


function myFun ({name, age} = {name: "Luis", age: 23}){
    console.log(`Hola me llamo ${name} y tengo ${age} años`);
}


const esMayor = (x,y) => x >= y;
const esMenor = (x,y) => !esMayor(x,y);

if (esMayor(persona.age, MAYOR_EDAD)) console.log("Es mayor de edad");
else console.log("No es mayor de edad");
if (!esMenor(persona.age, MAYOR_EDAD)) console.log("Es mayor de edad");
else console.log("No es mayor de edad");


