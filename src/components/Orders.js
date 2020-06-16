import React, { useEffect } from 'react'
import Order from './Order'
import '../styles/Orders.css'

function Orders (props) {
  const { onInitialize, orders } = props

  useEffect(() => {
    onInitialize()
  }, [])

  return (
    <table className='Orders'>
      <thead className='Orders-header'>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Units</th>
          <th>Premium shipping</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => <Order key={order.get('id')} order={order} />)}
      </tbody>
    </table>
  )
}

export default Orders
