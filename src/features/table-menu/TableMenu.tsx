import {
  ActionIcon,
  Button,
  Menu,
  Modal,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { deleteScenario, updateScenario } from 'entities/scenario/api'
import { useScenariosStore } from 'entities/scenario/model'
import { Scenario } from 'entities/scenario/types'
import { MoreVertical } from 'shared/iconpack'

export const TableMenu = ({ data }: { data: Scenario }) => {
  const [newName, setNewName] = useState(data.name)
  const [newDescription, setNewDescription] = useState(data.description)
  const [modalOpened, { open, close }] = useDisclosure(false)
  const getScenarios = useScenariosStore((state) => state.getScenarios)
  return (
    <>
      <Modal
        centered
        opened={modalOpened}
        onClose={close}
        title="Редактирование сценария"
      >
        <Stack>
          <TextInput
            label="Имя сценария"
            placeholder="Введите имя"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{
              '.mantine-TextInput-input': {
                background: 'white',
              },
            }}
          />
          <Textarea
            label="Описание сценария"
            placeholder="Введите описание"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            autosize
            maxRows={18}
          />
        </Stack>
        <Button
          mt="10px"
          onClick={() => {
            updateScenario(data.id!, newName, newDescription).then(() => {
              getScenarios()
              close()
            })
          }}
        >
          Редактировать
        </Button>
      </Modal>
      <Menu>
        <Menu.Target>
          <ActionIcon>
            <MoreVertical />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={open}>Редактировать</Menu.Item>
          <Menu.Item
            onClick={() => {
              deleteScenario(data.id!).then(() => {
                getScenarios()
              })
            }}
          >
            Удалить
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
