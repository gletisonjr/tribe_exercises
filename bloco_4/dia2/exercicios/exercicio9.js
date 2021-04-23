let numbers = new Array();

for (let index = 0; index < 25; index++)
    numbers.push(index + 1);    

for (const number of numbers) 
    console.log(number / 2);