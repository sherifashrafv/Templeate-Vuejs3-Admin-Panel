<template>
  <component :is="layout"> </component>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const defaultLayout = "default";
    const { currentRoute } = useRouter();
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );
    return {
      layout,
    };
  },
};
</script>
