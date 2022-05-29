<script setup>
import av2 from "@/assets/img/av2.jpg";
import { watchEffect, reactive } from "vue";
import {
  db,
  onSnapshot,
  getDocs,
  collection,
  query,
  where,
} from "@/firebase/config";
import { useUserStore } from "../stores/user";
//
const data = reactive({ users: [] });
const userStore = useUserStore();

watchEffect(async () => {
  const collectionRef = collection(db, "users");
  const uid = userStore.getUserinfo.uid;
  //   if (uid) {
  //   }
  const q = query(collectionRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
});
</script>

<template>
  <div :class="$style.action">
    <button :class="[$style.btn, $style.btnActive]">
      <span> Tất cả </span>
    </button>
  </div>
  <div :class="$style.listFirend">
    <div
      v-for="i in 20"
      :key="i.index"
      :class="[$style.item, { [$style.itemActive]: i === 2 }]"
    >
      <div :class="$style.avt">
        <img :src="av2" alt="" :class="$style.avtImg" />
      </div>
      <div :class="$style.content">
        <h3>Joana Martina</h3>
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
