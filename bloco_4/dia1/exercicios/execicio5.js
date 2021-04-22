let a = Math.floor(Math.random() * 91) ;
let b = Math.floor(Math.random() * 91) ;
let c = Math.floor(Math.random() * 91) ;
let signal = Math.floor(Math.random()*101);
let message = '';

if (signal < 50) a *= -1;

signal = Math.floor(Math.random()*101);

if (signal < 50) b *= -1;

signal = Math.floor(Math.random()*101);

if (signal < 50) c *= -1;

if (a <= 0 || b <= 0 || c <= 0) {
    message = "Ângulo inválido: Contém ângulo(s) menores que zero.";
} else {
    if ((a + b + c) > 180 || (a + b + c) < 180 ) {
        message = "Ângulo inválido: os ângulos não formam um triângulo."
    } else {
        message = "Ângulos válidos: os ângulos formam um triângulo.";
    }
}

console.log("valor de A: " + a);
console.log("valor de B: " + b);
console.log("valor de C: " + c);
console.log(message);