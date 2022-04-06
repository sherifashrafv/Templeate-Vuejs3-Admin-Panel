<template>
  <div class="icons-routers my-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div
            class="box text-center w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="img-icon">
              <img
                src="../../../public/Images/Icons-Routers/air-freight.png"
                alt=""
              />
            </div>
            <h4 class="my-3">FreeShipping</h4>
            <p>Free shipping on all US order or order above $200</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div
            class="box text-center w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="img-icon">
              <img
                src="../../../public/Images/Icons-Routers/exchange.png"
                alt=""
              />
            </div>
            <h4 class="my-3">FreeShipping</h4>
            <p>Free shipping on all US order or order above $200</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div
            class="box text-center w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="img-icon">
              <img
                src="../../../public/Images/Icons-Routers/secure-data.png"
                alt=""
              />
            </div>
            <h4 class="my-3">FreeShipping</h4>
            <p>Free shipping on all US order or order above $200</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div
            class="box text-center w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="img-icon">
              <img
                src="../../../public/Images/Icons-Routers/headphone.png"
                alt=""
              />
            </div>
            <h4 class="my-3">FreeShipping</h4>
            <p>Free shipping on all US order or order above $200</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons-Routers",
};
</script>

<style scoped>
.box {
  border: 1px solid #f4f4f4;
  max-width: 360px;
  padding: 35px 10px;
  transition: 0.3s all;
  cursor: pointer;
  height: fit-content;
}
.img-icon {
  width: 50px;
}
.img-icon img {
  width: 100%;
}
.box:hover {
  box-shadow: 1px 1px 42px -3px #ddd;
}
</style>
