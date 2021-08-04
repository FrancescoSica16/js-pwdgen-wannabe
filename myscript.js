document.getElementById("titol").innerHTML ="generiamo noi la tua password";

var nome = prompt("qual'è il tuo nome?", "inserisci qui il nome");
var cognome = prompt("qual'è il tuo cognome?");
var colore = prompt("qual'è il tuo colore preferito?");

// var rand = Math.floor(Math.random() * 11);
var rand = parseInt (Math.random() * 11) ;

var pswGen = nome + cognome + colore + rand ;
var contHtre = document.getElementById("psw-gen").innerHTML; 
document.getElementById("psw-gen").innerHTML = contHtre + " " + pswGen;

