import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import { Layout } from 'shared/ui'
import { MantineProvider, RouterProvider, WithRefresh } from './lib'

const Login = lazy(() => import('pages/login/ui'))
const Error404 = lazy(() => import('pages/404-error/ui'))
const Scenarios = lazy(() => import('pages/scenarios/ui'))
const CreateScenario = lazy(() => import('pages/create-scenario/ui'))
const Tokens = lazy(() => import('pages/tokens/ui'))
const Scenario = lazy(() => import('pages/scenario/ui'))

export default function App() {
  return (
    <RouterProvider>
      <MantineProvider>
        <Layout>
          <Routes>
            <Route path={ROUTES.login} element={<Login />} />
            <Route
              path={ROUTES.scenarios}
              element={
                <WithRefresh>
                  <Scenarios />
                </WithRefresh>
              }
            />
            <Route
              path={ROUTES.create}
              element={
                <WithRefresh>
                  <CreateScenario />
                </WithRefresh>
              }
            />
            <Route
              path={ROUTES.tokens}
              element={
                <WithRefresh>
                  <Tokens />
                </WithRefresh>
              }
            />
            <Route
              path={`${ROUTES.scenarios}/:scenarioId`}
              element={
                <WithRefresh>
                  <Scenario />
                </WithRefresh>
              }
            />
            <Route path={ROUTES.error404} element={<Error404 />} />
          </Routes>
        </Layout>
      </MantineProvider>
    </RouterProvider>
  )
}
