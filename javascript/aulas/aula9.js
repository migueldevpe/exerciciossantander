// SOBRESCRITA

const pessoa = {
  idade: 18
}

const miguel = {
  nome: 'Miguel',
  idade: 30, // <- se ele não achar aqui, ele entra no protótipo e acha, caso não tenha a idade.
  __proto__: pessoa // protótipo (__proto__)
}

console.log(miguel.idade)