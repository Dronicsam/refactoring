import { ActionIcon, Box, Button, Flex } from '@mantine/core'
import { ChevronDown, UserCircle2 } from 'lucide-react'
import { ReactNode } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from './styles/styles.module.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  const isLogin = useMatch(ROUTES.login)
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        flexGrow: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '24px 60px',
      }}
    >
      {!isLogin && (
        <Flex justify="space-between">
          <Flex gap="lg">
            <Button
              variant="header"
              rightIcon={<ChevronDown />}
              onClick={() => navigate(ROUTES.courses)}
            >
              Все курсы
            </Button>
            <Button variant="header" onClick={() => navigate(ROUTES.create)}>
              Создать курс
            </Button>
          </Flex>
          <ActionIcon onClick={() => navigate(ROUTES.student)}>
            <UserCircle2 size={16} />
          </ActionIcon>
        </Flex>
      )}
      {children}
      <Box className={styles.footer}>
        <a href="/home" className={styles.e_learning}>
          <h1>e-learning</h1>
        </a>
        <a href="/about" className={styles.test}>
          О проекте
        </a>
        <a href="/scenarios" className={styles.test}>
          Что мы предлагаем
        </a>
        <a href="/catalog" className={styles.test}>
          Каталог
        </a>
        <a href="/help" className={styles.test}>
          Помощь
        </a>
        <a href="/contacts" className={styles.test}>
          Контакты
        </a>
        <a href="/dev" className={styles.test}>
          Руководство
        </a>
      </Box>
    </Box>
  )
}
