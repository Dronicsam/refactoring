/* eslint-disable no-console */
import { Checkbox, Input, Stack } from '@mantine/core'
import { useState } from 'react'
import { Test as TestType } from 'entities/course/types'
import { AddButton } from 'shared/ui'

interface TestProps {
  test: TestType
  changeTest: (newTest: TestType) => void
}

export const CreateTest = ({ test, changeTest }: TestProps) => {
  const [task, setTask] = useState('')
  const [answers, setAnswers] = useState<string[]>([])
  const [right, setRight] = useState('')
  console.log(test)
  console.log(changeTest)

  return (
    <Stack>
      <Input value={task} onChange={(e) => setTask(e.target.value)} />
      {answers.map((answer) => (
        <Checkbox
          key={answer}
          label={answer}
          onChange={() => setRight(right === answer ? '' : answer)}
          checked={right === answer}
        />
      ))}
      <AddButton
        label="Добавить вариант ответа"
        onClick={() => setAnswers([...answers, 'Новый ответ'])}
      />
    </Stack>
  )
}
