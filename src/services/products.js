// const URL = 'https://polar-tundra-66918.herokuapp.com/api/items?q='

const getAll = (query) => {
  const data = fetch(`https://polar-tundra-66918.herokuapp.com/api/items?q=${query}`)
  const response = data.then(res => res.json())
  return response
}

export default { getAll }
