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

const verifyPrimeNum = (num) => {
  let result
  for (let i = 2; i < num; i++) {
    if (num % 1 == 0 && num % i !== 0 && num % num == 0) { //cambiar por while
      result = true
    } else {result = false}
  } return `¿El número ingreasdo el primo? Resultado : ${result}`
}
console.log(verifyPrimeNum(9))


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

// acceder a propiedades de un objeto


