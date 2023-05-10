<template>
  <div id="app">
    <form @submit.prevent="onSubmit" class="form">
      <h3 class="title">Input: {{ formData.name }}</h3>
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        :autocoplete="autocompleteOptions"
        v-model="formData.name"
      />
      <h3 class="title">Select: {{ formData.country }}</h3>
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
        v-model="formData.country"
      />
      <h3 class="title">Checkboxes: {{ formData.checkboxes }}</h3>
      <div class="checkbox-group">
        <CheckboxComponent
          v-for="(item, index) of checkboxesData"
          :key="index"
          :label="item.label"
          :value="item.value"
          v-model="formData.checkboxes"
        />
      </div>
      <h3 class="title">File Input: {{ formData.file }}</h3>
      <FileInputComponent
        v-model="formData.file"
        label="Upload Logo"
        prepandIcon="mdi mdi-camera"
      />
      <h3 class="title">Date Picker: {{ formData.date }}</h3>
      <DatePickerComponent label="Date" v-model="formData.date" />
      <button type="submit" class="button">Submit</button>
    </form>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import SelectComponent from "./components/SelectComponent.vue";
import FileInputComponent from "./components/FileInputComponent.vue";
import DatePickerComponent from "./components/DatePickerComponent.vue";
import CheckboxComponent from "./components/CheckboxComponent.vue";

export default {
  name: "App",
  components: {
    InputComponent,
    SelectComponent,
    FileInputComponent,
    DatePickerComponent,
    CheckboxComponent,
  },
  data() {
    return {
      formData: {
        name: "",
        country: "",
        date: "",
        file: null,
        checkboxes: [],
      },
      prepandIconClass: "mdi mdi-heart-outline",
      selectItems: ["apple", "banana", "cherry", "durian", "elderberry"],
      checkboxesData: [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Durian", value: "durian" },
        { label: "Elderberry", value: "elderberry" },
      ],
      autocompleteOptions: [
        "apple",
        "banana",
        "cherry",
        "durian",
        "elderberry",
      ],
    };
  },
  methods: {
    consoleValue(value) {
      console.log(value);
    },
    onSubmit() {
      console.log(this.formData);
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
    background: #5B6EC6;
  }
  &:active {
    background-color: #5570F1;
  }
}

</style>
