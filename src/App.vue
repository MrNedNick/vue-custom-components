<template>
  <div id="app">
    <div class="form">
      <h2>Input</h2>
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        value=""
        :disabled="false"
        :error="false"
        :valid="false"
        icon=""
        @updateInput="updateInput"
        class="component"
      />
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        :error="true"
        @updateInput="updateInput"
        class="component"
      />
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        :valid="true"
        @updateInput="updateInput"
        class="component"
      />
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        value=""
        :disabled="true"
        @updateInput="updateInput"
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
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        icon=""
        @updateSelect="updateSelect"
        class="component"
        :items="selectItems"
        :default="selectItems[0]"
        :prepandIcon="prepandIconClass"
      />
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :error="true"
        icon=""
        @updateSelect="updateSelect"
        class="component"
        :items="selectItems"
        :default="selectItems[0]"
        :prepandIcon="prepandIconClass"
      />
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :valid="true"
        icon=""
        @updateSelect="updateSelect"
        class="component"
        :items="selectItems"
        :default="selectItems[0]"
        :prepandIcon="prepandIconClass"
      />
      <SelectComponent
        label="Label"
        placeholder="Placeholder"
        :disabled="true"
        icon=""
        @updateSelect="updateSelect"
        class="component"
        :items="selectItems"
        :prepandIcon="prepandIconClass"
      />
      <FileInputComponent 
        class="component"
      />
    </div>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import SelectComponent from "./components/SelectComponent.vue";
import FileInputComponent from "./components/FileInputComponent.vue";

export default {
  name: "App",
  components: {
    SelectComponent,
    InputComponent,
    FileInputComponent,
  },
  data() {
    return {
      selectItems: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
      ],
      prepandIconClass: 'mdi mdi-heart-outline',
    };
  },
  methods: {
    updateInput(value) {
      console.log(value);
    },
    updateSelect(value) {
      console.log(value);
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
