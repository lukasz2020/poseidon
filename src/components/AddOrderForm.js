import React, { useEffect, useState } from 'react'
import { MAXIMUM_NUMBER_OF_PRODUCTS, PRODUCT_PRICE, DISCOUNT_PERCENT_PER_UNIT, PRODUCT_PRICE_DECIMAL_PART, SHIPPING_PRICE } from '../constants/constants'
import COUNTRIES from '../constants/countries'
import { useForm } from '../hooks/useForm'
import addOrderFormValidator from '../validators/addOrderFormValidator'
import { Map } from 'immutable'
import { calculateDiscount } from '../services/discountService'
import { calculatePrice, roundPrice } from '../services/priceService'
import '../styles/AddOrderForm.css'
import cx from 'classnames'

function generateUnitOptionTags (max = MAXIMUM_NUMBER_OF_PRODUCTS) {
  const options = [<option key='total-units-empty' value=''>Select total units</option>]

  for (let i = 1; i <= max; i++) {
    options.push(<option key={`total-units${i}`} value={i}>{i}</option>)
  }

  return options
}

function generateCountryOptionTags () {
  const options = COUNTRIES.map((country) => <option key={`country${country.code}`} value={country.code}>{country.name}</option>)
  options.unshift(<option key='country-empty' value=''>Select country</option>)

  return options
}

const defaultValues = new Map({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  streetName: '',
  city: '',
  country: '',
  units: '',
  isPremium: false
})

function AddOrderForm (props) {
  const { onGeolocationInitialize, country } = props

  useEffect(() => {
    onGeolocationInitialize()
  }, [])

  const { values, errors, onChange, setFormErrors } = useForm(defaultValues.set('country', country), addOrderFormValidator)

  const [price, setPrice] = useState(new Map({ total: 0, discount: 0 }))

  const onTotalUnitsChange = (event) => {
    onChange(event)
    const totalUnits = parseInt(event.target.value)
    const discount = calculateDiscount(totalUnits, DISCOUNT_PERCENT_PER_UNIT)
    console.log(discount * 100)
    const totalPrice = roundPrice(calculatePrice(PRODUCT_PRICE, totalUnits, discount), PRODUCT_PRICE_DECIMAL_PART)
    setPrice(new Map({ total: totalPrice, discount: ((discount * 100).toFixed(0)) }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { onCheckout } = props
    const errors = addOrderFormValidator(values)

    if (errors.count()) {
      setFormErrors(errors)
    } else {
      onCheckout(values)
    }
  }

  console.log(values)

  return (
    <div className='Add-order-form'>
      <div className='Add-order-form-product-info'>
        <div className='Add-order-form-product-image-container'>
          <img className='Add-order-form-product-image' src='https://d3hlrrbqydii6y.cloudfront.net/img/114b3c76b08fd8053ac7d74ea4d15c40.png' />
        </div>
        <div className='Add-order-form-product-price-container'>
          <p className='Add-order-form-product-price-info'>Select number of units to see your price and discount</p>
          <div className='Add-order-form-total-units'>
            <label className='Add-order-form-label' htmlFor='units'>
              <span>Total units</span>
            </label>
            <span className='Add-order-form-product-form-field'>
              {errors.get('units') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('units') })}>{errors.get('units')}</span>}
              <select id='units' name='units' value={values.get('units')} onChange={onTotalUnitsChange}>
                {generateUnitOptionTags()}
              </select>
            </span>
          </div>
          <div className='Add-order-form-product-total-price'>
            {price.get('discount') > 0 && <p className='Add-order-form-product-discount'>Your discount: <span className='Add-order-form-product-percent'>{`${price.get('discount')}%!`}</span></p>}
            {price.get('total') > 0 && <p className='Add-order-form-product-price'>Your price: <span className='Add-order-form-product-total'>{price.get('total')}</span>&nbsp;USD</p>}
            {values.get('units') > 0 && <p className='Add-order-form-product-shipping'>Shipping cost: {Number(values.get('units')) === MAXIMUM_NUMBER_OF_PRODUCTS ? <span className='Add-order-form-product-free-shipping'>Free!</span> : `${SHIPPING_PRICE} USD`}</p>}
          </div>
        </div>
      </div>
      <form className='Add-order-form-product-form' onSubmit={onSubmit}>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='firstName'>
            <span>First Name</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('firstName') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('firstName') })}>{errors.get('firstName')}</span>}
            <input id='firstName' className='Add-order-form-input' type='text' placeholder='First Name' name='firstName' value={values.get('firstName')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='lastName'>
            <span>Last Name</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('lastName') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('lastName') })}>{errors.get('lastName')}</span>}
            <input id='lastName' className='Add-order-form-input' type='text' placeholder='Last Name' name='lastName' value={values.get('lastName')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='email'>
            <span>Email</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('email') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('email') })}>{errors.get('email')}</span>}
            <input id='email' className='Add-order-form-input' type='text' placeholder='Email' name='email' value={values.get('email')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='phone'>
            <span>Phone</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('phone') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('phone') })}>{errors.get('phone')}</span>}
            <input id='phone' className='Add-order-form-input' type='text' placeholder='Phone' name='phone' value={values.get('phone')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='city'>
            <span>City</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('city') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('city') })}>{errors.get('city')}</span>}
            <input id='city' className='Add-order-form-input' type='text' placeholder='City' name='city' value={values.get('city')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='streetName'>
            <span>Street</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('streetName') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('streetName') })}>{errors.get('streetName')}</span>}
            <input id='streetName' className='Add-order-form-input' type='text' placeholder='Street' name='streetName' value={values.get('streetName')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <label className='Add-order-form-label' htmlFor='country'>
            <span>Country</span>
          </label>
          <span className='Add-order-form-product-form-field'>
            {errors.get('country') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('country') })}>{errors.get('country')}</span>}
            <select id='country' name='country' value={values.get('country')} onChange={onChange}>
              {generateCountryOptionTags(values.get('country'))}
            </select>
          </span>
        </div>
        <div className='Add-order-form-product-row Add-order-form-product-row-premium-shipping'>
          <label className='Add-order-form-label' htmlFor='isPremium'>
            <span>Premium shipping and support</span>
          </label>
          <span className='Add-order-form-product-form-field Add-order-form-product-form-checkbox'>
            {errors.get('isPremium') && <span className={cx('Add-order-form-product-form-field-error', { 'Add-order-form-product-form-field-error-visible': errors.get('isPremium') })}>{errors.get('isPremium')}</span>}
            <input id='isPremium' type='checkbox' name='isPremium' value={values.get('isPremium')} checked={values.get('isPremium')} onChange={onChange} />
          </span>
        </div>
        <div className='Add-order-form-product-row'>
          <input className='Add-order-form-submit' type='submit' value='Checkout' />
        </div>
      </form>
    </div>
  )
}

export default AddOrderForm
