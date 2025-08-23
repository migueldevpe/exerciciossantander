// PROTÓTIPOS

/*const pessoa = {
   genero: 'masc'
 }

 const miguel = {
   nome: 'Miguel',
   idade: 19,
   __proto__: pessoa // <- protótipo
 }

// console.log(miguel.genero)*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é: ${this.nome}`) // <- protótipo
}

const miguelito = new Pessoa('Miguel', 19)

console.log(miguelito)

miguelito.falar()

/*const miguel = new Pessoa('Miguel', 19);

console.log(miguel);

miguel.falar()

class Pessoa { // mesma coisa da parte de cima, porém, de maneira diferente
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade
  }

  falar() {
    console.log(`Meu nome é: ${this.nome}`)
  }
}*/