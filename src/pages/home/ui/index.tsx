import { Flex, Stack, Tabs, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { CompletedList } from 'widgets/completed-list/ui'
import { MainTab } from 'widgets/main-tab/ui'
import { ProcessList } from 'widgets/process-list/ui'
import { getJoinedCourses, getRecentCourses } from 'entities/course/api'
import { FetchedCourse } from 'entities/course/types'
import { Logo } from 'shared/ui'

const Home = () => {
  const [completedCourses, setCompletedCourses] = useState<FetchedCourse[]>([])
  const [data, setData] = useState<FetchedCourse[]>([])

  useEffect(() => {
    getJoinedCourses(1).then(({ data: fetchedCourses }) =>
      setData(fetchedCourses)
    )
    getRecentCourses().then(({ data: fetchedData }) =>
      setCompletedCourses(fetchedData)
    )
  }, [])

  return (
    <Stack>
      <Stack h="200px" justify="center">
        <Text fz={28}>Добро пожаловать</Text>
        <Flex align="center" gap={30}>
          <Text fw={500} fz={36}>
            Платформа
          </Text>
          <Logo />
        </Flex>
      </Stack>
      <Tabs defaultValue="main" color="green.1">
        <Tabs.List grow position="center" mb={30}>
          <Tabs.Tab
            value="main"
            fz={18}
            sx={{
              '&:hover': {
                background: '#d9d9d9',
              },
            }}
          >
            Главная
          </Tabs.Tab>
          <Tabs.Tab
            value="process"
            fz={18}
            sx={{
              '&:hover': {
                background: '#d9d9d9',
              },
            }}
          >
            В процессе
          </Tabs.Tab>
          <Tabs.Tab
            value="completed"
            fz={18}
            sx={{
              '&:hover': {
                background: '#d9d9d9',
              },
            }}
          >
            Завершённые
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="main">
          <MainTab data={data} />
        </Tabs.Panel>
        <Tabs.Panel value="process">
          <ProcessList data={data} />
        </Tabs.Panel>
        <Tabs.Panel value="completed">
          <CompletedList data={completedCourses} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  )
}

export default Home
