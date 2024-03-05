import { Flex } from '@mantine/core'

interface TagCardProps {
  tag: string
}

export const TagCard = ({ tag }: TagCardProps) => (
  <Flex
    bg="green.3"
    sx={{
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      width: 'fit-content',
      padding: '5px 15px',
    }}
  >
    {tag}
  </Flex>
)
