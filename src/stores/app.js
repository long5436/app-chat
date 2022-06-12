import { defineStore } from "pinia";
// import uniqid from "uniqid";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    pageFriend: false,
    listFriend: [],
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
    getPageFriend: (state) => state.pageFriend,
    getListFriend: (state) => state.listFriend,
    getTheme: (state) => state.theme,
  },
  actions: {
    changePage() {
      this.pageFriend = !this.pageFriend;
    },

    addListFriend(listFriend) {
      this.listFriend = listFriend;
    },

    setTheme(theme) {
      this.theme = theme;
    },
  },
});
