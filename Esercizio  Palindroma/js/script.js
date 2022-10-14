/* **Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma. */

const parolaUtente = prompt("Ciao dimmi una parola a caso.")
console.log(parolaUtente);

/**
 * Description Questa funzione controlla se la parola inserita è palindroma
 * @param {string} lettereParola parola da controllare
 * @returns {string} ritorna la scritta palindroma o non palindroma
 */
 function parolaPalindroma (lettereParola) {
    let i = 0;
    let f = parolaUtente.length - 1;

    if ((parola[i]) === (parola[f])) {
        alert("e palindorma")
    }}