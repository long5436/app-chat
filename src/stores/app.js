import { defineStore } from "pinia";
import uniqid from "uniqid";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    pageFriend: false,
    listFriend: [],
  }),
  getters: {
    getPageFriend: (state) => state.pageFriend,
    getListFriend: (state) => state.listFriend,
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
