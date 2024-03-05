import { Accordion, List, Stack, Text, Title } from '@mantine/core';
import styles from './courseProgram.module.css'

interface ProgramProps {
    id: number,
    name: string,
    content: string[]  
}

interface CourseProgramProps {
    program: ProgramProps[]
}
export const CourseProgram = ({ program }: CourseProgramProps) => (
    <Stack >

    <Title size={36} fw={500}>Программа курса</Title>
    <Accordion radius="xl" className={styles.containerAccordion}>
      {
        program.map(prog => 
        <Accordion.Item key={prog.id} value={prog.name}>
            <Accordion.Control>
                <Stack spacing={0}>
                    <Text size={20} fw={300}>{prog.id} урок</Text>
                    <Title size={28} fw={500}>{prog.name}</Title>
                </Stack>
            </Accordion.Control>
            <Accordion.Panel className={styles.content}>
                <Text size={20}>Содержание:</Text>
                <List className={styles.listItems}>
                    {prog.content.map(element => <List.Item>{element}</List.Item>)}
                </List>
            </Accordion.Panel>
        </Accordion.Item>  
        )
    }
    </Accordion>
    </Stack>
)