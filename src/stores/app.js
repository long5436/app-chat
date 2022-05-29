import { defineStore } from "pinia";
import uniqid from "uniqid";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    pageFriend: false,
  }),
  getters: {
    getPageFriend: (state) => state.pageFriend,
  },
  actions: {
    changePage() {
      this.pageFriend = !this.pageFriend;
    },
  },
});
