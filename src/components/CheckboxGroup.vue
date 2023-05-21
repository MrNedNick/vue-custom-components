<template>
  <div>
    <div v-for="(item, index) of checkboxes" :key="index">
      <label class="checkbox__wrapper" :for="item.label">
        {{ item.label }}
        <input
          class="checkbox__input"
          type="checkbox"
          :id="item.index"
          :checked="item.value"
          @change="item.value = $event.target.checked"
        />
        <span class="checkbox__checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script>
import CheckboxComponent from "./CheckboxComponent.vue";
export default {
  name: "CheckboxComponent",
  components: { CheckboxComponent },
  props: {
    value: {
      type: Array,
    },
  },
  mounted() {
    this.checkboxes = this.value;
    console.log(this.checkboxes);
  },
  data() {
    return {
      checkboxes: [],
    };
  },
  methods: {
    updateInput() {
      this.$emit("update:modelValue", this.checkboxes);
    },
  },
};
</script>

<style>
</style>