import { Stack, Flex, Button, Text } from '@mantine/core'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllCourses, getRecentCourses } from 'entities/course/api'
import { FetchedCourse } from 'entities/course/types'
import { ProcessCard, MiniCard } from 'entities/course/ui'
import { ROUTES } from 'shared/lib'

export const MainTab = ({ data }: { data: FetchedCourse[] }) => {
  const [recent, setRecent] = useState<FetchedCourse>()
  const [courses, setCourses] = useState<FetchedCourse[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getRecentCourses().then(({ data: fetchedRecent }) =>
      setRecent(fetchedRecent[0])
    )
    getAllCourses(1, 5).then(({ data: fetcehdCourses }) =>
      setCourses(fetcehdCourses)
    )
  }, [setRecent, setCourses])

  return (
    <Stack>
      <Text fw={500} fz={28}>
        Недавнее
      </Text>
      {recent ? (
        <ProcessCard
          id={Number(recent.course_id)}
          title={String(recent.name)}
          author={String(recent.owner_name)}
          progress={50}
        />
      ) : (
        <Text fz={16}>Пока нет недавних курсов.</Text>
      )}
      <Text fw={500} fz={28}>
        В процессе
      </Text>
      <Flex gap={15}>
        {data.length ? (
          data.map(
            ({ course_id, name, owner_name, sections, total_duration }) => (
              <MiniCard
                id={course_id}
                key={course_id}
                title={name}
                author={owner_name}
                duration={total_duration}
                count={sections}
              />
            )
          )
        ) : (
          <Text fz={16}>Пока нет проходимых курсов.</Text>
        )}
      </Flex>
      {courses.length ? (
        <>
          <Text fw={500} fz={28}>
            Популярные курсы
          </Text>
          <Flex gap={20}>
            {courses.map(
              ({ course_id, name, owner_name, sections, total_duration }) => (
                <MiniCard
                  id={course_id}
                  key={course_id}
                  title={name}
                  author={owner_name}
                  duration={total_duration}
                  count={sections}
                />
              )
            )}
          </Flex>
        </>
      ) : null}
      <Button
        color="green.3"
        sx={{
          width: 210,
          height: 40,
          color: 'black',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'end',
          fontWeight: 300,
        }}
        rightIcon={<ArrowRight size={16} />}
        onClick={() => navigate(ROUTES.courses)}
      >
        Посмотреть все курсы
      </Button>
    </Stack>
  )
}
