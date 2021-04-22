let a = Math.floor(Math.random() * 101) ;
let signal = Math.floor(Math.random()*101);
let message = '';

if (signal < 50) a *= -1;

if (a > 0) {
    message = "positive";
} else {
    if (a == 0) {
        message = "zero"
    } else {
        message = "negative";
    }
}

console.log("valor de A: " + a);
console.log("valor de signal: " + signal);
console.log(message);