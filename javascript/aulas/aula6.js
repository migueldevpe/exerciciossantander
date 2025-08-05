/*const alunos = ['jão', 'charles', 'jorge'];

alunos.push('jogador')//0
                      // <- FORMAS DE INSERIR 'ITENS' NO ARRAY
alunos[4] = 'godoy'   // 

console.log(alunos)

alunos.pop() // <- REMOVE O ÚLTIMO ITEM

console.log(alunos)

alunos.shift() // <- REMOVE O PRIMEIRO ITEM

console.log(alunos)*/

let notas = [];

notas.push(9)
notas.push(7)
notas.push(7)
notas.push(7)

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length

console.log(media)

notas.length // <- TAMANHO DO ARRAY

// console.log(notas.length)

/*const nome = 'Miguel Soares'

for (let i = 0; i < nome.length; i++) {
console.log(nome[i])
}*/