import { ActionIcon, Box, Button, Flex } from '@mantine/core'
import { ChevronDown, UserCircle2 } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from './styles/styles.module.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  const isLogin = useMatch(ROUTES.login)
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)

  const chooseChevronClass = (openMenuProp: boolean) => {
    if (openMenuProp) {
      return styles.chevron_active
    }
    return styles.chevron
  }

  const chooseSelectorClass = (openMenuProp: boolean) => {
    if (openMenuProp) {
      return styles.selector
    }
    return styles.selectorActive
  }

  const handleClick = () => {
    setOpenMenu(!openMenu)
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
      {!isLogin && (
        <Flex justify="space-between">
          <Flex gap="lg">
            <div>
              <Button
                variant="header"
                rightIcon={
                  <ChevronDown className={chooseChevronClass(openMenu)} />
                }
                onClick={handleClick}
                className={styles.button}
              >
                Все курсы
              </Button>
              <div className={chooseSelectorClass(openMenu)}>
                <p>Курсы физики</p>
                <p>Курсы не физика</p>
                <p>Курсы погрома</p>
                <p>Проект разгром</p>
              </div>
            </div>
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
    </Box>
  )
}
