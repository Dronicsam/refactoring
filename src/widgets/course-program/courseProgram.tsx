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

const ProgramItem = ({ id, name, content }: ProgramProps) => (
  <Accordion.Item key={id} value={name}>
    <Accordion.Control>
      <Stack spacing={0}>
        <Text>{id} урок</Text>
        <Title className={styles.titleSmall}>{name}</Title>
      </Stack>
    </Accordion.Control>
    <Accordion.Panel className={styles.content}>
      <Text>Содержание:</Text>
      <List className={styles.listItems}>
        {content.map((element, index) => (
          <List.Item key={index}>{element}</List.Item>
        ))}
      </List>
    </Accordion.Panel>
  </Accordion.Item>
)

export const CourseProgram = ({ program }: CourseProgramProps) => (
  <Stack>
    <Title className={styles.title}>Программа курса</Title>
    <Accordion radius="xl" className={styles.containerAccordion}>
      {program.map((prog) => (
        <ProgramItem key={prog.id} {...prog} />
      ))}
    </Accordion>
  </Stack>
)
