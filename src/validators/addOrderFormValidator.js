import { Map } from 'immutable'

export default function (values) {
  let errors = new Map()

  values.forEach((value, name) => {
    if (name !== 'isPremium' && value === '') {
      errors = errors.set(name, 'Field is required')
    }
  })

  return errors
}
