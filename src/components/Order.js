import React from 'react'
import '../styles/Order.css'

function Order (props) {
  const { order } = props

  const date = new Date(order.get('createdAt'))

  return (
    <tr className='Orders-row'>
      <td>
        <span className='Order-data Order-id'>{order.get('id')}</span>
      </td>
      <td>
        <span className='Order-data Order-date'>{date.toLocaleDateString()} {date.toLocaleTimeString()}</span>
      </td>
      <td>
        <span className='Order-data Order-first-name'>{order.get('firstName')}</span>
      </td>
      <td>
        <span className='Order-data Order-last-name'>{order.get('lastName')}</span>
      </td>
      <td>
        <span className='Order-data Order-country-code'>{order.get('country')}</span>
      </td>
      <td>
        <span className='Order-data Order-units'>{order.get('units')}</span>
      </td>
      <td>
        <span className='Order-data'>{order.get('isPremium') ? 'Yes' : 'No'}</span>
      </td>
    </tr>
  )
}

export default Order
