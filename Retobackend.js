// reto 1: suma de pares
// si se mete un 4 debe dar 6

const num = 4

const createArray = (num) => {
  let arr = []
  for (let i = 1; i <= num; i++) {
      arr.push(i)
  }
  return arr
}
const arr = createArray(num)
const sumpares = () => {
  let respuesta = 0
  arr.forEach((elem) => {
  if (arr[elem] <= num) {
    if (arr[elem] % 2 == 0) {
      respuesta += arr[elem]
    }
    elem += 1
  }
})
console.log(respuesta)
}
sumpares()

// reto 2: contar vocales (a, e, i, o, u)

const frase = 'las cosas buenas en la vida se hacen esperar'