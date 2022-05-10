<template>
  <div :class="$style.header">
    <div :class="$style.headerLeft">
      <div :class="$style.info">
        <div :class="$style.avatar">
          <img src="../../assets/img/avata.png" alt="" />
        </div>
        <div :class="$style.content">
          <h2>Design Teams</h2>
          <p :class="$style.status">Đang hoạt động</p>
        </div>
      </div>
    </div>
  </div>
  <div :class="$style.main">
    <MessageBox />
  </div>
</template>

<script setup>
import MessageBox from "@/components/index/MessageBox.vue";
</script>

<style lang="scss" module>
.header {
  padding: 18px;
  box-shadow: 20px 2px 20px 2px rgba(136, 136, 136, 0.212);
  .headerLeft {
    .info {
      display: flex;
      align-items: center;
      .avatar {
        width: 54px;
        height: 54px;
        img {
          height: inherit;
          width: inherit;
          border-radius: 50%;
        }
      }

      .content {
        padding-left: 20px;

        .status {
          color: green;
        }
      }
    }
  }
}

.main {
  overflow: hidden;
  padding: 18px;
  width: 100%;
  // height: 40px;
  // background: #000;
}
</style>