import { Button, Flex } from '@mantine/core'
import { Plus } from 'shared/iconpack'

interface AddButtonProps {
  variant?: 'small' | 'default'
  onClick: () => void
  label: string
}

export const AddButton = ({ variant="default", onClick, label }: AddButtonProps) => (
  <Button
    variant="transparent"
    onClick={onClick}
    w={210}
    sx={{
      fontSize: variant === 'default' ? '18px' : '12px',
      '&:hover': {
        fontSize: variant === 'default' ? '21px' : '14px',
        transition: '0.3s',
      },
    }}
  >
    <Flex
      sx={{
        borderRadius: 30,
        border: '1px solid #C1B8B8',
        width: variant === 'default' ? 30 : 20,
        height: variant === 'default' ? 30 : 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginRight: variant === 'default' ? 10 : 5,
      }}
    >
      <Plus />
    </Flex>
    {label}
  </Button>
)
