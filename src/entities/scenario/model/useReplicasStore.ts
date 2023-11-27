import { create } from 'zustand'
import { Replica } from '../types/Scenario'

interface UseReplicasStore {
  replicas: Replica[]
  setReplicas: (replicas: Replica[]) => void
  addReplica: (replica: Replica) => void
  removeReplica: (id: number) => void
  setReplica: (id: number, text: string) => void
  setInterval: (id: number, interval: string) => void
  reset: () => void
}

const initialState = {
  replicas: [
    {
      id: 0,
      text: '',
      interval: '<sli[3000]>',
    },
  ],
}

export const useReplicasStore = create<UseReplicasStore>((set) => ({
  ...initialState,
  setReplicas: (replicas) => set(() => ({ replicas })),
  addReplica: (replica) =>
    set((state) => ({ replicas: [...state.replicas, replica] })),
  removeReplica: (id) =>
    set((state) => ({
      replicas: state.replicas.filter((replica) => replica.id !== id),
    })),
  setReplica: (id, text) =>
    set((state) => ({
      replicas: state.replicas.map((replica) =>
        replica.id === id ? { ...replica, text } : replica
      ),
    })),
  setInterval: (id, interval) =>
    set((state) => ({
      replicas: state.replicas.map((replica) =>
        replica.id === id ? { ...replica, interval } : replica
      ),
    })),
  reset: () => set(initialState),
}))
