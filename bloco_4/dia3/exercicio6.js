let number = Math.floor(Math.random() * 21);
let message = 'O número é primo';
console.log("Numero = " + number);

for (let index = 2; index < number; index++) {
    if ((number % index) == 0) {
        message = 'O número não é primo';
        break;
    }
    
}
console.log(message);