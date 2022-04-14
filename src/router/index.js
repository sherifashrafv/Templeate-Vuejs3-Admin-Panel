import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about from "../views/AboutView.vue";
import ForAll from "../components/Products/Men.vue";
import Women from "../components/Products/Women.vue";
import ProdId from "../components/Products/Single.vue";
import Register from "../components/Register/Register.vue";
import Login from "../components/Login/login.vue";
import Setting from "../components/SideUsersTools/sidebar.vue";
import ProfileSettings from "../components/profileDetails.vue/profile.vue";
import Categeories from "../components/Categories/Categeories.vue";
import HotOffers from "../components/HotOffers/HotOffers.vue";
import Edit from "../components/EditInformation/Edit.vue";
import DashBoard from "../components/Dashboard/DashBoard.vue";
import MyProducts from "../components/ProdcutsDashBoard/MyProducts.vue";
// import Test from "../components/test/test.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        name: "ForAll",
        path: "",
        component: ForAll,
      },
      {
        name: "women",
        path: "women",
        component: Women,
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
  {
    path: "/Settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Setting,
    children: [
      {
        name: "profile",
        path: "/Settings/",
        component: ProfileSettings,
      },
      {
        name: "Edit",
        path: "/Settings/Edit",
        component: Edit,
      },
      {
        name: "Dashboard",
        path: "/Settings/DashBoard",
        component: DashBoard,
      },
      {
        name: "MyProducts",
        path: "/Settings/Products",
        component: MyProducts,
      },
    ],
    meta: { layout: "none" },
  },
  {
    name: "Categeories",
    path: "/Categeories",
    component: Categeories,
  },
  {
    name: "SingleProducts",
    path: "/product/:id",
    component: ProdId,
  },
  {
    name: "HotOffers",
    path: "/HotOffers",
    component: HotOffers,
  },
  {
    name: "Register",
    path: "/Register",
    component: Register,
    meta: {
      layout: "custome",
    },
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
    meta: {
      layout: "custome",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
