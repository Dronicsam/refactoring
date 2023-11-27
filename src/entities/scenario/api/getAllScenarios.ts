import { $api } from 'shared/api'

export const getAllScenarios = () => $api.get('scenario/all')
