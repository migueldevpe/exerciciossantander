const { gets, print } = require('./funções-auxiliares');

//const numerosSorteados = [];
const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets(); // <- saiu de numeros para numero (sem o s)
  //numerosSorteados.push(numerosSorteado)
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

//let maiorValor = 0;

/*for (let i = 0; i < numerosSorteados.length; i++) {
  const numerosSorteado = numerosSorteados[i];
  if (numerosSorteado > maiorValor) {
    maiorValor = numerosSorteado;
  }
}*/

console.log(maiorValor)