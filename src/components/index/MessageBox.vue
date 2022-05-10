<template>
  <div :class="$style.message">
    <div :class="$style.input">
      <input type="text" placeholder="Nhập tin nhắn" />
      <button :class="$style.emoji">
        <IconSmile :class="$style.icon" />
      </button>
    </div>
    <button :class="$style.btn">
      <IconSend :class="$style.icon" />
    </button>
  </div>
</template>

<script setup>
import IconSend from "@/components/icons/Send.vue";
import IconSmile from "@/components/icons/Smile.vue";
</script>

<style lang="scss" module>
.message {
  //   position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  //   background: #000;
  //   border-top: 1px solid #eee;
  display: flex;
  //   padding: 6px;
  //   overflow: hidden;

  .input {
    flex: 1;
    display: flex;
    margin: 4px;
    background: #eee;
    border-radius: 20px;
    align-items: center;
    input {
      flex: 1;
      font-size: 1.1rem;
      outline: 0;
      border: 0;
      background: transparent;
      padding-left: 16px;
    }

    .emoji {
      border: 0;
      background: transparent;
      padding: 0 12px;
      color: #888;
      transform: translateY(1px);
    }
  }
  .btn {
    // width: 20;
    width: 42px;
    border: 0;
    background: #ffd2da;
    border-radius: 50%;
    margin: 4px;
    .icon {
      width: 20px;
      height: 20px;
      fill: #fff;
      //   transform: rotate(45deg);
    }
  }
}
</style>