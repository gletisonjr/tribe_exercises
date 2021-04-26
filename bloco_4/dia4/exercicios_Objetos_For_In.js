let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // Exercicio 1
console.log(`Bem-vinda, ${info.personagem}`);
console.log();

// Exercicio 2
info['recorrente'] = 'Sim';
console.log(info); 
console.log();

// Exercicio 3

for (const informacao in info) {
    console.log(informacao);
}
console.log();

// Exercicio 4

for (const informacao in info) {
    console.log(info[informacao]);
}
console.log();

// Exercício 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos recorrentes');

