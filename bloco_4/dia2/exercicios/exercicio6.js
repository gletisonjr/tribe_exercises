let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumberCounter = 0;
let message = '';

for (const number of numbers) 
    if ((number % 2) != 0)
      oddNumberCounter++;    

if (oddNumberCounter == 0) 
    message = 'nenhum valor ímpar encontrado';
else message = oddNumberCounter.toString();

console.log(message);