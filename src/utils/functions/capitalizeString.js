// Function receives a string as param. and capitalizes the first letter of each word
const capitalizeString = (string) => {
  // Inner function for capitalize the first letter of each word
  const wordCapital = (str) => {
    const capital = str.charAt(0).toUpperCase()
    const lower = str.slice(1)

    return `${capital}${lower}`
  }

  // Maps a splitted string for applying wordCapital inner function
  const phraseCapital = string.split(' ').map(wordCapital).join(' ')

  return phraseCapital
}

export default capitalizeString
