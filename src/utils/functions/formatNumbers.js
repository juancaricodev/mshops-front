export const formatAmount = (value) => {
  const divider = /\B(?=(\d{3})+(?!\d))/g
  const valueFormatted = value.toString().replace(divider, '.')
  return valueFormatted
}

export const formatDecimals = (value) => {
  const valueFormatted = Math.round(value * 100)
  return valueFormatted
}
