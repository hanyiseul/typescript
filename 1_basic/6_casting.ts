/**
 * Casting
 * 
 * Ts에서 Casting을 하면 js에서는 적용이 안된다.
 */

const codefactory = 'codefactory'
const testNumber = 3

console.log(codefactory.toUpperCase())
// console.log(testNumber.toUpperCase())

let sampleNumber:any = 5;
// console.log(sampleNumber.toUpperCase())
console.log((sampleNumber as string))
let stringVar = sampleNumber as string
console.log(stringVar)

console.log(typeof (sampleNumber as string))

let number = 5;
console.log((number as any).toUpperCase()) 