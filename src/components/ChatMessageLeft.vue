<script setup>
import avt from "@/assets/img/av2.jpg";
import createAvtString from "@/plugins/createAvtString";
import formatDate from "@/plugins/formatDate";
//
const props = defineProps(["data"]);
</script>

<template>
  <div :class="$style.msg">
    <div :class="$style.avt">
      <img v-if="data?.photoURL" :src="data?.photoURL" alt="" />
      <div
        v-else
        :class="$style.avtName"
        :style="{ background: createAvtString(data?.displayName).color }"
      >
        <span>
          {{ createAvtString(data?.displayName).name }}
        </span>
      </div>
    </div>
    <div :class="$style.content">
      <div :class="$style.text">
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
      padding: 8px;
      border-radius: 4px 16px 16px 16px;
      p {
        word-break: break-all;
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
