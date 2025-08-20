let etanol = 4.34;
let gasolina = 5.89;

let litrosPorKm = 8;
let disTotalViagemKm = 120;

let escolha = 'etanol';
let escolhido = '';

if (escolha === 'etanol') {
  escolhido = etanol;
} else if (escolha === 'gasolina') {
  escolhido = gasolina;
}

let litrosConsumidos = disTotalViagemKm / litrosPorKm;
let valorTotal = litrosConsumidos * escolhido;

console.log(`O total de litros consumidos foram ${litrosConsumidos}L, e o gasto total foi ${valorTotal.toFixed(2)}R$.`);