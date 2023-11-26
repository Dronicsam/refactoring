import { Flex, Title, Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

export const Error404 = () => {
  const navigate = useNavigate()
  return (
    <Flex
      sx={{ flex: 1 }}
      h="100vh"
      justify="center"
      align="center"
      direction="column"
      gap="24px"
    >
      <Title color="blue.5" fw={600}>
        Ошибка 404
      </Title>
      <Text color="gray.5" align="center">
        Страница, которую вы пытаетесь открыть, не существует. Наши разработчики
        будут оповещены об этой проблеме и примут меры для ее устранения.
      </Text>
      <Button onClick={() => navigate(ROUTES.scenarios)}>Назад</Button>
    </Flex>
  )
}
