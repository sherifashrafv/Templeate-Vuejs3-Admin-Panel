<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <div>
          <h3 class="text-black text-uppercase">My Products:</h3>
        </div>
        <div>
          <table class="table postition-relative m-0">
            <thead class="bg-dark text-white">
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-if="products.length > 0">
              <tr v-for="(prod, i) in products" :key="prod.id">
                <th scope="row">{{ i }}</th>
                <td scope="row">
                  <router-link class="text-black title" :to="`${prod.id}`">{{
                    prod.title
                  }}</router-link>
                </td>
                <td scope="row ">{{ $t("currency") }}{{ prod.price }}</td>
                <td scope="row">{{ prod.categories[0] }}</td>
                <td class="row" @click="deleteProd(prod)">
                  <button type="button" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <div
                class="d-flex flex-row justify-content-center w-100 h-100 align-items-center"
              >
                <div class="no-products btn btn-secondary text-center">
                  <h1 v-if="products.length <= 0">No Proudcts Addedd</h1>
                </div>
              </div>
            </tbody>
          </table>
          <div v-if="products.length >= 1" class="my-length text-center w-100">
            <div>Your Have Only {{ products.length }} Products</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import axios from "axios";
export default {
  name: "My-Products",
  setup() {
    const ourPorducts = reactive({
      id: "",
      products: [],
    });
    return { ...toRefs(ourPorducts) };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.id = JSON.parse(user).id;
      console.log(this.id);
    } else {
      this.redirTo({ val: "/" });
    }
    this.getProducts();
  },
  methods: {
    async getProducts() {
      let result = await axios.get(`usersProducts?userid=${this.id}`);
      if (result.status == 200) {
        this.products = result.data;
      }
    },
    async deleteProd(product) {
      console.log(product.id);
      // this.ourPorducts.products.filter((prod) => prod.id != product.id);
      let result = await axios
        .delete(`usersProducts/${product.id}`)
        .then((response) => {
          console.log(response);
        });
      window.location.reload();

      console.log(result);
    },
  },
};
</script>

<style scoped>
.my-length {
  background: black;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100% !important;
  left: 0;
  padding: 10px;
  color: white;
  font-size: 20px;
}
/* .p {
  height: 550px;
} */
/* table {
  height: 100%;
} */
.no-products {
  position: absolute;
  left: 50%;
  width: 400px !important;
  transform: translateX(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
}

.title:hover {
  text-decoration: underline !important;
  /* color: #bb2d3b !important; */
}
</style>
