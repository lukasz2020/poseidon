import React from 'react'
import AddOrderForm from './AddOrderForm'
import Orders from './Orders'
import '../styles/Product.css'

function Product (props) {
  const { onInitialize, orders, onCheckout, country, onGeolocationInitialize } = props

  return (
    <div className='Product-container'>
      <section className='Product'>
        <header>
          <h1 className='Product-section-title'>Product</h1>
        </header>
        <AddOrderForm onCheckout={onCheckout} country={country} onGeolocationInitialize={onGeolocationInitialize} />
      </section>
      <section className='Product-orders'>
        <header>
          <h1 className='Product-section-title'>Orders</h1>
        </header>
        <Orders onInitialize={onInitialize} orders={orders} />
      </section>
    </div>
  )
}

export default Product
