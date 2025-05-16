import {
  Button,
  Flex,
  FocusTrap,
  Input,
  Modal,
  Stack,
  Text,
} from '@mantine/core'
import { useState, useCallback } from 'react'
import { useCourseStore } from 'entities/course/model/useCourseStore'
import { TagCard } from 'entities/course/ui'
import { AddButton } from 'shared/ui'

export const CourseTags = () => {
  const [opened, setOpened] = useState(false)
  const [name, setName] = useState('')
  const { tags, setTags } = useCourseStore()

  // Используем useCallback, чтобы избежать создания функций заново при каждом рендере
  const onClose = useCallback(() => {
    setOpened(false)
    setName('')
  }, [])

  const onSave = useCallback(() => {
    // Проверка на пустое имя навыка — чтобы не добавлять пустые строки
    if (name.trim() === '') return

    // Проверяем дубликаты и предотвращаем добавление их
    if (tags.includes(name.trim())) {
      // Можно добавить уведомление пользователю об этом
      return
    }

    setTags([...tags, name.trim()])
    onClose()
  }, [name, tags, setTags, onClose])

  return (
    <Stack>
      <Text fz={20}>Получаемые навыки</Text>
      <Flex gap={20} wrap="wrap">
        {tags.length > 0 ? (
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onSave()
              }
            }}
          />
          <Button variant="green" fw={300} onClick={onSave} mt={10} ml="75%">
            Сохранить
          </Button>
        </FocusTrap>
      </Modal>
    </Stack>
  )
}
