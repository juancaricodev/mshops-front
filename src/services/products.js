const URL = 'https://polar-tundra-66918.herokuapp.com/api/items?q='

// The function gets a string to be included in the fetch request as a query parameter.
const getAll = (query) => {
  // Concatenate the URL and the string received for fetching the data.
  const data = fetch(`${URL}${query}`)

  // Response transformed into JSON format
  const response = data.then(res => res.json())

  return response
}

export default { getAll }
