<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import img1 from "@/assets/img/live_chat.png";
//
const userStore = useUserStore();

const userInfo = computed(() => userStore.getUserinfo);
</script>

<template>
  <div :class="$style.wl">
    <div :class="$style.content">
      <h2>
        Chào mừng {{ userInfo.username ? userInfo.username : "bạn" }} đến với
        app chat bậc thầy
      </h2>
      <img :src="img1" alt="" />
    </div>
  </div>
</template>
<style lang="scss" module>
.wl {
  height: 100%;
  display: flex;

  .content {
    text-align: center;
    margin: auto;

    h2 {
      padding-bottom: 60px;
    }
  }
}
</style>
