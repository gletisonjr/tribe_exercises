let n = Math.floor(Math.random() * 11);
console.log("n = " + n + "\n");

for (let index = 0; index < n; index++) {
    let message = '';

    for (let secondIndex = 0; secondIndex < n; secondIndex++) {
        message += '*';
    }

    console.log(message);
}