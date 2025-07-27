let nome = 'Jorge';
let xp = 7000;
let elo = '';

if (nome.length === 0 || Number(xp.length) === 0) {
    console.log('[ERRO] Preencha os dados.')
} else {
    if (xp <= 1000) {
        elo = 'Ferro'
    } else if (xp <= 2000) {
        elo = 'Bronze'
    } else if (xp <= 5000) {
        elo = 'Prata'
    } else if (xp <= 7000) {
        elo = 'Ouro'
    } else if (xp <= 8000) {
        elo = 'Platina'
    } else if (xp <= 9000) {
        elo = 'Ascendente'
    } else if (xp <= 10000) {
        elo = 'Imortal'
    } else if (xp >= 10001) {
        elo = 'Radiante'
    } else {
        elo = '(Elo não encontrado.)'
    }
    
    console.log(`O Herói de nome ${nome} está no nível ${elo}.`);
}