<template>
  <section class="py-5">
    <div class="container">
      <div class="text-center">
        <h2 class="ec-title">{{ $t("clients.title") }}</h2>
        <p>{{ $t("clients.say") }}</p>
      </div>
      <div
        v-if="activeTab === '1'"
        :class="[
          activeTab === '1'
            ? 'box list-unstyled d-flex flex-column justify-content-center align-items-center text-center tab active'
            : 'box list-unstyled d-flex flex-column justify-content-center align-items-center text-center tab ',
        ]"
        class=""
      >
        <div>
          {{ $t("clients.desc") }}
        </div>
        <div class="cunosmer">{{ $t("clients.name") }}</div>
        <div>
          <star-rating
            class="justify-content-center"
            :active-color="['#ff9191']"
            :star-size="20"
            :rating="5"
            :show-rating="false"
          />
        </div>
      </div>
      <div
        v-if="activeTab === '2'"
        :class="[
          activeTab === '2'
            ? 'box list-unstyled d-flex flex-column justify-content-center align-items-center text-center tab active'
            : 'box list-unstyled d-flex flex-column justify-content-center align-items-center text-center tab',
        ]"
        class=""
      >
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sit
          consectetur nobis soluta quae hic, obcaecati beatae magnam minus,
          pariatur repudiandae molestiae nesciunt voluptatum laboriosam porro
          tempora suscipit accusantium labore.
        </div>
        <div class="cunosmer">Sherif ashraf</div>
        <div>General Manger</div>
        <div>
          <star-rating
            class="justify-content-center"
            :active-color="['#ff9191']"
            :star-size="20"
            :rating="5"
            :show-rating="false"
          />
        </div>
      </div>
      <!-- links-styled -->
      <ul
        class="list-unstyled mt-5 d-flex flex-row gap-2 justify-content-center"
      >
        <li
          :class="activeTab == '1' ? 'tap-image active' : 'tab-image'"
          @click="activeTab = '1'"
        >
          <img src="../../../public/Images/Testimonens/1.jpg" alt="" />
        </li>
        <li
          :class="activeTab == '2' ? 'tap-image active' : 'tab-image'"
          @click="activeTab = '2'"
        >
          <img src="../../../public/Images/Testimonens/3.jpg" alt="" />
        </li>
        <li
          :class="activeTab == '3' ? 'tap-image active' : 'tab-image'"
          @click="activeTab = '3'"
        >
          <img src="../../../public/Images/Testimonens/2.jpg" alt="" />
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import StarRating from "vue-star-rating";

export default {
  name: "Tabs-Customer",
  data() {
    return {
      activeTab: "1",
    };
  },
  components: {
    StarRating,
  },
};
</script>
<style scoped>
.client-reviews {
  background: white;
  padding: 29px 105px;
}
section {
  background: #f9f9f9;
}
.box {
  width: fit-content;
  text-align: center;
  height: fit-content;
  background: white;
  padding: 25px 100px;
}
.cunosmer {
  color: #3474d4;
  font-size: 22px;
  font-weight: bold;
}
.ec-title {
  font-size: 19px;
  line-height: 26px;
  color: #555;
  font-weight: bold;
}
li.tab-image img {
  border-radius: 50%;
  max-width: 180px;
  transform: scale(0.7);
  opacity: 0.5;
}
.tap-image.active img {
  transform: scale(0.8);
  border-radius: 50%;
  max-width: 100%;
  border: 5px solid black;
}
</style>
