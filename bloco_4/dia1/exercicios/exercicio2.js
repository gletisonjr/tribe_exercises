let a = Math.floor(Math.random() * 101);
let b = Math.floor(Math.random() * 101);
let message = '';

if (a > b) {
    message = "A é maior que B";
} else {
    if (a === b) {
        message = "A é igual a B"
    } else {
        message = "B é maior que A";
    }
}

console.log("valor de A: " + a);
console.log("valor de B: " + b);
console.log(message);