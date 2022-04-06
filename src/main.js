import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import vWow from "v-wow";
import "./assets/styles/main.css";
import Custome from "./layout/custome.vue";
import defaultlayout from "./layout/default.vue";
import axios from "axios";
import i18n from "./i18n";
import LayOutNone from "./layout/user-edits.vue";
import laravelVuePagination from "laravel-vue-pagination";
let lang = localStorage.getItem("lang") || "en";
axios.defaults.baseURL = " http://localhost:45430/";
axios.defaults.headers["Accept-Language"] = lang;
// document.documentElement.lang = lang;

createApp(App)
  .component("default-layout", defaultlayout)
  .component("custome-layout", Custome)
  .component("none-layout", LayOutNone)
  .use(store)
  .use(vWow)
  .component("pagination", laravelVuePagination)
  .use(i18n)
  .use(router)
  .mount("#app");
