<template>
  <div>
    <BreadCrumb />
    <slot />
    <router-view />
  </div>
</template>
<script>
import BreadCrumb from "../components/BreadCrumb/crumb.vue";
export default {
  name: "custome-layout",
  components: {
    BreadCrumb,
  },
};
</script>
