<template>
  <div class="bg-light bg-gradient p-4">
    <div class="crumb">
      <div class="container">
        <div class="d-flex flex-row align-items-center justify-content-between">
          <div>
            <strong>{{ currentRouteName }}</strong>
          </div>
          <div>
            <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ currentRouteName }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
