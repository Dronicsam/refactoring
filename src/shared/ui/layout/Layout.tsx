import { ActionIcon, Box, Button, Divider, Flex } from '@mantine/core'
import { ChevronDown, UserCircle2 } from 'lucide-react'
import { ReactNode, useState, MutableRefObject, useEffect, useRef } from 'react'
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
      return styles.selectorActive
    }
    return styles.selector
  }

  const useClickOutside = <T extends HTMLElement = any>(
    handler: () => void
  ): MutableRefObject<T | null> => {
    const ref = useRef<T | null>(null)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, handler])

    return ref
  }

  const ref = useClickOutside<HTMLDivElement>(() => setOpenMenu(false))
  
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
            <div className={styles.button} ref={ref}>
              <Button
                variant="header"
                rightIcon={
                  <ChevronDown className={chooseChevronClass(openMenu)} />
                }
                onClick={() => setOpenMenu(!openMenu)}
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
                <Divider color="#A69F9F" my="xs" className={styles.divider}/>
                <option
                  className={styles.selectorOption}
                  onClick={() => console.log('Не физика')}
                >
                  Курсы не физика
                </option>
                <Divider color="#A69F9F" my="xs" className={styles.divider}/>
                <option
                  className={styles.selectorOption}
                  onClick={() =>
                    console.log('Устрой дестрой. Порядок - это отстой')
                  }
                >
                  Курсы погрома
                </option>
                <Divider color="#A69F9F" my="xs" className={styles.divider}/>
                <option
                  className={styles.selectorOption}
                  onClick={() => console.log('Ееее дестрой')}
                >
                  Проект разгром
                </option>
                <Divider color="#A69F9F" my="xs" className={styles.divider}/>
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
