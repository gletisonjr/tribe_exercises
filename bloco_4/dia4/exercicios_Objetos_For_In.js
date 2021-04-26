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