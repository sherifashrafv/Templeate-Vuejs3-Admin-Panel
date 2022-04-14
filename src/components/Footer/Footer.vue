<template>
  <footer class="mt-5">
    <div class="footer-message">
      <div class="container">
        <div class="row">
          <div class="text-center p-4" style="color: aliceblue">
            <span>Win a contest! Get this limited-editon</span
            ><a href="#" target="_blank">View Detail</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <!-- footer-1 -->
        <!-- col-1 -->
        <div class="col-sm-12 col-lg-3">
          <div class="img-logo w-75">
            <img
              class="img-fluid"
              src="../../../public/Images/Footer/footer-logo.png"
              alt=""
            />
          </div>
          <ul class="m-0 p-0 links-footer py-3">
            <li>
              <p>{{ $t("col1.title") }}</p>
            </li>
            <li v-for="(link, i) in $tm('col1.links')" :key="i">
              <p>
                <strong>{{ link.title }}</strong
                >{{ link.desc }}
              </p>
            </li>
          </ul>
        </div>
        <!-- col-1-end -->
        <!-- start-col-2 -->
        <div class="col-sm-12 col-lg-2">
          <div>
            <h4 class="border-bottom pb-3"><strong>Information</strong></h4>
          </div>
          <ul class="m-0 p-0 mt-4 links-footer d-flex flex-column gap-3">
            <li v-for="(col1, i) in $tm('col2.links')" :key="i">
              <router-link class="text-black" :to="col1.path">{{
                col1.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <!-- col-2-End -->
        <!-- start-col-3 -->
        <div class="col-sm-12 col-lg-2">
          <div>
            <h4 class="border-bottom pb-3">
              <strong>{{ $t("col3.title") }}</strong>
            </h4>
          </div>
          <ul class="m-0 p-0 mt-4 links-footer d-flex flex-column gap-3">
            <li v-for="(col2, i) in $tm('col3.links')" :key="i">
              <router-link class="text-black" :to="col2.path">{{
                col2.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <!-- col-3-End -->
        <!-- start-col-4 -->
        <div class="col-sm-12 col-lg-2">
          <div>
            <h4 class="border-bottom pb-3">
              <strong>{{ $t("col4.title") }}</strong>
            </h4>
          </div>
          <ul class="m-0 p-0 mt-4 links-footer d-flex flex-column gap-3">
            <li v-for="(col3, i) in $tm('col4.links')" :key="i">
              <router-link class="text-black" :to="col3.path">{{
                col3.title
              }}</router-link>
            </li>
          </ul>
        </div>
        <!-- col-4-End -->
        <!-- start-col-4 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div>
            <h4 class="border-bottom pb-3">
              <strong>{{ $t("col5.title") }}</strong>
            </h4>
            <div>
              <p class="desc-col">{{ $t("col5.desc") }}</p>
            </div>
          </div>
          <form class="position-relative">
            <input class="input-" type="text" :placeholder="$t('col5.input')" />
            <span class="icon-paper">
              <i class="fa-solid fa-paper-plane"></i>
            </span>
          </form>
        </div>
        <!-- col-4-End -->

        <!-- start-last-footer -->
      </div>
    </div>
    <div ref="navbar" class="section-1 border-top mt-5 p-2">
      <div class="container container-fluid-md">
        <div class="row align-items-center mt-2">
          <div class="col">
            <ul class="links-icons d-flex list-unstyled flex-row gap-2">
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-linkedin-in"></i></li>
            </ul>
          </div>

          <div class="free-shopping text-left m-0 pe-5 col">
            <p class="p-0 m-0">{{ $t("nav1") }}</p>
          </div>

          <!-- start-icons-media-queries -->
          <div class="col">
            <div>
              <img
                class="img-fluid"
                src="../../../public/Images/Footer/payment.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-View",
};
</script>

<style scoped>
.desc-col {
  line-height: 1.8;
}
input.input- {
  border: 1px solid #eeeeee;
  width: 100%;
  height: 58px;
  padding-left: 10px;
}
.icon-paper {
  position: absolute;
  font-size: 19px;
  color: #eeeeee;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #3474d4;
  width: 40px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  right: -12px;
  font-weight: bold;
}
.links-icons {
  max-width: 100%;
}
.links-icons li {
  color: #777777;
  padding: 7px;
  border-radius: 50px;
  background: #f7f7f7;
  text-align: center;
}
.footer-message {
  background: #555555;
}
</style>
