import { ActionIcon, Menu } from '@mantine/core'
import { Scenario } from 'entities/scenario/types'
import { MoreVertical } from 'shared/iconpack'

export const TableMenu = ({ data }: { data: Scenario }) => (
  <Menu>
    <Menu.Target>
      <ActionIcon>
        <MoreVertical />
      </ActionIcon>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item>Переименовать</Menu.Item>
      <Menu.Item>Удалить</Menu.Item>
    </Menu.Dropdown>
  </Menu>
)
