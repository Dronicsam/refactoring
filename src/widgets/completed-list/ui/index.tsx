import { Flex } from '@mantine/core'
import { MiniCard } from 'entities/course/ui'

export const CompletedTab = () => {
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
  return (
    <Flex wrap="wrap" gap={30}>
      {courses.map(({ id, title, author }) => (
        <MiniCard
          key={id}
          id={id}
          title={title}
          author={author}
          variant="complete"
        />
      ))}
    </Flex>
  )
}
