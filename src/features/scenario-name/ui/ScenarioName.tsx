import { TextInput } from '@mantine/core'
import { useScenarioStore } from 'entities/scenario/model'

export const ScenarioName = () => {
  const { name } = useScenarioStore((state) => state.scenario)
  const setName = useScenarioStore((state) => state.setName)

  return (
    <TextInput
      placeholder="Введите имя"
      value={name}
      onChange={(event) => setName(event.target.value)}
      label="Имя сценария"
      sx={{
        '.mantine-TextInput-input': {
          background: 'white',
        },
      }}
    />
  )
}
