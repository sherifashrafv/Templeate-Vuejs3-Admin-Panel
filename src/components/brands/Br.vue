<template>
  <section class="brands p-5">
    <div class="brands">
      <div class="container">
        <swiper
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            '640': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }"
          :loop="true"
          :slidesPerView="5"
          :modules="modules"
        >
          <swiper-slide>
            <img src="../../../public/Images/Brands/1.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/2.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/3.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/4.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/5.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/6.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/7.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../public/Images/Brands/8.png" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";

import "swiper/css/navigation";
export default {
  name: "Brands-new",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>

<style scoped>
.brands {
  background: white;
}
.swiper-slide {
  border: 3px solid #f4f4f4;
}
.swiper-slide:hover {
}
.swiper-slide img {
  width: 100%;
}
</style>
