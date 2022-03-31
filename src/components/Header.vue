<template>
  <div class="navbar-main w-100 p-3">
    <!-- icons -->
    <div class="section-1 border-bottom">
      <div class="container">
        <div class="d-flex align-items-center flex-row justify-content-between">
          <div>
            <ul
              class="d-flex list-unstyled flex-row justify-content-between gap-2 links-icons"
            >
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-linkedin-in"></i></li>
            </ul>
          </div>
          <div>
            <span class="text-center"
              >Free Shipping This Week Order Over - $75
            </span>
          </div>
          <div>
            <div
              class="d-flex list-unstyled flex-row justify-content-between gap-2 links-icons"
            >
              <div class="dropdown">
                <button
                  class="btn btn-secondary text-muted dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary text-muted dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end-icons -->
    <div ref="navbar" class="section-2 border-bottom pb-4">
      <div class="container mt-4">
        <div class="d-flex align-items-center flex-row justify-content-between">
          <div class="logo">
            <img src="../../public/Images/Header/logo.png" alt="" />
          </div>
          <div class="input-search">
            <form
              method="GET"
              action="test.php"
              class="w-100 position-relative"
            >
              <input type="text" placeholder="search products..." />
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
          <div class="shopping-icons">
            <ul
              class="shopy-icons list-unstyled align-items-center d-flex flex-row justify-content-between m-0"
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
              <li>
                <div class="dropdown">
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
    <div class="mt-3 border-bottom">
      <ul
        class="router-links list-unstyled justify-content-center d-flex gap-5 flex-row"
      >
        <li>
          <router-link
            :class="[
              isActive && 'router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
            to="/"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about"> Products </router-link>
        </li>
        <li>
          <router-link to="/Products"> Products </router-link>
        </li>
        <li>
          <router-link to="/Products"> Products </router-link>
        </li>
        <li>
          <router-link to="/Products"> Products </router-link>
        </li>
        <li>
          <router-link to="/Products"> Products </router-link>
        </li>
        <li>
          <router-link to="/Products"> Products </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header-view",
  computed: {
    ...mapState(["basketCart"]),
  },
  methods: {
    onScroll() {
      this.$refs.navbar.classList.toggle("scroll-fixed", window.scrollY > 800);

      // console.log(window.scrollY)
      // console.log({ top: this.windowTop })
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
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
.shopy-icons div button img {
  max-width: 30px;
}
.shopy-icons div button::after {
  display: none;
}
.input-search {
  width: 600px;
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
  bottom: -90%;
  left: 0;
  background: #3474d4;
  width: 100%;
  height: 3px;
}
a {
  color: black;
}
.section-2 {
  transition: 0.3s ease-in-out;
}
.section-2.scroll-fixed {
  background: white;
  position: fixed;
  width: 100%;
  z-index: 555555;
  top: 0;
  transform: scale(1, 1);
}
</style>
