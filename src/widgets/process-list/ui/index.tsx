import { Stack } from '@mantine/core'
import { ProcessCard } from 'entities/course/ui'

export const ProcessList = () => {
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
    <Stack>
      {courses.map(({ id, title, author, progress }) => (
        <ProcessCard
          id={id}
          key={id}
          title={title}
          author={author}
          progress={progress}
        />
      ))}
    </Stack>
  )
}
