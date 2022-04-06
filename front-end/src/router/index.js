import Vue from "vue";
import VueRouter from "vue-router";
import LoginRegisterView from "@/views/LoginRegisterView";
import BrowseView from "@/views/BrowseView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "loginAndRegister",
    component: LoginRegisterView,
  },
  {
    path: "/saved",
    name: "saved",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SavedImagesView"),
  },
  {
    path: "/browse",
    name: "browse",
    component: BrowseView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
