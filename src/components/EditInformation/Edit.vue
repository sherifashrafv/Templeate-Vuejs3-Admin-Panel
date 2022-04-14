<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="mt-5">
          <div class="text-center mb-2">
            <h3>
              <strong class="text-black text-uppercase">{{
                currentRouteName
              }}</strong>
            </h3>
            <p>Best place to buy and sell digital products</p>
          </div>
        </div>
      </div>
      <div class="form-sitation">
        <form class="">
          <div
            class="system d-flex flex-column gap-2 flex-md-column justify-content-between"
          >
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.username.$error">
                  Should Write UserName !!
                </span>
              </Transition>
              <label
                for="username"
                class="form-label text-black text-uppercase fw-bold"
                >User Name:</label
              >
              <input
                v-model="register.username"
                type="text"
                class="form-control"
                id="username"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>

            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.lastName.$error">
                  Should Write lastName !!
                </span>
              </Transition>
              <label
                for="LastName"
                class="form-label text-black text-uppercase fw-bold"
                >LastName:</label
              >
              <input
                v-model="register.lastName"
                type="text"
                class="form-control"
                id="LastName"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
          </div>

          <div class="system d-flex flex-column gap-2 justify-content-between">
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.email.$error">
                  Should Write email !!
                </span>
              </Transition>
              <label
                for="exampleInputEmail1"
                class="form-label text-black text-uppercase fw-bold"
                >Email address</label
              >
              <input
                v-model="register.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.password.$error">
                  Should Write password !!
                </span>
              </Transition>
              <label
                for="password"
                class="form-label text-black text-uppercase fw-bold"
                >Password</label
              >
              <input
                v-model="register.password"
                type="password"
                class="form-control"
                id="password"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
          </div>
          <div class="system d-flex flex-column gap-2 justify-content-between">
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.address.$error">
                  Should Write address !!
                </span>
              </Transition>
              <label
                for="address"
                class="form-label text-black text-uppercase fw-bold"
                >Address</label
              >
              <input
                v-model="register.address"
                type="text"
                class="form-control"
                id="address"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.phone.$error">
                  Should Write phone !!
                </span>
              </Transition>
              <label
                for="phone"
                class="form-label text-black text-uppercase fw-bold"
                >phone</label
              >
              <input
                v-model="register.phone"
                type="password"
                class="form-control"
                id="phone"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
          </div>
          <label class="mb-2 text-black text-uppercase fw-bold">Country</label>
          <select
            v-model="register.select"
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option disabled selected>Country</option>
            <option value="cairo">Cairo</option>
            <option value="Alex">Alex</option>
            <option value="Mansoura">Mansoura</option>
          </select>
          <div class="d-flex flex-row justify-content-center">
            <button @click="signUp()" type="submit" class="btn-custome">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Register-vue",
  setup() {
    const register = reactive({
      email: "",
      password: "",
      username: "",
      lastName: "",
      address: "",
      phone: "",
      id: "",
      countray: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(0, 9) },
        username: { required, minLength: minLength(0, 6) },
        lastName: { required, minLength: minLength(0, 6) },
        address: { required },
        phone: { required, minLength: minLength(0, 10) },
        countray: { required },
      };
    });
    const v$ = useValidate(rules, register);
    return {
      register,
      v$,
    };
  },
  methods: {
    ...mapActions(["redirTo"]),

    async signUp() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validation");
        let result = await axios.put(`users/${this.register.id}`, {
          email: this.register.email,
          password: this.register.password,
          username: this.register.username,
          lastName: this.register.lastName,
          address: this.register.address,
          phone: this.register.phone,
          countray: this.register.countray,
        });
        console.log(result.data);
        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.redirTo({ val: "/" });
        }
      } else {
        console.log("notvalidate");
      }
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.register.id = JSON.parse(user).id;
      console.log(this.register.id);
    } else {
      this.redirTo({ val: "/" });
    }
  },
};
</script>
<style scoped>
.form-sitation {
  border: 4px dashed black;
  width: 100%;
  margin: auto;
  padding: 30px;
  border-radius: 3px;
}
.content {
  height: 600px;
}

select {
  padding: 0.375rem 0.75rem;
  width: 100%;
  border: none;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 0.25rem;
}
.form-control {
  width: 100%;
}
.system > div {
  width: calc(100% / 2);
}
.service select {
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
}
.service > div {
  width: calc(100% / 2);
}
.error {
  position: absolute;
  top: 0%;
  color: red;
  right: 0;
}
.btn-custome {
  font-size: 16px;
  width: 150px;
  margin-top: 15px;
  height: 44px;
  background: white;
  color: black;
  border: 3px dotted black;
  transition: 0.3s ease-in-out;
}
.btn-custome:hover {
  border: 3px dotted white;
  background: black;
  color: white;
}
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
