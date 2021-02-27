const URL = 'https://polar-tundra-66918.herokuapp.com/api/items'

const getId = (id) => {
  const data = fetch(`${URL}/${id}`)
  const response = data.then(res => res.json())
  return response
}

export default { getId }
