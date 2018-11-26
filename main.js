// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

//funzione per generare numeri random

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//array da popolare

var arrayUtente = [];
var arrayComputer = [];

//ciclo for per esporre 5 numeri da 0 a 20

for (var i = 0; i < 5; i++) {
  var newNum = alert(getRandom (0 , 20));
  arrayComputer.push(newNum);
}

//ricordo all utente di ricordare i numeri

alert('Cerca di ricordare questi numeri!' + arrayComputer);

//chiedo all utente di inserire i numeri che si ricorda e faccio passare 30 secondi

setTimeout(function() {
  for(var i = 0; i < 5; i++){
    var numeroUtente = parseInt(prompt('Ora riscrivi i numeri che ti ricordi!'));
    // if (arrayComputer.includes(arrayUtente)) {
    // arrayUtente.push(numeroUtente);
    // if (arrayUtente.length > 0) {
    // alert('Hai indovinato ' + arrayUtente.length + 'su: ' + arrayComputer.length);
    // } else {
    // alert('Non hai preso nemmeno un numero');
    //   }
    // }
  }
}, 30000);


// il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

//se definisco il cilco for all esterno del seTimeout non prende la variabile numeroUtente quindi  deve
//essere all interno del ciclo for sopra
