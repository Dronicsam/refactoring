import { ActionIcon, Flex, Stack, Text } from '@mantine/core'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { TopicContent } from 'widgets/topic-content/ui'

const Topic = () => {
  const navigate = useNavigate()
  return (
    <Stack>
      <Flex align="center" gap={10}>
        <ActionIcon onClick={() => navigate(-1)}>
          <ArrowLeft />
        </ActionIcon>
        <Text fw={500} fz={28}>
          Редактирование темы
        </Text>
      </Flex>
      <TopicContent />
    </Stack>
  )
}

export default Topic
