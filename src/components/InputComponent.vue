<template>
  <div class="component">
    <span class="component_label">{{ label }}</span>
    <input 
      type="text" 
      class="input" 
      :value="value"
      @input="$emit('updateInput', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: {
      type: String,
      default: '',
    }, 
    label: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
.component {
  width: 375px;
  height: 58px;
  border-radius: 8px;
  border: 1px solid black;
  &_label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #5E6366;
  }
}
</style>