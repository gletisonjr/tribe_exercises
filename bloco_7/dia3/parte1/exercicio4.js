const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15),'fizzbuzz','Resultado não foi fizzbuzz');
assert.strictEqual(myFizzBuzz(3),'fizz','Resultado não foi fizz');
assert.strictEqual(myFizzBuzz(5),'buzz','Resultado não foi buzz');
assert.strictEqual(myFizzBuzz('5'), false,'Resultado não foi false');