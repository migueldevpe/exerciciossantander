// FORMA LITERAL 

/*const pessoa = {
  genero: 'masculino'
}

const renan = {
  nome: 'Renan',
  __proto__: pessoa
}

console.log(renan.genero) */

const pessoa = {
  genero: 'masculino'
}

// pessoa.__proto__
// Funções instanciadas recebe __proto__
// Funções construtoras recebe prototype

const miguel = Object.create(pessoa)

miguel.nome = 'Miguel'
miguel.idade = 19

console.log(miguel.genero)