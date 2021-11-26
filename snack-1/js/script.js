// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM


// Creare un array di oggetti:
const bikesArray = [


    {
        nome:'coppini',
        pesoKg: 1.5
    },

    {
        nome:'Atala',
        pesoKg: 1.7
    },

    {
        nome: 'specialized',
        pesoKg: 0.8
    },

    {
        nome:'Felt',
        pesoKg: 1.4
    },

    {
        nome:'Bottecchia',
        pesoKg: 2
    },

    {
        nome:'cicli Poccianti',
        pesoKg: 2.4
    },


];

// console.log(bikesArray);

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// creo una variabile assumendo che la prima dell'indice sia quella con peso minore ----> 
    // se il peso di thisBikes < lessBikeWeight 
    // allora bikeWeight = thisBikes

let lessWeightBike = bikesArray[0];
// console.log(lessWeightBike);


// creo il ciclo for per scorrere l'array con tutti gli objects al suo interno

for(let i = 0; i < bikesArray.length;i++){
    // mi salvo l'indice dell'array in una variabile
    let thisBikes = bikesArray[i];
    // console.log(thisBikes);
   

    // stabilisco con una if quale bici è più leggera (quella che io ho stabilito che lo sia confrontandola con tutte quelle presenti nell'array)

    if(thisBikes.pesoKg < lessWeightBike.pesoKg){
        lessWeightBike = thisBikes;
    }
    // console.log(lessWeightBike);
    
    
};
    
     console.log(lessWeightBike);

    //  CREO I NNUOVI ELEMENTI HTML E LI POPOLO (versione senza destrutturazione)
     const htmlContainer = document.querySelector('.text-container');
    //  console.log(htmlContainer);

    //  let htmlContent = `
    //  <h2>nome: [${lessWeightBike.nome}]</h2>
    //  <h3>peso: [${lessWeightBike.pesoKg}]</h3>
    //  `;
    
    // VERSIONE CON DESTRUTTURAZIONE
    const {nome,pesoKg}=lessWeightBike;

      let htmlContent = `
       <h2>nome: [${nome}]</h2>
       <h3>peso: [${pesoKg}]</h3>
      `;

     

     htmlContainer.innerHTML += htmlContent;