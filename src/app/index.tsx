import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import { Layout } from 'shared/ui'
import { MantineProvider, RouterProvider, WithRefresh } from './lib'

const Home = lazy(() => import('pages/home/ui'))
const Course = lazy(() => import('pages/course/ui/course'))
const Courses = lazy(() => import('pages/courses/ui'))
const CreateCourse = lazy(() => import('pages/create-course/ui'))
const Learning = lazy(() => import('pages/learning/ui'))
const Student = lazy(() => import('pages/student/ui'))
const Teacher = lazy(() => import('pages/teacher/ui'))
const Login = lazy(() => import('pages/login/ui'))
const Error404 = lazy(() => import('pages/error-404/ui'))

export default function App() {
  return (
    <RouterProvider>
      <MantineProvider>
        <Layout>
          <Routes>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={`${ROUTES.courses}/:1`} element={<Course />} />
            <Route path={ROUTES.courses} element={<Courses />} />
            <Route path={ROUTES.create} element={<CreateCourse />} />
            <Route path={ROUTES.student} element={<Student />} />
            <Route path={ROUTES.teacher} element={<Teacher />} />
            <Route
              path={`${ROUTES.learning}/:courseId`}
              element={<Learning />}
            />
            <Route path={ROUTES.error404} element={<Error404 />} />
          </Routes>
        </Layout>
      </MantineProvider>
    </RouterProvider>
  )
}

// TODO сделать withRefresh
