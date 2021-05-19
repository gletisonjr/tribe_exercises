/**
 * Crie um código JavaScript com a seguinte especificação:
    Não se esqueça de usar template literals
    Função 1 : Escreva uma função que vai receber uma string como parâmetro. 
    Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. 
    Sua função deve retornar essa nova string .
 */

const replaceX = (phrase, word) => phrase.replace('x', word);

/**
 * Um array com escopo global, que é o escopo do arquivo JS , 
 * nesse caso, contendo cinco strings com suas principais skills . 
 */

const skills = ['Javascript', 'HTML', 'CSS', 'C','C++'];

/**
 * Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. 
 * Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 
 * via parâmetro. 
 * Você deve ordenar os skills em ordem alfabética. 
 * Sua função deve retornar essa nova string .
 */

const concatenaFrases = (array, frase) =>{
    array.sort();
    return `${frase} ,
As minhas Principais habilidades são:

1 - ${array[0]} 
2 - ${array[1]} 
3 - ${array[2]} 
4 - ${array[3]} 
5 - ${array[4]}`;
};

console.log(concatenaFrases(skills, replaceX('Olá x', 'usuário')));
