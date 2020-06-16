export function calculateDiscount (units, discountPercentPerUnit) {
  return (units - 1) * (discountPercentPerUnit / 100)
}
