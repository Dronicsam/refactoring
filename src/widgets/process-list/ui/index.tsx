import { Stack, Text } from '@mantine/core'
import { FetchedCourse } from 'entities/course/types'
import { ProcessCard } from 'entities/course/ui'

export const ProcessList = ({ data }: { data: FetchedCourse[] }) => (
  <Stack>
    {data.length ? (
      data.map(({ course_id, name, owner_name }) => (
        <ProcessCard
          id={course_id}
          key={course_id}
          title={name}
          author={owner_name}
          progress={50}
        />
      ))
    ) : (
      <Text fz={16}>Пока нет проходимых курсов.</Text>
    )}
  </Stack>
)
