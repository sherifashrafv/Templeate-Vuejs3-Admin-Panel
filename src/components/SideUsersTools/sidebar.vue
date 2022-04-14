<template>
  <div>
    <div class="container-fluid">
      <!-- navbar -->
      <!--  -->
      <div class="row">
        <!-- side-bar -->

        <div class="col-lg-3 d-lg-block d-md-none side-bar-custome">
          <div class="dashboard-heading">
            <h1 class="child">
              <router-link class="text-black" to="/">Home</router-link>
            </h1>
          </div>
          <div class="d-flex flex-column h-100vh mt-5 align-items-center">
            <ul
              class="links-routes d-flex flex-column justify-content-between gap-3 mt-4 w-100"
            >
              <router-link
                :class="[
                  isActive && 'router-link-active',
                  isExactActive && 'router-link-exact-active',
                ]"
                exact
                to="/Settings/"
              >
                <li
                  class="d-flex flex-row gap-2 align-items-center justify-content-between"
                >
                  <span class="icon">
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <div>
                    <p class="m-0 fw-bold fs-3 text-uppercase">
                      {{ $t("Settings.ProfileDetails") }}
                    </p>
                  </div>
                </li>
              </router-link>
              <router-link
                :class="[
                  isActive && 'router-link-active',
                  isExactActive && 'router-link-exact-active',
                ]"
                to="/Settings/Edit"
              >
                <li
                  class="d-flex flex-row gap-2 align-items-center justify-content-between"
                >
                  <span class="icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </span>
                  <div>
                    <p class="m-0 fw-bold fs-3 text-uppercase">
                      {{ $t("Settings.Edit") }}
                    </p>
                  </div>
                </li>
              </router-link>
              <router-link
                :class="[
                  isActive && 'router-link-active',
                  isExactActive && 'router-link-exact-active',
                ]"
                to="/Settings/DashBoard"
              >
                <li
                  class="d-flex flex-row gap-2 align-items-center justify-content-between"
                >
                  <span class="icon align-self-start">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </span>
                  <div>
                    <p class="m-0 fw-bold fs-3 text-uppercase">
                      {{ $t("Settings.dashboard") }}
                    </p>
                  </div>
                </li>
              </router-link>
              <!-- this is your products -->
              <router-link
                v-if="information.products"
                :class="[
                  isActive && 'router-link-active',
                  isExactActive && 'router-link-exact-active',
                ]"
                to="/Settings/Products"
              >
                <li
                  class="d-flex flex-row gap-2 align-items-center justify-content-between"
                >
                  <span class="icon align-self-start">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </span>
                  <div>
                    <p class="m-0 fw-bold fs-3 text-uppercase">
                      {{ $t("Settings.porducts") }}
                    </p>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="modal d-lg-none d-md-block">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end-side-bar -->
        <!-- start-router-view -->
        <div class="col-lg-9 router-view">
          <perfect-scrollbar>
            <router-view />
          </perfect-scrollbar>
        </div>

        <!-- end-router-view -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Setting-vue",
  setup() {
    const information = reactive({
      email: "",
      password: "",
      phone: "",
      products: false,
    });
    return { information };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.information.email = JSON.parse(user).email;
    }
    let productsIn = localStorage.getItem("product");
    if (productsIn) {
      this.information.products = true;
    }
  },
};
</script>

<style scoped>
/*  */
.side-bar-custome {
  background: black;
  height: 100vh;
  width: 20%;
}
.router-link-exact-active {
  background: white;
  color: black !important;
  width: 100% !important;
  padding: 15px;
  text-align: center;
}
.router-link-active {
  color: black !important;
}
.image {
  width: 40px;
}

.links-routes > li {
  /* background: white; */
  text-align: center;
  padding: 15px;
}
.icon i {
  font-size: 36px;
}

ul {
  height: 450px;
}
.router-view {
  /* height: 800px; */
  /* overflow-y: scroll; */
}
.ps {
  height: 800px;
}
>>> .ps__thumb-y {
  background-color: black !important;
}
>>> .ps:hover > .ps__rail-x,
>>> .ps:hover > .ps__rail-y,
>>> .ps--focus > .ps__rail-x,
>>> .ps--focus > .ps__rail-y,
>>> .ps--scrolling-x > .ps__rail-x,
>>> .ps--scrolling-y > .ps__rail-y {
  opacity: 1.6 !important;
}
.dashboard-heading {
  transform: skewX(-25deg);
  padding: 2px;
  color: #fff;
  background: white;
  text-align: center;
  width: 77%;
  margin: auto;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: 59px;
  margin-top: 4rem;
  color: black !important;
}
.child {
  transform: skew(25deg);
  padding: 11px;
  color: black;
  font-size: 25px;
  /* font-style: italic; */
  font-weight: bold;
}
.modal.fade.show {
  /* position: fixed; */
  /* top: 0; */
  /* left: 50%; */
  z-index: 1055;
  /* display: none; */
  width: 100% !important;
  height: 100% !important;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  /* transform: translate(-61%,-2%); */
  position: fixed;
  top: 50% !important;
  left: 50% !important;
  transition: 0.3s ease-in-out;
  transform: translate(-71%, -54%) scaleX(1) !important;
}
.modal.fade {
  transform: translate(-135%, -54%) scaleX(0) !important;
}
a {
  transition: 0.3s ease-in-out;
  color: white;
  padding: 15px;
  width: 100%;
}
</style>
