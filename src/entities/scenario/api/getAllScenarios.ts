import { $api } from 'shared/api'

export const getAllScenarios = () => $api.get('api/scenario/all')
