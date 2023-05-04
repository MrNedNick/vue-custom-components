<template>
  <div class="wrapper">
    <!-- {{ selected }} -->
    <!-- @blur="open = false" -->
    <input
      class="input-select"
      :class="inputClass"
      type="text"
      id="input"
      :placeholder="placeholder"
      :value="selected"
      @click="open = !open"
      @blur="closeMenu"
      @focus="inputFocus"
    />
    <label class="label" for="input">{{ label }}</label>
    <i class="mdi mdi-chevron-down icon__chevron" @click="open = !open" />
    <p class="input-select__helper-text">Helper text goes here</p>

    <div class="select" :class="{ selectHide: !open }">
      <div
        class="select__item"
        v-for="(item, index) of items"
        :key="index"
        @click="onClickItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    items: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    valid: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      open: false,
      selected: "",
    };
  },
  computed: {
    // selected() {
    //   return this.default
    //     ? this.default
    //     : this.options.length > 0
    //     ? this.options[0]
    //     : null;
    // },
    inputClass() {
      return {
        input__disabled: this.disabled,
        input__error: this.error,
        input__valid: this.valid,
      };
    },
  },
  methods: {
    onClickItem(item) {
      this.selected = item;
      this.open = false;
      this.$emit("updateSelect", item);
    },
    closeMenu() {
      setTimeout(() => {
        this.open = false;
      }, 100);
    },
    inputFocus() {
      this.selected = '';
    }
  },
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.input-select {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #abafb1;
  padding: 20px 16px 5px 16px;
  width: 374px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #cfd3d4;
  outline: none;
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
  &__helper-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #abafb1;
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
.label {
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
.icon__chevron {
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 375px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: #5e6366;
  cursor: pointer;
}
.select {
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;
  border: 1px solid #cfd3d4;
  position: absolute;
  background-color: white;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 1;
  &__item {
    display: flex;
    align-items: center;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2b2f32;
    height: 39px;
    width: 100%;
    &:hover {
      background-color: #d8dfff;
    }
  }
}

.selectHide {
  display: none;
}
</style>