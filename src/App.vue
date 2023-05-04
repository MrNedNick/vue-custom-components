<template>
  <div id="app">
    <div class="form">
        <!-- icon="mdi mdi-plus" -->
      <InputComponent
        label="Label"
        placeholder="Placeholder"
        value=""
        :disabled="false"
        error="Something went wrong..."
        icon=""
        @updateInput="updateInput"
      />
      <SelectComponent style="margin-top: 40px"/>
    </div>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import SelectComponent from "./components/SelectComponent.vue";

export default {
  name: "App",
  components: {
    SelectComponent,
    InputComponent,
  },
  methods: {
    updateInput(value) {
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
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
