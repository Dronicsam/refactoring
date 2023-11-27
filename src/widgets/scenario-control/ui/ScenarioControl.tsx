import { Box, Button, Flex } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { createScenario } from 'entities/scenario/api'
import { useReplicasStore, useScenarioStore } from 'entities/scenario/model'
import { ROUTES } from 'shared/lib'
import { prepareCallText } from '../lib'

export const ScenarioControl = () => {
  const navigate = useNavigate()
  const replicas = useReplicasStore((state) => state.replicas)
  const { name, description } = useScenarioStore((state) => state.scenario)

  const text = prepareCallText(replicas)

  return (
    <Box>
      <Flex gap={10}>
        <Button
          disabled={!name}
          onClick={() =>
            createScenario(name, description, text).then(() =>
              navigate(ROUTES.scenarios)
            )
          }
        >
          Сохранить
        </Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Отмена
        </Button>
      </Flex>
    </Box>
  )
}
