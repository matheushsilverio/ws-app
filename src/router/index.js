import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/valorant/next-games"
  },
  {
    path: "/valorant/next-games",
    name: "ValorantNextGames",
    component: () => import("@/views/valorant/NextGames")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
