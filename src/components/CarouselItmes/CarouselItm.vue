<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 product">
        <div
          class="d-flex border-bottom pb-3 flex-row justify-content-between align-items-center"
        >
          <h1>Fetured</h1>
        </div>
        <div class="swipper-carousel-items mt-3">
          <swiper :modules="modules" class="mySwiper position-relative">
            <swiper-slide v-for="prod in colection" :key="prod.id">
              <div
                class="main-card d-flex flex-row align-items-center justify-content-center"
              >
                <div class="img">
                  <img class="img-fluid" :src="prod.img" alt="" />
                </div>
                <div class="">
                  <router-link :to="`/collection/${prod.id}`">
                    {{ prod.title }}
                  </router-link>
                  <div class="d-flex flex-row gap-2 align-items-center">
                    <span class="fw-bold">${{ prod.price - 10 }} </span>
                    <del>${{ prod.price }}</del>
                  </div>
                  <ul
                    class="time-counter m-0 p-0 list-unstyled d-flex flex-row gap-4"
                  >
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ days }}</span>
                      <span>days</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ hours }}</span>
                      <span>hours</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ minutes }}</span>
                      <span>min</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ seconds }}</span>
                      <span>sec</span>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi doloremque incidunt minima, vel, porro illum eveniet
                  </p>
                  <h4 class="total">total booking : <span>25</span></h4>
                  <div class="d-flex flex-row gap-2">
                    <button class="btn btn-lg btn-primary">remind me</button>
                    <button class="btn btn-lg btn-secondary">book now</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-lg-6 product">
        <div
          class="d-flex border-bottom pb-3 flex-row justify-content-between align-items-center"
        >
          <h1>Fetured</h1>
        </div>
        <div class="swipper-carousel-items mt-3">
          <swiper :modules="modules" class="mySwiper position-relative">
            <swiper-slide v-for="prod in colection" :key="prod.id">
              <div
                class="main-card d-flex flex-row align-items-center justify-content-center"
              >
                <div class="img">
                  <img class="img-fluid" :src="prod.img" alt="" />
                </div>
                <div class="">
                  <router-link :to="`/collection/${prod.id}`">
                    {{ prod.title }}
                  </router-link>
                  <div class="d-flex flex-row gap-2 align-items-center">
                    <span class="fw-bold">${{ prod.price - 10 }} </span>
                    <del>${{ prod.price }}</del>
                  </div>
                  <ul
                    class="time-counter m-0 p-0 list-unstyled d-flex flex-row gap-4"
                  >
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ days }}</span>
                      <span>days</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ hours }}</span>
                      <span>hours</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ minutes }}</span>
                      <span>min</span>
                    </li>
                    <li class="d-flex text-center flex-column">
                      <span class="count p-2"> {{ seconds }}</span>
                      <span>sec</span>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi doloremque incidunt minima, vel, porro illum eveniet
                  </p>
                  <h4 class="total">total booking : <span>25</span></h4>
                  <div class="d-flex flex-row gap-2">
                    <button class="btn btn-lg btn-primary">remind me</button>
                    <button class="btn btn-lg btn-secondary">book now</button>
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
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import moment from "moment";
import { Navigation } from "swiper";
import { reactive, toRefs } from "vue";
import axios from "axios";
export default {
  name: "Carousel-Items",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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
      ...toRefs(counter),
    };
  },
  mounted() {
    moment().format();
    this.setDiff();
    setInterval(this.updateDiff, 1000);
    axios.get("/collection").then((res) => {
      this.$store.commit("getCollection", res.data);
    });
  },
  computed: {
    ...mapState(["colection"]),
  },
  // All slick methods can be used too, example here
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
  margin: 10px 0;
}
.total {
  color: black;
  font-weight: bold;
}
.total span {
  color: #3474d4;
}
</style>
