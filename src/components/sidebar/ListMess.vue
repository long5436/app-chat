<template>
  <perfect-scrollbar :class="$style.ok">
    <div :class="$style.list">
      <div :class="$style.message" v-for="i in 5" :key="i.index">
        <div :class="$style.avatar">
          <img src="../../assets/img/avata.png" alt="" />
          <span :class="$style.active"></span>
        </div>
        <div :class="$style.content">
          <div :class="$style.info">
            <h4>Design Team</h4>
            <div :class="$style.time">
              <IconCheck :class="$style.icon" />
              12:45
            </div>
          </div>
          <p :class="$style.text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            odio repudiandae molestias maiores culpa velit aspernatur iste ut?
            Quibusdam quisquam eaque aspernatur ut laudantium saepe repellat
            illum magni non ipsum.
          </p>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script setup>
import IconCheck from "@/components/icons/Check.vue";
</script>

<style lang="scss" module>
.ok {
  height: 100%;
}
.list {
  //   background: #000;
  //   overflow: scroll;

  .message {
    display: flex;
    // margin: 30px 0;
    padding: 14px 0;
    border-bottom: 1px solid #eee;
    .avatar {
      position: relative;
      width: 50px;
      height: 50px;

      img {
        width: inherit;
        height: inherit;
        border-radius: 50%;
      }

      .active {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 16px;
        height: 16px;
        background: #31a24c;
        border: 2px solid #fff;
        border-radius: 50%;
      }
    }

    .content {
      padding-left: 12px;
      .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }

      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .time {
          display: flex;
          align-items: center;
          color: #888;
          fill: #888;
          .icon {
            margin: auto 0;
            width: 14px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
