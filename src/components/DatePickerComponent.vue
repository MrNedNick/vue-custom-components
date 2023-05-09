<template>
  <div class="wrapper-date">
    <date-picker
      class="input-date__wrapper"
      valueType="MM/DD/YYYY"
      format="MM/DD/YYYY"
      :default-value="value"
      :disabled="disabled"
      :value="value"
      @input="$emit('input', $event)"
    >
    </date-picker>
    <span class="input-date__label">{{ label }}</span>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "DatePickerComponent",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
  components: { DatePicker },
};
</script>

<style lang="scss">
.wrapper-date {
  position: relative;
  .mx-datepicker {
    min-width: 375px;
  }
  .mx-input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #5e6366;
    min-height: 58px;
    border-radius: 8px;
    padding-top: 20px;
    padding-left: 17px;
  }
  .input-date__label {
    position: absolute;
    top: 7px;
    left: 16px;
    height: 100%;
    pointer-events: none;
    border: 1px solid transparent;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #5e6366;
  }
  .mx-icon-calendar,
  .mx-icon-clear {
    margin-right: 8px;
  }
}
.input-date__wrapper:hover + .input-date__label {
  color: #5570f1;
}
</style>