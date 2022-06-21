import { defineStore } from "pinia";
// import uniqid from "uniqid";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    pageFriend: false,
    listFriend: [],

    notifications: [],
  }),
  getters: {
    getPageFriend: (state) => state.pageFriend,
    getListFriend: (state) => state.listFriend,

    getNotifications: (state) => state.notifications,
  },
  actions: {
    changePage() {
      this.pageFriend = !this.pageFriend;
    },

    addListFriend(listFriend) {
      this.listFriend = listFriend;
    },

    setNotifications(data) {
      this.notifications = data;
    },
  },
});
