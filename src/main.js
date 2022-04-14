import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/styles/main.css";
import Custome from "./layout/custome.vue";
import defaultlayout from "./layout/default.vue";
import axios from "axios";
import i18n from "./i18n";
import LayOutNone from "./layout/user-edits.vue";
import StarRating from "vue-star-rating";
import PerfectScrollbar from "vue3-perfect-scrollbar";
const VueUploadComponent = require("vue-upload-component");
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import VuePictureSwipe from "vue3-picture-swipe";
import VueSidePanel from "vue3-side-panel";
import "vue3-side-panel/dist/vue3-side-panel.css";
import vue3PhotoPreview from "vue3-photo-preview";
import "vue3-photo-preview/dist/index.css";
// languages
let lang = localStorage.getItem("lang") || "en";
axios.defaults.baseURL = " http://localhost:45430/";
axios.defaults.headers["Accept-Language"] = lang;
// document.documentElement.lang = lang;
// vue-meta-tags

createApp(App)
  .component("default-layout", defaultlayout)
  .component("custome-layout", Custome)
  .component("none-layout", LayOutNone)
  .component("pagination", require("laravel-vue-pagination"))
  .component("StarRating", StarRating)
  .component("file-upload", VueUploadComponent)
  .component("vue-picture-swipe", VuePictureSwipe)
  .use(vue3PhotoPreview)
  .use(VueSidePanel)
  .use(PerfectScrollbar)
  .use(store)
  .use(i18n)
  .use(router)
  .mount("#app");
