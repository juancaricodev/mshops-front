const capitalizeString = (string) => {
  const wordCapital = (str) => {
    const capital = str.charAt(0).toUpperCase()
    const lower = str.slice(1)

    return `${capital}${lower}`
  }

  const phraseCapital = string.split(' ').map(wordCapital).join(' ')

  return phraseCapital
}

export default capitalizeString
