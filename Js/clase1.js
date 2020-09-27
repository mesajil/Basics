


function myFun ({name, age} = {name: "Luis", age: 23}){
    console.log(`Hola me llamo ${name} y tengo ${age} años`);
}

function createNewOb (ob){
    return {
        ...ob,
        age: ob.age + 1,
        sueldo: 2000
    };
}

ob1 = {
    name: "Luis"
}

ob2 = {
    ...ob1
}
ob1.name = "Juan"
console.log(ob1)
console.log(ob2)
