import { Button, Flex, Modal, Stack, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useDisclosure } from '@mantine/hooks'

export const CreateToken = () => {
  const [modalOpened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal
        centered
        opened={modalOpened}
        onClose={close}
        title="Создание токена"
        sx={{
          '.mantine-Modal-content': {
            height: '500px',
          },
          '.mantine-Modal-body': {
            height: '80%',
          },
        }}
      >
        <Stack spacing={20}>
          <TextInput
            placeholder="Введите число"
            label="Количество использований токена"
            sx={{
              '.mantine-TextInput-input': {
                background: 'white',
              },
            }}
          />
          <DatePickerInput
            placeholder="Выберите дату"
            label="Срок годности токена"
          />
          <Flex gap={20} justify="end" align="flex-end" mt="58%">
            <Button>Создать</Button>
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
