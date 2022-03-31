<template>
  <div class="my-5">
    <div class="container">
      <div class="row">
        <div class="title text-center">
          <h1>Our Top Collection</h1>
          <p>Browse The Collection Of Top Products</p>
        </div>
        <ul
          class="mt-2 d-flex flex-row justify-content-center gap-5 list-unstyled p-0"
        >
          <li>
            <router-link exact to="/">For Men </router-link>
          </li>
          <li>
            <router-link to="women">For Women</router-link>
          </li>
        </ul>
      </div>
      <router-view />
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
</style>
