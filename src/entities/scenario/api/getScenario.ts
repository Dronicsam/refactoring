import { $api } from 'shared/api'
import { Scenario } from '../types'

export const getScenario = (id: number) => $api.get<Scenario>(`/scenario/${id}`)
