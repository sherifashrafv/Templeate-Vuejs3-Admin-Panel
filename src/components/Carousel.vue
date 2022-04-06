<template>
  <div>
    <swiper
      :navigation="true"
      :effect="'fade'"
      :modules="modules"
      class="main-swipper position-relative"
    >
      <swiper-slide class="slider-item">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="box">
                <div>
                  <hr />
                  <h class="title-description-box">
                    {{ $t("carouselHome2.title") }}
                  </h>
                  <p class="desc-box-p">{{ $t("carouselHome2.desc") }}</p>
                  <p>{{ $t("carouselHome2.text") }} <br /></p>
                  <button class="btn btn-secondary">
                    {{ $t("carouselHome2.button") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slider-item-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="box">
                <div>
                  <hr />
                  <h class="title-description-box">
                    {{ $t("carouselHome2.title") }}
                  </h>
                  <p class="desc-box-p">{{ $t("carouselHome2.desc") }}</p>
                  <p>{{ $t("carouselHome2.text") }} <br /></p>
                  <button class="btn btn-secondary">
                    {{ $t("carouselHome2.button") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
.slider-item {
  width: 100%;
  background-image: url("../../public/Images/Carousel/1.jpg");
  background-size: cover;
  height: 80vh;
  background-position: center;
}
.slider-item-2 {
  width: 100%;
  background-image: url("../../public/Images/Carousel/2.jpg");
  background-size: cover;
  height: 80vh;
  background-position: center;
}
>>> .swiper-button-next,
>>> .swiper-button-prev {
  background: #3474d4 !important;
  color: white;
  padding: 15px 20px;
}
>>> .swiper-button-next::after,
>>> .swiper-button-prev::after {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.swiper-button-prev swiper-button-disabled .content {
  max-width: 500px;
  position: absolute;
  top: 50%;
  transform: translate(-100%, -30%);
  left: 50%;
}

/* >>> .swiper-button-next,
>>> .swiper-button-prev {
  background: #3474d4;
  color: white;
  transition: display 0.3s !important;
  display: none;
  width: 40px;
  text-align: center;
  padding-top: 10px;
  display: flex;
  justify-content: space-between !important;
} */
/* >>> .swiper-button-next:after,
>>> .swiper-button-prev:after {
  font-size: 25px;
  font-weight: bold;
  transition: 0.3s all !important;
  text-align: center;
} */
/* >>> .swiper-button-prev >>> .swiper-button-next {
  transition: 0.3s all !important;
} */

/* >>> .main-swipper:hover .swiper-button-next {
  display: block !important;
} */
/* >>> .main-swipper:hover .swiper-button-prev {
  display: block !important;
} */
.box {
  display: flex;
  /* flex-direction: column; */
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  align-items: center;
  padding: 5rem;
  left: 0;
}
.box hr {
  width: 10%;
  height: 5px !important;
  background: #3474d4;
  opacity: 1;
}

.title-description-box {
  margin-bottom: 25px;
  padding-top: 25px;
  color: #555;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Fjalla One";
  position: relative;
}
.desc-box-p {
  font-size: 30px;
  font-weight: 400;
  color: #444444;
  margin-bottom: 11px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
}

@media (max-width: 992px) {
}
/* // X-Small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .slider-item {
    height: 50vh;
  }
}

/* // Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .title-description-box {
    margin-bottom: 24px;
    padding-top: 20px;
    color: #555;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    font-family: "Fjalla One";
    position: relative;
  }
  .slider-item {
    height: 50vh;
  }
  .slider-item-2 {
    height: 50vh;
  }
}
</style>
