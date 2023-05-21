<template>
  <div>
    <div v-for="(item, index) of checkboxes" :key="index">
      <label class="checkbox__wrapper" :for="item.label">
        {{ item.label }}
        <input
          class="checkbox__input"
          type="checkbox"
          :id="item.label"
          :checked="item.value"
          @change="updateCheckbox(index, $event.target.checked)"
        />
        <span class="checkbox__checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  props: {
    value: {
      type: Array,
    },
  },
  mounted() {
    this.checkboxes = this.value;
  },
  data() {
    return {
      checkboxes: [],
    };
  },
  methods: {
    updateCheckbox(index, checked) {
      this.checkboxes[index].value = checked;
      this.updateInput();
    },
    updateInput() {
      this.$emit("update:modelValue", this.checkboxes);
    },
  },
};
</script>