import { Text, Stack } from '@mantine/core'
import { Header } from 'widgets/header'
import { OperatorsTable } from 'widgets/operators-table/ui'

export const Operators = () => (
  <Stack>
    <Header />
    <Text fw={600} fz={32}>
      Операторы
    </Text>
    <OperatorsTable />
  </Stack>
)
