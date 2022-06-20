<script setup>
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
import { computed, watch, reactive } from "vue";
import { deleteNotification, addNotification } from "@/firebase/notification";
import { addFiend } from "@/firebase/services";
//
const userStore = useUserStore();
const appStore = useAppStore();
const listNoti = reactive({ data: [] });
const userInfo = computed(() => userStore.getUserinfo);
const uid = computed(() => userInfo.value.uid);
const emit = defineEmits(["count"]);
const notifications = computed(() => appStore.getNotifications);

watch(notifications, (n) => {
  listNoti.data = n;
});

function deleteNoti(id) {
  console.log(id);
  deleteNotification(id);
}

function acceptFriend(data) {
  console.log(data);
  const dataReMessage = {
    send: data.receive,
    receive: data.send,
    message: `${data.receive.displayName} đã chấp nhận lời mời kết bạn của bạn`,
    data: null,
    uidReceive: data.send.uid,
    type: "message",
  };
  addFiend("users", data.send, data.receive);
  addNotification(dataReMessage);
  deleteNotification(data.id);
}

watch(listNoti, (n) => {
  emit("count", n.data.length);
});
</script>

<template>
  <div :class="$style.notifi">
    <h3>
      Tất cả thông báo <span>({{ listNoti.data.length }})</span>
    </h3>
    <div :class="$style.list">
      <div
        :class="$style.item"
        v-for="(i, index) in listNoti.data"
        :key="index"
      >
        <div>
          {{ i.message }}
        </div>
        <div v-if="i.type === 'addfriend'">
          <button @click="acceptFriend(i)">Đồng ý</button>
          <button @click="deleteNoti(i.id)">Từ chối</button>
        </div>
        <div v-else>
          <button @click="deleteNoti(i.id)">Xoá</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.notifi {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.651);
  backdrop-filter: blur(10px);
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  width: 400px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.082);

  .list {
    margin-top: 20px;
    overflow-y: auto;
    height: 100%;
    max-height: 500px;

    .item {
      background: rgba(245, 245, 245, 0.651);
      border-radius: 4px;
      padding: 8px;
      cursor: pointer;
      margin: 12px 0;

      &:hover {
        background: rgba(221, 221, 221, 0.651);
      }
    }
  }
}
</style>
