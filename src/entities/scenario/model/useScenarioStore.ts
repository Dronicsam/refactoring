import { create } from 'zustand'
import { Scenario } from '../types'

interface UseScenarioStore {
  scenario: Scenario
  setName: (name: string) => void
  setDescription: (description: string) => void
  setCallText: (call_text: string) => void
  setScenario: (scenario: Scenario) => void
  reset: () => void
}

const initialState = {
  scenario: {
    id: 0,
    name: '',
    description: '',
    call_text: '',
  },
}

export const useScenarioStore = create<UseScenarioStore>((set) => ({
  ...initialState,
  setName: (name) =>
    set((prevState) => ({ scenario: { ...prevState.scenario, name } })),
  setDescription: (description) =>
    set((prevState) => ({ scenario: { ...prevState.scenario, description } })),
  setCallText: (call_text) =>
    set((prevState) => ({ scenario: { ...prevState.scenario, call_text } })),
  setScenario: (scenario) => set(() => ({ scenario })),
  reset: () => set(initialState),
}))
