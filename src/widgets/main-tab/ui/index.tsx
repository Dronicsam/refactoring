import { Stack, Flex, Button, Text } from '@mantine/core'
import { ProcessCard, MiniCard } from 'entities/course/ui'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

export const MainTab = () => {
  const courses = [
    {
      id: 0,
      title: 'titti tletitletitlel etitletitle',
      author: 'authorauth',
      duration: '52',
      count: 12,
      progress: 50,
    },
    {
      id: 1,
      title: 'titletit letit titlet itletit lele',
      author: 'authorauth',
      duration: '52',
      count: 12,
      progress: 50,
    },
    {
      id: 2,
      title: 'titletit letitltit sletitl etitlee',
      author: 'authorauth',
      duration: '52',
      count: 12,
      progress: 50,
    },
  ]
  const navigate = useNavigate()
  return (
    <Stack>
      <Text fw={500} fz={28}>
        Недавнее
      </Text>
      <ProcessCard
        id={0}
        title="Electronics"
        author="Abramov K.O"
        progress={50}
      />
      <Text fw={500} fz={28}>
        В процессе
      </Text>
      <Flex gap={15}>
        {courses.map(({ id, title, author, duration, count }) => (
          <MiniCard
            id={id}
            key={id}
            title={title}
            author={author}
            duration={duration}
            count={count}
          />
        ))}
      </Flex>
      <Text fw={500} fz={28}>
        Популярные курсы
      </Text>
      <Flex gap={20}>
        {courses.map(({ id, title, author, duration, count }) => (
          <MiniCard
            id={id}
            key={id}
            title={title}
            author={author}
            duration={duration}
            count={count}
          />
        ))}
      </Flex>
      <Button
        color="green.3"
        sx={{
          width: 200,
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
        Посмотреть все
      </Button>
    </Stack>
  )
}
