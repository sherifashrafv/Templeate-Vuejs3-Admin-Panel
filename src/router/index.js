import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about from "../views/AboutView.vue";
import ForAll from "../components/Products/Men.vue";
import Women from "../components/Products/Women.vue";
import ProdId from "../components/Products/Single.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        name: "ForAll",
        path: "/",
        component: ForAll,
      },
      {
        name: "women",
        path: "women",
        component: Women,
      },
      {
        name: "ProdId",
        path: "/products:id",
        component: ProdId,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about,
    // meta: { layout: "custome" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
