class Pessoa {// <- CLASSE/MODELO
  nome; // <- atributos da classe
  idade;

  constructor(nome='', idade=0) { // <- É O QUE ACONTECE QUANDO UMA 'PESSOA' É INSTANCIADA
    this.nome = nome;
    this.idade = idade;
  }

  situacao() { // <- não precisa definir a function 'function ()'
    console.log('');
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`)
  } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}.`)
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
  }
}

const miguel = new Pessoa('Miguel', 19);
const aleatorio = new Pessoa('aleatorio', 14);

compararPessoas(miguel, aleatorio);

console.log()

// const ana = new Pessoa('ana', 20)

/*// INSTÃNCIA
const ana = new Pessoa(); // <- modelo de classe sendo usado
ana.nome = 'Ana Tal Tal' // <- atributos sendo atribuidos
ana.idade = 20
ana.situacao = 'viva'*/

// CLASSE -> DEFINIÇÃO DO QUE DEVE SER AQUELE OBJETO
// INSTÂNCIA -> OCORRÊNCIA DAQUELE OBJETO