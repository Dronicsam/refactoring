import { Box, Stack, Flex } from '@mantine/core'
import { useEffect } from 'react'
import { Header } from 'widgets/header'
import { PageTitle } from 'widgets/page-title'
import { ReplicasList } from 'widgets/replicas-list/ui'
import { ScenarioControl } from 'widgets/scenario-control/ui'
import { ScenarioDescription } from 'features/scenario-description/ui'
import { ScenarioName } from 'features/scenario-name/ui'
import { useReplicasStore, useScenarioStore } from 'entities/scenario/model'
import { AddButton } from 'shared/ui'

export const CreateScenario = () => {
  const addReplica = useReplicasStore((state) => state.addReplica)
  const resetScenario = useScenarioStore((state) => state.reset)
  const resetReplicas = useReplicasStore((state) => state.reset)

  useEffect(() => {
    resetScenario()
    resetReplicas()
  }, [resetScenario, resetReplicas])

  return (
    <Stack pos="relative" h="95%">
      <Header />
      <PageTitle title="Создание сценария" />
      <Flex sx={{ overflow: 'scroll' }} gap={20}>
        <Box h="100%" sx={{ overflow: 'scroll', alignSelf: 'start' }}>
          <Stack spacing={20}>
            <ReplicasList isConstruct />
            <AddButton
              onClick={() =>
                addReplica({
                  id: Date.now(),
                  text: '',
                  interval: '<[3000]>',
                })
              }
            />
          </Stack>
        </Box>
        <Stack spacing={40} w="50%">
          <ScenarioName />
          <ScenarioDescription />
        </Stack>
      </Flex>

      <Box pos="absolute" bottom={0} right={0}>
        <ScenarioControl />
      </Box>
    </Stack>
  )
}
