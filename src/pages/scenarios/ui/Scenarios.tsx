import { Button, Flex, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { Header } from 'widgets/header'
import { ScenariosTable } from 'widgets/scenarios-table/ui'
import { ROUTES } from 'shared/lib'

export const Scenarios = () => {
  const navigate = useNavigate()

  return (
    <Stack>
      <Header />
      <Flex justify="space-between" align="end">
        <Text fw={600} fz={32}>
          Сценарии
        </Text>
        <Button onClick={() => navigate(ROUTES.create)}>
          Создать сценарий
        </Button>
      </Flex>
      <ScenariosTable />
    </Stack>
  )
}
