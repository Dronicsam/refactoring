import { Flex, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'

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
        position: 'absolute',
        bottom: 0,
        height: 70,
        fontSize: 18,
        opacity: 0.9,
      }}
    >
      <Text
        onClick={() => navigate(ROUTES.home)}
        sx={{
          fontFamily: 'Major Mono Display',
          fontWeight: 400,
          color: '#83cdc9',
          fontSize: 36,
          cursor: 'pointer',
        }}
      >
        e-learning
      </Text>
      <Text>О проекте</Text>
      <Text>Что мы предлагаем</Text>
      <Text>Каталог</Text>
      <Text>Помощь</Text>
      <Text>Контакты</Text>
      <Text>Руководство</Text>
    </Flex>
  )
}
