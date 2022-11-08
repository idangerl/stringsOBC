//saber cuantas veces se repite una palabra
//match crea un array con todas las palabras buscadas usamos /palabra/g para una busqueda global
//lenght  las cuenta
let str = 'hola soy oscar,hola soy oscar,hola soy oscar'
const arrayStr = str.match(/oscar/g)
console.log(arrayStr.length)

//includes pasa un booleando que confirma o niega la existencia de una palabra
 let str2 = 'hola soy oscar'
 console.log(str2.includes('oscar'))
 console.log(str2.includes('daniel'))

 //saber si un string empieza o termina con...

 console.log(str2.startsWith('hola soy'))
 console.log(str2.endsWith(' oscar'))