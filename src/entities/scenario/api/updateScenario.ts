import { $api } from 'shared/api'

export const updateScenario = (id: number, name: string) =>
  $api.put(`/api/scenario/${id}`, {
    name,
  })
