<template>
  <div>
    <label class="checkbox__wrapper">
      {{ label }}
      <input
        class="checkbox__input"
        type="checkbox"
        :value="value"
        :checked="checked"
        @change="$emit('updateCheckbox', $event.target.checked, $event.target.value)"
      />
      <span class="checkbox__checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ChekboxComponent",
  props: {
    checked: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  methods: {
    onChange(checked, value) {
      console.log(`${value}: ${checked}`)
    }
  }
};
</script>

<style lang="scss">
.checkbox {
  &__wrapper {
    display: flex;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    border-radius: 6px;
    user-select: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #131414;
  }
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkbox__checkmark {
      background-color: #5570f1;
    }
    &:checked ~ .checkbox__checkmark:after {
      display: block;
    }
    &:checked ~ .checkbox__checkmark:before {
      border: 1px solid #6d7dcd;
    }
  }
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 6px;
    &:before {
      content: "";
      position: absolute;
      display: block;
      left: -2px;
      top: -2px;
      width: 22px;
      height: 22px;
      border: 1px solid #cfd3d4;
      border-radius: 0.7px;
      border-radius: 8px;
    }
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 3.6px;
      width: 4px;
      height: 8px;
      border: solid #b0cad9;
      border-radius: 0.7px;
      border-width: 0px 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}
</style>