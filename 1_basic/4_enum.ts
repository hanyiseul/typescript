/**
 * Enum
 */

/**
 * API 요청
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */

function runWork() {
  let state = 'INITIAL'
  try {
    state = 'LOADING'
    // 작업을 한다.\
    state = 'DONE'
  }catch(e) {
    state = 'ERROR'

  }finally {
    return state;
  }
}
// runWork();
console.log(runWork() === 'DONE');

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
  let state = initialState
  try {
    state = loadingState
    // 작업을 한다.\
    state = doneState
  }catch(e) {
    state = errorState

  }finally {
    return state;
  }
}
console.log(runWork2() === doneState);

enum State {
  Done = 'done',
  Loading = 'loading',
  INITIAL = 'initial',
  ERROR = 'error'
}

function runWork3() {
  let state = State.INITIAL
  try {
    state = State.Loading
    // 작업을 한다.\
    state = State.Done
  }catch(e) {
    state = State.ERROR

  }finally {
    return state;
  }
}
console.log(runWork3() === State.Done);
console.log(runWork3()) // 0 enum 선언 때 0,1,2,3으로 감 싫으면 값 설정해주면 됨