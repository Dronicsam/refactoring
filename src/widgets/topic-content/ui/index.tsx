import { FileButton, FileInput, Input, Stack } from '@mantine/core'
import { useState } from 'react'
import { TopicEditor } from 'features/topic-editor/ui'
import { AddButton } from 'shared/ui'

export const TopicContent = () => {
  const [name, setInput] = useState('')
  const [files, setFiles] = useState<File[]>([])
  console.log(files)
  return (
    <Stack>
      <Input value={name} onChange={(e) => setInput(e.target.value)} />
      {/* <TopicEditor /> */}
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
    </Stack>
  )
}
