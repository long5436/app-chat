<script setup>
import ThemeIcon from "@/components/icons/theme.vue";
import ChatTheme from "./ChatTheme.vue";

import { ref } from "vue";

//
const menu = ref(false);

// methods
function toggleMenu() {
  menu.value = !menu.value;
}
</script>

<template>
  <div :class="$style.menu">
    <div>
      <button :class="$style.btn">
        <v-icon name="fa-video" :class="$style.icon" />
      </button>
      <button :class="$style.btn">
        <v-icon name="ri-search-2-line" :class="$style.icon" />
      </button>
      <button
        :class="[$style.btn, { [$style.btnActive]: menu }]"
        @click="toggleMenu"
      >
        <v-icon name="md-morehoriz" :class="$style.icon" />
      </button>
    </div>
    <div :class="$style.pop" v-if="menu">
      <div :class="$style.item">
        <div :class="$style.boxIcon">
          <ThemeIcon :class="$style.icon" />
        </div>
        <span>Thay đổi chủ đề</span>
      </div>
      <div :class="$style.item">
        <span>Thay đổi chủ đề</span>
      </div>
      <div :class="$style.item">
        <span>Thay đổi chủ đề</span>
      </div>
      <div :class="$style.item">
        <span>Thay đổi chủ đề</span>
      </div>
    </div>
  </div>

  <!-- <ChatTheme /> -->
</template>
<style lang="scss" module>
.menu {
  position: relative;

  .pop {
    position: absolute;
    z-index: 1;
    top: 52px;
    right: 0;
    background: rgba(255, 255, 255, 0.658);
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 6px;
    width: 200px;
    backdrop-filter: blur(25px);
    box-shadow: 0px 1px 10px 2px #e5e5e5;

    .item {
      display: flex;
      padding: 6px 6px;

      .boxIcon {
        margin-right: 10px;
        width: 20px;
        .icon {
          width: 20px;
          height: 20px;
          color: #777;
        }
      }

      &:hover {
        cursor: pointer;
        background: rgb(223 223 223 / 60%);
        border-radius: 4px;
      }
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    height: 34px;
    border: 0;
    border-radius: 6px;
    background: transparent;

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

  .btn:hover,
  .btnActive {
    background: #f0f0f0;
  }
}
</style>
