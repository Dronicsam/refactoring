import { ActionIcon } from '@mantine/core'
import { Trash2 } from 'shared/iconpack'

export const DeleteButton = ({ onClick }: any) => (
  <ActionIcon onClick={onClick}>
    <Trash2 size={16} />
  </ActionIcon>
)
