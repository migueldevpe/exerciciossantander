const num = 0;
let info = '';

if (num === 0) {
  info = `Número inválido.`
} else if (num % 2 === 0) {
  info = `${num} é PAR.`
} else { 
  info = `${num} é ÍMPAR.`
}

console.log(info);