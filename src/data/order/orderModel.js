import { Record } from 'immutable'

export default class Order extends Record({
  id: null,
  createdAt: null,
  country: null,
  firstName: null,
  lastName: null,
  units: 0,
  isPremium: false
}) { }
