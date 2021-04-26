let n = Math.floor(Math.random() * 21);

while((n%2) == 0)
    n = Math.floor(Math.random() * 21);

console.log("n = " + n + "\n");

let spaces = n;
for (let index = 0; index < (n  / 2); index++) {
    let message = '';

    for (let secondIndex = 0; secondIndex  < ((spaces / 2 ) - (index + 1)) ; secondIndex++) {
        message += ' ';
    }
    for (let secondIndex = 0; secondIndex < ((index * 2 ) + 1) ; secondIndex++) {
            message += '*';
    }
    for (let secondIndex = 0; secondIndex < ((spaces / 2) - (index + 1)) ; secondIndex++) {
        message += ' ';
    }    
    console.log(message);
}