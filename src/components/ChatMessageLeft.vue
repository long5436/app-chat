<script setup>
import avt from "@/assets/img/av2.jpg";
//
const props = defineProps(["data"]);
</script>

<template>
  <div :class="$style.msg">
    <div :class="$style.avt">
      <img :src="avt" alt="" />
    </div>
    <div :class="$style.content">
      <div :class="$style.text">
        <p>{{ data.content }}</p>
      </div>
      <p :class="$style.time">
        <v-icon name="bi-check-all" fill="green" />
        <span> 12 tháng 3, 2022 </span>
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
