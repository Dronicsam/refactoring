import { Replica } from 'entities/scenario/types/Scenario'

export const prepareCallText = (replicas: Replica[]) => {
  const text = replicas.map((replica) => `${replica.text}${replica.interval}`)
  return text.join(' ')
}
