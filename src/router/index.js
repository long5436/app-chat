import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Login from "../pages/login/index.vue";
import Friends from "../pages/friends/index.vue";
import Register from "../pages/register/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/friends",
      name: "friends",
      component: Friends,
    },
    {
      path: "/t/:id",
      name: "chat",
      component: Home,
    },
  ],
});

export default router;
