import { Flex, Stack, Button , Text, Title} from "@mantine/core"
import { Skill } from "entities/skill"
import styles from './courseInfo.module.css'

interface СourseProps {
    duration: string,
    lectures: string,
    tests: string,
    description: string,
    skills: string[],
}

export const CourseInfo = ({duration, lectures, tests, description, skills} : СourseProps) => (
    <Stack className={styles.container}>
        <Flex className={styles.container}>
            <Flex className={styles.containerInfo} gap={30} align='center'>
                <Stack spacing={0}>
                    <Text size='20px'>Длительность</Text>
                    <Text size={32} fw={300}>{duration}</Text>
                </Stack>
                <Flex align="center" >
                    <div className={styles.divider}/>
                <Stack spacing={0} className={styles.cell}>
                    <Text size={20}>Лекций</Text>
                    <Text size={32} fw={300}>{lectures}</Text>
                </Stack>
                    <div className={styles.divider}/>
                </Flex>
                <Stack spacing={0}>
                    <Text size={20}>Тестовых заданий</Text>
                    <Text size={32} fw={300}>{tests}</Text>
                </Stack>
            <Button style={{backgroundColor: 'rgba(131, 205, 201, 0.5)', color: 'black', fontWeight: 400, width: '30%', height: '50px'}}>Получить доступ</Button>
        </Flex>

        </Flex>
        <Stack className={styles.container}>
            <Title size='36px' fw={500}>Зачем нужен курс</Title>
            <Text size='24px'>{description}</Text>
        </Stack>
        <Stack>
            <Title size='36px' fw={500}>Получаемые навыки</Title>
            <Flex gap='20px'>
            {skills.map(skill => 
                <Skill skill={skill}/>
            )}
            </Flex>
        </Stack>
    </Stack>
)