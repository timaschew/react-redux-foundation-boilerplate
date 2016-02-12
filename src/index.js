import React from 'react'
import { render } from 'react-dom'
import Root from './containers/root'
import configureStore from './store/configure-store'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
