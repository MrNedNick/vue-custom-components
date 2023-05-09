<template>
  <div id="app">
    <div class="form">
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
      <!-- <CheckboxGroup
        :checkBoxes="formData.checkboxes"
        @onChange="updateCheckbox"
      /> -->
      <div class="checkbox-group">
        <CheckboxComponent
          label="Apple"
          value="apple"
          v-model="formData.checkboxes"
        />
        <CheckboxComponent
          label="Banana"
          value="banana"
          v-model="formData.checkboxes"
        />
        <CheckboxComponent
          label="Cherry"
          value="cherry"
          v-model="formData.checkboxes"
        />
        <CheckboxComponent
          label="Durian"
          value="durian"
          v-model="formData.checkboxes"
        />
        <CheckboxComponent
          label="Berry"
          value="berry"
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
    </div>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import SelectComponent from "./components/SelectComponent.vue";
import FileInputComponent from "./components/FileInputComponent.vue";
import DatePickerComponent from "./components/DatePickerComponent.vue";
import CheckboxComponent from "./components/CheckboxComponent.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";

export default {
  name: "App",
  components: {
    InputComponent,
    SelectComponent,
    FileInputComponent,
    DatePickerComponent,
    CheckboxComponent,
    CheckboxGroup,
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
</style>
