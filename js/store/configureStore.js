import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'

import rootReducer from '../reducers'
import fetchMiddleware from '../middleware/fetch'

export default function configureStore(history) {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose

  return createStore(
    rootReducer(history),
    undefined,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
      fetchMiddleware,
      routerMiddleware(history))))
}
