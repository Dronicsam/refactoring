import { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { refresh } from 'shared/api/auth'
import { ROUTES } from 'shared/lib'
import { Loading } from 'shared/ui'

export const WithRefresh = ({ children }: any) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const token = localStorage.getItem('refresh')

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('refresh')
      navigate(ROUTES.login)
      setIsLoaded(true)
    } else if (!isLoaded) {
      refresh(token)
        .then(({ data }) => localStorage.setItem('refresh', data.refresh))
        .catch(() => {
          localStorage.removeItem('refresh')
          navigate(ROUTES.login)
        })
        .finally(() => setIsLoaded(true))
    }
  }, [token, navigate, isLoaded, setIsLoaded])

  if (isLoaded)
    return (
      <Fragment key={location.pathname + location.hash}>{children}</Fragment>
    )
  return <Loading />
}
