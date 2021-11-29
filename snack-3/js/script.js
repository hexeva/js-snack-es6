// Dato l'array di nomi:
 const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const minNUmber = 1;
const maxNumber = 4;

// VERSIONE FOR EACH
// creo il nuovo array in cui pusherò i nuovi elementi
const newArray = [];

// con il ciclo for each scorro l'array e con un if verifico le condizioni per l'indice dell'array

myArray.forEach((element,index,array) => {
    // console.log(element);
    if((index > minNUmber) && (index < maxNumber)){
        newArray.push(element)
    };

    
});
console.log(newArray);

// VERSIONE CON FILTER

const filterArray = myArray.filter((element,index,array) => {
    console.log(element);
    

    return index > minNUmber && index < maxNumber
    
    
});
console.log(filterArray);

