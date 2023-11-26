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
      <ScenariosTable
        data={[
          {
            id: 1,
            name: 'blabla',
          },
          {
            id: 2,
            name: 'blabla',
          },
          {
            id: 3,
            name: 'blabla',
          },
          {
            id: 4,
            name: 'blabla',
          },
          {
            id: 5,
            name: 'blabla',
          },
        ]}
      />
    </Stack>
  )
}
