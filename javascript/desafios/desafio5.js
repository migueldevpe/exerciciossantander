let valor = 300;

let descontoDebito = valor - ((valor * 10) / 100);
let descontoPixDinheiro = valor - ((valor * 15) / 100);

let jurosDuasVezes = valor + ((valor * 10) / 100);

let escolha = '2x';

// Escolhas: -
// Débito
// Pix/Dinheiro
// Parcelar em duas vezes
// Parcelar acima de duas vezes

let mostrar = '';

if (escolha === 'débito') {
  mostrar = `Você recebeu 10% de desconto pela forma de pagamento DÉBITO. Valor final: ${descontoDebito}.`;
} else if (escolha === 'pix/dinheiro') {
  mostrar = `Você recebeu 15% de desconto pela forma de pagamento PIX/DINHEIRO. Valor final: ${descontoPixDinheiro}.`;
} else if (escolha === '2x') {
  mostrar = `Você não recebeu nenhum desconto/juros dividindo duas vezes. Valor final: ${valor}.`;
} else if (escolha === 'acima2x') {
  mostrar = `Você recebeu 10% de juros por dividir acima de duas vezes. Valor final: ${jurosDuasVezes}.`;
}

console.log(mostrar)