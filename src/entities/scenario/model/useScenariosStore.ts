import { create } from 'zustand'
import { Scenario } from '../types'

export const useScenarioStore = create((set) => ({
  scenarios: [],
  setScenarios: (scenarios: Scenario[]) => set(() => ({ scenarios })),
}))
