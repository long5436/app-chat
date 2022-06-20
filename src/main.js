import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3PhotoPreview from "vue3-photo-preview";
import "vue3-photo-preview/dist/index.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiChevronDown,
  IoSettingsSharp,
  IoChatbubbleEllipsesOutline,
  LaUserFriendsSolid,
  RiSearch2Line,
  FaRegularSmile,
  MdRemoveredeye,
  FaRegularEyeSlash,
  FcGoogle,
  FaFacebook,
  HiLogout,
  IoSend,
  BiCheckAll,
  IoArrowDownOutline,
  CoMic,
  MdMorehoriz,
  FaVideo,
  IoNotificationsOutline,
  PrTimes,
  BiImage,
  RiSearchLine,
  BiChatText,
} from "oh-vue-icons/icons";

const app = createApp(App);
addIcons(
  BiChevronDown,
  IoSettingsSharp,
  IoChatbubbleEllipsesOutline,
  LaUserFriendsSolid,
  RiSearch2Line,
  FaRegularSmile,
  MdRemoveredeye,
  FaRegularEyeSlash,
  FcGoogle,
  FaFacebook,
  HiLogout,
  IoSend,
  BiCheckAll,
  IoArrowDownOutline,
  CoMic,
  MdMorehoriz,
  FaVideo,
  IoNotificationsOutline,
  PrTimes,
  BiImage,
  RiSearchLine,
  BiChatText
);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);
app.use(vue3PhotoPreview);
app.mount("#app");
