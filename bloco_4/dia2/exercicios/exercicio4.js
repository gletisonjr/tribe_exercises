let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let message = '';

for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
}

if((sum / numbers.length) > 20) message = 'Valor maior que 20';
else message = 'valor menor ou igual a 20';
console.log(message);