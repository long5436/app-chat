import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userinfo: {dad: 'll'}
  }),
  getters: {
    getUserinfo: (state) => state.userinfo
  },
  actions: {
    setUserInfo(value) {
      console.log(value);
      this.userinfo = {
          username: value.displayName,
          photo: value.photoURL
      }
    }
  }
})
