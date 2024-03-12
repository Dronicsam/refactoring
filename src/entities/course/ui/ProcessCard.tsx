import { Flex, Progress, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

interface LongCardProps {
  id: number
  title: string
  author: string
  progress: number
}

export const ProcessCard = ({ id, title, author, progress }: LongCardProps) => {
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        background: 'white',
        padding: 15,
        borderRadius: 10,
        gap: 5,
        cursor: 'pointer',
        '&:hover': {
          background: '#f7f7f7',
          transition: '0.3s',
        },
        width: '100%'
      }}
      onClick={() => navigate(`${ROUTES.courses}/:${id}`)}
    >
      <Text fz={25}>{title}</Text>
      <Text fz={16} fw={100}>
        {author}
      </Text>
      <Stack spacing={0}>
        <Flex w="100%" align="center" gap="xs">
          <Progress value={progress} w="90%" color="green.2" />
          {progress} %
        </Flex>
        <Text sx={{ alignSelf: 'center' }} fz={12}>
          Прогресс изучения
        </Text>
      </Stack>
    </Stack>
  )
}
