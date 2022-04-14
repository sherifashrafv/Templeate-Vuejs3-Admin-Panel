<template>
  <div class="position-relative overflow-hidden">
    <!-- image_show && 'image-box show', image_show && 'image-box' -->
    <!-- v-bind:class="[imageShow ? 'image-box show' : 'image-box']" -->
    <div
      v-if="imageShow"
      v-bind:class="[imageShow ? 'main-box show' : 'main-box']"
    >
      <div class="box d-flex flex-column justify-content-center p-3">
        <div class="img-preview">
          <img class="w-100" :src="preview" alt="" />
        </div>
      </div>
    </div>
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
                <span class="error" v-if="v$.title.$error">
                  You Should Write Your Title Product
                </span>
              </Transition>
              <label for="username" class="form-label text-black fw-bold"
                >ProductTitle?</label
              >
              <input
                v-model="register.title"
                type="text"
                class="form-control"
                id="username"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
          </div>

          <div class="system d-flex flex-column gap-2 justify-content-between">
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.price.$error">
                  Must Wirte Your Price
                </span>
              </Transition>
              <label
                for="exampleInputEmail1"
                class="form-label text-black text-uppercase fw-bold"
                >Price</label
              >
              <input
                v-model="register.price"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
          </div>
          <div class="system d-flex flex-column gap-2 justify-content-between">
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="additional.length <= 0">
                  {{ additionalerror }}
                </span>
              </Transition>
              <label
                for="address"
                class="form-label text-black text-uppercase fw-bold"
                >Category</label
              >
              <div
                class="form-check d-flex flex-row align-items-center justify-content-center gap-5"
              >
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="mens"
                    @change="uniqueCheck"
                    v-model="additional"
                    id="mens"
                  />
                  <label class="form-check-label" for="mens"> Mens </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Women"
                    value="women"
                    @change="uniqueCheck"
                    v-model="additional"
                  />
                  <label class="form-check-label" for="Women"> Women </label>
                </div>
                <div>
                  <input
                    value="kids"
                    @change="uniqueCheck"
                    v-model="additional"
                    class="form-check-input"
                    type="checkbox"
                    id="Kids"
                  />
                  <label class="form-check-label" for="Kids"> Kids </label>
                </div>
              </div>
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3 w-100 position-relative">
              <Transition>
                <span class="error" v-if="v$.description.$error">
                  Should Write phone !!
                </span>
              </Transition>
              <label
                for="phone"
                class="form-label text-black text-uppercase fw-bold"
                >Description</label
              >
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  v-model="register.description"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Product Description</label>
              </div>
              <div id="emailHelp" class="form-text"></div>
            </div>
          </div>
          <!-- upload-file -->
          <!-- <label for="file" class="upload">
            <span>Upload Your Picture</span>
            <input ref="file" @change="previewImage" type="file" id="file" />
          </label> -->

          <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            :allow-multiple="false"
            accepted-file-types="image/jpeg, image/png"
            v-bind:files="myFiles"
          />

          <!-- End-upload-file -->
          <div class="d-flex flex-row justify-content-center">
            <button @click.prevent="submit()" type="submit" class="btn-custome">
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
import { required, minLength, maxLength } from "@vuelidate/validators";
import { reactive, computed, ref } from "vue";
import { mapActions } from "vuex";
import axios from "axios";

// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles

// Import image preview and file type validation plugins

// Create component
const FilePond = vueFilePond();

