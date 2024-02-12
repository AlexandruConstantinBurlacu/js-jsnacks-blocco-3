// Scrivi una funzione che accetti una stringa come 
// argomento e la restituisca girata (es. "Ciao" -> "oaiC")

const wordElement = document.querySelector('#parolaStringa');
const invertedElement = document.querySelector('#parolaInvertita');

// funzione pulsante
document.querySelector('#buttonReverse').onclick = function() {

    const wordString = wordElement.value;
    const reversedString = reverse(wordString);

    invertedElement.innerText = reversedString;
}

function reverse(str) {
    return str.split('').reverse().join('');
}



