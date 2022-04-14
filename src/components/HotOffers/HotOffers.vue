<template>
  <div>
    <!--Bread-Crumb-->
    <BreadCrumb />
    <!--Bread-Crumb-End-->
    <div class="">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center my-4">
              <h1 class="text-black">Style 1</h1>
              <h4>Browse The Collection of Top Categories</h4>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="my-card w-100 text-center p-4 align-content-center d-flex flex-column justify-content-center"
            >
              <div class="image-offers">
                <img
                  class="img-fulid"
                  src="../../../public/Images/HotOffers/2.jpg"
                  alt=""
                />
              </div>
              <div class="title-offers my-3">
                <h2>Get 15% off on branded Shoes</h2>
              </div>
              <p class="offers-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been.
              </p>
              <div class="ec-cpn-code">
                <router-link to="/cart" class="btn btn-secondary"
                  >Shop Now</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="my-card w-100 text-center p-4 align-content-center d-flex flex-column justify-content-center"
            >
              <div class="image-offers">
                <img
                  class="img-fulid"
                  src="../../../public/Images/HotOffers/3.jpg"
                  alt=""
                />
              </div>
              <div class="title-offers my-3">
                <h2>Get 15% off on branded Shoes</h2>
              </div>
              <p class="offers-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been.
              </p>
              <div class="ec-cpn-code">
                <router-link to="/cart" class="btn btn-secondary"
                  >Shop Now</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="my-card w-100 text-center p-4 align-content-center d-flex flex-column justify-content-center"
            >
              <div class="image-offers">
                <img
                  class="img-fulid"
                  src="../../../public/Images/HotOffers/4.jpg"
                  alt=""
                />
              </div>
              <div class="title-offers my-3">
                <h2>Get 15% off on branded Shoes</h2>
              </div>
              <p class="offers-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been.
              </p>
              <div class="ec-cpn-code">
                <router-link to="/cart" class="btn btn-secondary"
                  >Shop Now</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center my-4">
              <h1 class="text-black">Style 2</h1>
              <h4>Browse The Collection of Top Categories</h4>
            </div>
          </div>
          <div class="col-12">
            <div class="background">
              <div
                class="w-100 h-100 d-flex flex-column justify-content-center"
              >
                <div class="features ms-5">
                  <h5>On Furniture</h5>
                  <h4 class="upto">Upto <span class="percent">45%</span>OFF</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                  <button class="btn-customize">Shop Now !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../BreadCrumb/crumb.vue";
export default {
  name: "Hot-Ofeers",
  components: {
    BreadCrumb,
  },
};
</script>

<style>
.my-card {
  border: 3px solid #f1f1f1;
  width: 100%;
}
.title-offers h2 {
  font-size: 23px;
  font-weight: bold;
  text-align: center;
}
.btn.btn-secondary {
  padding: 0;
  font-size: 14px;
  border-radius: 0;
  height: 45px;
  border: 0;
  font-weight: 500;
  line-height: 45px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  padding-left: 15px;
  padding-right: 15px;
  text-transform: uppercase;
}
.background {
  background: url("../../../public/Images/HotOffers/offer-banner-06.jpg");
  background-position: center;
  background-size: cover;
  height: 500px;
}
.features {
  width: 500px;
}
.btn-customize {
  border: 1px dashed #7c7c7c;
  padding: 10px;
  background: #f9f9f9;
}
.upto {
  color: black;
  font-size: 30px;
}
.upto span {
  font-size: 45px;
}
</style>
