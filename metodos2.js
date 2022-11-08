//covertir todas las letras a minusculas

let signo = "ESCORPIO";
let signo2 = "escorpio";

let signoCambiado2 = signo2.toUpperCase();
let signoCambiado = signo.toLowerCase();

console.log(signoCambiado === signo2);
console.log(signoCambiado2 === signo);

//concatenar cadenas de texto

let str1 = "cadena numero 1";
let str2 = "cadena numero 2";

let cadenasUnidas1 = str1.concat(" ", str2);
let cadenasUnidas2 = str1 + " " + str2;

console.log(cadenasUnidas1);
console.log(cadenasUnidas2);
console.log(`${str1} ${str2}`);

//eliminar espacios al inicio y al final

let str3 = "     hola mundo      ";
console.log(str3.length);

let str3Modificado = str3.trim();
console.log(str3Modificado.length);

let str3Modificado2 = str3.trimStart();
console.log(str3Modificado2.length);

let str3Modificado3 = str3.trimEnd();
console.log(str3Modificado3.length);

//buscar una palabra, mas precisamente de devuelve el indice de donde empieza esa palabra
// indexof
// con lastindexof busca la palabra desde el final

let str4 = "hola me llamo oscar, me llamo oscar";
console.log(str4.indexOf("oscar"));
console.log(str4.lastIndexOf("oscar"));
