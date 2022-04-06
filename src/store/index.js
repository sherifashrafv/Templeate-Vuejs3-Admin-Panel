import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    mens: [],
    colection: [],
    womens: [],
    basketCart: [],
    testimonies: [],
    categoires: [],
    showSpinner: true,
  },
  getters: {
    getSpinner(state) {
      return state.showSpinner;
    },
  },
  mutations: {
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
      if (state.showSpinner) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    getMenProduct(state, payload) {
      state.mens = payload;
    },
    getCollection(state, payload) {
      state.colection = payload;
    },
    getTestimonies(state, payload) {
      state.testimonies = payload;
    },
    getData(state, payload) {
      state.categoires = payload;
    },
    basketCart: (state, product) => {
      const qP = state.basketCart.find((pro) => pro.id === product.id);
      // qP that Mean Quantity for each Product
      if (!qP) {
        state.basketCart.push(product);
        localStorage.setItem("basketCart", JSON.stringify(state.basketCart));
      } else {
        qP.quantity++;
        localStorage.setItem("basketCart", JSON.stringify(state.basketCart));
      }
    },
    redrectTo(state, payload) {
      router.push({ name: payload });
    },
    dataCart: (state) => {
      if (localStorage.getItem("dataBasketCart")) {
        state.basketCart = JSON.parse(localStorage.getItem("dataBasketCart"));
      }
    },
  },
  actions: {
    async MenProdc({ commit }, payload) {
      await commit("getMenProduct", payload);
    },
    async getCollection({ commit }, payload) {
      await commit("getCollection", payload);
    },
    async getTestimonies({ commit }, payload) {
      await commit("getTestimonies", payload);
    },
    async getData({ commit }, payload) {
      await commit("getData", payload);
    },
    async addToCart({ commit }, payload) {
      localStorage.setItem("basketCart", JSON.stringify(payload));
      await commit("basketCart", payload);
    },
    redirTo({ commit }, payload) {
      commit("redrectTo", payload.val);
    },
    setSpin({ commit }, payload) {
      commit("SET_SPINNER", payload.val);
    },
  },
  modules: {},
});
