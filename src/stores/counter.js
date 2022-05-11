import { defineStore } from 'pinia'
import uniqid from 'uniqid';

export const chatStore = defineStore({
  id: 'chat',
  state: () => ({
    chatIput: '',
    messageList: [
      {
        id: 0,
        user: 1,
        content: 'This page contains documentation for Vue 2. The Vue 3 version of the URL you are visiting is: https://vuejs.org/guide/essentials/event-handling.html.'
      },
      {
        id: 1,
        user: 2,
        content: 'This page contains documentation for Vue 2. The Vue 3 version of the URL you are visiting is: https://vuejs.org/guide/essentials/event-handling.html.'
      },
      {
        id: 2,
        user: 1,
        content: 'This page contains documentation for Vue 2. The Vue 3 version of the URL you are visiting is: https://vuejs.org/guide/essentials/event-handling.html.'
      },
      {
        id: 3,
        user: 2,
        content: 'This page contains documentation for Vue 2. The Vue 3 version of the URL you are visiting is: https://vuejs.org/guide/essentials/event-handling.html.'
      }
    ]
  }),
  getters: {
    getChatInput: (state) => state.chatIput,
    getMessageList: state => state.messageList
  },
  actions: {
    setChatInput(value) { this.chatIput = value },
    addhatInput(value) {
      this.messageList.push({
        id: uniqid(),
        user: 1,
        content: value 
      })
    }
  }
})
