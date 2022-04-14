<template>
  <div class="container">
    <div class="row gy-2">
      <div class="featured-product col-lg-6 col-md-12 col-sm-12 product">
        <div class="titles-carousel-items">
          <h3 class="title m-0 p-0 text-black">{{ $t("Fetured") }}</h3>
        </div>
        <div class="swipper-carousel-items mt-3">
          <swiper :modules="modules" class="mySwiper position-relative">
            <swiper-slide v-for="prod in colection.slice(2, 5)" :key="prod.id">
              <div
                class="main-card d-flex flex-row align-items-center justify-content-center position-relative"
              >
                <div
                  v-if="loading"
                  class="loading d-flex justify-content-center"
                >
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                </div>
                <div class="img">
                  <img else class="img-fluid" :src="prod.img" alt="" />
                </div>
                <div class="">
                  <router-link
                    class="product-link"
                    :to="`/collection/${prod.id}`"
                  >
                    {{ prod.title }}
                  </router-link>
                  <div class="d-flex flex-row gap-2 align-items-center">
                    <star-rating
                      :active-color="['#ffa7a7']"
                      :star-size="16"
                      :rating="3"
                      :show-rating="false"
                    />
                    <span>4 Review</span>
                  </div>
                  <div
                    class="price d-flex flex-row gap-2 mt-2 align-items-center"
                  >
                    <del
                      >{{ $t("currency") }}
                      {{ prod.price }}
                    </del>
                    <span class="fw-bold">
                      {{ prod.price - 10 }}
                      {{ $t("currency") }}
                    </span>
                  </div>
                  <ul
                    class="time-counter border-bottom my-2 m-0 p-0 list-unstyled d-flex flex-row gap-4"
                  >
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ days }}</span>
                      <span>{{ $t("counter.days") }}</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ hours }}</span>
                      <span>{{ $t("counter.hour") }}</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ minutes }}</span>
                      <span>{{ $t("counter.min") }}</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ seconds }}</span>
                      <span>{{ $t("counter.sec") }}</span>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi doloremque incidunt minima, vel, porro illum eveniet
                  </p>
                  <h4 class="total">
                    {{ $t("totalBooking") }}:<span>25</span>
                  </h4>
                  <div class="buttons d-flex flex-row gap-2">
                    <button class="btn btn-lg btn-primary">
                      {{ $t("buttonCars") }}
                    </button>
                    <button class="btn btn-lg btn-secondary">
                      {{ $t("bookNow") }}
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="featured-product col-lg-6 col-md-12 col-sm-12 product">
        <div class="titles-carousel-items">
          <h3 class="title m-0 p-0 text-black">{{ $t("limted") }}</h3>
        </div>
        <div class="swipper-carousel-items-2 mt-3">
          <swiper :modules="modules" class="mySwiper position-relative">
            <swiper-slide v-for="prod in colection.slice(2, 5)" :key="prod.id">
              <div
                class="main-card d-flex flex-row align-items-center justify-content-center position-relative"
              >
                <div
                  v-if="loading"
                  class="loading d-flex justify-content-center"
                >
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                </div>
                <div class="img">
                  <img else class="img-fluid" :src="prod.img" alt="" />
                </div>
                <div class="">
                  <router-link
                    class="product-link"
                    :to="`/collection/${prod.id}`"
                  >
                    {{ prod.title }}
                  </router-link>
                  <div class="d-flex flex-row gap-2 align-items-center">
                    <star-rating
                      :active-color="['#ffa7a7']"
                      :star-size="16"
                      :rating="3"
                      :show-rating="false"
                    />
                    <span>4 Review</span>
                  </div>
                  <div
                    class="price d-flex flex-row gap-2 mt-2 align-items-center"
                  >
                    <del
                      >{{ $t("currency") }}
                      {{ prod.price }}
                    </del>
                    <span class="fw-bold">
                      {{ prod.price - 10 }}
                      {{ $t("currency") }}
                    </span>
                  </div>
                  <ul
                    class="time-counter border-bottom my-2 m-0 p-0 list-unstyled d-flex flex-row gap-4"
                  >
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ days }}</span>
                      <span>{{ $t("counter.days") }}</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ hours }}</span>
                      <span>{{ $t("counter.hour") }}</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ minutes }}</span>
                      <span>{{ $t("counter.min") }}</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ seconds }}</span>
                      <span>{{ $t("counter.sec") }}</span>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi doloremque incidunt minima, vel, porro illum eveniet
                  </p>
                  <h4 class="total">
                    {{ $t("totalBooking") }}:<span>25</span>
                  </h4>
                  <div class="buttons d-flex flex-row gap-2">
                    <button class="btn btn-lg btn-primary">
                      {{ $t("buttonCars") }}
                    </button>
                    <button class="btn btn-lg btn-secondary">
                      {{ $t("bookNow") }}
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapState } from "vuex";
import StarRating from "vue-star-rating";
import gsap from "gsap";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import moment from "moment";
import { Navigation } from "swiper";
import { reactive, ref, toRefs } from "vue";
import axios from "axios";
export default {
  name: "Carousel-Items",
  components: {
    Swiper,
    SwiperSlide,
    StarRating,
  },
  setup() {
    const loading = ref(true);
    const counter = reactive({
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      now: moment(),
      updateDiff: function () {
        if (moment().seconds() == 0 || counter.seconds < 0) {
          counter.setDiff();
        } else {
          counter.seconds -= 1;
        }
      },
      setDiff() {
        var now = moment();
        var theDay = moment("20220710", "YYYYMMDD");
        counter.weeks = theDay.diff(now, "weeks");
        now.weeks(now.weeks() + counter.weeks);
        counter.days = theDay.diff(now, "days");
        now.days(now.days() + counter.days);
        counter.hours = theDay.diff(now, "hours");
        now.hours(now.hours() + counter.hours);
        counter.minutes = theDay.diff(now, "minutes");
        now.minutes(now.minutes() + counter.minutes);
        counter.seconds = theDay.diff(now, "seconds");
      },
    });
    return {
      modules: [Navigation],
      ...toRefs(counter, loading),
    };
  },
  mounted() {
    this.setDiff();
    setInterval(this.updateDiff, 1000);
    axios
      .get("collection")
      .then((res) => {
        this.$store.commit("getCollection", res.data);
      })
      .finally(() => {
        this.loading = false;
      });
    gsap.to("#swiperAnimation", { duration: 2.5, ease: "steps(12)", y: -500 });
  },
  computed: {
    ...mapState(["colection"]),
  },
};
</script>
<style scoped>
.swiper-slide {
  background: #f7f7f7;
  padding: 20px 10px;
}
.img img {
  width: 100%;
}
.time-counter li .count {
  padding: 10px;
  background: white;
  /* margin-bottom: 25px; */
}
.time-counter li span:last-child {
  margin-bottom: 15px;
}
.total {
  color: black;
  font-weight: bold;
}
.total span {
  color: #3474d4;
}
.product-link {
  color: #777;
  font-size: 17px;
  letter-spacing: 1.5px;
}
.reviews span {
  height: 30px;
}
button.btn.btn-lg.btn-primary,
button.btn.btn-lg.btn-secondary {
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  min-width: 120px;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 0;
  height: 35px;
  text-align: center !important;
}
.border-bottom {
  border-bottom: 1px solid #eeeeee !important;
}
.loading {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  background: rgba(119, 119, 119, 0.336);
}
.spinner-border {
  position: absolute;
  top: 50%;
}
.buttons > button {
  width: 100%;
}
.price {
  color: black;
}
/* // Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .main-card {
    flex-direction: column !important;
  }
  a.product-link {
    width: 100%;
    text-align: center;
  }
  .stars {
    justify-content: center !important;
  }
}

/* // Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
}
</style>
