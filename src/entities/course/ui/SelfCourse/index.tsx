import { Flex, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from './style.module.css'

interface LongCardProps {
  id: number
  title: string
  students: string
  duration: string
  lectures: number
  tests: number
}

const CourseInfoCell = ({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) => (
  <Stack spacing={0} className={className}>
    <Text className={styles.textSmall}>{label}</Text>
    <Text className={styles.textBig}>{value}</Text>
  </Stack>
)

export const SelfCourse = ({
  id,
  title,
  students,
  duration,
  lectures,
  tests,
}: LongCardProps) => {
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        background: 'white',
        padding: 15,
        borderRadius: 10,
        gap: 5,
        cursor: 'pointer',
        '&:hover': {
          background: '#f7f7f7',
          transition: '0.3s',
        },
        width: '100%',
      }}
      onClick={() => navigate(`${ROUTES.courses}/${id}`)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text fz={24}>{title}</Text>
        <Text style={{ color: '#BABABA', marginLeft: '2vw' }} fz={16} fw={100}>
          {students}
        </Text>
        <Text
          fz={24}
          style={{ color: '#BABABA', marginLeft: 'auto', rotate: '90deg' }}
        >
          ...
        </Text>
      </div>
      <Stack spacing={0}>
        <Flex className={styles.containerInfo} align="center">
          <CourseInfoCell label="Длительность" value={duration} />
          <Flex align="center">
            <div className={styles.divider} />
            <CourseInfoCell label="Лекций" value={lectures} />
            <div className={styles.divider} />
          </Flex>
          <CourseInfoCell label="Тестовых заданий" value={tests} />
        </Flex>
      </Stack>
    </Stack>
  )
}
