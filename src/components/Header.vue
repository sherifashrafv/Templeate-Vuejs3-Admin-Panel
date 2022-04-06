<template>
  <div class="navbar-main">
    <!-- icons -->

    <div ref="navbar" class="section-1 border-bottom p-2">
      <div class="container-lg container-fluid-md">
        <div class="d-flex align-items-center flex-row justify-content-between">
          <div class="d-lg-block d-md-none d-sm-none">
            <ul
              class="d-flex list-unstyled flex-row justify-content-between gap-2 links-icons"
            >
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-linkedin-in"></i></li>
            </ul>
          </div>

          <div class="free-shopping">
            <span class="text-center">{{ $t("nav1") }} </span>
          </div>

          <div class="d-lg-block d-md-none d-sm-none">
            <div
              class="d-flex list-unstyled flex-row justify-content-between gap-2 links-icons"
            >
              <div class="dropdown languages">
                <button
                  class="btn btn-secondary text-muted dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ $t("languages.title") }}
                </button>
                <ul
                  class="dropdown-menu p-2"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a @click="change('en')" class="dropdown-item">{{
                      $t("languages.english")
                    }}</a>
                  </li>
                  <li>
                    <a @click="change('ar')" class="dropdown-item">{{
                      $t("languages.arabic")
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- start-icons-media-queries -->
          <div class="shopy-icons-div w-100 d-lg-none d-md-block">
            <ul
              class="list-unstyled shopy-icons justify-content-end query align-items-center d-flex flex-row position-relative m-0"
            >
              <li>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/img/avatar.4ce946d7.png" alt="" />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a href="/Register" class="dropdown-item">Register</a>
                    </li>
                    <li>
                      <a href="/login" class="dropdown-item">Login</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  class="modal-shoopping query"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/img/shopping-bag.83beee9f.png" alt="" /><span
                    class="basket-cart-num"
                    >0</span
                  ></button
                ><!-- Modal -->
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
                          My Cart
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body"></div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close</button
                        ><button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/img/heart.368c1bc7.png" alt="" />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">Action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu">
                <button
                  type="button"
                  class="modal-shoopping query"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img
                    src="../../public/Images/Header/menu.png"
                    alt=""
                  /></button
                ><!-- Modal -->
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
                          My Cart
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body"></div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close</button
                        ><button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Drawer Style Right Modal --><!-- <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../../public/Images/Header/shopping-bag.png"
                      alt=""
                    />
                    <span class="basket-cart"
                      ><strong>{{ basketCart.length }}</strong></span
                    >
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end-icons -->

    <!-- nab-bar-2 -->
    <div class="section-2 border-bottom pb-4">
      <div class="container-lg container-fluid-md mt-4">
        <div
          class="serach-and-logo d-flex align-items-center flex-row justify-content-between"
        >
          <div class="logo">
            <img src="../../public/Images/Header/logo.png" alt="" />
          </div>
          <div class="input-search">
            <form
              method="GET"
              action="test.php"
              class="w-100 position-relative"
            >
              <input
                @click="searchVl()"
                type="text"
                v-model="search"
                :placeholder="$t('searchinputHeader')"
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
          <div class="shopping-icons d-lg-block d-md-none d-sm-none">
            <ul
              class="shopy-icons list-unstyled align-items-center d-flex flex-row gap-4 justify-content-between m-0"
            >
              <li>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="../../public/Images/Header/avatar.png" alt="" />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <!-- start-user-found -->
                    <li>
                      <router-link to="/Settings" class="dropdown-item"
                        >Settings</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="`/${$i18n.locale}/Profile`"
                        class="dropdown-item"
                        >Profile</router-link
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" @click="logOut()">LogOut</a>
                    </li>
                    <!-- end-user-found -->

                    <!-- User-not-Found -->
                    <!-- <li>
                      <router-link class="dropdown-item" to="/Register"
                        >Register</router-link
                      >
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/login"
                        >Login</router-link
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li> -->
                    <!-- User-not-Found-End -->
                  </ul>
                </div>
              </li>

              <li>
                <!-- Button trigger modal -->
                <!-- Drawer Style Right Modal -->
                <!-- modal-shoopping -->
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="modal-shoopping"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img
                    src="../../public/Images/Header/shopping-bag.png"
                    alt=""
                  />
                  <span class="basket-cart-num">{{ basketCart.length }}</span>
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
                          My Cart
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div
                          class="basket-cart-products d-flex align-items-center flex-row"
                          v-for="prod in basketCart"
                          :key="prod.id"
                        >
                          <div class="prod-image">
                            <img :src="prod.img" alt="" />
                          </div>
                        </div>
                      </div>
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
                <!-- End Drawer Style Right Modal -->

                <!-- <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../../public/Images/Header/shopping-bag.png"
                      alt=""
                    />
                    <span class="basket-cart"
                      ><strong>{{ basketCart.length }}</strong></span
                    >
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div> -->
              </li>

              <li>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="../../public/Images/Header/heart.png" alt="" />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- section-2 -->
    <div class="links-header border-bottom p-3">
      <ul
        class="router-links list-unstyled justify-content-center d-flex gap-5 flex-row"
      >
        <li v-for="(link, i) in $tm('navLinks')" :key="i">
          <router-link
            :class="[
              isActive && 'router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
            :to="link.Path"
          >
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";
export default {
  name: "Header-view",
  setup() {
    const lan = localStorage.getItem("lang");
    const lang = ref(lan);
    const search = ref("");
    const user = ref(false);
    return { lang, search, user };
  },
  computed: {
    ...mapState(["basketCart"]),
  },
  methods: {
    searchVl() {
      localStorage.setItem("search-value", JSON.stringify(this.search));
    },
    onScroll() {
      this.$refs.navbar.classList.toggle("scroll-fixed", window.scrollY > 800);
    },
    change(event) {
      localStorage.setItem("lang", event);
      this.$i18n.locale = event;
      window.location.reload();
      this.$router.push({
        params: { lang: event },
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    let lang = localStorage.getItem("lang");
    let user = localStorage.getItem("user-info");
    console.log(lang);
    if (!lang) localStorage.setItem("lang", this.$i18n.locale);
    //section added :
    if (lang) {
      if (lang === "ar") {
        import("../assets/styles/ar.css");
      } else {
        import("../assets/styles/en.css");
      }
      this.$i18n.locale = lang;
    }
    if (!user) {
      console.log("user");
    } else {
      console.log("not-found");
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style scoped>
button#dropdownMenuButton1 {
  background: none;
  border: none;
  color: black;
  font-size: 13px;
  position: relative;
}
.dropdown-toggle::after {
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translate(-50%, -50%);
}
.links-icons li i {
  color: #777777;
  padding: 7px;
  border-radius: 50px;
  background: #f7f7f7;
  text-align: center;
}
.shopy-icons div button img,
button.modal-shoopping img {
  max-width: 28px;
  border: none;
}
.shopy-icons div button::after {
  display: none;
}
.input-search {
  width: 50%;
}
.input-search input {
  width: 100%;
  border: none;
  background: #f7f7f7;
  height: 50px;
  padding: 15px;
}
.input-search i {
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translate(-50%, -50%);
}
a.router-link-active.router-link-exact-active {
  color: #3474d4;
  position: relative;
  font-weight: bold;
}
a.router-link-active {
  font-weight: bold;
}
a.router-link-active.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -86%;
  left: 0;
  background: #3474d4;
  width: 100%;
  height: 3px;
  z-index: 333333;
}
a {
  position: relative;
}
a::before {
  content: "";
  position: absolute;
  bottom: -86%;
  left: 0;
  background: #3474d4;
  width: 100%;
  height: 3px;
  z-index: 333333;
  transform-origin: 0 0;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: scaleX(0);
  transition: transform 0.5s;
}
a:hover::before {
  transform: scaleX(1);
}
a {
  color: black;
  font-weight: 600;
  text-transform: uppercase !important;
}
.section-1 {
  transition: 0.3s ease-in-out;
}
.section-1.scroll-fixed {
  background: white;
  position: fixed;
  width: 100%;
  z-index: 555555;
  top: 0;
  transform: scale(1, 1);
}

.modal-dialog {
  position: absolute;
  right: 0;
  width: 100%;
  top: 0;
  margin: 0;
  height: 100vh;
}
.modal-content {
  height: 100vh;
}
.modal.fade {
  transition: 0.3s ease-in-out;
  transform: translateX(20%) !important;
}
.modal.fade.show {
  transform: translateX(0%) !important;
}

.modal-shoopping {
  background: none;
  border: none;
  position: relative;
}
/* Modal Box */
/* .right .modal-dialog,
.left .modal-dialog {
  transition: transform 0.25s ease-out;
  position: fixed;
  margin: auto;
  height: 100vh;
}
.modal.right .modal-content,
.modal.left .modal-content {
  border-radius: 0;
  border: none;
  height: 100%;
}
.right .modal-dialog {
  transform: translateX(0) !important;
  right: 0;
}
.left .modal-dialog {
  transform: translateX(-50px) !important;
  left: 0;
} */
.shopping-image img {
  max-width: 90px;
}
.quantity {
  width: 100px;
  border: 1px solid #eeeeee;
}
.quantity > div {
  width: calc(100% / 3);
}
.prod-image img {
  width: 100px;
}
.modal-backdrop {
  z-index: 1040 !important;
}
.modal-content {
  margin: 2px auto;
  z-index: 1100 !important;
  overflow-y: scroll;
}
.modal-backdrop {
  /* bug fix - no overlay */
  display: none;
}
.dropdown.languages button {
  box-shadow: none;
  color: #555 !important;
  text-transform: uppercase;
  font-size: 17px !important;
  letter-spacing: 1 !important;
}
.dropdown-toggle[data-v-61dd7a3d]::after {
  right: -16px;
}
.dropdown-item::before {
  display: none;
}
.logo {
  width: 150px;
}
.logo img {
  max-width: 100%;
}
.basket-cart-num {
  position: absolute;
  top: 65%;
  transform: translate(-50%, -39%);
  right: -28%;
  background: #777777;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  width: 22px;
  text-align: center !important;
  height: 23px;
  font-size: 11px;
  line-height: 23px;
}
.shopy-icons.query {
  gap: 1px;
}

/* // X-Small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .free-shopping {
    display: none !important;
  }
  .links-icons {
    display: none !important;
  }
  .shopping-icons {
    display: none;
  }
  .menu {
    position: absolute;
    left: 0;
  }
  .serach-and-logo {
    flex-direction: column !important;
    gap: 10px;
  }
  .input-search {
    width: 83%;
  }
}

/* // Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .links-header {
    display: none !important;
  }
}

/* // Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .links-header {
    display: none !important;
  }
}

/* // Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

/* // X-Large devices (large desktops, less than 1400px) */
@media (max-width: 1399.98px) {
}
</style>
