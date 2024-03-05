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
        {lessons.map((lesson, i) => (
          <Accordion.Item value={lesson.name} key={lesson.name}>
            <Accordion.Control>
              <Text>{i}&ndsp;урок</Text>
              <Input
                variant="transparent"
                value={lesson.name}
                onChange={() => {}}
              />
            </Accordion.Control>
            <Accordion.Panel>
              <Text>Содержание: </Text>
              <List>
                {lesson.topics.map((topic) => (
                  <List.Item key={topic.name}>
                    <Input variant="transparent" value={topic.name} />
                  </List.Item>
                ))}
              </List>
              <AddButton label="Добавить тему" onClick={createTopic} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <AddButton label="Добавить урок" onClick={createLesson} />
    </>
  )
}
