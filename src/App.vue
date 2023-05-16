<template>
  <div id="app">
    <form @submit.prevent="checkForm" class="form">
      <InputComponent
        label="Name"
        placeholder="Enter your name"
        :autocoplete="autocompleteOptions"
        v-model="formData.name"
        :error="errors.name"
        class="component"
      />
      <InputComponent
        label="Second name"
        placeholder="Enter your email"
        :autocoplete="autocompleteOptions"
        v-model="formData.email"
        :error="errors.email"
        class="component"
      />
      <InputComponent
        label="Email"
        placeholder="Enter your email"
        :autocoplete="autocompleteOptions"
        v-model="formData.email"
        :error="errors.email"
        class="component"
      />
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
        v-model="formData.country"
        :error="errors.country"
        class="component"
      />
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
        v-model="formData.country"
        :error="['required', 'min:5']"
        class="component"
      />
      <FileInputComponent
        v-model="formData.file"
        :error="errors.file"
        label="Upload Logo"
        prepandIcon="mdi mdi-camera"
        class="component"
      />
      <FileInputComponent
        v-model="formData.file"
        :error="errors.file"
        label="Upload text"
        prepandIcon="mdi mdi-camera"
        class="component"
      />
      <DatePickerComponent
        label="Date"
        v-model="formData.date"
        :error="errors.date"
        class="component"
      />
      <!-- <CheckboxComponent
        v-model="formData.checkboxes"
        :error="errors.checkboxes"
      /> -->
      <CheckboxGroup
        v-model="formData.checkboxes"
        :error="errors.checkboxes"
        class="component"
      />
      <!-- <div class="checkbox-group">
        <CheckboxComponent
          v-for="(item, index) of checkboxesData"
          :key="index"
          :label="item.label"
          :value="item.value"
          v-model="formData.checkboxes"
          :error="errors.checkboxes"
        />
      </div> -->
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
import CheckboxComponent from './components/CheckboxComponent.vue';

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
        email: "",
        country: "",
        date: "",
        file: null,
        checkboxes: [
          { label: "Apple", value: false },
          { label: "Banana", value: true },
          { label: "Cherry", value: false },
          { label: "Durian", value: false },
          { label: "Elderberry", value: false },
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
    // consoleValue(value) {
    //   console.log(value);
    // },
    checkForm() {
      function validation(rule, value, name) {
        // TODO: parse rule param
        const rules = {
          required: function(e) {
            return !e ? `${name} is required` : '';
          },
          min: function(params.min) {}
        };
        return rules[rule](value);
      }
      function validation(rulesName, value, name) {
        // TODO: parse rule param
        // TODO: should handle few errors
        const rules = {
          required: function(e) {
            return !e ? `${name} is required` : '';
          },
          min: function(params.min) {}
        };
        return rules[rule](value);
      }

      this.errors = {};
      if (!this.formData.name.length) {
        this.errors.name = "Name is required!";
      } else if (this.formData.name.length < 4) {
        this.errors.name = "Min length 4!";
      } else if (this.formData.name.length > 10) {
        this.errors.name = "Max length 10!";
      }
      if (!this.formData.email.length) {
        this.errors.email = "Email is required!";
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.email = "Enter valid email.";
      }
      if (!this.formData.country.length) {
        this.errors.country = "Country is required!";
      }
      if (!this.formData.file) {
        this.errors.file = "Logo is required!";
      } else if (this.formData.file?.size > 50000) {
        this.errors.file = "Max size of image 50KB!";
      }
      if (!this.formData.date.length) {
        this.errors.date = "Date is required!";
      }
      if (!Object.keys(this.errors).length) {
        console.log(this.formData);
        console.log("checkForm");
      }
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss">
$material-design-icons-font-directory-path: "~material-design-icons-iconfont/dist/fonts/";
@import "~material-design-icons-iconfont/src/material-design-icons";
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
