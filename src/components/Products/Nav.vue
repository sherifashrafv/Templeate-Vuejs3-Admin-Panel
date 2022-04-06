<template>
  <div class="my-5">
    <div class="container">
      <div class="row">
        <div class="title text-center">
          <h1>{{ $t("OurTopCollection") }}</h1>
          <p>{{ $t("Browse") }}</p>
        </div>
        <ul
          class="mt-2 d-flex flex-row justify-content-center gap-5 list-unstyled p-0"
        >
          <li>
            <router-link exact to="/">{{ $t("mens") }} </router-link>
          </li>
          <li>
            <router-link to="women">{{ $t("women") }}</router-link>
          </li>
        </ul>
      </div>
      <Transition name="slide-fade">
        <router-view> </router-view>
      </Transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav-Routing",
};
</script>
<style scoped>
a {
  color: black;
}
router-link-active {
  color: black;
}
a.router-link-active.router-link-exact-active {
  color: #3474d4;
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
