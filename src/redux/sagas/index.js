// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { actionWatcher } from './newsFeedSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(actionWatcher)
  ]);
};