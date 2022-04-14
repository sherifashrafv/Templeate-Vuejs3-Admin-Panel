<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="mt-5">
          <div class="text-center mb-2">
            <h3><strong>LOGIN</strong></h3>
            <p>Best place to buy and sell digital products</p>
          </div>
          <div class="form-sitation">
            <form>
              <div class="mb-3 position-relative">
                <span class="error" v-if="v$.email.$error">
                  Email Not Found
                </span>
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  v-model="register.email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="email ? "
                />
              </div>
              <div class="mb-3 position-relative">
                <span class="error" v-if="v$.password.$error">
                  Password is Wrong
                </span>
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  v-model="register.password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="password ? "
                />
              </div>
              <div
                class="d-flex align-items-center p-0 m-0 flex-column justify-content-center"
              >
                <button
                  @click.prevent="signUp()"
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit
                </button>
                <router-link to="/Register" class="btn btn-secondary">
                  Register</router-link
                >
              </div>
            </form>
          </div>
        </div>
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
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(0, 9) },
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
        let result = await axios.get(
          `/users?email=${this.register.email}&password=${this.register.password}`
        );
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.redirTo({ val: "/" });
        }
      } else {
        console.log("notvalidate");
      }
    },
  },
};
</script>
<style scoped>
.form-sitation {
  border: 1px solid #ededed;
  max-width: 630px;
  margin: auto;
  padding: 50px 30px;
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
.btn.btn-primary {
  font-size: 16px;
  width: 150px;
  margin-top: 15px;
  height: 44px;
  min-width: unset;
  background: #0b5ed7;
}
.btn {
  font-size: 16px;
  width: 150px;
  margin-top: 15px;
  height: 44px;
  min-width: unset;
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
