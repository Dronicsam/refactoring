import { $api } from 'shared/api'

export const createScenario = (
  name: string,
  description: string | undefined,
  call_text: string
) =>
  $api.post('/scenario/', {
    name,
    description,
    call_text,
  })
