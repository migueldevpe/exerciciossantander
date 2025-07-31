let altura = 1.75;
let peso = 65;

let imc = peso / (altura * altura);

let resultadoimc = '';

if (imc >= 0 && imc < 18.5) {
  resultadoimc = 'Abaixo do peso'
} else if (imc >= 18.5 && imc <= 25) {
  resultadoimc = 'Peso normal';
} else if (imc > 25 && imc <= 30) {
  resultadoimc = 'Acima do peso';
} else if (imc > 30 && imc <= 40) {
  resultadoimc = 'Obeso';
} else if (imc > 40) {
  resultadoimc = 'Obesidade grave';
} else {
  resultadoimc = '[Erro]';
}

console.log(`O seu IMC é: ${resultadoimc}.`)