import { useEffect, useState } from 'react'
import { getScenario } from 'entities/scenario/api'

export const usePrepareData = (id: number) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getScenario(id)
      .then((data) => {
        // тут сделаем пропихивание в стор
        console.log(data)
      })
      .finally(() => setLoading(false))
  }, [id])

  return loading
}
