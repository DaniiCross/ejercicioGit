/*Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”.*/

let cadena = prompt ("Ingrese una cadena de texto");
let caracter = prompt ("Ingrese el caracter a buscar");
let contador = 0;

for (let i=0 ; i< cadena.length; i++){
    if(cadena.charAt (i) === caracter){
        contador++;
    }
}
console.log ("El caracter " + caracter + " se repite " + contador + " veces, en " + cadena)
