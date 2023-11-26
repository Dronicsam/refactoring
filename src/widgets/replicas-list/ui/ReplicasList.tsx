import { Stack } from '@mantine/core'
import { Replica as ReplicaItem } from 'features/replica/ui'
import { useReplicasStore } from 'entities/scenario/model'

export const ReplicasList = () => {
  const replicas = useReplicasStore((state) => state.replicas)
  return (
    <Stack>
      {replicas.map((replica) => (
        <ReplicaItem key={replica.id} id={replica.id} />
      ))}
    </Stack>
  )
}
