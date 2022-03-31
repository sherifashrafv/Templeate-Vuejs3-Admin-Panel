<template>
  <div>
    <Carousel />
    <NastedRouters />
    <Links />
    <Tabs />
    <CarouselItmes />
    <Icons />
    <Banners />
    <TabsCusomer />
    <Brands />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import NastedRouters from "../components/Products/Nav.vue";
import Links from "../components/Links/Links.vue";
import Tabs from "../components/Tabs-Points/Tabs.vue";
import Icons from "../components/IconsRouters/Icons.vue";
import Banners from "../components/Banners/Banners.vue";
import CarouselItmes from "../components/CarouselItmes/CarouselItm.vue";
import TabsCusomer from "../components/Tabs-Customers/TabsCusomer.vue";
import Brands from "../components/brands/Br.vue";

export default {
  name: "HomeView",
  components: {
    Carousel,
    NastedRouters,
    Links,
    Tabs,
    Icons,
    Banners,
    CarouselItmes,
    TabsCusomer,
    Brands,
  },
};
</script>
