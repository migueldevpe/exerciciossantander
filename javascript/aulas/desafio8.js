/*class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor (marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGasto(km, preço) {
    return km * this.gastoMedioPorKm * preço;
  }
}

const gol = new Carro('Volkswagen', 'branco', 1 / 12);
console.log(gol);
console.log(gol.calcularGasto(40, 5))*/

class Pessoa {
  nome;
  altura;
  peso;

  constructor (nome='', altura=0, peso=0) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }

  calcularImc () {
    return this.peso / Math.pow(this.altura, 2);
  }

  mostrarImc () {
    const imcFinal = this.calcularImc()

    let resultadoimc = '';

    if (imcFinal >= 0 && imcFinal < 18.5) {
      resultadoimc = 'Abaixo do peso';
    } else if (imcFinal >= 18.5 && imcFinal <= 25) {
      resultadoimc = 'Peso normal';
    } else if (imcFinal > 25 && imcFinal <= 30) {
      resultadoimc = 'Acima do peso';
    } else if (imcFinal > 30 && imcFinal <= 40) {
      resultadoimc = 'Obeso';
    } else if (imcFinal > 40) {
      resultadoimc = 'Obesidade grave';
    } else {
      resultadoimc = '[Erro]';
    }

    return imcFinal + ', ' + resultadoimc;
    }
}

const josé = new Pessoa('josé', 1.75, 85)

console.log(`Olá! Me chamo ${josé.nome}, peso ${josé.peso}kg e tenho ${josé.altura} metros de altura.`)
console.log(`O meu IMC foi ${josé.mostrarImc()}. \n`)

const carlos = new Pessoa('carlos', 1.70, 60)

console.log(`Olá! Me chamo ${carlos.nome}, peso ${carlos.peso}kg e tenho ${carlos.altura} metros de altura.`)
console.log(`O meu IMC foi ${carlos.mostrarImc()}. \n`)
