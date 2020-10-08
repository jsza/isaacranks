import {LOCATION_CHANGE} from 'connected-react-router'
import {put, takeEvery} from 'redux-saga/effects'
import {matchPath} from 'react-router'


export function createRouteFetchSaga(path, actionCreator, matchOptions=null) {
  function* _onLocationChange(action) {
    const {pathname} = action.payload.location
    const match = matchPath(pathname, {path, ...matchOptions})

    if (match)
      yield put(actionCreator(match.params))
  }

  function* _saga() {
    yield takeEvery(LOCATION_CHANGE, _onLocationChange)
  }

  return _saga
}
