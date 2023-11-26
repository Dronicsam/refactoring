import { Stack, Flex, Text } from '@mantine/core'
import { Header } from 'widgets/header'
import { TokensTable } from 'widgets/tokens-table/ui'
import { CreateToken } from 'features/create-token/ui'

export const Tokens = () => (
  <Stack>
    <Header />
    <Flex justify="space-between" align="end">
      <Text fw={600} fz={32}>
        Токены
      </Text>
      <CreateToken />
    </Flex>
    <TokensTable />
  </Stack>
)
