import { Fragment, ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { refresh } from 'entities/user/api'
import { ROUTES } from 'shared/lib'
import {
  getRefreshToken,
  setRefreshToken,
  clearRefreshToken,
} from 'shared/lib/authService'
import { Loading } from 'shared/ui'

export const WithRefresh = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const token = getRefreshToken()

  useEffect(() => {
    if (!token) {
      clearRefreshToken()
      navigate(ROUTES.login)
      setIsLoaded(true)
    } else if (!isLoaded) {
      refresh(token)
        .then(({ data }) => setRefreshToken(data.refresh))
        .catch(() => {
          clearRefreshToken()
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
