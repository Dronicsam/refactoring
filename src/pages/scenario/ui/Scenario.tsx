import { Stack, Flex, Box } from '@mantine/core'
import { useParams } from 'react-router-dom'
import { Header } from 'widgets/header'
import { PageTitle } from 'widgets/page-title'
import { ReplicasList } from 'widgets/replicas-list/ui'
import { ScenarioControl } from 'widgets/scenario-control/ui'
import { ScenarioDescription } from 'features/scenario-description/ui'
import { ScenarioName } from 'features/scenario-name/ui'
import { AddButton } from 'shared/ui'
import { usePrepareData } from '../lib'

export const Scenario = () => {
  const { scenarioId } = useParams()
  const loading = usePrepareData(Number(scenarioId))
  return (
    <Stack pos="relative" h="95%">
      <Header />
      <PageTitle title="Сценарий" />
      <Flex sx={{ overflow: 'scroll' }} gap={20}>
        <Box h="100%" sx={{ overflow: 'scroll', alignSelf: 'start' }}>
          <Stack spacing={20}>
            <ReplicasList />
            {/* <AddButton
                  onClick={() =>
                    addReplica({
                      id: Date.now(),
                      text: '',
                      interval: 30,
                    })
                  }
                /> */}
          </Stack>
        </Box>
        <Stack spacing={40} w="50%">
          <ScenarioName />
          <ScenarioDescription />
        </Stack>
      </Flex>

      <Box pos="absolute" bottom={0} right={0}>
        <ScenarioControl id={scenarioId} />
      </Box>
    </Stack>
  )
}
