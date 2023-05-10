<template>
  <div class="wrapper-date">
    <date-picker
      class="input-date__wrapper"
      :class="inputClass"
      valueType="MM/DD/YYYY"
      format="MM/DD/YYYY"
      :default-value="value"
      :disabled="disabled"
      :value="value"
      @input="$emit('input', $event)"
      @focus="isFocus = true"
      @blur="isFocus = false"
    >
    </date-picker>
    <span class="input-date__label" :class="{ 'active-label': isFocus }">
      {{ label }}
    </span>
    <i v-if="valid" class="mdi mdi-check-circle input-date__icon-valid"></i>
    <p v-if="error" class="input-date__error-text">{{ error }}</p>
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
    valid: {
      type: Boolean,
    },
    error: {
      type: String,
    },
  },
  components: { DatePicker },
  data() {
    return {
      isFocus: false,
    };
  },
  computed: {
    inputClass() {
      return {
        input__disabled: this.disabled,
        input__error: this.error,
        input__valid: this.valid,
        input__filled: this.value,
      };
    },
  },
};
</script>

<style lang="scss">
.wrapper-date {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    margin-right: 5px;
    color: #5e6366;
    width: 18px;
    height: 18px;
  }
}
.mx-datepicker-body,
.mx-calendar {
  width: 375px;
  height: 280px;
}
.mx-input:focus {
  border: 1px solid #5570f1 !important;
}
.mx-input:hover {
  border: 1px solid #5570f1 !important;
}
.input-date__wrapper {
  &.disabled .mx-input {
    background-color: #f2f4f5;
    border: 1px solid #dde2e5;
  }
  &.input__valid .mx-input {
    border: 1px solid #32936f;
  }
  &.input__valid + .input-date__label {
    color: #32936f;
  }
  &.input__error .mx-input {
    border: 1px solid #f57e77;
  }
  &.input__error + .input-date__label {
    color: #f57e77;
  }
  &.input__filled .mx-input {
    border: 1px solid #5e6366;
  }
}
.input-date__icon-valid {
  position: absolute;
  z-index: 1;
  top: 18px;
  left: 315px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: rgba(50, 147, 111);
  pointer-events: none;
}
.input-date__error-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #f57e77;
  margin: 2px 0;
}
.input-date__label.active-label {
  color: #5570f1;
}
</style>