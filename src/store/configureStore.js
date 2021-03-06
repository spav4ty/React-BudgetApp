/* eslint-disable import/no-anonymous-default-export */
import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import entriesReducers from "../reducers/entries.reducers";
import modalsReducer from '../reducers/modals.reducers'


const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducers,
      modals: modalsReducer
    }),
    composeWithDevTools()
  );
};

export default configureStore;