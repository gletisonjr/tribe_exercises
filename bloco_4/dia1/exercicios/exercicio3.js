let a = Math.floor(Math.random() * 101);
let b = Math.floor(Math.random() * 101);
let c = Math.floor(Math.random() * 101);
let message = '';

if (a > b) message = "A é maior que B, ";
if (a > c) message += "A é maior que C, ";
if (b > a) message += "B é maior que A, ";
if (b > c) message += "B é maior que C, ";
if (c > a) message += "C é maior que A, ";
if (c > b) message += "C é maior que B, ";
if (a == b) message += "A é igual a B, ";
if (a == c) message += "A é igual a C, ";
if (b == c) message += "B é igual a C.";

console.log("valor de A: " + a);
console.log("valor de B: " + b);
console.log("valor de C: " + c);
console.log(message);