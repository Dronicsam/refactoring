import { $api } from 'shared/api'
import { FetchedCourse } from '../types'

export const getRecentCourses = () =>
  $api.get<FetchedCourse[]>('student/courses/recent')

export const getAllCourses = (page: number, limit: number = 20) =>
  $api.get<FetchedCourse[]>('student/search/courses', {
    params: {
      limit,
      page,
    },
  })

export const getJoinedCourses = (page: number, limit: number = 20) =>
  $api.get<FetchedCourse[]>('student/my/courses/all', {
    params: {
      limit,
      page,
    },
  })

export const getCourse = (id: number) =>
  $api.get<FetchedCourse>(`/course/${id}`)

export const getCompletedCourses = () =>
  $api.get<FetchedCourse[]>('/student/courses/finished')
