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
falli subiti.*/
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    },
];

function randomNumbers(){
    return Math.floor(Math.random()*50);
}


const squadreCopia = [];
for(let i = 0; i < squadre.length; i++){
    let squadraEl = squadre[i];         
    squadraEl.punti = randomNumbers(); //sostituisco i valori di falli e punti con numeri casuali
    squadraEl.falli = randomNumbers();//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
    const { nome, falli} = squadraEl //Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
   
    squadreCopia.push({ nome, falli});
}
console.log(squadre);
console.log(squadreCopia);

/* Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
:collisione: Usiamo i nuovi metodi degli array foreach o filter. */

const Numbers = [1,2,3,4,5,10,62,93];

const valoriCompresi = (lista,min,max)=>{
    const compresi = lista.filter((elemento)=>{

        if(lista.lastIndexOf(elemento) >= min && lista.lastIndexOf(elemento) < (max -1)){
            return true;
        }else {
            return false;
        }

    });
    return compresi;
};
const result = valoriCompresi(Numbers,4,8);
console.log(result);




