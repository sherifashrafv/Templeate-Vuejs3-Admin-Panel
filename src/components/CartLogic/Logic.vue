<template>
  <li class="basket-cart">
    <button
      type="button"
      class="btn btn-primary position-relative"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalLive"
    >
      <img src="../../../public/Images/Header/shopping-bag.png" alt="" />
      <span class="basket-cart-num">
        {{ basketCart.length }}
      </span>
    </button>

    <div
      class="modal fade"
      id="exampleModalLive"
      tabindex="-1"
      aria-labelledby="exampleModalLiveLabel"
      style="display: none"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">
              Shopping-Cart
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <!-- EMPTY-CART -->
          <div v-if="basketCart.length === 0">
            <div
              class="cart-empty d-flex flex-column align-items-center justify-content-center"
            >
              <p>Your cart is empty!</p>
            </div>
          </div>
          <!-- END-EMPTY-CART -->
          <!--  -->
          <!-- BASKET-CART-IN -->
          <div
            v-else
            v-for="(cart, index) in basketCart"
            :key="cart.id"
            class="modal-body mb-2 pb-3"
          >
            <div
              class="d-flex flex-row align-items-center gap-2 border-bottom pb-2"
            >
              <div class="cartIn-image">
                <img class="img-fluid" :src="cart.img" alt="" />
              </div>
              <div class="desc-car d-flex flex-column align-items-start">
                <h4>{{ cart.title }}</h4>
                <h4>{{ $t("currency") }} {{ cart.price }}</h4>
                <div class="quantity d-flex flex-row justify-content-between">
                  <div
                    role="button"
                    @click="aQuantity(cart.id)"
                    class="border-end"
                  >
                    +
                  </div>
                  <div>{{ cart.quantity }}</div>
                  <div
                    role="button"
                    @click="rQuantity(cart.id, index)"
                    class="border-start"
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- BASKET-CART-IN ENDDD -->

          <!-- START-Tottal-Price -->
          <span v-if="basketCart.length === 0"></span>
          <div v-else class="p-4 d-flex flex-row justify-content-between">
            <div>
              <h2>Total:</h2>
            </div>
            <div>
              <p class="text-black fw-bold fs-3 text">
                {{ $t("currency") + Number(totalCount).toLocaleString() }}
              </p>
            </div>
          </div>
          <!-- End-Tottal-Price -->

          <!-- madal-footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
          <!-- End-Footer -->
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Cart-view",

  computed: {
    ...mapState(["basketCart", "dataCart"]),

    totalCount() {
      let totalPrice = 0;
      this.basketCart.forEach((pr) => {
        totalPrice += parseInt(pr.price) * parseInt(pr.quantity);
      });
      return totalPrice;
    },
  },
  methods: {
    ...mapActions(["removeProduct", "addQuantity", "removeQuantity"]),

    searchVl() {
      localStorage.setItem("search-value", JSON.stringify(this.search));
    },

    aQuantity(idx) {
      this.addQuantity(idx);
    },
    rQuantity(idx, index) {
      this.removeQuantity({ idx, index });
    },
  },
};
</script>

<style>
/* .modal-dialog {
  position: absolute;
  right: 0;
  width: 100%;
  top: 0;
  margin: 0;
  height: 100vh;
}
.modal-content {
  height: 100vh;
  justify-content: space-between;
}
.modal.fade {
  transition: 0.3s ease-in-out;
  transform: translateX(20%) !important;
}
.modal.fade.show {
  transform: translateX(0%) !important;
}

.modal-shoopping {
  background: none;
  border: none;
  position: relative;
}
.modal-backdrop {
  z-index: 1040 !important;
}
.modal-content {
  margin: 2px auto;
  z-index: 1100 !important;
  overflow-y: scroll;
}
.modal-backdrop {
  display: none;
}
.modal-body {
  position: relative;
  flex: 0 1 auto !important;
  padding: 1rem;
}
.modal-footer {
  border: none !important;
}
button.btn.btn-primary.position-relative {
  border: none !important;
  background: none;
}
li.basket-cart button img {
  max-width: 28px;
} */
</style>
