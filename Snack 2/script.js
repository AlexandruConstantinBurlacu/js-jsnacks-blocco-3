// Scrivi una funzione che fonda due array presi come parametri
// (date per scontato che abbiano lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const primoArray = ['a', 'b', 'c', 'd', 'e', 'f'];
const secondoArray = [1, 2, 3, 4, 5, 6];

function fusionArray() {
    const risultatoArray = [];

    for(let i = 0; i < primoArray.length; i++) {
        risultatoArray.push(primoArray[i]);
        risultatoArray.push(secondoArray[i]);
    }
    return risultatoArray;

}

const arrayCombinato = fusionArray(primoArray, secondoArray);
console.log(arrayCombinato);
