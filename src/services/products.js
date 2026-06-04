import api from './api'

const getAll = (query) => api.fetchJson(`/items?q=${encodeURIComponent(query)}`)

export default { getAll }
