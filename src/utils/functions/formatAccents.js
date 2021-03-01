const format = (string) => {
  const formatted = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  return formatted
}

export default format
