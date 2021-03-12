import { take, put, delay, call } from 'redux-saga/effects'

function double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    console.log('Start saga');
    const state = yield take('TEST_MESSAGE')
    const doub = yield call(double, 2)
    console.log(`Finish saga function ${JSON.stringify(state)}`, state, doub);
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(1000)
    yield put({type: 'TEST_MESSAGE', payload: 1000 })
  }
}