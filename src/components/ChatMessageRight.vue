<script setup>
import avt from "@/assets/img/av2.jpg";
const props = defineProps(["data"]);
</script>

<template>
  <div :class="$style.msgR">
    <div :class="$style.body">
      <div :class="$style.content">
        <div :class="$style.text">
          <p>{{ data.content }}</p>
        </div>
        <p :class="$style.time">
          <v-icon name="bi-check-all" fill="green" />
          <span> 12 tháng 3, 2022 </span>
        </p>
      </div>
      <div :class="$style.avt">
        <img :src="avt" alt="" />
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
    }
    .content {
      margin-right: 10px;

      .text {
        background: #ddd;
        padding: 8px;
        border-radius: 16px 16px 4px 16px;

        p {
          word-break: break-all;
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
