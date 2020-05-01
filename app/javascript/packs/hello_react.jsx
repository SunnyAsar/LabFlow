// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../Components/App'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import '../assets/iconfont/material-icons.css'

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('wrapper').appendChild(document.createElement('div'))
  )
})
