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
</template>

<script setup>
</script>

<style lang="scss" module>
.header {
  padding: 18px;
  box-shadow: 0px 2px 20px 2px rgba(136, 136, 136, 0.212);
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
</style>