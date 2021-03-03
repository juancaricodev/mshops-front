const URL = 'https://polar-tundra-66918.herokuapp.com/api/items'

// The function gets the product's id
const getId = (id) => {
  // Concatenate the URL and the product id for fetching its data
  const data = fetch(`${URL}/${id}`)

  // Transform response into JSON format
  const response = data.then(res => res.json())

  return response
}

export default { getId }
