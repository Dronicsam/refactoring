import { Button, Flex } from '@mantine/core'
import { Plus } from 'shared/iconpack'

interface AddButtonProps {
  onClick: () => void
  label: string
}

export const AddButton = ({ onClick, label }: AddButtonProps) => (
  <Button
    variant="transparent"
    onClick={onClick}
    w={210}
    sx={{
      '&:hover': {
        fontSize: '21px',
        transition: '0.3s',
      },
    }}
  >
    <Flex
      sx={{
        borderRadius: 30,
        border: '1px solid #C1B8B8',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginRight: 10,
      }}
    >
      <Plus />
    </Flex>
    {label}
  </Button>
)
