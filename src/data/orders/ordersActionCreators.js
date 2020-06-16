import { LOAD_ORDERS_REQUEST, LOAD_ORDERS_SUCCESS, ADD_NEW_ORDER } from './ordersActionTypes'
import Order from '../order/orderModel'
import { List } from 'immutable'
import fetch from 'cross-fetch'

export function loadOrders () {
  return function (dispatch, getState) {
    const state = getState()
    const orders = state.ordersReducer.get('orders')

    if (orders.count()) {
      return
    }

    dispatch({
      type: LOAD_ORDERS_REQUEST
    })

    fetch('https://api.jsonbin.io/b/5ecd438ca2a6e10f7bc644c3')
      .then(response => response.json())
      .then(data => {
        const orders = new List(data.map((order) => {
          // order.createdAt = new Date('2020-05-30T12:25:00.000+00:00');
          // console.log(new Order(order));
          return new Order(order)
        }))

        dispatch({
          type: LOAD_ORDERS_SUCCESS,
          orders: sortOrdersByDateDesc(orders)
        })
      })
  }
}

const sortOrdersByDateDesc = (orders) => {
  return orders.sort((orderA, orderB) => {
    const timeA = (new Date(orderA.get('createdAt'))).getTime()
    const timeB = (new Date(orderB.get('createdAt'))).getTime()

    if (timeB < timeA) { return -1 }
    if (timeB > timeA) { return 1 }
    if (timeA === timeB) { return 0 }
  })
}

export function addNewOrder (order) {
  return function (dispatch) {
    dispatch({
      type: ADD_NEW_ORDER,
      order
    })
  }
}
