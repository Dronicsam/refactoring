import { Flex, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from './style.module.css'

interface MiniCardProps {
  id: number
  title: string
  author: string
  duration?: string
  count?: number
  variant?: 'complete' | 'default'
}

export const MiniCard = ({
  id,
  title,
  author,
  duration,
  count,
  variant = 'default',
}: MiniCardProps) => {
  const navigate = useNavigate()
  return (
    <Stack
      className={styles.container}
      onClick={() => navigate(`${ROUTES.courses}/${id}`)}
    >
      <Text fz={24} color={variant === 'complete' ? 'gray.5' : 'black'}>
        {title}
      </Text>
      <Text fz={14} color={variant === 'complete' ? 'gray.5' : 'black'}>
        {author}
      </Text>
      <Flex
        justify={variant === 'complete' ? 'center' : 'space-between'}
        w="50%"
      >
        {variant === 'complete' ? (
          <Text color="green.0" fz={24}>
            Завершено
          </Text>
        ) : (
          <>
            <Stack align="center" spacing={0}>
              <Text color="green.0" fz={28} lh={1}>
                {duration}
              </Text>
              <Text fz={14}>часов</Text>
            </Stack>
            <Stack align="center" spacing={0}>
              <Text color="green.0" fz={28} lh={1}>
                {count}
              </Text>
              <Text fz={14}>лекций</Text>
            </Stack>
          </>
        )}
      </Flex>
    </Stack>
  )
}
