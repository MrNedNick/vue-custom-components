<template>
  <div>
    <CheckboxComponent label="Apple" value="apple" v-model="checkboxesCopy" />
    <CheckboxComponent label="Banana" value="banana" v-model="checkboxesCopy" />
    <CheckboxComponent label="Cherry" value="cherry" v-model="checkboxesCopy" />
    <CheckboxComponent label="Durian" value="durian" v-model="checkboxesCopy" />
    <CheckboxComponent label="Berry" value="berry" v-model="checkboxesCopy" />
  </div>
</template>

<script>
import CheckboxComponent from "./CheckboxComponent.vue";
export default {
  name: "CheckboxGroup",
  components: { CheckboxComponent },
  props: {
    checkboxes: {
      type: Array,
    },
  },
  data() {
    return {
      checkboxesCopy: [],
    };
  },
  mounted() {
    this.checkboxesCopy = this.checkboxes;
  },
  watch: {
    checkboxesCopy() {
      this.$emit("onChange", this.checkboxesCopy);
    },
  },
};
</script>

<style>
</style>