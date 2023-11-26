import { Flex, Text, ActionIcon, useMantineTheme } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'shared/iconpack'

export const PageTitle = ({ title }: { title: string }) => {
  const navigate = useNavigate()
  const theme = useMantineTheme()
  return (
    <Flex gap={20} align="center" mb="lg">
      <ActionIcon
        onClick={() => navigate(-1)}
        size="lg"
        radius="xl"
        sx={{ ':hover': { background: 'none' } }}
      >
        <ArrowLeft color={theme.colors.blue[5]} size={28} />
      </ActionIcon>
      <Text fw={500} fz={28}>
        {title}
      </Text>
    </Flex>
  )
}
