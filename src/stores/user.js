import { defineStore } from "pinia";
import unique from "unique-objects";
import { getUser } from "@/firebase/services";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userinfo: {},
    listUser: [],
    friendIds: [],
  }),
  getters: {
    getUserinfo: (state) => state.userinfo,
    findUser: (state) => (uid) =>
      state.listUser.find((item) => item.uid === uid),
    getFriendIds: (state) => state.friendIds,
  },
  actions: {
    async setUserInfo(data) {
      // console.log(data);
      if (data) {
        this.userinfo.displayName = data.displayName;
        this.userinfo.photoURL = data.photoURL;
        this.userinfo.uid = data.uid;

        const a = await getUser(data.uid);
        // console.log(a);
        if (a?.uid) {
          const ids = a.friends.map((e) => e.uid) || [];

          this.friendIds = [...[a.uid], ...ids];

          this.userinfo = {
            displayName: a.displayName,
            photoURL: a.photoURL,
            uid: a.uid,
            theme: a.theme,
          };
        }
      }
    },

    addUser(user) {
      const index = this.listUser.findIndex((item) => item.uid === user.uid);
      // console.log(index);
      if (index === -1) {
        this.listUser.push(user);
      }
      // console.log(user);
    },
  },
});
