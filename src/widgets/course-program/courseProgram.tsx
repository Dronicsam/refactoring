import { Accordion, List, Stack, Text, Title } from '@mantine/core'
import styles from './courseProgram.module.css'

interface ProgramProps {
  id: number
  name: string
  content: string[]
}

interface CourseProgramProps {
  program: ProgramProps[]
}
export const CourseProgram = ({ program }: CourseProgramProps) => (
  <Stack>
    <Title className={styles.title}>Программа курса</Title>
    <Accordion radius="xl" className={styles.containerAccordion}>
      {program.map((prog) => (
        <Accordion.Item key={prog.id} value={prog.name}>
          <Accordion.Control>
            <Stack spacing={0}>
              <Text>{prog.id} урок</Text>
              <Title className={styles.titleSmall}>{prog.name}</Title>
            </Stack>
          </Accordion.Control>
          <Accordion.Panel className={styles.content}>
            <Text>Содержание:</Text>
            <List className={styles.listItems}>
              {prog.content.map((element) => (
                <List.Item>{element}</List.Item>
              ))}
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </Stack>
)
