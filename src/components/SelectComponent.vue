<template>
  <div class="wrapper-select">
    <input
      class="input-select"
      :class="inputClass"
      type="text"
      id="input"
      :placeholder="placeholder"
      :value="inputValue"
      @click="onClickInput"
      @blur="inputBlur"
      @input="searchItems($event.target.value)"
    />
    <label class="input-select__label" for="input">{{ label }}</label>
    <i :class="prepandIcon" class="input-select__icon-prepand" />
    <i
      class="mdi mdi-chevron-down input-select__icon-chevron"
      :class="{ rotate: open }"
      @click="open = !open"
    />
    <i v-if="valid" class="mdi mdi-check-circle input-select__icon-valid"></i>
    <p v-if="!error" class="input-select__helper-text">Helper text goes here</p>
    <p v-if="error" class="input-select__error-text">Something went wrong...</p>
    <div class="select" :class="{ hide: !open }">
      <div
        class="select__item"
        v-for="(item, index) of itemsCopy"
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
    prepandIcon: {
      type: String,
    },
  },
  data() {
    return {
      open: false,
      selected: "",
      inputValue: "",
      itemsCopy: [],
    };
  },
  computed: {
    inputClass() {
      return {
        "input-select__disabled": this.disabled,
        "input-select__error": this.error,
        "input-select__valid": this.valid,
      };
    },
  },
  mounted() {
    this.inputValue = this.default;
    this.selected = this.default;
    this.itemsCopy = this.items;
  },
  methods: {
    onClickItem(item) {
      this.selected = item;
      this.inputValue = item;
      this.open = false;
      this.$emit(item);
    },
    inputBlur() {
      setTimeout(() => {
        this.inputValue = this.selected;
        this.itemsCopy = this.items;
        this.open = false;
      }, 100);
    },
    onClickInput() {
      this.open = !this.open;
      this.inputValue = "";
    },
    searchItems(value) {
      this.inputValue = value;
      this.itemsCopy = this.items.filter((item) =>
        item.toLowerCase().includes(value)
      );
    },
  },
};
</script>

<style lang="scss">
.wrapper-select {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 374px;
}
.input-select {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #abafb1;
  padding: 20px 16px 5px 56px;
  min-width: 301px;
  min-height: 31px;
  border-radius: 8px;
  border: 1px solid #cfd3d4;
  outline: none;
  &__label {
    position: absolute;
    top: 7px;
    left: 56px;
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
  &__icon-valid {
    position: absolute;
    z-index: 1;
    top: 15px;
    left: 350px;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: rgba(50, 147, 111);
  }
  &__icon-chevron {
    position: absolute;
    z-index: 1;
    top: 15px;
    left: 345px;
    width: 20px;
    height: 25px;
    font-size: 20px;
    color: #5e6366;
    cursor: pointer;
    transition: all 0.2s;
  }
  &__icon-prepand {
    position: absolute;
    z-index: 1;
    top: 13px;
    left: 16px;
    width: 25px;
    height: 25px;
    font-size: 24px;
    color: #5e6366;
  }
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
  z-index: 10;
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
.hide {
  display: none;
}
.rotate {
  transform: rotate(-180deg);
}
</style>