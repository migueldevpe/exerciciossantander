let valor = 300;
let formaDePagamento = 1;

function aplicarDesconto(valor, desconto) {
  return valor - ((valor * desconto) / 100);
}

function aplicarJuros(valor, desconto) {
  return valor + ((valor * desconto) / 100);
}

(function mostrar() {
// Escolhas: -
// Débito - 1
// PIX/Dinheiro - 2
// Parcelar em menos de duas vezes - 3
// Parcelar em mais de duas vezes - 4

  let mensagem = '';

  if (formaDePagamento === 1) {
    mensagem = `${aplicarDesconto(valor, 10)}`; // Desconto de 10%
  } else if (formaDePagamento === 2) {
    mensagem = `${aplicarDesconto(valor, 15)}`; // Desconto de 15%
  } else if (formaDePagamento === 3) {
    mensagem = `${valor}`; // Nenhum desconto
  } else if (formaDePagamento) {
    mensagem = `${aplicarJuros(valor, 10)}`; // Juros de 10%
  } else {
    mensagem = '[Erro]'
  }

  console.log(`Valor final: ${mensagem}R$.`)
})();