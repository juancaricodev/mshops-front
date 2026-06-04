const BASE_URL = 'https://polar-tundra-66918.herokuapp.com/api'

const fetchJson = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`)

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`API request failed with status ${response.status}: ${errorText}`)
  }

  return response.json()
}

export default { fetchJson }
