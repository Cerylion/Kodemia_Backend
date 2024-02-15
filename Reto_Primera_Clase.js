// reto 1: suma de pares
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
sumpares()

// reto 2: contar vocales (a, e, i, o, u)
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
countVowels()
