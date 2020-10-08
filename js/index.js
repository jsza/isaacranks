import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {ConnectedRouter} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import configureStore from './store/configureStore'

import App from './scenes/App'

import '../scss/index.scss'



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

  const history = createBrowserHistory()
  const store = configureStore(history)
  render(App, history, store, container)
}

startup()
