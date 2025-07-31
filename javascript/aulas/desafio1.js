let litro = 5.87;
let kmPorLitro = 12;
let viagemKm = 149;

const litrosConsumidos = viagemKm / kmPorLitro;
const valorGasto = litrosConsumidos * litro;

console.log(`A quantidade de litros consumida foi ${litrosConsumidos.toFixed(2)}L/Km. E o valor total gasto foi ${valorGasto.toFixed(2)}R$.`);