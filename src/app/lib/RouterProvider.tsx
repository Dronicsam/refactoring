import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from 'shared/ui'

export const RouterProvider = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </BrowserRouter>
)
