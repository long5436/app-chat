<script setup>
import av2 from "@/assets/img/user.webp";
import { watchEffect, reactive, computed } from "vue";
import { useUserStore } from "../stores/user";
import { useAppStore } from "@/stores/app";
import { addDocument, getUser } from "@/firebase/services";
import createAvtString from "@/plugins/createAvtString";

//
const appStore = useAppStore();
const userStore = useUserStore();
const userInfo = computed(() => userStore.getUserinfo);
const friends = computed(() => appStore.getListFriend);

async function handleClickFriend(user) {
  const chat = await getUser("chats", userInfo.value.uid, user.uid);
  // console.log(user);
  // console.log(chat);
  if (!chat.uid) {
    addDocument("chats", {
      id: userInfo.value.uid + user.uid,
      name: "",
      members: [userInfo.value.uid, user.uid],
    });
  }
}

//
</script>

<template>
  <div :class="$style.action">
    <button :class="[$style.btn, $style.btnActive]">
      <span> Tất cả </span>
    </button>
  </div>
  <div :class="$style.listFirend">
    <div
      v-for="i in friends"
      :key="i.index"
      :class="[$style.item, { [$style.itemActive]: i === 2 }]"
      @click="handleClickFriend(i)"
    >
      <div :class="$style.avt">
        <img
          v-if="i.photoURL"
          :src="i.photoURL || av2"
          alt=""
          :class="$style.avtImg"
        />
        <div
          v-else
          :class="$style.avtText"
          :style="{ background: createAvtString(i.displayName).color }"
        >
          <span>{{ createAvtString(i.displayName).name }} </span>
        </div>
      </div>
      <div :class="$style.content">
        <h3>{{ i.displayName }}</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.action {
  display: flex;
  padding: 0 20px;
  .btn {
    flex: 1;
    display: flex;
    text-align: left;
    padding-left: 0;
    height: 30px;
    align-items: center;
    border: 0;
    background: none;
    border-bottom: 2px solid rgba(85, 85, 85, 0.13);

    span {
      line-height: 30px;
    }
    .noti {
      background: #ec532a;
      height: 16px;
      line-height: 16px;
      padding: 0 2px;
      border-radius: 50em;
      color: #fff;
      margin-left: 4px;
    }

    &:hover {
      border-bottom: 2px solid #ec532a;
    }
  }

  .btnActive {
    border-bottom: 2px solid #ec532a;
  }
}

.listFirend {
  overflow: auto;
  .item {
    display: flex;
    border-bottom: 1px solid #ddd;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    cursor: pointer;

    .avt {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      .avtImg {
        border-radius: 50em;
        width: inherit;
        height: inherit;
      }
      .avtText {
        display: inline-flex;
        // justify-content: ce;
        background: #ddd;
        border-radius: 50em;
        width: inherit;
        height: inherit;

        span {
          margin: auto;
          font-size: 1.3rem;
        }
      }
    }

    .content {
      .message {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: #7e7e7e;
      }
    }

    .info {
      padding-left: 10px;
      text-align: right;
      color: #7e7e7e;
      .noti {
        display: inline-flex;
        align-items: center;
        line-height: 16rem;
        background: #ec532a;
        padding: 0 2px;
        border-radius: 50em;
        color: #fff;
        height: 16px;
        font-size: 0.7rem;
      }
    }
  }
  .item:hover,
  .itemActive {
    position: relative;
    background: #fff;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: #ec532a;
    }
  }
}
</style>
