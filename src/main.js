import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdRemoveredeye,
  FaRegularEyeSlash,
  FaFacebook,
  FcGoogle,
} from "oh-vue-icons/icons";

addIcons(MdRemoveredeye, FaRegularEyeSlash, FaFacebook, FcGoogle);

const app = createApp(App);

app.use(createPinia());
app.use(PerfectScrollbar);
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");
