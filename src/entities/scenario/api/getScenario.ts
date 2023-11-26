import { $api } from 'shared/api'

export const getScenario = (id: number) => $api.get(`/scenario/${id}`)
