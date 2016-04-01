import { UPDATE_LOCATION } from 'react-router-redux'

// hook into any action without to use the reducer
export default store => next => action => {
  if (action.type === UPDATE_LOCATION) {
    // console.log('page changed')
  }
  return next(action)
}
