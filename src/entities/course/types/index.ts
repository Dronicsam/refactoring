interface Topic {
  id: number
  name: string
  content: any
  files: any[]
}

interface Lesson {
  id: number
  name: string
  topics: Topic[]
}

export interface Course {
  name: string
  description: string
  tags: string[]
  lessons: Lesson[]
}

export interface CourseState extends Course {
  setName: (name: string) => void
  setDescription: (description: string) => void
  setTags: (tags: string[]) => void
  addLesson: (lesson: Lesson) => void
  deleteLesson: (id: number) => void
  addTopic: (id: number, topic: Topic) => void
  changeLessonName: (id: number, name: string) => void
  changeTopicName?: (lessongId: number, topicId: number, name: string) => void
}
