"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Types
 */
let helloTExt = 'Hello'; // 변수의 타입 설정
helloTExt = 1;
console.log(helloTExt);
/**
 * Js에 존재하는 타입
 * 7개의 타입
 */
const stringVar = "String";
const numberVar = 0;
const bigIntVar = BigInt(999);
const BooleanVar = true;
const symbolVar = Symbol(1);
const nullBar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키 같은 타입 (남용하지 않고 적절하게 사용해야함)
let anyVar;
anyVar = 1;
anyVar = 'string';
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = "string";
unknownType = 0;
unknownType = true;
let testNumber2 = unknownType;
let testString2 = unknownType;
let testBoolean2 = unknownType;
// any는 어느 변수에도 대입 가능, unknown은 unknown, any 타입에만 대입 가능
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
let neverType = null;
let neverType = undefined;
let neverType = 'test';
/**
 *  리스트 타입
 */
const listType = ['list1', 'list2', 'list3']; // 리스트를 입력하고 싶다 하면 변수에다가 괄호를 열고 닫고 해주면 됨
const booleanList = [true, false, true];
