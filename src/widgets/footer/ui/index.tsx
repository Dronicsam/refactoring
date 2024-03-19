import { Flex, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from './footer.module.css'

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <Flex className={styles.container}>
      <Text
        className={styles.logo}
        onClick={() => navigate(ROUTES.home)}>
        e-learning
      </Text>
      <Flex className={styles.content}>
        <Text className={styles.text}>О проекте</Text>
        <Text className={styles.textSuggestion}>Что мы предлагаем</Text>
        <Text className={styles.text}>Каталог</Text>
        <Text className={styles.text}>Помощь</Text>
        <Text className={styles.text}>Контакты</Text>
        <Text className={styles.text}>Руководство</Text>
      </Flex>
    </Flex>
  )
}
