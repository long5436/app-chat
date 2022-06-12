import { defineStore } from "pinia";
// import uniqid from "uniqid";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    pageFriend: false,
    listFriend: [],
    themes: [
      {
        name: "Cầu vòng",
        color: `linear-gradient(
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        )`,
        background: "",
      },
      {
        name: "Tình yêu",
        color: `linear-gradient(
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        )`,
        background: "",
      },
      {
        name: "Bầu trời",
        color: `linear-gradient(
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        )`,
        background: "",
      },
      {
        name: "Thư giãn",
        color: `linear-gradient(
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        )`,
        background: "",
      },
    ],
  }),
  getters: {
    getPageFriend: (state) => state.pageFriend,
    getListFriend: (state) => state.listFriend,
    getThemes: (state) => state.themes,
  },
  actions: {
    changePage() {
      this.pageFriend = !this.pageFriend;
    },

    addListFriend(listFriend) {
      this.listFriend = listFriend;
    },
  },
});
