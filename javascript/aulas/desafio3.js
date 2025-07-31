let n1 = 7;
let n2 = 7;
let n3 = 0;

let media = (n1 + n2 + n3) / 3;

let resultado = '';

if (media >= 7 && media <= 10) {
  resultado = 'Passou';
} else if (media >= 5 && media <= 7) {
  resultado = 'Recuperação'
} else if (media >= 0 && media < 5) {
  resultado = 'Reprovou'
} else {
  resultado = '[Erro]'
}

console.log(`Situação: ${resultado}.`)