let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (smallestNumber > number)
      smallestNumber = number;    
}

console.log(smallestNumber);