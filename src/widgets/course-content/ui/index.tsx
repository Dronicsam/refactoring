import { Accordion, Input, List, Text } from '@mantine/core'
import { useCourseStore } from 'entities/course/model/useCourseStore'
import { AddButton } from 'shared/ui'

export const CourseContent = () => {
  const { lessons, addLesson } = useCourseStore()
  const createLesson = () => {
    addLesson({
      id: Math.random(),
      name: 'Новый урок',
      topics: [],
    })
  }
  const createTopic = () => {}

  return (
    <>
      <Accordion>
        {lessons.length ? lessons.map((lesson, i) => (
          <Accordion.Item value={lesson.name} key={lesson.name} sx={{
            background: 'white',
            borderRadius: `${i === 0 * 10}px 10px 10px 10px`,
            '&:hover': {
                background: '#F7F7F7'
            }
          }}>
            <Accordion.Control sx={{
                '&:hover': {
                    background: 'transparent'
                }
            }}>
              <Text>{i + 1} урок</Text>
              <Text fz={22}>{lesson.name}</Text>
            </Accordion.Control>
            <Accordion.Panel pt={0}>
              <Text>Содержание: </Text>
              <List>
                {lesson.topics.map((topic) => (
                  <List.Item key={topic.name}>
                    <Input variant="transparent" value={topic.name} />
                  </List.Item>
                ))}
              </List>
              <AddButton variant="small" label="Добавить тему" onClick={createTopic} />
            </Accordion.Panel>
          </Accordion.Item>
        )) : <Text fz={16}>Здесь будет отображено содержание курса, включающее в себя уроки и темы. Нажмите на Добавить урок, чтобы отредактировать содержимое.</Text>}
      </Accordion>
      <AddButton label="Добавить урок" onClick={createLesson} />
    </>
  )
}
