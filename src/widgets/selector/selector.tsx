import { Button } from '@mantine/core'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import styles from './styles/styles.module.css'

export const Selector = () => {
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
  ;<div className={styles.button}>
    <Button
      variant="header"
      rightIcon={<ChevronDown className={chooseChevronClass(openMenu)} />}
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
        onClick={() => console.log('Устрой дестрой. Порядок - это отстой')}
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
}
