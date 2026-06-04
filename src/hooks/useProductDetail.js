import { useEffect, useState } from 'react'

import detailService from '@services/detail'

const initialState = {
  data: null,
  loading: false,
  error: null
}

const useProductDetail = (id) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (!id) {
      setState(initialState)
      return
    }

    let canceled = false

    setState({ data: null, loading: true, error: null })

    detailService.getId(id)
      .then((response) => {
        if (canceled) return
        setState({ data: response.item, loading: false, error: null })
      })
      .catch((error) => {
        if (canceled) return
        setState({ data: null, loading: false, error })
      })

    return () => {
      canceled = true
    }
  }, [id])

  return state
}

export default useProductDetail
