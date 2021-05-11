/* Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/


const biciclette = [
    {
        nome: 'Graziella',
        peso: 35,
    },
    {
        nome: 'Mountain-Bike',
        peso:50,
    },
    {
        nome: 'Velò',
        peso:42,
    },
    {
        nome: 'Electric-Bike',
        peso:20,
    },
    {
        nome: 'Graziella',
        peso:60,
    },
    {
        nome: 'Mountain-Bike',
        peso:73,
    },
];

var listaPesi=[];
for(let i = 0; i < biciclette.length; i++){

    let{peso}=biciclette[i];
    listaPesi.push(peso);
    
}

const pesoMin = Math.min(...listaPesi);
for(let i = 0; i < biciclette.length; i++){
    if(biciclette[i].peso == pesoMin){
        var biciclettaLeggera = biciclette[i]
    }
}


document.getElementById("bicicletta").innerHTML = `
<h1>QUESTA È LA BICICLETTA PIÙ LEGGERA</h1>
        <h3>${biciclettaLeggera.nome}</h3>
        <h3>${biciclettaLeggera.peso} KG </h3>
`

/*Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

