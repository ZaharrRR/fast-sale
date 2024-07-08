import { defineStore } from 'pinia'

import { User } from '@/domain/User'

interface State {
  user: User | null
  token: string
  isAuth: Boolean
  isLoading: Boolean
}

export const useUserStore = defineStore('userStore', {
  state: (): State => ({
    user: {
      id: '1',
      name: 'John Doe',
      email: 'x5ZiY@example.com',
      location: 'New York'
    },
    token: '56534545fggdg453',
    isAuth: true,
    isLoading: false
  }),

  getters: {
    getUser: (state) => state.user,
    getIsAuth: (state) => state.isAuth
  },

  actions: {}
})
