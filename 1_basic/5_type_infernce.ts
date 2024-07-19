/**
 * Type Inference
 * 
 * 타입 추론
 * 초기화할 때 값을 명확하게 넣어주면 그 값으로 타입 추론
 */

let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false; // o
// booleanType = 'false'; // boolean으로 타입 추론이 돼서 string 형식은 할당 x

const constStringType = 'const string'; // string literal type : 초기값 박제
const constStringType2: 'const string' = 'const string'; 
const constBooleanType = true;

let yuJin = {
  name: '안유진',
  age: 2003,
}

const yuJin2 = {
  name: '안유진',
  age: 2003
}

yuJin2.name = "코드팩토리";
console.log(yuJin2);

const yuJin3 = {
  name: '안유진' as const, // 캐스팅
  age: 2003 as const
}

// yuJin3.name = '코드팩토리' // 캐스팅해서 값 할당 x
console.log(yuJin3)
console.log(yuJin2.name)
console.log(yuJin3.name)


/**
 * Array
 */

let numbers = [1,2,3,4,5];
let numbersAndString = [1,2,3,'4','5','6']

// numbers.push(6)
const number = numbers[0]
console.log(number)
const nos = numbersAndString[0]
console.log(nos)

// tuple
const twoNumbers = [1,3] as const;

console.log(twoNumbers[0])

// twoNumbers[0] = 10; // x
// twoNumbers.push(100) //x

const first = twoNumbers[0] // 1
const first2 = twoNumbers[3] // 1