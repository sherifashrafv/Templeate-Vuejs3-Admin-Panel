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

axios.defaults.baseURL = "  http://localhost:45430/";

createApp(App)
  .component("default-layout", defaultlayout)
  .component("custome-layout", Custome)
  .use(store)
  .use(vWow)
  .use(router)
  .mount("#app");
