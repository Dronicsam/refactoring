import { ActionIcon, Tooltip } from '@mantine/core'
import { Plus } from 'shared/iconpack'

export const AddButton = ({ onClick }: { onClick: () => void }) => (
  <Tooltip label="Добавить реплику">
    <ActionIcon size="xl" radius="xl" variant="outline" onClick={onClick}>
      <Plus />
    </ActionIcon>
  </Tooltip>
)
