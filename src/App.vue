<template>
  <div id="app">
    <div class="form">
      <InputComponent 
        label='Label'
        @updateInput="updateInput" 
      />
      <SelectComponent />
    </div>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent.vue';
import SelectComponent from "./components/SelectComponent.vue";

export default {
  name: "App",
  components: {
    SelectComponent,
    InputComponent,
  },
  methods: {
    updateInput(value){
      console.log(value);
    }
  }
};
</script>

<style lang="scss">
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
