import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
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
  IoArrowDownOutline
);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
