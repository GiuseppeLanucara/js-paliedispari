/* **Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma. */

 let parolaUtente = [];
 parolaUtente = prompt ("Scrivi una parola qualsiasi");
 let parolaNormale = [];
 let parolaContrario = [];

 if (parolaPalindroma(parolaUtente)) {
     console.log("La parola è palindroma");
     alert("La parola è palindroma")
 } else {
     console.log("La parola non è palindroma ");
     alert("La parola non è palindroma")
 }


 /**
  * Description: La funzione controlla se la parola è palindroma 
  * @param {string} parolaDaControllare parola da controllare 
  * @returns {boolean} è palindroma*/

 
 function parolaPalindroma(parolaDaControllare) {
     let ePalindroma = false;
     parolaNormale = parolaDaControllare;

     for (let j = parolaDaControllare.length - 1; j >= 0; j--) {
         parolaContrario += parolaDaControllare[j];
     }

     if (parolaNormale === parolaContrario) {
         ePalindroma = true;
     } else {
         ePalindroma = false;
     }
     return ePalindroma
 }

// const parolaUtente = prompt("Scrivi una parola")
// console.log(controlloPalindroma(parolaUtente));

// function controlloPalindroma(parolaDaControllare) {
        
//         let sinistra = 0;
//         let destra = parolaDaControllare.lenght-1;

//         while (sinistra<destra) {
//             if(parolaDaControllare[sinistra] !== parolaDaControllare[destra]) {
//                 return  false;
//             }
//             ++sinistra;
//             --destra;
//         }

//         return true  ;
// }
