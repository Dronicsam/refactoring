import { Stack, Text, Title, Container, Space } from '@mantine/core'
import { CourseInfo } from 'widgets/course-info'
import { CourseProgram } from 'widgets/course-program'
import course from '../lib/course'
import styles from './course.module.css'

export const Course = () => 
    <Container size='xl' className={styles.container} >
        <Stack spacing={0} className={styles.courseMainInfo}>
            <Title fw={500} size='48px' >{course.name}</Title>
            <Text>Преподаватель: {course.teacher}</Text>
        </Stack>
        <Stack>
            <CourseInfo {...course}/>
            <CourseProgram program={course.program}/>
        </Stack>
    </Container>
export default Course
