import { $api } from 'shared/api'

export const getAllOperators = () => $api.get('/operator/all')
