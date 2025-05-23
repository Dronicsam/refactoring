import { Stack } from '@mantine/core'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from 'widgets/footer/ui'
import { Header } from 'widgets/header/ui'
import { ROUTES } from 'shared/lib'
import { Layout } from 'shared/ui'
import { MantineProvider, RouterProvider, WithRefresh } from './lib'

const Home = lazy(() => import('pages/home/ui'))
const Course = lazy(() => import('pages/course/ui'))
const Courses = lazy(() => import('pages/courses/ui'))
const CreateCourse = lazy(() => import('pages/create-course/ui'))
const Learning = lazy(() => import('pages/learning/ui'))
const Student = lazy(() => import('pages/student/ui'))
const Teacher = lazy(() => import('pages/teacher/ui'))
const Topic = lazy(() => import('pages/topic/ui'))
const Login = lazy(() => import('pages/login/ui'))
const Register = lazy(() => import('pages/register/ui'))
const Error404 = lazy(() => import('pages/error-404/ui'))

export default function App() {
  return (
    <RouterProvider>
      <MantineProvider>
        <Stack h="100vh">
          <Layout>
            <Header />
            <WithRefresh>
              <Routes>
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.register} element={<Register />} />
                <Route path={ROUTES.home} element={<Home />} />
                <Route
                  path={`${ROUTES.courses}/:courseId`}
                  element={<Course />}
                />
                <Route path={ROUTES.courses} element={<Courses />} />
                <Route path={ROUTES.create} element={<CreateCourse />} />
                <Route path={ROUTES.student} element={<Student />} />
                <Route path={ROUTES.teacher} element={<Teacher />} />
                <Route
                  path={`${ROUTES.learning}/:courseId`}
                  element={<Learning />}
                />
                <Route path={`${ROUTES.topic}/:topicId`} element={<Topic />} />
                <Route path={ROUTES.error404} element={<Error404 />} />
              </Routes>
            </WithRefresh>
          </Layout>
          <Footer />
        </Stack>
      </MantineProvider>
    </RouterProvider>
  )
}

