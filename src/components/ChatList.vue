<script setup>
import av2 from "@/assets/img/av2.jpg";
import { useUserStore } from "@/stores/user";
import { useChatStore } from "@/stores/chat";
import { getChatLists, getUser } from "@/firebase/services";
import { watchSyncEffect, watchEffect, reactive, watch, computed } from "vue";

//
const userStore = useUserStore();
const chatStore = useChatStore();
const chatList = computed(() => chatStore.getChatList);

// methods

// function getUserFriends(members) {
//   console.log(members);
//   const dataUsers = {};
//   if (members) {
//     members.map(async (item) => {
//       const friendInfo = await getUser("users", item.uid);
//       const index = item.index;
//       // console.log(index);
//       dataUsers[index] = friendInfo;
//     });
//   }
//   // console.log(dataUsers);
//   return dataUsers;
// }

watch(chatList, (n) => {
  console.log(chatList.value);
});
</script>

<template>
  <div :class="$style.action">
    <button :class="[$style.btn, $style.btnActive]">
      <span> Tất cả </span>
    </button>
    <button :class="$style.btn">
      <span> Chưa đọc </span>
      <span :class="$style.noti"> 23 </span>
    </button>
  </div>
  <div :class="$style.listMessages">
    <div
      v-for="(i, index) in chatList"
      :key="index"
      :class="[$style.item, { [$style.itemActive]: i === 2 }]"
    >
      <div :class="$style.avt">
        <img :src="av2" alt="" :class="$style.avtImg" />
      </div>
      <div :class="$style.content">
        <h3>{{ i.id }}</h3>
        <p :class="$style.message">I love you so I love you so I love you so</p>
      </div>
      <div :class="$style.info">
        <span>23:33</span>
        <span :class="$style.noti"> 12 </span>
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

.listMessages {
  overflow: auto;
  .item {
    display: flex;
    border-bottom: 1px solid #ddd;
    align-items: center;
    height: 80px;
    padding: 0 20px;

    .avt {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      .avtImg {
        border-radius: 50em;
        width: inherit;
        height: inherit;
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
