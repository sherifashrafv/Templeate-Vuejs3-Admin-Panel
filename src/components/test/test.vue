<template>
  <div>
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
            <div class="hello">
              <VueTailwindPagination
                :current="currentPage"
                :total="total"
                :per-page="perPage"
                @page-changed="onPageClick($event)"
                styled="centered"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// an example array of items to be paged
// import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import axios from "axios";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/styles";
import { mapState } from "vuex";
const filter = ["all", "men", "women"];
export default {
  name: "show-test",
  components: {
    VueTailwindPagination,
  },
  data() {
    return {
      currentPage: 0,
      perPage: 0,
      total: 0,
      data: [],
      resetData: [],
      filters: filter,
    };
  },
  methods: {
    onPageClick(event) {
      this.currentPage = event;
      this.getData(this.currentPage);
    },
    async getData(pageNumber) {
      var response = await axios.get(`api?page=${pageNumber}`);
      // var responseData = response.data;
      console.log(response.data[0].total);
      this.currentPage = response.data[0].page;
      this.perPage = response.data[0].per_page;
      this.total = response.data[0].total;
      this.data = response.data[0].data;
      this.resetData = response.data[0].data;
    },
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
      this.data = this.resetData;
    },
    search(ser) {
      this.resetPosts();
      this.data = this.data.filter((post) => {
        return post.title.toLowerCase().includes(ser.toLowerCase());
      });
    },
  },
  mounted() {
    this.currentPage = 1;
    this.getData(this.currentPage);
    // console.log(this.data);
  },
  computed: {
    ...mapState(["categoires"]),
  },
};
</script>
<style scoped>
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
