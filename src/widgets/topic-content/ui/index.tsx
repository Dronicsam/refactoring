import { Box, FileButton, FileInput, Input, Stack } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ControlButtons } from 'features/control-buttons/ui'
import { TopicEditor } from 'features/topic-editor/ui'
import { useCourseStore } from 'entities/course/model/useCourseStore'
import { AddButton } from 'shared/ui'

const content = ''

export const TopicContent = () => {
  const { topicId } = useParams()
  const navigate = useNavigate()

  const changeTopic = useCourseStore((state) => state.changeTopic)

  const selectedLesson = useCourseStore((state) =>
    state.lessons.find((lesson) =>
      lesson.topics.find((topic) => topic.id === Number(topicId))
    )
  )

  const selectedTopic = useMemo(
    () => selectedLesson?.topics.find((topic) => topic.id === Number(topicId)),
    [selectedLesson, topicId]
  )

  const [name, setName] = useState(selectedTopic?.name)

  const [files, setFiles] = useState<File[]>([])

  const onSubmit = () => {
    changeTopic(
      Number(selectedLesson?.id),
      Number(selectedTopic?.id),
      String(name),
      content,
      files
    )
    navigate(-1)
  }

  return (
    <Stack>
      <Input
        placeholder="Введите название темы"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TopicEditor content={content} />
      {files.map((file) => (
        <FileInput
          key={file.name}
          value={file}
          onChange={(e) => {
            console.log(e)
            setFiles(
              files.map((item) =>
                item.name === file.name ? e : item
              ) as File[]
            )
          }}
        />
      ))}
      <FileButton onChange={(e) => setFiles([...files, e] as File[])}>
        {(props) => <AddButton label="Загрузить файл" {...props} />}
      </FileButton>
      <Box pos="absolute" bottom={90} right={50}>
        <ControlButtons onCancel={() => navigate(-1)} onSubmit={onSubmit} />
      </Box>
    </Stack>
  )
}
