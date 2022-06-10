<script setup>
import avatarImg from "@/assets/img/avatar.jpg";
import { useUserStore } from "../stores/user";
import { useAppStore } from "../stores/app";
import { useChatStore } from "../stores/chat";
import { useRouter } from "vue-router";
import { reactive, ref, computed, watch, watchEffect } from "vue";
import { auth, signOut, db, collection, onSnapshot } from "../firebase/config";
import userImg from "@/assets/img/user.webp";
import createAvtString from "@/plugins/createAvtString";
// import { isActive, isExactActive } from "vue-router";

//
const userStore = useUserStore();
const appStore = useAppStore();
const chatStore = useChatStore();
const router = useRouter();
const userInf = reactive({});

//
const getUser = computed(() => {
  return userStore.getUserinfo;
});

// watch(getUser, (n) => {
//   console.log(n);
// });

// watchEffect(() => {
//   const d = onSnapshot(collection(db, "users"), (snapshot) => {
//     const data = snapshot.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     console.log({ data, snapshot, docs: snapshot.docs });
//   });
// });

// methods
function logout() {
  // console.log(auth);
  signOut(auth);
  chatStore.$reset();
  userStore.$reset();
  appStore.$reset();
  // console.log(signOut);
}

function changePage(value) {
  appStore.changePage();
  if (value == "f") {
    router.push({ path: "/friends" });
  } else {
    router.push({ path: "/" });
  }
}
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.wrapper">
      <div :class="$style.avatar">
        <img
          v-if="getUser.photo"
          :class="$style.img"
          :src="getUser.photo ? getUser.photo : userImg"
          alt=""
        />
        <div
          v-else
          :class="$style.avtText"
          :style="{
            background: getUser.theme?.backgroundColor,
            color: getUser.theme?.textColor,
          }"
        >
          <span>{{ createAvtString(getUser.username).name }} </span>
        </div>
        <span :class="$style.name">{{
          getUser.username ? getUser.username : "username"
        }}</span>
        <!-- <v-icon name="bi-chevron-down" :class="$style.icon" /> -->
      </div>
      <div>
        <!-- <button
          :class="[$style.btn, { [$style.btnActive]: !appStore.getPageFriend }]"
          @click="changePage"
        >
          <v-icon name="io-chatbubble-ellipses-outline" :class="$style.icon" />
          <span>Tin nhắn</span>
          <span :class="$style.noti">6</span>
        </button>
        <button
          :class="[$style.btn, { [$style.btnActive]: appStore.getPageFriend }]"
          @click="changePage('f')"
        >
          <v-icon name="la-user-friends-solid" :class="$style.icon" />
          <span>Bạn bè</span>
        </button> -->

        <router-link
          :active-class="$style.btnActive"
          :to="{ path: '/' }"
          :class="[$style.btn]"
        >
          <v-icon name="io-chatbubble-ellipses-outline" :class="$style.icon" />
          <span>Tin nhắn</span>
          <span :class="$style.noti">6</span>
        </router-link>

        <router-link
          :to="{ path: '/friends' }"
          :class="[$style.btn]"
          :active-class="$style.btnActive"
        >
          <v-icon name="la-user-friends-solid" :class="$style.icon" />
          <span>Bạn bè</span>
        </router-link>

        <button :class="[$style.btn, { [$style.btnActive]: false }]">
          <v-icon name="io-notifications-outline" :class="$style.icon" />
          <span>Thông báo</span>
        </button>
      </div>
      <div>
        <button :class="$style.btn">
          <v-icon name="io-settings-sharp" :class="$style.icon" />
          <span>Cài đặt</span>
        </button>
        <button :class="$style.btn" @click="logout">
          <v-icon name="hi-logout" :class="$style.icon" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  </header>
</template>
<style lang="scss" module>
.header {
  width: 100%;
  height: 50px;
  background: var(--background);
  border-bottom: 1px solid #ddd;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: inherit;
  }
  .avatar {
    display: flex;
    align-items: centers;
    height: 30px;
    // width: 30px;
    .img {
      width: 30px;
      height: 30px;
      border-radius: 50em;
    }

    .avtText {
      display: flex;
      background: #ddd;
      border-radius: 50em;
      width: 30px;
      height: 30px;

      span {
        line-height: 30px;
        font-size: 1rem;
        width: 30px;
        text-align: center;
        height: 30px;
      }
    }

    .name {
      padding-left: 10px;
      line-height: 30px;
      font-weight: 500;
    }

    .icon {
      height: 100%;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    height: 30px;
    margin: 0 4px;
    border: 1px solid transparent;
    background: transparent;
    border-radius: 6px;
    text-decoration: none;
    color: #333;
    padding: 0 6px;
    .icon {
      margin-right: 4px;
      color: #777;
    }

    span {
      line-height: 16px;
    }

    .noti {
      display: inline-block;
      background: #ec532a;
      // width: 16px;
      height: 16px;
      color: #fff;
      border-radius: 50em;
      margin-left: 4px;
      padding: 0 5px;
    }

    &:hover {
      border: 1px solid #ddd;
      background: #fff;
    }
  }
  .router-link-active,
  .btnActive {
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
  }
}
</style>
