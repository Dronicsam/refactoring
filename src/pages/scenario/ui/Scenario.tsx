import { Stack, Flex, Box } from '@mantine/core'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from 'widgets/header'
import { PageTitle } from 'widgets/page-title'
import { ReplicasList } from 'widgets/replicas-list/ui'
import { ScenarioDescription } from 'features/scenario-description/ui'
import { ScenarioName } from 'features/scenario-name/ui'
import { getScenario } from 'entities/scenario/api'
import { prepareReplicas } from 'entities/scenario/lib'
import { useReplicasStore, useScenarioStore } from 'entities/scenario/model'

export const Scenario = () => {
  const { scenarioId } = useParams()
  // const [loading, setLoading] = useState(true)

  const setScenario = useScenarioStore((state) => state.setScenario)
  const setReplicas = useReplicasStore((state) => state.setReplicas)
  const reset = useScenarioStore((state) => state.reset)

  useEffect(() => {
    getScenario(Number(scenarioId)).then(({ data }) => {
      reset()
      setScenario({
        id: data.id,
        name: data.name,
        description: data.description,
      })
      setReplicas(prepareReplicas(data))
    })
    // .finally(() => setLoading(false))
  }, [scenarioId, setScenario, reset, setReplicas])

  return (
    <Stack pos="relative" h="95%">
      <Header />
      <PageTitle title="Сценарий" />
      <Flex sx={{ overflow: 'scroll' }} gap={20}>
        <Box h="100%" sx={{ overflow: 'scroll', alignSelf: 'start' }}>
          <ReplicasList />
        </Box>
        <Stack spacing={40} w="50%">
          <ScenarioName />
          <ScenarioDescription />
        </Stack>
      </Flex>
    </Stack>
  )
}
