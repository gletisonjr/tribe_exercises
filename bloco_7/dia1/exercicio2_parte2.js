/**
 * Crie uma função que receba uma frase e retorne qual a maior palavra.
 */

const highestWordLength = (phrase) =>{
    let array = phrase.split(' ');
    let arrayNumbers = [];
    array.forEach(element => {
        arrayNumbers.push(element.length)
    });
    let maxElement = Math.max.apply(null, arrayNumbers)
    return array[maxElement];
};

console.log(highestWordLength("Antônio foi no banheiro e não sabemos o que aconteceu"));