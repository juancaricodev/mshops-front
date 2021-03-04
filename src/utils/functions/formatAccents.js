// Function receives a string with accent marks to be erased
const formatAccents = (string) => {
  // Separate the accent marks from the letters and they're deleted
  const formatted = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  return formatted
}

export default formatAccents
