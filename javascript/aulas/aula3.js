/*function SayMyName(name) {
  console.log(`Meu nome é ${name}`)
}

SayMyName('Vitor');
SayMyName('Miguel');

function somar(a=0, b=0) {
  return a + b;
}

let res = somar(2, 5);

console.log(res)

function adicionarJuros(valor, percentualJuros) {
  const valorAdicionado = (percentualJuros * valor) / 100;
  return valor + valorAdicionado;
}

console.log(adicionarJuros(50, 50))*/

function calcularImc(peso=0, altura=0) {
  return peso / (altura * altura); // ou Math.pow(altura, 2);
}

function mostrarImc(imc) {
  if (imc >= 0 && imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso';
  } else if (imc >= 40) {
    return 'Obesidade grave';
  } else {
    return '[Erro]'
  }
}

function main() {
  let altura = 1.75;
  let peso = 65;

  const imc = calcularImc(peso, altura)
  console.log(`Resultado: ${mostrarImc(imc)}.`)
}

/*
(function main() {
  let altura = 1.75;
  let peso = 65;

  const imc = calcularImc(peso, altura)
  console.log(`Resultado: ${mostrarImc(imc)}.`)
})();

( <- O "('FUNÇÃO')" FAZ COM QUE A FUNÇÃO SEJA RESOLVIDA PRIMEIRA/COM PRIORIDADE.
 AQUI DENTRO A FUNÇÃO
)(); <- O "()" SERVE PARA INVOCAR A FUNÇÃO IMEDIATAMENTE, NÃO PRECISA NOMEAR A FUNÇÃO, ELA JÁ É EXECUTADA AUTOMATICAMENTE.
*/

main()
// console.log(main)