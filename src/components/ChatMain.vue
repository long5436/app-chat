<script setup>
import avt from "@/assets/img/av2.jpg";
import InputChatForm from "./InputChat.vue";
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.wrapper">
      <div :class="$style.user">
        <div :class="$style.info">
          <img :src="avt" alt="" :class="$style.avt" />
          <h2 :class="$style.username">Joana Martina</h2>
        </div>
      </div>
      <div>
        <button :class="$style.btn">
          <v-icon name="ri-search-2-line" :class="$style.icon" />
        </button>
      </div>
    </div>
  </div>
  <div :class="$style.body">
    <div :class="$style.wrapper">
      <div :class="$style.content">
        <div :class="$style.messages">1</div>
        <div :class="$style.inputChat">
          <InputChatForm />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ddd;
  .wrapper {
    height: inherit;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user {
    .info {
      display: flex;
      align-items: center;
      .avt {
        width: 50px;
        height: 50px;
        border-radius: 50em;
        margin-right: 10px;
      }
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    height: 34px;
    border: 0;

    .icon {
      width: 30px;
      height: 26px;
      color: #777;
    }

    &:hover {
      .icon {
        color: #ec532a;
      }
    }
  }
}

.body {
  .wrapper {
    margin: 0 20px;
    position: relative;
    height: calc(100vh - 110px);
    .content {
      position: absolute;
      inset: 0;
      flex-direction: column;
      height: 100%;
      display: flex;

      .messages {
        flex: 1;
      }

      .inputChat {
        // height: 80px;
        border-top: 1px solid #ddd;
        padding: 20px 0;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
