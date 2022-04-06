<template>
  <div class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="head-title">
            <h1>Filter Products By</h1>
          </div>

          <div class="categories mt-4">
            <h5 class="pb-2 text-black"><strong>Categories</strong></h5>
            <ul class="d-flex flex-column gap-2">
              <div class="input-search">
                <input
                  type="text"
                  :placeholder="$t('searchinputHeader')"
                  @keyup="search(inputSearch)"
                  v-model="inputSearch"
                />
              </div>
              <li
                v-for="filter in filters"
                :key="filter"
                class="d-flex flex-row align-items-center"
              >
                <div class="form-check">
                  <input
                    :id="filter"
                    class="form-check-input"
                    checked
                    type="checkbox"
                    value=""
                  />
                  <label
                    :for="filter"
                    @click="() => filterPosts(filter)"
                    class="form-check-label"
                  >
                    {{ filter }}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-9">
          <!-- <div v-for="post in data" :key="post.id">
            {{ post.title }}
          </div> -->

          <div class="row">
            <div
              v-for="prod in data"
              :key="prod.id"
              class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content"
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

                <!-- end over-lay -->
              </div>
            </div>

            <!-- paginations -->

            <!-- end-Pagination -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { mapState } from "vuex";
const filter = ["all", "men", "women"];
export default {
  name: "dasdsa-adasd",
  setup() {
    const data = ref([]);
    const filters = ref(filter);
    const rows = ref([]);
    const inputSearch = ref("");
    return { data, filters, rows, inputSearch };
  },
  mounted() {
    axios.get("products").then((res) => {
      this.$store.commit("getData", res.data);
      this.data = res.data;
      this.rows = this.data.length;
    });
  },
  computed: {
    ...mapState(["categoires"]),
  },
  methods: {
    filterPosts(prod) {
      console.log(prod);
      this.resetPosts();
      if (prod !== "all") {
        this.data = this.data.filter((post) => {
          return post.category === prod;
        });
      }
    },
    resetPosts() {
      this.data = this.categoires;
    },
    search(ser) {
      this.resetPosts();
      this.data = this.data.filter((post) => {
        return post.title.toLowerCase().includes(ser.toLowerCase());
      });
    },
  },
};
</script>

<style>
.head-title {
  background: #f7f7f7;
  padding: 15px;
  max-width: 100%;
}
.head-title h1 {
  font-size: 16px;
}
.categories {
  padding: 20px;
  border: 1px solid #eeeeee;
}
.input-search input {
  padding: 7px 10px;
  border: 1px solid #eeeeee !important;
  width: 100%;
}
.card {
  min-height: 400px !important;
  max-height: 400px !important;
  margin: 10px 0;
}
</style>
