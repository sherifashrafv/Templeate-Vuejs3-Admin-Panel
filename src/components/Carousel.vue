<template>
  <div>
    <swiper
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
      class="main-swipper"
    >
      <swiper-slide>
        <img src="../../public/Images/Carousel/1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/Images/Carousel/2.jpg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";
export default {
  name: "Carousel-Images",
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
.swiper-slide {
  height: 100%;
}
.swiper-slide img {
  max-width: 100%;
}

.content {
  max-width: 500px;
  position: absolute;
  top: 50%;
  transform: translate(-100%, -30%);
  left: 50%;
}
hr {
  width: 20%;
  height: 5px !important;
  background: #3474d4;
  opacity: 1;
}
>>> .swiper-button-next,
>>> .swiper-button-prev {
  background: #3474d4;
  color: white;
  transition: 0.3s !important;
  display: none;
  width: 40px;
  text-align: center;
  padding-top: 10px;
}
>>> .swiper-button-next:after,
>>> .swiper-button-prev:after {
  font-size: 25px;
  font-weight: bold;
  transition: 0.3s all !important;
  text-align: center;
}
>>> .swiper-button-prev.swiper-button-disabled,
>>> .swiper-button-next.swiper-button-disabled {
  transition: 0.3s all !important;
}
>>> .main-swipper:hover .swiper-button-next {
  display: block !important;
}
>>> .main-swipper:hover .swiper-button-prev {
  display: block !important;
}
</style>
