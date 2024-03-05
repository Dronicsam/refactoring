import { ActionIcon, Box, Button, Flex } from '@mantine/core'
import { ChevronDown, UserCircle2 } from 'lucide-react'
import { ReactNode } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from './styles/styles.module.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  const isLogin = useMatch(ROUTES.login)
  const navigate = useNavigate()

  const handleClick = (path: string)=>{
    navigate(path)
  }

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
    {!isLogin && <Flex justify="space-between">
        <Flex gap="lg">
           <Button variant="header" rightIcon={<ChevronDown />} onClick={() => navigate(ROUTES.courses)}> Все курсы </Button>
            <Button variant="header" onClick={() => navigate(ROUTES.create)}>Создать курс</Button> 
        </Flex>
        <ActionIcon onClick={() => navigate(ROUTES.student)}>
            <UserCircle2 size={16} />
          </ActionIcon>
        </Flex>
      }
      {children}
      <Box className={styles.footer}>
        <option onClick={()=>handleClick("home")} className={styles.e_learning}>e-learning</option>
        <option onClick={()=>handleClick("about")} className={styles.footerElement}>
          О проекте
        </option>
        <option onClick={()=>handleClick("suggests")} className={styles.footerElement}>
          Что мы предлагаем
        </option>
        <option onClick={()=>handleClick("catalog")} className={styles.footerElement}>
          Каталог
        </option>
        <option onClick={()=>handleClick("help")} className={styles.footerElement}>
          Помощь
        </option>
        <option onClick={()=>handleClick("contacts")} className={styles.footerElement}>
          Контакты
        </option>
        <option onClick={()=>handleClick("dev_team")} className={styles.footerElement}>
          Руководство
        </option>
      </Box>
    </Box>
  )
}
