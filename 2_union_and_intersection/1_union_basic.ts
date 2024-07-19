/**
 * Union basic
 * 
 * 유니언은 ts에서 타입을 병합 할 수 있는 수많은 방법 중 console.error('하나이다',하나이다)
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

// stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = "DONE";
state = "LOADING";
// state = "INITIAL" // error

// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[]

let strListOrBooleanList: StringListOrBooleanList = [
  '아이유',
  '김고은',
  '박소담'
]

strListOrBooleanList = [
  true,
  false,
  false,
  true
]

// strListOrBooleanList = [ // error
//   true,
//   '아이유'
// ]

type strOrNumberList = (string | number)[];

let strOrNumberList = [
  1,2,3,
  '아이유',
  '레드벨벳'
]

strOrNumberList = [1,2,3]
strOrNumberList = [
  '아이유',
  '레드벨벳'
]
// strOrNumberList = [true, false] // error

/**
 * Interface로 사용하는 union
 */

interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: '최지호',
  age: 32,
  address: '대한민국'
}

console.log(animalOrHuman)
console.log(animalOrHuman.name)
console.log(animalOrHuman.age)
console.log(animalOrHuman.address)

animalOrHuman = {
  name:"오리",
  age: 9
}
console.log(animalOrHuman)
console.log(animalOrHuman.name)
console.log(animalOrHuman.age)
// console.log(animalOrHuman.address) // Animal 형식에 address 속성 x
console.log((animalOrHuman as Human).address) // Animal 형식에 address 속성 x

let animalOrHuman2:{
  name: string,
  age: number
} | {
  name: string,
  age: number,
  address: string
} = {
  name: '최지호',
  age: 32,
  address: '대한민국'
}

console.log(animalOrHuman2)
console.log(animalOrHuman2.name)
console.log(animalOrHuman2.age)
console.log(animalOrHuman2.address)

animalOrHuman2 = {
  name: '오리',
  age: 9,
}

console.log(animalOrHuman2)
console.log(animalOrHuman2.name)
console.log(animalOrHuman2.age)
// console.log(animalOrHuman2.address) // error

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
  name: string,
  age: number
}

type Cat = {
  bread: string;
  country: string;
}

type PersonOrCat = Person | Cat

const personOrCat: PersonOrCat = {
  name: '코드팩토리',
  age: 32,
  bread: '복실이',
  country: '영국'
}

