import { create } from 'zustand'
import { getAllScenarios } from '../api'
import { Scenario } from '../types'

interface UseScenariosStore {
  scenarios: Scenario[]
  loading: boolean
  getScenarios: () => void
}

export const useScenariosStore = create<UseScenariosStore>((set) => ({
  scenarios: [],
  loading: true,
  getScenarios: async () => {
    set({ loading: true })
    getAllScenarios()
      .then(({ data }) => {
        set({ scenarios: data })
      })
      .finally(() => set({ loading: false }))
  },
}))
