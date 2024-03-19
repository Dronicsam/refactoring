import { create } from 'zustand'
import { CourseState } from '../types'

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
  changeLessonName: (id, name) =>
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === id ? { ...lesson, name } : lesson
      ),
    })),
  addTopic: (id, topic) =>
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === id
          ? { ...lesson, topics: [...lesson.topics, topic] }
          : lesson
      ),
    })),
  changeTopic: (lessonId, topicId, name, content, files) =>
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              topics: lesson.topics.map((topic) =>
                topicId === topic.id
                  ? { ...topic, name, content, files }
                  : topic
              ),
            }
          : lesson
      ),
    })),
}))
