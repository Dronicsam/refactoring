import { Stack, Text, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CourseInfo } from 'widgets/course-info'
import { CourseProgram } from 'widgets/course-program'
import { getCourse } from 'entities/course/api'
import { FetchedCourse } from 'entities/course/types'
import { course } from '../lib/course'
import styles from './course.module.css'

export const Course = () => {
  const [data, setData] = useState<FetchedCourse>()
  const { id } = useParams()
  useEffect(() => {
    getCourse(Number(id)).then(({ data: fetchedData }) => setData(fetchedData))
  }, [id])

  return (
    <Stack className={styles.container}>
      <Stack spacing={0} className={styles.courseMainInfo}>
        <Title fw={500} className={styles.titleText}>
          {data?.name || 'Без названия'}
        </Title>
        <Text>Преподаватель: {data?.owner_name || 'нет имени'}</Text>
      </Stack>
      <Stack>
        <CourseInfo {...course} />
        <CourseProgram program={course.program} />
      </Stack>
    </Stack>
  )
}
export default Course
