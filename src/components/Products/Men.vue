<template>
  <div class="men-products mt-5">
    <div class="container">
      <div v-if="loading" class="d-flex flex-row justify-content-center">
        <div class="spinner-border"></div>
      </div>
      <div v-else class="row justify-content-center gy-2">
        <div
          v-for="prod in posts"
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
import { mapState } from "vuex";
// import { ref } from "@vue/reactivity";
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
  name: "Kids-vue",
  data() {
    return {
      posts: [],
      loading: true,
    };
  },

  components: {
    StarRating,
  },
  async mounted() {
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
  computed: {
    ...mapState(["mens"]),
  },
  methods: {
    addTocart(prod) {
      this.$store.commit("basketCart", prod);
    },
  },
};
</script>
<style scoped>
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
/* // Small devices (landscape phones, less than 768px) */

@media (max-width: 767.98px) {
  .cards {
    max-width: 342px;
  }
}

/* // Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
}
</style>
