import { Button, Flex, Modal, Stack, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { createToken } from 'entities/token/api'

export const CreateToken = () => {
  const [modalOpened, { open, close }] = useDisclosure(false)
  const [name, setName] = useState('')
  const [count, setCount] = useState('')
  const [date, setDate] = useState<Date>(new Date())

  return (
    <>
      <Modal
        centered
        opened={modalOpened}
        onClose={close}
        title="Создание токена"
        sx={{
          '.mantine-Modal-content': {
            height: '600px',
          },
          '.mantine-Modal-body': {
            height: '80%',
          },
        }}
      >
        <Stack spacing={20}>
          <TextInput
            placeholder="Введите имя"
            label="Имя токена"
            sx={{
              '.mantine-TextInput-input': {
                background: 'white',
              },
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            placeholder="Введите число"
            label="Количество использований токена"
            sx={{
              '.mantine-TextInput-input': {
                background: 'white',
              },
            }}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <DatePickerInput
            lang="ru"
            placeholder="Выберите дату"
            label="Срок годности токена"
            value={date}
            onChange={(e) => e && setDate(e)}
          />
          <Flex gap={20} justify="end" align="flex-end" mt="58%">
            <Button
              onClick={() => {
                createToken(name, Number(count), date).then(() => close())
              }}
            >
              Создать
            </Button>
            <Button variant="outline" onClick={close}>
              Отмена
            </Button>
          </Flex>
        </Stack>
      </Modal>
      <Button onClick={open}>Создать токен</Button>
    </>
  )
}
