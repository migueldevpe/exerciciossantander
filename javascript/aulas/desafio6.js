function meuNome(nome) {
  return `Meu nome é ${nome}.`
}

function verificarIdade(idade) {
  if (idade < 0 || idade > 125) {
    return 'idade inválida.'
  } else if (idade >= 18) {
    return 'maior de idade.'
  } else {
    return 'menor de idade.'
  }
}

(function main() {
  let idade = 40;
  console.log(`Olá! ${meuNome('MIGUEL')} Sou ${verificarIdade(idade)}`);
})();