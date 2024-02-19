// crear un array de con elementos de la terminal
// los datos se ingresan de manera: key1:value1 key2:value2 etc...
// para el ejemplo estoy utilizando node ./Reto-3er_Clase.js Nombre:Manuel Apellido:Moran Ciudad:Monterrey
const arv = process.argv.slice(2)
console.log(arv) // esto imprime el array
const objArv = {}

// crear y rellenar un objeto con el array anterior
// aqui ya estoy haciendo el tercer requisito, que era agregar pripiedades a on objeto
arv.forEach(element => {
  const elemArr = element.split(':')
  const key = elemArr[0]
  const value = elemArr[1]
  objArv[key] = value  // Aqui agrego secuencialmente key y value al objeto objArv
})
console.log(objArv) // aqui se imprime el objeto ahora lleno

// acceder a propiedades de un Obj
for (key in objArv) {
  console.log(objArv[key]) // aquí se imprimen los valores de cada key del objeto
}

//agregar propiedades a un objeto
// esto ya lo hice en la primera

//comparar dos objetos
const otroObj = {
  Nombre: 'Manuel',
  Apellido: 'Moran',
  Ciudad: 'Monterrey'
}

const tercerObj = {
  Nombre: 'Manuel',
  Apellido: 'Moran',
  Ciudad: 'Caracas'
}

// como los objetos no se pueden comparar de manera sencilla, hay que volverlos string primero
const compOBJ = (obj1, obj2) => {
  let result = ''
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    result = true
  } else {
    result = false
  }
  return `are both arrays equal: ${result}`
}

console.log(compOBJ(objArv, otroObj))
console.log(compOBJ(objArv, tercerObj))