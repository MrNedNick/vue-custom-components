<template>
  <div id="app">
    <form @submit.prevent="checkForm" class="form">
      <InputComponent
        label="Name"
        placeholder="Enter your name"
        :autocoplete="autocompleteOptions"
        v-model="formData.name"
        :rules="['required', 'min:5', 'max:7']"
        class="component"
      />
      <InputComponent
        label="Surname"
        placeholder="Enter your email"
        :autocoplete="autocompleteOptions"
        v-model="formData.surname"
        :rules="['required', 'min:3', 'max:5']"
        class="component"
      />
      <InputComponent
        label="Email"
        placeholder="Enter your email"
        :autocoplete="autocompleteOptions"
        v-model="formData.email"
        :rules="['required', 'email']"
        class="component"
      />
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
        v-model="formData.country"
        :rules="['required']"
        class="component"
      />
      <FileInputComponent
        v-model="formData.file"
        :rules="['required', 'maxSize:1', 'minSize:0.1']"
        label="Upload text"
        prepandIcon="mdi mdi-camera"
        class="component"
      />
      <DatePickerComponent
        label="Date"
        v-model="formData.date"
        :rules="['required']"
        class="component"
      />
      <CheckboxGroup
        v-model="formData.checkboxes"
        :rules="errors.checkboxes"
        class="component"
      />
      <button type="submit" class="button">Submit</button>
    </form>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import SelectComponent from "./components/SelectComponent.vue";
import FileInputComponent from "./components/FileInputComponent.vue";
import DatePickerComponent from "./components/DatePickerComponent.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import CheckboxComponent from "./components/CheckboxComponent.vue";

export default {
  name: "App",
  components: {
    InputComponent,
    SelectComponent,
    FileInputComponent,
    DatePickerComponent,
    CheckboxGroup,
    CheckboxComponent,
  },
  data() {
    return {
      formData: {
        name: "",
        surname: "",
        email: "",
        country: "",
        date: "",
        file: null,
        checkboxes: [
          { label: "Submit terms and conditions", value: true },
          { label: "I agree to receive emails", value: false },
        ],
      },
      errors: {
        name: "",
        email: "",
        country: "",
        date: "",
        filte: "",
        checkboxes: "",
      },
      prepandIconClass: "mdi mdi-heart-outline",
      selectItems: ["apple", "banana", "cherry", "durian", "elderberry"],
      autocompleteOptions: [
        "apple",
        "banana",
        "cherry",
        "durian",
        "elderberry",
      ],
    };
  },
  // watch: {
  //   formData: {
  //     deep: true,
  //     handler() {
  //       this.checkForm();
  //     },
  //   },
  // },
  methods: {
    checkForm() {
      this.errors = {};
      if (!this.formData.name) {
        this.formData.name = undefined;
      }
      if (!this.formData.surname) {
        this.formData.surname = undefined;
      }
      if (!this.formData.email) {
        this.formData.email = undefined;
      }
      if (!this.formData.country) {
        this.formData.country = undefined;
      }
      if (!this.formData.date) {
        this.formData.date = undefined;
      }
      if (!this.formData.file) {
        this.formData.file = undefined;
      }
      if (!Object.keys(this.errors).length) {
        console.log(this.formData);
        console.log("checkForm");
      }
    },
  },
};
</script>

<style lang="scss">
$material-design-icons-font-directory-path: "~material-design-icons-iconfont/dist/fonts/";
@import "~material-design-icons-iconfont/src/material-design-icons";
body {
  background: rgb(71, 71, 71);
}
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 500px;
}
.button {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 16px;
  width: 375px;
  height: 58px;
  background: #5570f1;
  border-radius: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background: #5b6ec6;
  }
  &:active {
    background-color: #5570f1;
  }
}
.component {
  margin-bottom: 20px;
}
</style>
