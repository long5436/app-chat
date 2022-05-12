<template>
  <div :class="$style.message">
     
    <div :class="$style.content">
        {{ content }}
        <p :class="$style.time">23:12, 12 tháng 4, 2022</p>
    </div>
  </div>
</template>

<script setup>
//
const props = defineProps(["content"]);
</script>

<style lang="scss" module>
.message {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 6px 0;
  .content {
    background-image: linear-gradient(to bottom, #FF2618, #FF5907 ,#FFA001, #C0C60B,  #9FC611,#02B891, #367FE5, #8A39EF);
    background-attachment: fixed;
    position: relative;
    display: inline-block;
    max-width: 400px;
    border-radius: 10px;
    padding: 12px;
    word-break: break-word;
    color: #fff;
  }

  .time {
        margin-right: 12px;
    text-align: right;
    font-weight: bold;
    opacity: 0.5;
    font-size: 0.7rem;
  }

}
</style>
