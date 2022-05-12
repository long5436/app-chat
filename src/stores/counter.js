import { defineStore } from "pinia";
import uniqid from "uniqid";

export const chatStore = defineStore({
  id: "chat",
  state: () => ({
    chatIput: "",
    messageList: [
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
  }),
  getters: {
    getChatInput: (state) => state.chatIput,
    getMessageList: (state) => state.messageList,
  },
  actions: {
    setChatInput(value) {
      this.chatIput = value;
    },
    addhatInput(value) {
      this.messageList.push({
        id: uniqid(),
        user: 1,
        content: value,
      });
    },
  },
});
