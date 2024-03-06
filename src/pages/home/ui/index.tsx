import { Stack, Tabs, Text } from '@mantine/core'
import { CompletedTab } from 'widgets/completed-list/ui'
import { MainTab } from 'widgets/main-tab/ui'
import { ProcessTab } from 'widgets/process-list/ui'

const Home = () => (
  <Stack>
    <Stack>
      <Text>Добро пожаловать</Text>
      <Text>Платформа E-LEARNING</Text>
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
        <ProcessTab />
      </Tabs.Panel>
      <Tabs.Panel value="completed">
        <CompletedTab />
      </Tabs.Panel>
    </Tabs>
  </Stack>
)

export default Home
