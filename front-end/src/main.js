import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let data = {
  users: [{ username: "admin", password: "1234" }],
  currentDate: "",
  currentImage: "",
  currentUser: "",
  currentFavorites: [],
  savedByUsers: [
    {
      username: "admin",
      favorites: ["2022-03-15"], //store date array
    },
  ],
  isLoggedIn: false,
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
