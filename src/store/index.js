import { createStore } from "vuex";

export default createStore({
  state: {
    mens: [],
    colection: [],
    womens: [],
    basketCart: [],
    testimonies: [],
  },
  getters: {},
  mutations: {
    getMenProduct(state, payload) {
      state.mens = payload;
    },
    getCollection(state, payload) {
      state.colection = payload;
    },
    getTestimonies(state, payload) {
      state.testimonies = payload;
    },
    basketCart: (state, product) => {
      const qP = state.basketCart.find((pro) => pro.id === product.id);
      // qP that Mean Quantity for each Product
      if (!qP) {
        state.basketCart.push(product);
        localStorage.setItem(
          "basketCartData",
          JSON.stringify(state.basketCart)
        );
      } else {
        qP.quantity++;
        localStorage.setItem(
          "basketCartData",
          JSON.stringify(state.basketCart)
        );
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
    async addToCart({ commit }, payload) {
      localStorage.setItem("basketCart", JSON.stringify(payload));
      await commit("basketCart", payload);
    },
  },
  modules: {},
});
