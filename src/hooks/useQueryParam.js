import { useLocation } from 'react-router-dom'

const useQueryParam = (param) => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  return params.get(param)
}

export default useQueryParam
