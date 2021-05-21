const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
myArray = [1,2,3,4];

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1,2,4], 'O retorno da função myRemove para o array [1, 2, 3, 4] não foi [1, 2 ,4]');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1,2,3,4], 'O retorno da função myRemove para o array [1, 2, 3, 4] foi [1, 2 ,4]');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5),myArray, 'The array have been altered');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1,2,3,4], 'O retorno da função myRemove para o array [1, 2, 3, 4] não foi [1, 2, 3, 4]');
