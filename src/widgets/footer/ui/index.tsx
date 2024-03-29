import { Box, Flex, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import { Logo } from 'shared/ui'

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <Flex
      sx={{
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        width: '100%',
        background: '#6b6d6d',
        minHeight: 70,
        fontSize: 18,
        opacity: 0.9,
      }}
    >
      <Box onClick={() => navigate(ROUTES.home)} sx={{ cursor: 'pointer' }}>
        <Logo />
      </Box>
      <Text>О проекте</Text>
      <Text>Что мы предлагаем</Text>
      <Text>Каталог</Text>
      <Text>Помощь</Text>
      <Text>Контакты</Text>
      <Text>Руководство</Text>
    </Flex>
  )
}
