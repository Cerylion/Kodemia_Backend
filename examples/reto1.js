//sumar pares
const addPairs = (num) => {
  let count = 0
  for (let i = 0; i <= num; i += 2) {
    count += i
  }
  return count
}
//console.log(addPairs(5))
console.log(addPairs(process.argv[2]))

// conseguir el área de un triagulo
const findTrian = (a, b) => {
  const area = (a*b)/2
  const resultado = (`al area del triagulo con Base ${a} y Altura ${b} es: ${area}`)
  return resultado
}

console.log(findTrian(process.argv[2], process.argv[3]))


// crear un array de numeros con elementos de la terminal
const arv = process.argv.slice(2)
console.log(arv)
const numArv = []
arv.forEach(element => {
  numArv.push(Number(element))
})
console.log(numArv)


// reto duplicar items en array
const doubleArray = (arr) => {
  let result = []
  arr.forEach((e) => {
    result.push(e)
    result.push(e)
  })
  return `el array duplicado es ${result}`
}
console.log(doubleArray(numArv))


// funcion de imprimir pares
const findEvens = (arr) => {
  let evens = []
  for (number of arr) {
    if (number % 2 === 0) evens.push(number)
  }
  return evens
}
console.log(findEvens(arv))


// funcion numero mayor
const findLargestNum = (arr) => {
  let result = Number.NEGATIVE_INFINITY
  for (number of arr) {
    if (number > result) result = number
  }
  return `${result} is the Largest Number in the Array`
}
console.log(findLargestNum(numArv))