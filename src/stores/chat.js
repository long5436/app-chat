import { TwitterAuthProvider } from "firebase/auth";
import { defineStore } from "pinia";
// import uniqid from "uniqid";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    chatListContent: [],
    chatList: [],
    currentChatUser: {},
    currentChatId: "",
    theme: {
      id: 0,
      name: "Mặc định",
      right: {
        bg: "rgb(236,83,42)",
        color: "#fff",
      },
      left: {
        bg: "#E4E6EB",
        color: "#000",
      },
      background: "",
    },
  }),
  getters: {
    getChatContent: (state) => (chatId) => {
      // console.log(chatId);
      return state.chatListContent.find((chat) => chat.chatId === chatId);
    },
    getChatList: (state) => state.chatList,
    getCurrentChatUser: (state) => state.currentChatUser,
    getCurrentChatId: (state) => state.currentChatId,
    getTheme: (state) => state.theme,
  },
  actions: {
    addChat(value) {
      this.chats.push({
        id: uniqid(),
        user: 1,
        content: value,
      });
    },

    addChatData(data) {
      // console.log(data);
      this.chatListContent.push(data);
    },

    addChatDataContent(data) {
      // const newMessage = data.chatData.pop();
      // console.log(data);

      if (data) {
        this.chatListContent.find((chat, index) => {
          if (chat.chatId === data.chatId) {
            // console.log(chat);
            const bool =
              data.pop?.createdAt?.seconds ===
              chat.chatData[chat.chatData?.length - 1]?.createdAt.seconds;
            // console.log(bool);
            if (!bool) {
              chat.chatData.push(data.pop);
            }
            return;
          }
        });
      }
    },

    addChatList(data) {
      this.chatList = data || [];
    },

    addCurrentChatUser(data) {
      this.currentChatUser = data.user;
      this.currentChatId = data.id;
    },
    setTheme(theme) {
      // console.log(themes);
      this.theme = theme;
    },

    setThemeById(id, theme) {
      // console.log(id, theme);
      this.chatList.find((chat) => {
        if (chat.id === id) {
          chat.theme = theme;
          this.theme = theme;
          // console.log("da chay vo day");
          return;
        }
      });
    },
  },
});
