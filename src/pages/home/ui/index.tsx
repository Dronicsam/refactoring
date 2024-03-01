import { Box, Center, Stack, Text } from '@mantine/core'
import { HomeTabs } from 'widgets/home-tabs/ui'

const Home = () => (
  <Stack>
    <Stack>
      <Text>Добро пожаловать</Text>
      <Text>Платформа E-LEARNING</Text>
    </Stack>
    <HomeTabs />
  </Stack>
)

export default Home
