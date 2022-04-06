<template>
  <div class="app position-relative">
    <!-- begin folding modal -->
    <div class="loading-overlay" v-if="this.showSpinner">
      <div class="folding">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div>

    <component :is="layout"> </component>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { mapActions, mapState } from "vuex";

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
  components: {},
  methods: {
    ...mapActions(["setSpin"]),
  },
  mounted() {
    setTimeout(() => {
      this.setSpin({ val: false });
    }, 3000);
  },
  computed: {
    ...mapState(["showSpinner"]),
  },
};
</script>
<style scoped>
.loading-overlay {
  background: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99999999999999;
  height: 100vh;
  text-align: center;
}
.spinner-border {
  position: absolute;
  top: 50%;
}
.cubes {
  width: 40px;
  height: 40px;
  margin: 100px auto;
}
.folding {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotateZ(45deg);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
}

.folding .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
}

.folding .sk-cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  transform-origin: 100% 100%;
}

.folding .sk-cube2 {
  transform: scale(1.1) rotateZ(90deg);
}

.folding .sk-cube3 {
  transform: scale(1.1) rotateZ(180deg);
}

.folding .sk-cube4 {
  transform: scale(1.1) rotateZ(270deg);
}

.folding .sk-cube2:before {
  animation-delay: 0.3s;
}

.folding .sk-cube3:before {
  animation-delay: 0.6s;
}

.folding .sk-cube4:before {
  animation-delay: 0.9s;
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

/* animatiion */
</style>
