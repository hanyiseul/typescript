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
