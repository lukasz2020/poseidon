import { LOAD_GEOLOCATION_DATA_REQUEST, LOAD_GEOLOCATION_DATA_SUCCESS } from './geolocationActionTypes'
import fetch from 'cross-fetch'

export function loadGeolocationData () {
  return function (dispatch) {
    dispatch({
      type: LOAD_GEOLOCATION_DATA_REQUEST
    })

    fetch('https://freegeoip.app/json/')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LOAD_GEOLOCATION_DATA_SUCCESS,
          data
        })
      })
  }
}
