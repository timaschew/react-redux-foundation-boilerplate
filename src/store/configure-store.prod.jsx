import { createStore, applyMiddleware } from 'redux'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import customMiddleware from '../middleware'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, customMiddleware, syncHistory(browserHistory))
  )
}
