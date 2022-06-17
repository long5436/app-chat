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
  <div :class="$style.msgR">
    <div :class="$style.body">
      <div :class="$style.content">
        <div
          :class="$style.text"
          :style="{
            background: currentTheme?.right?.bg,
            color: currentTheme?.right?.color,
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
  </div>
</template>
<style lang="scss" module>
.msgR {
  padding: 12px 0 12px 30%;

  .body {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .avt {
      transform: translateY(-20px);
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
      margin-right: 10px;
      text-align: right;

      .text {
        // background: #ddd;
        display: inline-block;
        padding: 10px;
        border-radius: 16px 16px 4px 16px;
        background-image: linear-gradient(
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        );
        background-attachment: fixed;
        color: #fff;

        p {
          word-break: break-all;
          // font-size: 1.1rem;
        }
      }
      .time {
        text-align: right;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
