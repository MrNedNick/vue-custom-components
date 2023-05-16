<template>
  <div>
    <div v-for="(item, index) of value" :key="index">
      <label class="checkbox__wrapper" :for="item.label">
        {{ item.label }}
        <input
          class="checkbox__input"
          type="checkbox"
          :value="item.value"
          :id="item.index"
          :checked="item.value"
          @change="updateInput"
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
  methods: {
    updateInput() {
      console.log('item')
    }
  }
};
</script>

<style>
</style>