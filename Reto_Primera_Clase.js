// PRIMERA CLASE
// Reto 1: suma de pares
// si se mete un 4 debe dar 6

const input = 4
const num = input
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
  console.log(`The sum of the pair numbers from the input is: ${respuesta}`)
}
//sumpares()

// Reto 2: contar vocales (a, e, i, o, u)
const frase = 'lAs cOsAs bUeNaS eN lA vida_se-hacen esperar 500 años'

const countVowels = () => {
  let vowelCounter = 0  
  frase.split('').forEach((letter) => {
    const trueChar = letter.toLowerCase()
    const vowelBox = ['a', 'e', 'i', 'o', 'u']
    if (vowelBox.includes(trueChar)) {
      vowelCounter += 1
    }
  })
  console.log(`The amount of Vowels in the frase is: ${vowelCounter}`)
}
//countVowels()

// SEGUNDA CLASE
//reto 3 - funcion que identifique números primos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, ]
const verifyPrimeNum = (num) => {
  let result = true
  for (let i = 2; i <= 100; i++) {
    if (num % i !== 0) {
      result = false
      
    } else {result = true}
  } return result
}
console.log(verifyPrimeNum(13))


//reto 4 - funcion que calcule el área de un triangulo dada su Base y Altura
const triangulos = {13: 4, 52: 72, 3:6, 4:4}

const findTrian = (trianObj) => {
  const arrayTrian = Object.entries(trianObj)
  arrayTrian.forEach((trian) => {
    const resultado = (trian[0]*trian[1])/2
    console.log(`al area del triagulo con Base y Altura: ${trian} es: ${resultado}`)
  })
}
findTrian(triangulos)


//const area = (key - key.value) / 2
