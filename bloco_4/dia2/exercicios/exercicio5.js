let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

for (const number of numbers) {
    if (higherNumber < number)
      higherNumber = number;    
}

console.log(higherNumber);
