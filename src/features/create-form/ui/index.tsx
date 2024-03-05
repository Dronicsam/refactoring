import { Input, Stack, Textarea } from '@mantine/core'
import { useCourseStore } from 'entities/course/model/useCourseStore'

export const CreateForm = () => {
  const { name, setName, description, setDescription } = useCourseStore()
  console.log(name)
  return (
    <Stack>
      <Input
        placeholder="Введите название курса"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        placeholder="Введите описание курса"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Stack>
  )
}
