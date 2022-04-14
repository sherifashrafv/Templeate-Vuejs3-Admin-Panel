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
        document.body.style.overflow = "";
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
      router.push({ path: payload });
    },
    dataCart: (state) => {
      if (localStorage.getItem("basketCart")) {
        state.basketCart = JSON.parse(localStorage.getItem("basketCart"));
      }
    },
    removeQuantity(state, idx) {
      const qP = state.basketCart.find((pro) => pro.id === idx.idx);
      if (qP.quantity > 1 && qP) {
        qP.quantity--;
        localStorage.setItem("basketCart", JSON.stringify(state.basketCart));
      } else if (qP.quantity <= 1 && qP) {
        state.basketCart.splice(idx.index, 1);
        localStorage.setItem("basketCart", JSON.stringify(state.basketCart));
      }
    },
    addQuantity(state, idx) {
      const qP = state.basketCart.find((pro) => pro.id === idx);
      if (qP) {
        qP.quantity++;
        localStorage.setItem("basketCart", JSON.stringify(state.basketCart));
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
    async redirTo({ commit }, payload) {
      await commit("redrectTo", payload.val);
    },
    setSpin({ commit }, payload) {
      commit("SET_SPINNER", payload.val);
    },
    addQuantity: async ({ commit }, idx) => {
      await commit("addQuantity", idx);
    },
    removeQuantity: async ({ commit }, idx) => {
      await commit("removeQuantity", idx);
    },
  },
  modules: {},
});
