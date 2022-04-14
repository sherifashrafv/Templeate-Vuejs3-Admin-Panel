<template>
  <div class="mt-5">
    <div class="form-sitation">
      <div class="text-center">
        <h1 class="text-black fw-bold">Profile Details</h1>
        <p>This is Your Information About You</p>
      </div>
      <div
        class="details w-100 d-flex flex-row justify-content-between mb-3 p-2"
      >
        <h1 class="text-black fw-bold text-uppercase">User Name:</h1>
        <h3 class="text-black">{{ register.username }}</h3>
      </div>

      <div
        class="details w-100 d-flex flex-row justify-content-between mb-3 p-2"
      >
        <h1 class="text-black fw-bold text-uppercase">LastName:</h1>
        <h3 class="text-black">{{ register.lastName }}</h3>
      </div>

      <div
        class="details w-100 d-flex flex-row justify-content-between mb-3 p-2"
      >
        <h1 class="text-black fw-bold text-uppercase">Email Address:</h1>
        <h3 class="text-black">{{ register.email }}</h3>
      </div>
      <div
        class="details w-100 d-flex flex-row justify-content-between mb-3 p-2"
      >
        <h1 class="text-black fw-bold text-uppercase">YourPassword:</h1>
        <h3 class="text-black">{{ register.password }}</h3>
      </div>
      <div
        class="details w-100 d-flex flex-row justify-content-between mb-3 p-2"
      >
        <h1 class="text-black fw-bold text-uppercase">YourAddress:</h1>
        <h3 class="text-black">{{ register.address }}</h3>
      </div>
      <div
        class="details w-100 d-flex flex-row justify-content-between mb-3 p-2"
      >
        <h1 class="text-black fw-bold text-uppercase">YourAddress:</h1>
        <h3 class="text-black">{{ register.phone }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
export default {
  name: "Profile-Details",
  setup() {
    const register = reactive({
      email: "",
      password: "",
      username: "",
      lastName: "",
      address: "",
      phone: "",
      id: "",
      sherif: "",
    });
    return {
      register,
    };
  },
  methods: {
    async getusers() {
      return await axios.get(`users?id=${this.register.id}`).then((res) => {
        this.register.email = res.data[0].email;
        this.register.password = res.data[0].password;
        this.register.username = res.data[0].username;
        this.register.lastName = res.data[0].lastName;
        this.register.phone = res.data[0].phone;
        this.register.address = res.data[0].address;
        console.log();
      });
    },
  },
  computed: {},
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      // this.register.email = JSON.parse(user).email;
      // this.register.password = JSON.parse(user).password;
      // this.register.phone = JSON.parse(user).phone;
      // this.register.username = JSON.parse(user).username;
      // this.register.address = JSON.parse(user).address;
      // this.register.lastName = JSON.parse(user).username;
      this.register.id = JSON.parse(user).id;
    }
    this.getusers();
  },
};
</script>
<style scoped>
.form-sitation {
  padding: 30px;
  border-radius: 3px;
  width: 100%;
  border: 5px dashed black;
  height: 100%;
  margin: 0 auto;
}
/* .content {
  height: 600px;
} */

/* select {
  padding: 0.375rem 0.75rem;
  width: 100%;
  border: none;
  outline: none;
  border: 1px solid #f4f4f4;
  border-radius: 0.25rem;
} */
/* .form-control {
  width: 100%;
} */
/* .system > div {
  width: calc(100% / 2);
} */
/* .service select {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} */
/* .service > div {
  width: calc(100% / 2);
} */
/* .error {
  position: absolute;
  top: 0%;
  color: red;
  right: 0;
} */
/* .btn.btn-primary {
  font-size: 16px;
  width: 150px;
  margin-top: 15px;
  height: 44px;
  min-width: unset;
  background: #0b5ed7;
} */
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
