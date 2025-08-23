let peguei = new Date();
let horas = peguei.getHours();
let minutos = peguei.getMinutes();
let turno = '';


if (horas < 10) {
  horas = '0' + horas;
} if (minutos < 10) {
  minutos = '0' + minutos;
} else if (horas >= 6 && horas <= 12){
  turno = 'Manhã'
} else if (horas >= 13 && horas < 18) {
  turno = 'Tarde'
} else if (horas >= 18 && horas < 24){
  turno = 'Noite'
} else if (horas >= 0 && horas < 6) {
  turno = 'Madrugada'
} else {
  turno = '[ERRO]'
}

console.log(`${horas}:${minutos} | ${turno}`);