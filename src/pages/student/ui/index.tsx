import { Accordion, Button, Stack } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CompletedList } from 'widgets/completed-list/ui'
import { ProcessList } from 'widgets/process-list/ui'
import { getJoinedCourses, getRecentCourses } from 'entities/course/api'
import { FetchedCourse } from 'entities/course/types'
import { UserCard } from 'entities/user/ui'
import styles from './style/style.module.css'

const StudentAccordionItem = ({
  value,
  title,
  children,
}: {
  value: string
  title: string
  children: React.ReactNode
}) => (
  <Accordion.Item value={value}>
    <Accordion.Control
      sx={{
        fontSize: 24,
        '&:hover': {
          background: 'inherit',
        },
      }}
    >
      {title}
    </Accordion.Control>
    {children}
  </Accordion.Item>
)

const Student = () => {
  const [completedCourses, setCompletedCourses] = useState<FetchedCourse[]>([])
  const [joinedCourses, setJoinedCourses] = useState<FetchedCourse[]>([])
  const [page, setPage] = useState(0)
  const navigate = useNavigate()

  const handleRedirect = (path: string) => {
    navigate(path)
  }

  // todo сделать пагинацию
  useEffect(() => {
    getJoinedCourses(page, 20).then(({ data }) => setJoinedCourses(data))
  }, [page])

  useEffect(() => {
    getRecentCourses().then(({ data: fetchedData }) =>
      setCompletedCourses(fetchedData)
    )
  }, [])

  return (
    <Stack className={styles.container}>
      <div className={styles.user_container}>
        <UserCard />
        <Button
          className={styles.button}
          onClick={() => handleRedirect('/catalog')}
          variant="green"
        >
          Найти курс
        </Button>
      </div>
      <Accordion
        multiple
        sx={{
          '&:hover': {
            background: 'inherit',
          },
        }}
      >
        <StudentAccordionItem value="process" title="Ваши курсы">
          <Accordion.Panel>
            <ProcessList data={joinedCourses} />
          </Accordion.Panel>
        </StudentAccordionItem>
        <StudentAccordionItem value="completed" title="Пройденные">
          <Accordion.Panel>
            <CompletedList data={completedCourses} />
          </Accordion.Panel>
        </StudentAccordionItem>
      </Accordion>
    </Stack>
  )
}

export default Student
