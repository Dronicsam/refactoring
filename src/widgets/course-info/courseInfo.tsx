import { Flex, Stack, Button, Text, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse } from 'entities/course/api'
import { FetchedCourse } from 'entities/course/types'
import { TagCard } from 'entities/course/ui'
import styles from './courseInfo.module.css'

interface СourseProps {
  duration: string
  lectures: string
  tests: string
  description: string
  skills: string[]
}

const CourseInfoBlock = ({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) => (
  <Stack spacing={0} className={className}>
    <Text className={styles.textSmall}>{label}</Text>
    <Text className={styles.textBig}>{value}</Text>
  </Stack>
)

export const CourseInfo = ({
  duration,
  lectures,
  tests,
  description,
  skills,
}: СourseProps) => {
  const [data, setData] = useState<FetchedCourse>()
  const { id } = useParams()
  useEffect(() => {
    getCourse(Number(id)).then(({ data: fetchedData }) => setData(fetchedData))
  }, [id])
  console.log(data)
  return (
    <Stack className={styles.container}>
      <Flex className={styles.container}>
        <Flex className={styles.containerInfo} align="center">
          <CourseInfoBlock label="Длительность" value={duration} />
          <Flex align="center">
            <div className={styles.divider} />
            <CourseInfoBlock
              label="Лекций"
              value={lectures}
              className={styles.cell}
            />
            <div className={styles.divider} />
          </Flex>
          <CourseInfoBlock
            label="Тестовых заданий"
            value={tests}
            className={styles.cellTask}
          />
        </Flex>
        <Button className={styles.button}>Получить доступ</Button>
      </Flex>

      <Stack className={styles.container}>
        <Title className={styles.title}>Зачем нужен курс</Title>
        <Text className={styles.description}>{description}</Text>
      </Stack>
      <Stack>
        <Title className={styles.title}>Получаемые навыки</Title>
        <Flex gap="20px">
          {skills.map((skill) => (
            <TagCard tag={skill} />
          ))}
        </Flex>
      </Stack>
    </Stack>
  )
}
