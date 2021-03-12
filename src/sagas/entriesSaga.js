import { take, put, delay, call, fork } from 'redux-saga/effects';
import entriesTypes, { populateEntries, populateEntryDetails } from '../actions/entries.actions';
import axios from 'axios'

export function* getAllEntries() {
  try{
  yield take(entriesTypes.GET_ENTRIES) 
  console.log('I need to get the entries now');
  const {data} = yield call(axios, 'http://localhost:3002/entries')
  console.log(data);
  yield put(populateEntries(data));
  } catch(e) {
    console.log(e);
  }
}

 export function* getEntryDetails(id){
   const { data } = yield call(axios, `http://localhost:3002/values/${id}`)
   yield put(populateEntryDetails(id, data))
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    console.log(payload[index]);
    yield fork(getEntryDetails, entry.id)
  }
}


