import { defineStore } from 'pinia'

export const chatStore = defineStore({
  id: 'chat',
  state: () => ({
    chatIput: ''
  }),
  getters: {
    getChatInput: (state) => state.chatIput
  },
  actions: {
    setChatInput(value) { this.chatIput = value }
  }
})
