let nombre = 'Oscar Daniel'
let apellido = 'Acho Chambi'

let estudiante = nombre.concat(' ', apellido)

let estudianteMayus = estudiante.toUpperCase()

let estudianteMinus = estudiante.toLowerCase()

let numeroDeLetras = estudiante.length

let primeraLetra = nombre[0]

let ultimaLetra = apellido[apellido.length]

let eliminarEspacios = estudiante.replace(/ /g, '')

let confirmacionNombre = estudiante.includes(nombre)

console.log(confirmacionNombre)