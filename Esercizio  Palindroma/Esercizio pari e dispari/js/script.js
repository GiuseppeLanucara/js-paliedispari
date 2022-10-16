// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pariDispari = prompt("Dimmi pari o dispari")
console.log(pariDispari);

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente, typeof(numeroUtente));

const numeroComputer = numeroRandom()
console.log(numeroComputer);


function numeroRandom(numeroPC) {
 numeroPC=  parseInt(Math.ceil(Math.random() * 6));
 return numeroPC
}

const result = numeroUtente + numeroComputer
console.log(result);

const risultatoPariDispari = sommaPariDispari(result)
console.log(result);

function sommaPariDispari(tipoNumero) {
    if ((tipoNumero % 2 == 0)) {
        alert("La somma dei numeri è pari")
    } else {
        alert("La somma è dispari")
    }
}

const vincitore = risultatoPariDispari 

if (risultatoPariDispari = pariDispari ) {
    alert("Utente ha vinto")
} else {
    alert ("utente ha perso")
}