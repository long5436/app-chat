<script setup>
import avt from "@/assets/img/av2.jpg";
import createAvtString from "@/plugins/createAvtString";
import { formatDate } from "@/plugins/formatDate";
import { useAppStore } from "@/stores/app";
import { computed } from "vue";
//
// const userStore = useUserStore();
const props = defineProps(["data"]);
const appStore = useAppStore();

const currentTheme = computed(() => appStore.getTheme);
</script>

<template>
  <div :class="$style.msg">
    <div :class="$style.avt">
      <img v-if="data?.photoURL" :src="data?.photoURL" alt="" />
      <div
        v-else
        :class="$style.avtName"
        :style="{
          background: data.theme.backgroundColor,
          color: data.theme.textColor,
        }"
      >
        <span>
          {{ createAvtString(data?.displayName).name }}
        </span>
      </div>
    </div>
    <div :class="$style.content">
      <div
        :class="$style.text"
        :style="{
          background: currentTheme.left.bg,
          color: currentTheme.left.color,
        }"
      >
        <p>{{ data.content }}</p>
      </div>
      <p :class="$style.time">
        <v-icon name="bi-check-all" fill="green" />
        <span> {{ formatDate(data.createdAt?.seconds) }} </span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" module>
.msg {
  display: flex;
  max-width: 70%;
  padding: 12px 0;
  position: relative;
  .avt {
    img {
      width: 30px;
      height: 30px;
      border-radius: 50em;
    }

    .avtName {
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50em;

      span {
        margin: auto;
        font-size: 1.2rem;
      }
    }
  }
  .content {
    margin-left: 10px;

    .text {
      background: #ddd;
      padding: 10px;
      border-radius: 4px 16px 16px 16px;
      display: inline-block;

      p {
        word-break: break-all;
        font-size: 1.1rem;
      }
    }
    .time {
      span {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
