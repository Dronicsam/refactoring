export interface Test {
  question: string
  type: string
  options: { [key: string]: string }[]
  answer: string
}

interface Topic {
  id: number
  name: string
  content: any
  files: any[]
  tests?: Test[]
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
  changeTopic: (
    lessonId: number,
    topicId: number,
    name: string,
    content: any,
    files: any[],
    tests?: Test[]
  ) => void
}

export interface FetchedCourse {
  course_id: number
  name: string
  description?: string
  owner_name: string
  total_duration?: number
  sections?: number
  students_on_course?: number
  finished?: boolean
}
