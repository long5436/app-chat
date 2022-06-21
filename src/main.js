import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3PhotoPreview from "vue3-photo-preview";
import "vue3-photo-preview/dist/index.css";
import { createHead } from "@vueuse/head";
import { OhVueIcon } from "./oh-vue-icon";

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head);
app.component("v-icon", OhVueIcon);
app.use(vue3PhotoPreview);
app.mount("#app");
