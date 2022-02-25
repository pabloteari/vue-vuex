import { createRouter, createWebHistory } from "vue-router";
import Leading from "../pages/Leading.vue";
import Tab1 from "../pages/Tab1.vue";
import Tab2 from "../pages/Tab2.vue";
import Tab3 from "../pages/Tab3.vue";
import Tab4 from "../pages/Tab4.vue";

const routes = [
  {
    path: "/",
    name: "leading-page",
    component: Leading,
  },
  {
    path: "/tab1",
    name: "tab1-1",
    component: Tab1,
  },
  {
    path: "/tab2",
    name: "tab-2",
    component: Tab2,
  },
  {
    path: "/tab3",
    name: "tab-3",
    component: Tab3,
  },
  {
    path: "/tab4",
    name: "tab-4",
    component: Tab4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
