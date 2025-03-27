import { create } from 'zustand'
import { ProfileState } from '../types'

export const useProfileStore = create<ProfileState>(() => ({
  username: 'Гатауллова Алина Альфредовна',
  role: '',
}))
