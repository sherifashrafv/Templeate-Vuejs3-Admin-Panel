<template>
  <div>
    <BreadCrumb />
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="side">
            <div class="nav"></div>
          </div>
        </div>
        <div class="col-lg-9"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../BreadCrumb/crumb.vue";
export default {
  name: "ProductId",
  components: {
    BreadCrumb,
  },
};
</script>
