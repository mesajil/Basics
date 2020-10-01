
const PESO_IDEAL = 62.5;
const DIAS = 365;
persona = {
    name: "Juan",
    isStudent: true,
    age: 18,
    weight: 65
}

const randomInt = (min, max) => Math.random() * (max -min) + min;
const modificarPeso = (persona, weight) => persona.weight += weight;

for (let i = 0; i < 10; i ++){
    for (let i = 0; i < DIAS; i ++){
        modificarPeso(persona, randomInt (-0.1, 0.1));
    }
    console.log(persona.weight.toFixed(2), persona.weight);
    persona.weight = 65;
}

persona.weight = 65;

let n = 0;
while (persona.weight > PESO_IDEAL){
    modificarPeso(persona, randomInt (-0.1, 0.1));
    n ++;
}

console.log(n);
console.log(persona.weight.toFixed(2), persona.weight);