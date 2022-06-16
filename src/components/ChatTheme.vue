<script setup>
import { watch, reactive, ref, computed } from "vue";
import { setTheme, sendMessage } from "@/firebase/services";
import Theme1 from "@/assets/img/theme1.jpg";
import Theme2 from "@/assets/img/theme2.jpg";
import Theme3 from "@/assets/img/theme3.jpg";
import Theme4 from "@/assets/img/theme4.jpg";
import DefaultImg from "@/assets/img/default.png";
import { useAppStore } from "@/stores/app";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";

//
const appStore = useAppStore();
const chatStore = useChatStore();
const userStore = useUserStore();
const chatId = computed(() => chatStore.getCurrentChatId);
const userInfo = computed(() => userStore.getUserinfo);
const themes = reactive({
  data: [
    {
      id: 0,
      name: "Mặc định",
      right: {
        bg: "rgb(236,83,42)",
        color: "#fff",
      },
      left: {
        bg: "#E4E6EB",
        color: "#000",
      },
      background: "",
    },
    {
      id: 1,
      name: "Cầu vòng",
      right: {
        bg: `linear-gradient(
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        ) fixed`,
        color: `#fff`,
      },
      left: {
        bg: "#E4E6EB",
        color: "#000",
      },
      background: "",
    },
    {
      id: 2,
      name: "Tình yêu",
      right: {
        bg: "#ff228c",
        color: "#fff",
      },
      left: {
        bg: "#FFF5F5",
        color: "#000",
      },
      background: "",
      preview: true,
    },
    {
      id: 3,
      name: "Bầu trời",
      right: {
        bg: `linear-gradient(
          to bottom,
         #bc58fb, #c399ff, #8bc4ff
        ) fixed`,
        color: "#fff",
      },
      left: {
        bg: "#FFF5F5",
        color: "#000",
      },
      background: "",
      preview: true,
    },
    {
      id: 4,
      name: "Thư giãn",
      right: {
        bg: `linear-gradient(
          to bottom,
         #189fff, #ff5907, #01a4ff, #c0c60b, #8a39ef
        ) fixed`,
        color: "#fff",
      },
      left: {
        bg: "#FFF5F5",
        color: "#000",
      },
      background: "",
      preview: true,
    },
  ],
});

const avts = reactive({ data: [DefaultImg, Theme1, Theme2, Theme3, Theme4] });
const themeSelected = ref();
const emit = defineEmits(["close"]);
const currentTheme = reactive({ data: {} });

//

function setChatTheme() {
  setTheme(chatId.value, themes.data[themeSelected.value]);
  currentTheme.data = themes.data[themeSelected.value];

  sendMessage("messages", chatId.value, {
    displayName: userInfo.value.displayName,
    uid: userInfo.value.uid,
    createdAt: new Date(),
    type: "theme",
    content: `${userInfo.value.displayName} đã thay đổi chủ đề thành ${
      themes.data[themeSelected.value].name
    }`,
    themeName: themes.data[themeSelected.value].name,
  });
}

function selectTheme(index) {
  if (index === themeSelected.value) {
    themeSelected.value = undefined;
  } else {
    themeSelected.value = index;
  }

  const currentThemFromStore = appStore.theme;
  if (!currentThemFromStore?.preview) {
    currentTheme.data = currentThemFromStore;
  }

  appStore.setTheme(themes.data[themeSelected.value]);
}

function closeWindow() {
  emit("close");
  appStore.setTheme(currentTheme.data);
}
</script>

<template>
  <span :class="$style.overlay"></span>
  <div :class="$style.theme">
    <div :class="$style.head">
      <h4 :class="$style.text">Chủ đề</h4>
      <div :class="$style.btn" @click="closeWindow">
        <v-icon name="pr-times" :class="$style.icon" />
      </div>
    </div>
    <div :class="$style.list">
      <div
        v-for="(i, index) in themes.data"
        :class="[
          $style.item,
          { [$style.itemSelected]: themeSelected === index },
        ]"
        @click="selectTheme(index)"
        :key="index"
      >
        <div :class="$style.avt">
          <img :class="$style.img" :src="avts.data[index]" alt="" />
        </div>
        <span>{{ i.name }}</span>
      </div>
    </div>
    <div :class="$style.actions">
      <button :class="$style.btn" @click="closeWindow">Huỷ</button>
      <button
        :class="$style.btn"
        :disabled="themeSelected === undefined"
        @click="setChatTheme"
      >
        Lưu
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.theme {
  background: rgb(255, 255, 255);
  backdrop-filter: blur(25px);
  width: 400px;
  // height: 400px;
  z-index: 2;
  position: fixed;
  /* margin: auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, 25%);
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  font-size: 1.1rem;

  .head {
    position: relative;
    .text {
      font-weight: 500;
      margin: 0;
      line-height: 2.6rem;
    }

    .btn {
      position: absolute;
      top: 0;
      right: 10px;
      background: #eee;
      border-radius: 50em;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      .icon {
        font-size: 24px;
        margin: auto;
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
      padding: 6px;
      transition: 0.05s;
      cursor: pointer;

      .avt {
        background: #ddd;
        width: 40px;
        height: 40px;
        border-radius: 50em;
        margin-right: 16px;

        .img {
          width: 100%;
          height: 100%;
          border-radius: 50em;
        }
      }
    }

    .itemSelected,
    .item:hover {
      background: rgb(223 223 223 / 60%);
      border-radius: 6px;
    }
  }

  .actions {
    display: flex;
    .btn {
      flex: 1;
      border: 0;
      background: rgb(223 223 223 / 60%);
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: Inter, sans-serif;
      color: #444;
      padding: 8px 0;

      &:last-child {
        margin-left: 4px;
      }
      &:first-child {
        margin-right: 4px;
      }

      &:hover {
        background: rgb(223 223 223 / 70%);
      }
    }

    .btn[disabled] {
      background: rgb(223 223 223 / 80%);
      color: #ccc;
      cursor: default;
    }
  }
}

.overlay {
  position: fixed;
  inset: 0;
  transform: translate(-5000px, -1000px);
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  width: 10000px;
  height: 10000px;
}
</style>
