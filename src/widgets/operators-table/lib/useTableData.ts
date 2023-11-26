import { useEffect, useState } from 'react'
import { getAllOperators } from 'entities/operator/api'
import { Operator } from 'entities/operator/types'

export const useTableData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Operator[]>([])
  useEffect(() => {
    getAllOperators()
      .then(({ data: fetchedData }) => {
        setData(fetchedData)
      })
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
