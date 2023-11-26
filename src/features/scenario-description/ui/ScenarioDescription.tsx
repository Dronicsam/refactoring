import { Textarea } from '@mantine/core'
import { useScenarioStore } from 'entities/scenario/model'

export const ScenarioDescription = () => {
  const description = useScenarioStore((state) => state.description)
  const setDescription = useScenarioStore((state) => state.setDescription)

  return (
    <Textarea
      placeholder="Введите описание"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      label="Описание сценария"
      autosize
      maxRows={18}
    />
  )
}
