import { Flex, Progress, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/lib'
import styles from "./style.module.css"

interface CourseCardProps {
  id: number
  title: string
  students: number
  timeLengh: number,
  lectures: number,
  testTasks: number
}

export const CourseCard = ({ id, title, students, timeLengh, lectures, testTasks }: CourseCardProps) => {
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
      <div className={styles.topBlock}>
        <Text fz={25}>{title}</Text>
        <Text fz={16} fw={100} sx={{
          color: "#ACA8A8",
          marginTop: "3px",
          marginLeft: "10px"
        }}>
          {students} студента
        </Text>
        <Text fz={25} style={{rotate: "90deg", marginLeft: "auto", color: "#ACA8A8"}}>...</Text>
      </div>
    </Stack>
  )
}
