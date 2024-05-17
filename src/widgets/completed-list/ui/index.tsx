import { Flex } from '@mantine/core'
import { FetchedCourse } from 'entities/course/types'
import { MiniCard } from 'entities/course/ui'

export const CompletedList = ({ data }: { data: FetchedCourse[] }) => (
  <Flex wrap="wrap" gap={30}>
    {data && data.length
      ? data.map(({ course_id, name, owner_name }) => (
          <MiniCard
            key={course_id}
            id={course_id}
            title={name}
            author={owner_name}
            variant="complete"
          />
        ))
      : 'Пока нет завершённых курсов'}
  </Flex>
)
