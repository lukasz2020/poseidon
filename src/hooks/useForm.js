import { useEffect, useState } from 'react'
import { Map } from 'immutable'
import { MAXIMUM_NUMBER_OF_PRODUCTS } from '../constants/constants'

export const useForm = (initialValues, validator) => {
  const initialState = new Map({
    values: initialValues,
    errors: new Map()
  })

  const [fields, setFields] = useState(initialState)
  const country = initialValues.get('country')

  useEffect(() => {
    if (country) {
      setFields(initialState)
    }
  }, [country])

  return {
    values: fields.get('values'),
    errors: fields.get('errors'),
    setFormErrors: (errors) => {
      setFields(fields.set('errors', errors))
    },
    reset: () => setFields(initialState),
    onChange: event => {
      const { target } = event
      let values = fields.get('values')
      let errors = fields.get('errors')
      values = values.set(target.name, target.type === 'checkbox' ? !(target.value === 'true') : target.value)

      if (Number(values.get('units')) === MAXIMUM_NUMBER_OF_PRODUCTS) {
        values = values.set('isPremium', true)
      }

      errors = errors.remove(target.name)

      setFields(fields.set('values', values).set('errors', errors.merge(validator(new Map({
        [target.name]: target.value
      })))))
    }
  }
}
