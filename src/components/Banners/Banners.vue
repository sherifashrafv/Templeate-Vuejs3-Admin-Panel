<template>
  <section class="banners p-5">
    <div class="box container">
      <div class="row justify-content-end">
        <div class="col-lg-6 text-center">
          <div
            class="box d-flex flex-column align-items-end justify-content-center"
          >
            <div>
              <h2>SunGlasses</h2>
              <h3>Super Offer</h3>
              <span>
                <img src="../../../public/Images/Banners/1.png" alt="" />
              </span>
              <h5>
                AcRDSADSA Frame <br />
                Sunglasses
              </h5>
              <h1>40.000 Only</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banners-Routers ",
};
</script>

<style>
.banners {
  background: url("../../../public/Images/Banners/offer_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  background-position: center center;
}
.box {
  height: 400px;
}
.box img {
  width: 180px;
}
</style>
