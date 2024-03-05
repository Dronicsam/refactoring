import { Button, Flex } from '@mantine/core'

interface ControlButtonsProps {
  onCancel: () => void
  onSubmit: () => void
}

export const ControlButtons = ({ onCancel, onSubmit }: ControlButtonsProps) => (
  <Flex gap={15}>
    <Button variant="gray" onClick={onCancel}>
      Отмена
    </Button>
    <Button variant="green" onClick={onSubmit}>
      Сохранить
    </Button>
  </Flex>
)
