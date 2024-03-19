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

export const CourseCard = ({
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
        padding: 25,
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
        <Text fz={25}>{title}</Text>
        <Text style={{ color: '#BABABA', marginLeft: '2vw' }} fz={16} fw={100}>
          {students}
        </Text>
        <Text
          fz={25}
          style={{ color: '#BABABA', marginLeft: 'auto', rotate: '90deg' }}
        >
          ...
        </Text>
      </div>
      <Stack spacing={0}>
        <Flex className={styles.containerInfo} align="center">
          <Stack spacing={0} className={styles.cell}>
            <Text className={styles.textSmall}>Длительность</Text>
            <Text className={styles.textBig}>{duration}</Text>
          </Stack>

          <Flex align="center">
            <div className={styles.divider} />
            <Stack spacing={0} className={styles.cell}>
              <Text className={styles.textSmall}>Лекций</Text>
              <Text className={styles.textBig}>{lectures}</Text>
            </Stack>
            <div className={styles.divider} />
          </Flex>

          <Stack spacing={0} className={styles.cell}>
            <Text className={styles.textSmall}>Тестовых заданий</Text>
            <Text className={styles.textBig}>{tests}</Text>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  )
}
