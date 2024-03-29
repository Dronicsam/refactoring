import { Flex, Stack, Tabs, Text } from '@mantine/core'
import { Logo } from 'shared/ui'
import { CompletedList } from 'widgets/completed-list/ui'
import { MainTab } from 'widgets/main-tab/ui'
import { ProcessList } from 'widgets/process-list/ui'

const Home = () => (
  <Stack>
    <Stack h="200px" justify="center">
      <Text fz={28}>Добро пожаловать</Text>
      <Flex align="center" gap={30}>
        <Text fw={500} fz={36}>
          Платформа
        </Text>
        <Logo />
      </Flex>
    </Stack>
    <Tabs defaultValue="main" color="green.1">
      <Tabs.List grow position="center" mb={30}>
        <Tabs.Tab
          value="main"
          fz={18}
          sx={{
            '&:hover': {
              background: '#d9d9d9',
            },
          }}
        >
          Главная
        </Tabs.Tab>
        <Tabs.Tab
          value="process"
          fz={18}
          sx={{
            '&:hover': {
              background: '#d9d9d9',
            },
          }}
        >
          В процессе
        </Tabs.Tab>
        <Tabs.Tab
          value="completed"
          fz={18}
          sx={{
            '&:hover': {
              background: '#d9d9d9',
            },
          }}
        >
          Завершённые
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="main">
        <MainTab />
      </Tabs.Panel>
      <Tabs.Panel value="process">
        <ProcessList />
      </Tabs.Panel>
      <Tabs.Panel value="completed">
        <CompletedList />
      </Tabs.Panel>
    </Tabs>
  </Stack>
)

export default Home
