import { useEffect, useState } from 'react'

import productsService from '@services/products'
import formatAccents from '@utils/functions/formatAccents'

const initialState = {
  data: null,
  loading: false,
  error: null
}

const normalizeSearch = (value) => {
  const trimmed = value?.trim() || ''
  return trimmed ? formatAccents(trimmed) : ''
}

const useProducts = (search) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const normalizedSearch = normalizeSearch(search)

    if (!normalizedSearch) {
      setState(initialState)
      return
    }

    let canceled = false

    setState({ data: null, loading: true, error: null })

    productsService.getAll(normalizedSearch)
      .then((data) => {
        if (canceled) return
        setState({ data, loading: false, error: null })
      })
      .catch((error) => {
        if (canceled) return
        setState({ data: null, loading: false, error })
      })

    return () => {
      canceled = true
    }
  }, [search])

  return state
}

export default useProducts
