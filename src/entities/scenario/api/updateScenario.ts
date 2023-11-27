import { $api } from 'shared/api'

export const updateScenario = (id: number, name: string, description: string) =>
  $api.put(`/scenario/${id}`, {
    name,
    description,
  })
