<template>
  <div class="wrapper">
    <input
      class="input"
      :class="inputClass"
      type="text"
      id="input"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
      @keydown.enter.prevent="onEnter"
      :value="value"
    />
    <label class="input__label" for="input">{{ label }}</label>
    <p v-if="isShowAutocomplete" class="input__autocomplete">
      {{ filteredOptions[0] }}
    </p>
    <i v-if="valid" class="mdi mdi-check-circle icon__valid"></i>
    <p v-if="error" class="input__error-text">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    error: {
      type: String,
    },
    valid: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    autocoplete: {
      type: Array,
    },
  },
  data() {
    return {
      inputValue: "",
      filteredOptions: [],
    };
  },
  mounted() {
    this.inputValue = this.value;
  },
  computed: {
    inputClass() {
      return {
        input__disabled: this.disabled,
        input__error: this.error,
        input__valid: this.valid,
      };
    },
    isShowAutocomplete() {
      return this.filteredOptions.length > 0 && this.inputValue !== "";
    },
  },
  methods: {
    onInput(value) {
      this.inputValue = value;
      if (this.autocoplete) {
        this.filteredOptions = this.autocoplete.filter((option) =>
          option.startsWith(this.inputValue)
        );
      }
      this.$emit("input", this.inputValue);
    },
    onEnter() {
      if (this.filteredOptions.length > 0) {
        this.inputValue = this.filteredOptions[0];
        this.$emit("input", this.inputValue);
      }
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 374px;
  min-height: 58px;
  overflow: hidden;
}
.input {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #abafb1;
  padding: 20px 16px 5px 16px;
  min-width: 341px;
  min-height: 31px;
  border-radius: 8px;
  border: 1px solid #cfd3d4;
  outline: none;
  &__label {
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
  &__autocomplete {
    position: absolute;
    top: 11px;
    left: 17px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(94, 99, 102, 0.3);
  }
  &::placeholder {
    color: #abafb1;
  }

  &:not(:placeholder-shown) {
    font-weight: 400;
    color: #5e6366;
    border: 1px solid #5e6366;
  }
  &:focus {
    color: #5e6366;
    border: 1px solid #5570f1;
  }
  &:focus + .label {
    color: #5570f1;
  }
  &__error,
  &__error:focus,
  &__error:not(:placeholder-shown) {
    border: 1px solid #f57e77;
  }
  &__error + .label,
  &__error:focus + .label {
    color: #f57e77;
  }
  &__error-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #f57e77;
    margin: 2px 0;
  }
  &__valid,
  &__valid:focus,
  &__valid:not(:placeholder-shown) {
    border: 1px solid #32936f;
  }
  &__valid + .label,
  &__valid:focus + .label {
    color: #32936f;
  }
  &__disabled {
    pointer-events: none;
    background-color: #f2f4f5;
    border: 1px solid #dde2e5;
  }
}
.icon__valid {
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 340px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: rgba(50, 147, 111);
}
</style>
