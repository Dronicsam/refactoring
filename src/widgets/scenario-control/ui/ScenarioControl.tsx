import { Box, Button, Flex } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import {
  createScenario,
  deleteScenario,
  updateScenario,
} from 'entities/scenario/api'
import { useReplicasStore, useScenarioStore } from 'entities/scenario/model'

interface ScenarioControlProps {
  id?: string
}

export const ScenarioControl = ({ id }: ScenarioControlProps) => {
  const navigate = useNavigate()
  const replicas = useReplicasStore((state) => state.replicas)
  // const name = useScenarioStore((state) => state.name)

  return (
    <Box>
      {!id ? (
        <Flex gap={10}>
          <Button onClick={() => createScenario('a')}>Сохранить</Button>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Отмена
          </Button>
        </Flex>
      ) : (
        <Flex gap={10}>
          <Button onClick={() => updateScenario(Number(id), 'a')}>
            Обновить
          </Button>
          <Button variant="outline" onClick={() => deleteScenario(Number(id))}>
            Удалить
          </Button>
        </Flex>
      )}
    </Box>
  )
}
