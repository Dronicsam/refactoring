import { getAllScenarios } from 'entities/scenario/api'

export const useTableData = async () => {
  const data = await getAllScenarios()
  return data
}
