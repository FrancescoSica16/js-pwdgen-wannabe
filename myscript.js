console.log("prova");

document.getElementById("titol").innerHTML ="generiamo noi la tua password";

var nome = prompt("qual'è il tuo nome?", "inserisci qui il nome");
var cognome = prompt("qual'è il tuo cognome?");
var colore = prompt("qual'è il tuo colore preferito?");

var pswGen = nome + cognome + colore + "21"; 
document.getElementById("pswGen").innerHTML = pswGen;