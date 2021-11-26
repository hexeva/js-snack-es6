// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
const footballTeams = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti:0
    },

    {
        nome: 'Chelsea',
        puntiFatti: 0,
        falliSubiti:0
    },

    {
        nome: 'Real Madrid',
        puntiFatti: 0,
        falliSubiti:0
    },

    {
        nome: 'Manchester United',
        puntiFatti: 0,
        falliSubiti:0
    },

    {
        nome: 'Barcellona',
        puntiFatti: 0,
        falliSubiti:0
    },

    {
        nome: 'Bayern Monaco',
        puntiFatti: 0,
        falliSubiti:0
    },

    {
        nome: 'Dinamo-Kiev',
        puntiFatti: 0,
        falliSubiti:0
    },

];

console.log(footballTeams);
// Generare numeri random al posto degli 0 nelle proprietà:

// prendo una funzione per i numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//   salvo la funzione in una variabile



// creo un ciclo for per scorrere tutto l'array

for(let i = 0; i < footballTeams.length; i++){
    const singleTeam = footballTeams[i];
// genero a ogni ciclo un numero random diverso
    let randomPoints = getRndInteger(0,100);
    let randomFouls = getRndInteger(0,50);
    // console.log(singleTeam);
    // per ogni squadra andrò a sostituire il valore con la variabile random
    singleTeam.falliSubiti = randomFouls;
    singleTeam.puntiFatti = randomPoints;
    console.log(singleTeam);
}

