import { Stack, Text, Title } from '@mantine/core'
import { CourseInfo } from 'widgets/course-info'
import { CourseProgram } from 'widgets/course-program'
import { course } from '../lib/course'
import styles from './course.module.css'

export const Course = () => (
  <Stack className={styles.container}>
    <Stack spacing={0} className={styles.courseMainInfo}>
      <Title fw={500} className={styles.titleText}>
        {course.name}
      </Title>
      <Text>Преподаватель: {course.teacher}</Text>
    </Stack>
    <Stack>
      <CourseInfo {...course} />
      <CourseProgram program={course.program} />
    </Stack>
  </Stack>
)
export default Course
