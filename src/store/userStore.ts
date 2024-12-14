
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users') || '[]')
  }),
  actions: {
    addUser(user: any) {
      this.users.push(user)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    removeUser(index: number) {
      this.users.splice(index, 1)
      this.saveToLocalStorage()
    }
  }
})