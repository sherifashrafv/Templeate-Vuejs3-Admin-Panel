<template>
  <div class="">
    <div class="nav-bar-home position-fixed w-100 z-999">
      <router-link class="" to="/">Home</router-link>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 p-0 pt-5 side-bar position-fixed">
          <div
            class="w-100 mt-5 d-flex flex-column justify-content-center align-items-center"
          >
            <div>
              <img
                class="logo"
                src="../../../public/Images/Tab/logo.png"
                alt=""
              />
            </div>
            <div class="w-100">
              <ul
                class="links-titles d-flex mt-5 flex-column align-items-center justify-content-center"
              >
                <li
                  class="d-flex flex-row align-items-center justify-content-center gap-2 align-middle"
                >
                  <img
                    class=""
                    src="../../../public/Images/Tab/user.png"
                    alt=""
                  />
                  <router-link class="modifiyed-text text-white fw-bold" to="/"
                    >Settings</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting-vue",
};
</script>

<style>
.side-bar {
  height: 100vh;
  background: #061a3d;
  width: 17.5% !important;
  z-index: -1 !important;
}
.nav-bar-home {
  padding: 15px;
  background: white;
  text-align: center;
  font-size: 25px;
  color: black;
}
.nav-bar-home a {
  color: black;
  font-weight: bold;
}
.logo {
  width: 110px;
}
.links-routes > li {
  width: 100%;
  text-align: center;
  background: #112052;
}
.links-titles > li {
  background: #112052;
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: center;
  padding: 15px;
}
.links-titles > li:hover {
  background: #1b2564;
}
.modifiyed-text {
  font-size: 20px;
}
</style>
