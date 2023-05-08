<template>
  <div id="app">
    <div class="form">
      <h2 class="title">Input: {{ formData.name }}</h2>
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        :autocoplete="autocompleteOptions"
        v-model="formData.name"
        class="component"
      />
      <h2 class="title">Select: {{ formData.country }}</h2>
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        class="component"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
        v-model="formData.country"
      />
      <h2 class="title">Checkboxes: {{ formData.checkboxes }}</h2>
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
      <h2 class="title">File Input</h2>
      <FileInputComponent class="component" />
      <h2 class="title">Date Picker</h2>
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
        country: "apple",
        data: "",
        avatar: "",
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
    updateInput() {
      console.log(this.formData);
    },
    updateSelect(value) {
      console.log(value);
    },
    updateCheckbox(value) {
      this.formData.checkboxes = value;
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
// .component {
//   margin: 0px;
// }
// .title {
//   display: block;
// }
</style>
