<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3 mt-2">
          <div class="head-title">
            <h1>Filter Products By</h1>
          </div>
          <div class="categories mt-3">
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
                class="d-flex flex-row gap-2 w-100 align-items-center"
              >
                <div class="form-check">
                  <input
                    :id="filter"
                    class="form-check-input"
                    checked
                    type="checkbox"
                    value=""
                  />
                </div>
                <div>
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
                  <h5 class="mt-2">
                    <del class="">{{ $t("currency") }}{{ prod.price - 7 }}</del>

                    {{ prod.price + $t("currency") }}
                  </h5>
                </div>

                <!-- overlay -->
                <ul
                  class="over-lay list-unstyled p-0 m-0 d-flex gap-2 flex-column"
                >
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
                    <img
                      src="../../../public/Images/Header/avatar.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img src="../../../public/Images/Tab/view.png" alt="" />
                  </li>
                </ul>
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
                text-before-input=""
                text-after-input=""
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
// import { mapState } from "vuex";
const filter = ["All", "Men", "Women"];
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
      await axios.get(`api?page=${pageNumber}`).then((res) => {
        console.log(res.data[0].total);
        this.currentPage = res.data[0].page;
        this.perPage = res.data[0].per_page;
        this.total = res.data[0].total;
        this.data = res.data[0].data;
        this.resetData = res.data[0].data;
      });
      // var responseData = response.data;
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
    // ...mapState(["categoires"]),
  },
};
</script>
<style scoped>
.head-title {
  background: #f7f7f7;
  max-width: 100%;
}
.head-title h1 {
  font-size: 16px;
  font-weight: bold;
  padding: 20px 15px;
}
.form-check-input {
  width: 25px;
  height: 25px;
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
  /* min-height: 450px !important;
  max-height: 450px !important; */
  margin: 10px 0;
}
.over-lay {
  position: absolute;
  bottom: 41%;
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
>>> .w-14.rounded-md.border.border-indigo-400.px-1.py-1,
>>> .flex.items-center.pl-4.font-medium.cursor-pointer {
  display: none !important;
}
>>> .from-blue-400 {
  background: none !important;
}
>>> section.flex.justify-between.bg-white.rounded-lg.border.border-gray-200.px-10.py-3.text-gray-700.font-montserrat {
  justify-content: flex-end !important;
}
>>> span.transform.-rotate-45 {
  padding: 10px 19px;
  color: #3474d4;
  font-weight: bold;
}
</style>
