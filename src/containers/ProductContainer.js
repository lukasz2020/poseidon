import { connect } from 'react-redux'
import { loadOrders, addNewOrder } from '../data/orders/ordersActionCreators'
import { loadGeolocationData } from '../data/geolocation/geolocationActionCreators'
import Product from '../components/Product'

const mapStateToProps = (state) => {
  const { geolocationReducer, ordersReducer } = state

  return {
    orders: ordersReducer.get('orders'),
    country: geolocationReducer.get('country')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialize: () => {
      dispatch(loadOrders())
    },
    onCheckout: (order) => {
      dispatch(addNewOrder(order))
    },
    onGeolocationInitialize: () => {
      dispatch(loadGeolocationData())
    }
  }
}

const ProductPage = connect(mapStateToProps, mapDispatchToProps)(Product)

export default ProductPage
