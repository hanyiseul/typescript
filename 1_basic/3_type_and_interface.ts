/**
 * Type and Interface
 * /

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemal = 'male' | 'female' // |: union -> a or b

const stringVar: NewStringType  = 'test'; // 다른 파일에서 쓴 변수 사용하면 에러 뜸 tsconfig.json에서  "moduleDetection": "force" 설정!

type IdolType = { // IdolType은 object / name,year 필수
  name: string;
  year?: number;
}

const yuJin : { 
  name: string; // type의 정의
  year: number; // type의 정의
} = {
  name: "안유진", // object 실제값
  year: 2002 // object 실제값
}
const yiseul:IdolType = {
  name: "안유진", // object 실제값
  year: 2002 // object 실제값
}

/**
 * Interface
 * 
 * 타입이 하지 못하는 몇가지 문제를 해결
 * 타입과 인터페이스 기능은 꽤나 겹침
 * 
 * 
 * 이런 선언은 안됨
  * type NewNullType = null;
  * type MaleOrFemal = 'male' | 'female' 
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yiseul2:IdolInterface = {
  name: "안유진", 
  year: 2002 
}

interface idolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yiseul3:idolIT = {
  name: "안유진", 
  year: 2002 
}

interface IdolOptional {
  name: string;
  year?: number; // 입력을 해도 되고 안해도 됨
}

const yiseul4:IdolOptional = {
  name: "안유진"
}

