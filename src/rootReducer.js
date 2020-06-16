import { combineReducers } from 'redux'
import ordersReducer from './data/orders/ordersReducer'
import geolocationReducer from './data/geolocation/geolocationReducer'

export default combineReducers({
  ordersReducer,
  geolocationReducer
})
