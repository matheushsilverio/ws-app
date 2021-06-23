import Vue from "vue";
const io = require("socket.io-client");
import VueSocketIO from "vue-socket.io";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: io("http://localhost:3000", {
      withCredentials: true
    })
  })
);

import MainFrame from "@/components/MainFrame";
Vue.component("MainFrame", MainFrame);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
