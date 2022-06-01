import { defineStore } from "pinia";
import uniqid from "uniqid";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    chats: [
      {
        id: 0,
        user: 1,
        content: "Xong chưa các bác ?",
      },
      {
        id: 1,
        user: 2,
        content: "Chưa 🤣 đang nghiên cứu",
      },
      {
        id: 2,
        user: 1,
        content: "Làm được tới đâu rồi",
      },
      {
        id: 3,
        user: 2,
        content: "Sắp xong rồi",
      },
      {
        id: 3,
        user: 1,
        content: "Ok tranh thử nhé :v",
      },
      {
        id: 3,
        user: 1,
        content: "Test :v",
      },
      {
        id: 3,
        user: 1,
        content: "Test :v",
      },
      {
        id: 3,
        user: 1,
        content: "Test :v",
      },
      {
        id: 3,
        user: 1,
        content: "Test :v",
      },
      {
        id: 3,
        user: 1,
        content: "Test :v",
      },
      {
        id: 3,
        user: 1,
        content: "Test :v",
      },
    ],
    chatList: [],
  }),
  getters: {
    getChats: (state) => state.chats,
    getChatList: (state) => state.chatList,
  },
  actions: {
    addChat(value) {
      this.chats.push({
        id: uniqid(),
        user: 1,
        content: value,
      });
    },

    addChatList(data) {
      console.log(data);
      this.chatList = data;
    },
  },
});
