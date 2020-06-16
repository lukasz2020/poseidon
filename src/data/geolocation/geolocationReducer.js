import { LOAD_GEOLOCATION_DATA_REQUEST, LOAD_GEOLOCATION_DATA_SUCCESS } from './geolocationActionTypes'
import { Map } from 'immutable'

const initialState = new Map({
  country: ''
})

export default function orders (state = initialState, action) {
  switch (action.type) {
    case LOAD_GEOLOCATION_DATA_REQUEST:
      return state
    case LOAD_GEOLOCATION_DATA_SUCCESS:
      return state.set('country', action.data.countryCode)
    default:
      return state
  }
}
