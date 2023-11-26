import { $api } from 'shared/api'

export const deleteScenario = (id: number) =>
  $api.delete(`/api/scenario/${id}`, {
    params: {
      id,
    },
  })
