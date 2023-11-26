import { $api } from 'shared/api'

export const createScenario = (name: string) =>
  $api.post('/api/scenario', {
    name,
  })
