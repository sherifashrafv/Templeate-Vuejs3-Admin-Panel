<template>
  <div>
    <BreadCrumb />
    <div class="container mt-5">
      <div class="row box-details border-bottom pb-3">
        <div class="col-lg-2">
          <ul class="all-images mt-2 d-flex flex-column gap-1">
            <li class="w-100">
              <photo-provider>
                <photo-consumer
                  v-for="(images, i) in products.allimages"
                  :intro="images"
                  :key="i"
                  :src="images"
                >
                  <img :src="images" class="view-box" />
                </photo-consumer>
              </photo-provider>
              <!-- <img class="w-100" :src="images" alt="" /> -->
            </li>
          </ul>
        </div>
        <div class="col-lg-5">
          <div class="single-image h-100">
            <img class="w-100 h-100" :src="products.img" alt="" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card-body">
            <h1 class="card-title">
              {{ products.title }}
            </h1>
            <div
              class="stars d-flex flex-row justify-content-between align-items-center"
            >
              <div class="first-star">
                <star-rating
                  :active-color="['#ffa7a7']"
                  :star-size="20"
                  :rating="3"
                  :show-rating="false"
                />
              </div>
              <div>
                <p class="m-0 p-0">Be the first to review this product</p>
              </div>
            </div>
            <div class="my-3 desciription-single-product">
              {{ products.description }}
            </div>
            <div class="proggress">
              <h4 class="text-black">
                Real Time <span>24</span> Visistor Right Now
              </h4>
              <p class="text-black">Hurry Up!left 29 in stock</p>
              <div class="progress">
                <div
                  class="progress-bar bg-dark"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="my-3 price-single-products">
              <h4 class="text-black">Price</h4>
              <h4 class="text-black fw-bold">
                {{ $t("currency") }}{{ products.price }}
              </h4>
            </div>
            <div class="sizes border-bottom pb-3">
              <h4 class="text-black">Sizes</h4>
              <ul
                id="pagination"
                class="sizes-pagination d-flex flex-row gap-2"
              >
                <li
                  v-for="(size, i) in products.sizes"
                  :key="i"
                  @click="active = `${i}`"
                  :class="[active === `${i}` ? 'tab active' : 'tab']"
                >
                  {{ size }}
                </li>
              </ul>
            </div>
            <button
              @click="addTocart(products)"
              class="btn btn-primary w-25 mt-3"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center gy-2 my-4">
        <h2 class="text-center text-black">Related products</h2>
        <p class="text-center">Browse The Collection of Top Products</p>
        <div
          v-for="prod in posts.slice(0, 4)"
          class="col-lg-3 col-md-6 col-sm-6 cards"
          :key="prod.id"
        >
          <div class="card position-relative">
            <img :src="prod.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <router-link :to="`/product/${prod.id}`">
                <h5 class="card-title">
                  {{ prod.title }}
                </h5>
              </router-link>
              <star-rating
                :active-color="['#ffa7a7']"
                :star-size="20"
                :rating="3"
                :show-rating="false"
              />
              <h6 class="mt-2">
                <del class="">{{ prod.price - 7 }}</del>
                {{ prod.price }}
              </h6>
            </div>

            <!-- overlay -->
            <ul class="over-lay list-unstyled p-0 m-0 d-flex gap-2 flex-column">
              <li @click="addTocart(prod)">
                <img
                  src="../../../public/Images/Header/shopping-bag.png"
                  alt=""
                />
              </li>
              <li>
                <img src="../../../public/Images/Header/heart.png" alt="" />
              </li>
              <li>
                <img src="../../../public/Images/Header/avatar.png" alt="" />
              </li>
              <li>
                <img src="../../../public/Images/Header/avatar.png" alt="" />
              </li>
            </ul>
            <!-- end over-lay -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../BreadCrumb/crumb.vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { mapActions } from "vuex";
export default {
  name: "ProductId",

  setup() {
    const route = useRoute();
    const id = route.params.id;
    const products = ref([]);
    const loading = ref(true);
    const active = ref("0");
    const posts = ref([]);
    const tabs = ref("0");
    return { id, route, products, loading, active, posts, tabs };
  },
  components: {
    BreadCrumb,
  },
  mounted() {
    this.getProduct();
    this.getPosts();
  },
  methods: {
    ...mapActions(["removeProduct", "addQuantity", "removeQuantity"]),
    addTocart(prod) {
      this.$store.commit("basketCart", prod);
    },
    async getProduct() {
      await axios
        .get(`men/${this.id}`)
        .then((res) => {
          this.products = res.data;
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        });
    },
    async getPosts() {
      await axios
        .get("men")
        .then((res) => {
          this.posts = res.data;
          this.$store.commit("getMenProduct", res.data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 700);
        });
    },
  },
};
</script>
<style scoped>
.nav-options {
  border: 1px solid #eeeeee;
  padding: 15px;
}
.baskota {
  position: relative;
}
.load {
  width: 100%;
  /*     margin:0px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.load div {
  width: 15px;
  height: 15px;
  background-color: black;
  margin-left: 5px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  margin-top: calc(50px - 12.5px);
  animation-name: loading;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.load-two {
  animation-delay: 0.3s;
}
.load-three {
  animation-delay: 0.8s;
}
@keyframes loading {
  to {
    opacity: 0.3;
    transform: translateY(-25px);
    -webkit-transform: translateY(-25px);
    -moz-transform: translateY(-25px);
    -ms-transform: translateY(-25px);
    -o-transform: translateY(-25px);
  }
}
.box-details {
  background: white;
  padding: 10px;
}
.stars {
  width: 403px;
}
.first-star {
  position: relative;
}
.first-star::after {
  content: "";
  position: absolute;
  right: 0;
  right: -20%;
  height: 100%;
  width: 1px;
  background: #eeeeee;
  top: 0;
}
.proggress {
  border: 1px solid #eeeeee;
  padding: 15px;
}
li.tab {
  background: #f5f5f5;
  padding: 10px;
  cursor: pointer;
}
li.tab.active {
  background: #e2e2e2;
}
.all-images {
  height: 100%;
}
button.btn.btn-primary {
  border-radius: 0 !important;
}
.all-images li {
}
.single-image {
  height: 100%;
}
.card {
  border: 1px solid #eee;
  width: 100% !important;
}
.over-lay {
  position: absolute;
  bottom: 31%;
  right: 3%;
  width: 16%;
  height: fit-content;
}

.over-lay li:not(:last-child) {
  width: 40px;
  padding: 10px;
  height: 40px;
  background: #ffffff;
  border-radius: 15px 15px 5px 5px;
  border: 1px solid #eeeeee;
}

.over-lay li:last-child {
  width: 40px;
  padding: 10px;
  height: 40px;
  background: #ffffff;
  border-radius: 5px 5px 15px 15px;
  border: 1px solid #eeeeee;
}
.over-lay li img {
  max-width: 100%;
  height: 100%;
}
.over-lay {
  transition: 0.3s ease-in-out;
  transform: scale(1, 0);
}
.card:hover .over-lay {
  transform: scale(1, 1);
}
.over-lay li:hover {
  cursor: pointer;
  box-shadow: 0px 0px 3px 0px #ddd;
}
>>> .PhotoView__PhotoBox {
  width: 100% !important;
  height: 100% !important;
}
</style>
