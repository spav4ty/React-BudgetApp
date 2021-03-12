import { call, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import entriesTypes from '../actions/entries.actions';

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDB)
}

function* addEntryToDB({payload}) {
  yield call(addEntry, payload)
  yield call(addEntryDetails, payload)
  yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload})
}

async function addEntry({id,description}) {
  await axios.post('http://localhost:3002/entries', {
    id, description
  })
}

async function addEntryDetails({id,value, isExpense}) {
  await axios.post('http://localhost:3002/values', {
    id, value, isExpense
  })
}