
const PESO_IDEAL = 63.5;
const DIAS = 365;
persona = {
    name: "Juan",
    isStudent: true,
    age: 18,
    weight: 65
}

const randomInt = (min, max) => Math.random() * (max -min) + min;
const modificarPeso = (persona, weight) => persona.weight += weight;


persona.weight = 65;

let dias = 0;
do{
    modificarPeso(persona, randomInt (-0.1, 0.1));
    dias ++;

}while (persona.weight > PESO_IDEAL);

console.log(`Pasaron ${dias} dias para llegar al peso ideal de ${persona.weight.toFixed(2)}.`);

let llueve = () => Math.random() < 0.15;
let contador = 0

do {
    contador ++
}while(!llueve());


console.log (`Revisé ${contador} ${contador==1?"vez":"veces"} si llovía`)