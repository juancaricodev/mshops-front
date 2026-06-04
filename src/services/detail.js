import api from './api'

const getId = (id) => api.fetchJson(`/items/${encodeURIComponent(id)}`)

export default { getId }
