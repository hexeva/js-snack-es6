// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.(map)
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70 (filter)
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 (filter)



// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.(map)

// versione con for each 

const provaArray =[];

students.forEach((elements,index,array) => {
    let name = elements.name.toUpperCase();
    
    const newStudent ={
        name
    };
    // console.log(newStudent);
    provaArray.push(newStudent);
});
console.log(provaArray);


// versione con MAp


 const targStudents = students.map((elements,index,array) => {
     // console.log(elements);
     let uppernames = elements.name.toUpperCase();
     console.log(uppernames);

     return uppernames;
    
 });

 console.log(targStudents);

// 2----------- creo un nuovo array con filter con cui appunto,filtrerò la chiave grades

const gradesArray = students.filter((elements,index,array) => {

    return elements.grades >= 70

});
console.log(gradesArray);

// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120  (filter)

const eliteStudents = students.filter((elements,index,array) => {

    return elements.grades > 70 && elements.id > 120

});

console.log(eliteStudents);

