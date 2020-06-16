export function calculatePrice (price, units, discount) {
  return price * units * (1 - discount)
}

export function roundPrice (price, decimalPart) {
  price = price.toString()
  const priceParts = price.split('.')
  console.log(priceParts[0] + '.' + decimalPart)
  return parseFloat(priceParts[0] + '.' + decimalPart)
}
