import {
  Button,
  Flex,
  FocusTrap,
  Input,
  Modal,
  Stack,
  Text,
} from '@mantine/core'
import { useCourseStore } from 'entities/course/model/useCourseStore'
import { TagCard } from 'entities/course/ui'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { AddButton } from 'shared/ui'

export const CourseTags = () => {
  const [opened, setOpened] = useState(false)
  const [name, setName] = useState('')
  const { tags, setTags } = useCourseStore()
  const onClose = () => {
    setOpened(false)
    setName('')
  }
  const onSave = () => {
    setTags([...tags, name])
    onClose()
  }
  return (
    <Stack>
      <Text fz={20}>Получаемые навыки</Text>
      <Flex gap={20} wrap="wrap">
        {tags.length ? (
          tags.map((tag) => <TagCard tag={tag} key={tag} />)
        ) : (
          <Text>
            У этого курса пока не указаны навыки. Навыки помогают пользователю
            понять, на решение каких задач направлен этот курс.
          </Text>
        )}
      </Flex>
      <AddButton onClick={() => setOpened(true)} label="Добавить навык" />
      <Modal opened={opened} onClose={onClose} title="Новый навык" centered>
        <FocusTrap active={opened}>
          <Input
            data-autofocus
            placeholder="Название навыка"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="green" fw={300} onClick={onSave} mt={10} ml="75%">
            Сохранить
          </Button>
        </FocusTrap>
      </Modal>
    </Stack>
  )
}
