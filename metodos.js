//obetner longitud de una string

let str = "hola soy un string";

console.log(str.length);

//obtener partes de candeas de caracateres
// slice() substring() substr()

let silce_str = str.slice(5, 10);
console.log(silce_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

//remplazar cadenas de caracteres
//replace() remplaza el primer caracter que encuentra puesto en los parametros

let cadena = "hola soy oscar";
let cadenaRemplazada = cadena.replace("oscar", "daniel");
console.log(cadenaRemplazada);

//usa /caracter/g para remplazar todos los caracteres

let cadena2 =
  "varias palabras para remplazar, en varias oraciones diferentes, varias veces";
let candenaRemplazada2 = cadena2.replace(/varias/g, "algunas");
console.log(candenaRemplazada2);
