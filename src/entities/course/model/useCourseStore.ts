import { create } from 'zustand'
import { Course, CourseState } from '../types'

export const useCourseStore = create<CourseState>((set) => ({
  name: '',
  description: '',
  tags: [],
  lessons: [],
  setName: (name) => set(() => ({ name })),
  setTags: (tags) => set(() => ({ tags })),
  setDescription: (description) => set(() => ({ description })),
  addLesson: (lesson) =>
    set((state) => ({ lessons: [...state.lessons, lesson] })),
  deleteLesson: (id) =>
    set((state) => ({
      lessons: state.lessons.filter((lesson) => lesson.id !== id),
    })),
  // changeTopicName: (id, name) => set((state) => ({  }))
}))
