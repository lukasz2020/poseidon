import { LOAD_ORDERS_REQUEST, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAILURE, ADD_NEW_ORDER } from './ordersActionTypes'
import { List, Map } from 'immutable'
import Order from '../order/orderModel'

const initialState = new Map({
  orders: new List()
})

export default function orders (state = initialState, action) {
  switch (action.type) {
    case LOAD_ORDERS_REQUEST:
      return state
    case LOAD_ORDERS_SUCCESS:
      return state.set('orders', action.orders)
    case LOAD_ORDERS_FAILURE:
      return state
    case ADD_NEW_ORDER: {
      let newOrder = new Order(action.order)
      newOrder = newOrder.set('id', Math.random().toString(36))
      newOrder = newOrder.set('createdAt', (new Date()).toISOString())
      return state.updateIn(['orders'], (orders) => {
        return orders.unshift(newOrder)
      })
    }
    default:
      return state
  }
}
