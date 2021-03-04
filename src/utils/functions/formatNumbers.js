// Function receives a number as param. to be formatted into a string = [000.000]
export const formatAmount = (value) => {
  // RexEx for dividing the param. received
  const divider = /\B(?=(\d{3})+(?!\d))/g

  // Transform the param. into a string and apply the divider
  const valueFormatted = value.toString().replace(divider, '.')

  return valueFormatted
}

// Function receives a number (decimals) as param. to be transformed into format = [00]
export const formatDecimals = (value) => {
  // Param. rounded and multiplied by 100 for formatting into [00]
  const valueFormatted = Math.round(value * 100)

  return valueFormatted
}
