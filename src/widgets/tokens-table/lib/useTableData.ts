import { useEffect, useState } from 'react'
import { getAllTokens } from 'entities/token/api'
import { useTokensStore } from 'entities/token/model'

export const useTableData = () => {
  const [loading, setLoading] = useState(true)
  const setTokens = useTokensStore((state) => state.setTokens)

  useEffect(() => {
    getAllTokens()
      .then(({ data: fetchedData }) => {
        setTokens(fetchedData)
      })
      .finally(() => setLoading(false))
  }, [setTokens])

  return { loading }
}
