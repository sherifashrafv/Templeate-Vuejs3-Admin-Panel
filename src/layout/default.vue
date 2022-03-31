<template>
  <div>
    <Header />
    <slot />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "default-layout",
  components: {
    Header,
    Footer,
  },
};
</script>
