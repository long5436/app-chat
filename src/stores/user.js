import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userinfo: {},
  }),
  getters: {
    getUserinfo: (state) => state.userinfo,
  },
  actions: {
    setUserInfo(data) {
      // console.log(data);
      this.userinfo = {
        username: data.displayName,
        photo: data.photoURL,
        uid: data.uid,
      };
    },
  },
});
