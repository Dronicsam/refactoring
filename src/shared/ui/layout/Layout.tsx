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

  // const testValues = [
  //   {
  //     id: 1,
  //     label: 'Е',
  //   },
  //   {
  //     id: 2,
  //     label: 'ЕЕ',
  //   },
  //   {
  //     id: 3,
  //     label: 'ЕЕЕ',
  //   },
  //   {
  //     id: 4,
  //     label: 'ЕЕЕЕ',
  //   },
  //   {
  //     id: 5,
  //     label: 'ЕЕЕЕЕ',
  //   },
  // ]

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
            <div className={styles.button}>
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
                <option
                  className={styles.selectorOption}
                  onClick={() => console.log('Физика')}
                >
                  Курсы физики
                </option>
                <option
                  className={styles.selectorOption}
                  onClick={() => console.log('Не физика')}
                >
                  Курсы не физика
                </option>
                <option
                  className={styles.selectorOption}
                  onClick={() =>
                    console.log('Устрой дестрой. Порядок - это отстой')
                  }
                >
                  Курсы погрома
                </option>
                <option
                  className={styles.selectorOption}
                  onClick={() => console.log('Ееее дестрой')}
                >
                  Проект разгром
                </option>
                <option
                  className={styles.selectorOption}
                  onClick={() => console.log('Все курсы')}
                >
                  Посмотреть всё
                </option>
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
