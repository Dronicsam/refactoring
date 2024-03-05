import { Box, Center, Stack, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { HomeTabs } from 'widgets/home-tabs/ui'

const Home = () => <Stack>
    <Stack>
        <Text>
            Добро пожаловать
        </Text>
        <Text>Платформа E-LEARNING</Text>
        <Link to='/courses/:1'>Курс</Link>
    </Stack>

    <HomeTabs />
</Stack>

export default Home
