const objeto = { // <- criou objeto (const x = { x, y, z })
  nome: 'Jorge',
  profissao: 'N/A',

  descrever: function () { // <- função dentro do objeto
    console.log(`Testando o ${this.nome} e ${this.profissao}`) // <- 'this' serve para o código localizar dentro do objeto, tipo: 'issoÉDoObjeto.nome' (contexto)
  }
}

/*objeto['nome'] = 'Olá';
objeto.nome = 'I'

objeto.nome = 'Ariel';
objeto.profissao = 'Jogador';
objeto.descrever = function () {
  console.log('Mudou')
}

objeto.descrever();

objeto.idade = 25;

// delete objeto.nome

console.log(objeto.nome);
console.log(objeto.profissao);
console.log(objeto);
*/