export default {
  name: "Register-vue",

  setup() {
    const additional = ref([]);
    const additionalerror = ref();
    // file-upload-image

    // ENDDDDDD//////////////////
    const fileName = ref("");
    const register = reactive({
      id: "",
      title: "",
      price: "",
      description: "",
    });

    const rules = computed(() => {
      return {
        title: { required },
        price: { required, minLength: minLength(1), maxLength: maxLength(15) },
        description: { required, minLength: minLength(1, 20) },
      };
    });
    const v$ = useValidate(rules, register);
    return {
      register,
      v$,
      fileName,
      additional,
      additionalerror,
    };
  },
  methods: {
    ...mapActions(["redirTo"]),

    async submit() {
      this.v$.$validate();
      if (!this.v$.$error && this.additional) {
        console.log("form validation");
        // let formData = new FormData();
        // formData.append("image", this.register.image);
        let result = await axios
          .post(`usersProducts/`, {
            title: this.register.title,
            price: this.register.price,
            categories: this.additional,
            userid: this.register.id,
            // img: this.register.image,
          })
          .catch(() => console.warn("error"));
        console.log(result.data);
        if (result.status == 201) {
          localStorage.setItem("product", JSON.stringify(result.data));
          this.redirTo({ val: "/Settings/Products" });
          console.log("yes");
        }
        this.additionalerror = "";
      } else {
        this.additionalerror = "you must get your catigories";
      }
    },
    uniqueCheck(e) {
      this.additional = [];
      if (e.target.checked) {
        this.additional.push(e.target.value);
      }
    },
    // previewImage(event) {
    //   var input = event.target;
    //   if (input.files) {
    //     var reader = new FileReader();
    //     reader.onload = (e) => {
    //       this.preview = e.target.result;
    //     };
    //     this.register.image = input.files[0];
    //     reader.readAsDataURL(input.files[0]);
    //     console.log(this.register.image);
    //     setTimeout(() => {
    //       this.imageShow = true;
    //     }, 100);
    //     setTimeout(() => {
    //       this.imageShow = false;
    //     }, 5000);
    //   }
    // },
    methods: {
      /*
				Submits the file to the server
			*/
      /*
				Handles a change on the file upload
			*/
      handleFileUpload(event) {
        /*
					Set the local file variable to what the user has selected.
				*/
        this.file = event.target.files[0];
        /*
					Initialize a File Reader object
				*/
        let reader = new FileReader();
        /*
					Add an event listener to the reader that when the file
					has been loaded, we flag the show preview as true and set the
					image to be what was read from the reader.
				*/
        reader.addEventListener(
          "load",
          function () {
            this.showPreview = true;
            this.imagePreview = reader.result;
          }.bind(this),
          false
        );
        /*
					Check to see if the file is not empty.
				*/
        if (this.file) {
          /*
						Ensure the file is an image file.
					*/
          if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
            /*
							Fire the readAsDataURL method which will read the file in and
							upon completion fire a 'load' event which we will listen to and
							display the image in the preview.
						*/
            reader.readAsDataURL(this.file);
          }
        }
      },
    },
    // validationFileExetension(id) {
    //   let fileInput = document.getElementById(id);
    //   let filePath = fileInput.value;
    //   let allowExetensions = /(\.jpg|\.png|\.jpeg|\.gif)$/i;
    //   if (!allowExetensions.exec(filePath)) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
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

  components: {
    FilePond,
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
.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid black;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-radius: 1px !important;
  box-shadow: none;
  outline: none;
}
.form-check {
  width: 270px;
}
.form-check-input:checked {
  background-color: black;
  border-color: white;
  box-shadow: none !important;
  outline: none !important;
  width: 20px;
  height: 20px;
}
.form-check-input:focus {
  box-shadow: 0 0 0 0.1rem black;
  border-color: black !important;
  outline: 0;
}
.upload {
  width: 100%;
  text-align: center;
  background: black;
  height: 100%;
  padding: 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin-bottom: 5px;
}
.upload:hover {
  background: white;
  color: black;
}
.upload:hover span {
  color: black;
}
.upload input {
  visibility: hidden;
}
.upload span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
}
/* .image-box {
  background: black;
  width: 450px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.img-preview {
  position: absolute;
  z-index: 333;
  top: 50%;
  left: 50%;
  transform: translate(130%, -29%);
  transition: 0.5s ease-in;
}
.img-preview.show {
  transform: translate(30%, -29%);
  display: block !important;
} */
.main-box {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  transform: translate(130%, -29%);
  transition: visibility 1.5s ease-in-out !important;
  visibility: hidden;
}
.main-box.show {
  transform: translate(27%, 6%);
  visibility: visible;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  width: 263px;
  padding: 14px !important;
}
.img-preview {
  max-width: 100%;
}
>>> .filepond--drop-label {
  background: black;
  color: white;
  font-weight: bold;
  font-size: 15px;
}
.form-control:focus {
  box-shadow: none !important;
  border-color: black;
}
</style>
