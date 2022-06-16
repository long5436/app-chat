<script setup>
import { ref } from "vue";
import { formatDate } from "@/plugins/formatDate";
import createAvtString from "@/plugins/createAvtString";
import { useAppStore } from "@/stores/app";
import { computed, reactive, watch } from "vue";
import ViewBox from "./ViewBox.vue";

//

const props = defineProps(["huong", "data"]);
const appStore = useAppStore();
const imgList = reactive({
  data: [],
});

const url = ref("");

const currentTheme = computed(() => appStore.getTheme);
const propData = computed(() => {
  return props.data;
});

// methods
function showPreview(imgUrl) {
  url.value = imgUrl;
  // console.log(url.value);
}
</script>

<template>
  <div
    :class="[
      $style.chatImage,
      { [$style.right]: huong === 'right' },
      { [$style.left]: huong === 'left' },
    ]"
  >
    <div :class="$style.avt" v-if="huong === 'left'">
      <img v-if="data?.photoURL" :src="data?.photoURL" alt="" />
      <div
        v-else
        :class="$style.avtName"
        :style="{
          background: data.theme.backgroundColor,
          color: data.theme.textColor,
        }"
      >
        <span> {{ createAvtString(data?.displayName).name }} </span>
      </div>
    </div>
    <div :class="$style.item">
      <img
        :class="$style.img"
        :src="data?.imageURL"
        alt=""
        @click="showPreview(data.imageURL)"
      />
      <p :class="$style.time">
        <v-icon name="bi-check-all" fill="green" />
        <span>{{ formatDate(data.createdAt?.seconds) }} </span>
      </p>
    </div>
  </div>
  <!-- { [$style.enable]: url } -->
  <div :class="[$style.preview]">
    <ViewBox :src="url" />
  </div>
</template>

<style lang="scss" module>
.chatImage {
  display: flex;
  padding: 12px 0;

  .avt {
    img {
      width: 30px;
      height: 30px;
      border-radius: 50em;
    }

    .avtName {
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50em;

      span {
        margin: auto;
        font-size: 1.2rem;
      }
    }
  }

  .item {
    width: 30%;
    cursor: pointer;
    .img {
      width: 100%;
      height: auto;
      border-radius: 16px;
      border: 1px solid #eee;
    }

    .time {
      text-align: right;
      span {
        font-size: 0.8rem;
      }
    }
  }
}

.chatImage.right {
  justify-content: flex-end;
  margin-right: 10px;
}

.chatImage.left {
  .item {
    margin-left: 10px;
  }

  .time {
    text-align: left;
  }
}

.preview.enable {
  position: fixed;
  inset: 0;
}
</style>
