import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'

import App from './containers/App'



const render = (Component, history, store, container) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    container)
}

function startup() {
  while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild)
  const container = document.createElement('div')
  document.body.appendChild(container)

  const history = createHistory()
  const store = configureStore(history)
  render(App, history, store, container)
}

startup()
