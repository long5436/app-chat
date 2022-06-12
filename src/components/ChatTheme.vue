<script setup>
import { useAppStore } from "@/stores/app";
import { computed } from "vue";

//
const store = useAppStore();
const themes = computed(() => store.getThemes);
</script>

<template>
  <span :class="$style.overlay"></span>
  <div :class="$style.theme">
    <div :class="$style.head">
      <h4 :class="$style.text">Chủ đề</h4>
      <div :class="$style.btn">
        <v-icon name="pr-times" :class="$style.icon" />
      </div>
    </div>
    <div :class="$style.list">
      <div :class="$style.item" v-for="i in themes" :key="i.index">
        <div :class="$style.avt"></div>
        <span>{{ i.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.theme {
  background: #fff;
  width: 400px;
  height: 400px;
  z-index: 2;
  position: fixed;
  /* margin: auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  text-align: center;

  .head {
    position: relative;
    .text {
      margin: 0;
    }

    .btn {
      position: absolute;
      top: 0;
      right: 10px;
      background: #eee;
      border-radius: 50em;
      cursor: pointer;

      .icon {
        font-size: 24px;
        margin: 4px;
        color: #888;
      }

      &:hover {
        background: #ddd;
      }
    }
  }

  .list {
    overflow-y: auto;
    text-align: left;
    // overflow: ;
    margin: 24px 0;
    height: 85%;

    .item {
      display: flex;
      align-items: center;
      margin: 12px 0;

      .avt {
        background: #ddd;
        width: 40px;
        height: 40px;
        border-radius: 50em;
        margin-right: 16px;
      }
    }
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style>
