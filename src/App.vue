<template>
  <div id="app">
    <div class="form">
      <h2>Input: {{ formData.name }}</h2>
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        :disabled="false"
        :error="false"
        :valid="false"
        icon=""
        v-model="formData.name"
        class="component"
      />
      <h2>Select</h2>
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :disabled="false"
        :error="false"
        :valid="false"
        icon=""
        @updateSelect="updateSelect"
        class="component"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
      />
      <h2>Checkboxes</h2>
      <CheckboxComponent
        label="item 1"
        value="first"
        :checked="true"
        class="component"
        @updateCheckbox="updateCheckbox"
      />
      <h2>File Input</h2>
      <FileInputComponent class="component" />
      <h2>Date Picker</h2>
      <DatePickerComponent class="component" />
    </div>
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
        data: "",
        avatar: "",
        checkbox: "",
      },
      selectItems: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
      ],
      prepandIconClass: "mdi mdi-heart-outline",
    };
  },
  methods: {
    updateInput() {
      console.log(this.formData);
    },
    updateSelect(value) {
      console.log(value);
    },
    updateCheckbox(checked, value) {
      console.log(`${value}: ${checked}`);
    },
  },
};
</script>

<style lang="scss">
$material-design-icons-font-directory-path: "~material-design-icons-iconfont/dist/fonts/";
@import "~material-design-icons-iconfont/src/material-design-icons";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: "Inter";
}
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 500px;
}
.component {
  margin-top: 30px;
}
</style>
