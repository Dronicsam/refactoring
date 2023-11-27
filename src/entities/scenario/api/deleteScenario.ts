import { $api } from 'shared/api'

export const deleteScenario = (id: number) =>
  $api.delete(`/scenario/${id}`, {
    params: {
      id,
      force: true,
    },
  })
