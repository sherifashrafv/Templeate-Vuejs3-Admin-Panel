<template>
  <div class="container">
    <div class="row gy-1">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="box-overlay position-relative w-100">
          <img
            class="img-fluid"
            src="../../../public/Images/Links/2.jpg"
            alt=""
          />
          <div class="new-arrivals d-flex flex-column">
            <h4>NewArrivals</h4>
            <h2>
              Mens <br />
              Sport Shoes
            </h2>
            <span>30% Discount</span>
          </div>
          <div
            class="over-lay d-flex align-items-center flex-row justify-content-center"
          >
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="box-overlay position-relative w-100">
          <img
            class="img-fluid"
            src="../../../public/Images/Links/3.jpg"
            alt=""
          />
          <div class="new-arrivals d-flex flex-column">
            <h4>NewArrivals</h4>
            <h2>
              Mens <br />
              Sport Shoes
            </h2>
            <span>30% Discount</span>
          </div>
          <div
            class="over-lay d-flex align-items-center flex-row justify-content-center"
          >
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dasaa-saassasa",
};
</script>
<style scoped>
.new-arrivals {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}
.over-lay {
  background: rgba(68, 68, 68, 0.74);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s ease-in-out;
}
.over-lay button {
  height: 50px;
  padding: 10px 50px;
  background: #3575d4;
  color: white;
  font-weight: bold;
  border: none;
}
.box-overlay:hover .over-lay {
  opacity: 1;
  /* transform: scale(1, 1); */
}
</style>
