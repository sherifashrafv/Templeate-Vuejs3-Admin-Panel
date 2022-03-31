<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-3">
        <ul
          class="items p-0 m-0 d-flex flex-column gap-2 justify-content-between m-0"
        >
          <li
            @click="activeTab = `1`"
            :class="[
              activeTab === '1'
                ? 'd-flex flex-row gap-2 align-items-center tab active'
                : 'd-flex flex-row gap-2 align-items-center tab',
            ]"
          >
            <i class="fa-brands fa-amilia"></i>
            <span>
              Clothes
              <br />
              440 Products
            </span>
          </li>

          <li
            @click="activeTab = `2`"
            :class="[
              activeTab === '2'
                ? 'd-flex flex-row gap-2 align-items-center tab active'
                : 'd-flex flex-row gap-2 align-items-center tab',
            ]"
          >
            <i class="fa-brands fa-amilia"></i>
            <span>
              Clothes
              <br />
              440 Products
            </span>
          </li>

          <li
            @click="activeTab = `3`"
            :class="[
              activeTab === '3'
                ? 'd-flex flex-row gap-2 align-items-center tab active'
                : 'd-flex flex-row gap-2 align-items-center tab',
            ]"
          >
            <i class="fa-brands fa-amilia"></i>
            <span>
              Clothes
              <br />
              440 Products
            </span>
          </li>
          <li
            @click="activeTab = `4`"
            :class="[
              activeTab === '4'
                ? 'd-flex flex-row gap-2 align-items-center tab active'
                : 'd-flex flex-row gap-2 align-items-center tab',
            ]"
          >
            <i class="fa-brands fa-amilia"></i>
            <span>
              Clothes
              <br />
              440 Products
            </span>
          </li>
        </ul>
      </div>
      <div class="content col-lg-9 h-100">
        <div
          v-if="activeTab === '1'"
          class="tab-content position-relative w-100"
        >
          <img
            class="img-fluid"
            src="../../../public/Images/Tab/1.jpg"
            alt=""
          />
          <div
            class="over-lay d-flex align-items-center flex-row justify-content-center"
          >
            <button>Order Now</button>
          </div>
        </div>
        <div
          v-if="activeTab === '2'"
          class="tab-content position-relative w-100"
        >
          <img
            class="img-fluid"
            src="../../../public/Images/Tab/2.jpg"
            alt=""
          />
          <div
            class="over-lay d-flex align-items-center flex-row justify-content-center"
          >
            <button>Order Now</button>
          </div>
        </div>
        <div
          v-if="activeTab === '3'"
          class="tab-content position-relative w-100"
        >
          <img
            class="img-fluid"
            src="../../../public/Images/Tab/3.jpg"
            alt=""
          />
          <div
            class="over-lay d-flex align-items-center flex-row justify-content-center"
          >
            <button>Order Now</button>
          </div>
        </div>
        <div
          v-if="activeTab === '4'"
          class="tab-content position-relative w-100"
        >
          <img
            class="img-fluid"
            src="../../../public/Images/Tab/4.jpg"
            alt=""
          />
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
  name: "Tabs-Points",
  data() {
    return {
      activeTab: "1",
    };
  },
};
</script>
<style scoped>
.tab.active {
  width: 100%;
  background: #3474d4;
  color: white;
}
.tab {
  width: 100%;
  background: #f5f5f5;
  padding: 15px;
  cursor: pointer;
}
.tab-content img {
  height: 336px;
}
.over-lay {
  width: 100%;
  height: 100%;
  background: rgba(68, 68, 68, 0.616);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.3s linear;
}
.tab-content:hover .over-lay {
  opacity: 1;
}
.over-lay button {
  padding: 10px 20px;
  background: #3474d4;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
}
</style>
