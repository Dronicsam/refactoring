import { Accordion, Input, List, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useCourseStore } from 'entities/course/model/useCourseStore'
import { ROUTES } from 'shared/lib'
import { AddButton } from 'shared/ui'

export const CourseContent = () => {
  const navigate = useNavigate()
  const { lessons, addLesson, addTopic, changeLessonName } = useCourseStore()
  const createLesson = () => {
    addLesson({
      id: Math.random(),
      name: 'Новый урок',
      topics: [],
    })
  }

  const createTopic = (lessonId: number) => {
    addTopic(lessonId, {
      id: Math.random(),
      name: 'Новая тема',
      content: '',
      files: [],
    })
  }

  return (
    <>
      <Accordion>
        {lessons.length ? (
          lessons.map((lesson, i) => (
            <Accordion.Item
              value={lesson.name}
              key={lesson.id}
              sx={{
                background: 'white',
                borderRadius: `${i === 0 * 10}px 10px 10px 10px`,
                '&:hover': {
                  background: '#F7F7F7',
                },
              }}
            >
              <Accordion.Control
                sx={{
                  '&:hover': {
                    background: 'transparent',
                  },
                }}
              >
                <Text>{i + 1} урок</Text>
                <Input
                  value={lesson.name}
                  onChange={(e) => changeLessonName(lesson.id, e.target.value)}
                />
              </Accordion.Control>
              <Accordion.Panel pt={0}>
                <Text>Содержание: </Text>
                <List ml="lg">
                  {lesson.topics.map((topic) => (
                    <List.Item key={topic.id}>
                      <Text
                        onClick={() => navigate(`${ROUTES.topic}/${topic.id}`)}
                        sx={{
                          textDecoration: 'underline',
                          textDecorationColor: 'white',
                          '&:hover': {
                            textDecorationColor: 'black',
                            cursor: 'pointer',
                            transition: 'text-decoration 0.2s ease',
                          },
                        }}
                      >
                        {topic.name}
                      </Text>
                    </List.Item>
                  ))}
                </List>
                <AddButton
                  variant="small"
                  label="Добавить тему"
                  onClick={() => createTopic(lesson.id)}
                />
              </Accordion.Panel>
            </Accordion.Item>
          ))
        ) : (
          <Text fz={16}>
            Здесь будет отображено содержание курса, включающее в себя уроки и
            темы. Нажмите на Добавить урок, чтобы отредактировать содержимое.
          </Text>
        )}
      </Accordion>
      <AddButton label="Добавить урок" onClick={createLesson} />
    </>
  )
}
