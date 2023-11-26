import { Center, Loader } from '@mantine/core'

export const Loading = () => (
  <Center sx={{ overflow: 'hidden', height: '100vh', width: '100%' }}>
    <Loader size="lg" />
  </Center>
)
