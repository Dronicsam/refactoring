import { $api } from 'shared/api'

export const updateScenario = (id: number, name: string) =>
  $api.put(`/scenario/${id}`, {
    name,
  })
