<template>
  <div class="wrapper-file">
    <label class="wrapper-label" :class="{ disabled: disabled }">
      <div class="input-file" :class="inputClass">
        <i :class="prepandIcon" class="input-file__icon-prepand" />
        <span class="input-file__label">{{ label }}</span>
        <div class="input-file__file" v-if="value">
          <span class="input-file__file-name">{{ value.name }}</span>
          <span class="input-file__file-size">({{ fileSize }})</span>
        </div>
        <i v-if="valid" class="mdi mdi-check-circle input-file__icon-valid"></i>
        <input class="input-file__input" type="file" @change="onChange" />
      </div>
    </label>
    <p v-if="error" class="input-file__error-text">{{ error }}</p>
  </div>
</template>

<script>
import { validate } from "./validationRules.js";

export default {
  props: {
    value: {
      type: File,
    },
    label: {
      type: String,
    },
    rules: {
      type: Array,
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
  watch: {
    value() {
      if (this.rules) {
        this.rules.some((rule) => {
          this.error = validate(rule, this.value, this.label);
          if (this.error !== "") return rule;
        });
      }
    },
  },
  data() {
    return {
      error: "",
    };
  },
  computed: {
    inputClass() {
      return {
        "input-file__disabled": this.disabled,
        "input-file__error": this.error,
        "input-file__valid": this.valid,
        "input-file__filled": this.value,
      };
    },
    fileSize() {
      return `${(this.value.size / 1000000).toFixed(2)} MB`;
    },
  },
  methods: {
    onChange(value) {
      this.$emit("input", value.target.files[0]);
    },
  },
};
</script>

<style lang="scss">
.wrapper-file {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 374px;
}
.input-file {
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
  cursor: text;
  &__input {
    display: none;
  }
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
  &__file {
    position: absolute;
    display: flex;
    top: 27px;
    left: 56px;
    color: #5e6366;
    &-name {
      display: block;
      margin-right: 5px;
      max-width: 170px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__filled {
    border: 1px solid #5e6366;
  }
  &:hover {
    color: #5e6366;
    border: 1px solid #5570f1;
  }
  &__error,
  &__error:hover {
    border: 1px solid #f57e77;
  }
  &.input-file__error .input-file__label {
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
  &__valid:hover {
    border: 1px solid #32936f;
  }
  &.input-file__valid .input-file__label {
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
    top: 20px;
    left: 337px;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: rgba(50, 147, 111);
    pointer-events: none;
  }
  &__icon-prepand {
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 16px;
    width: 25px;
    height: 25px;
    font-size: 24px;
    pointer-events: none;
    cursor: text;
    color: #5e6366;
  }
}
.disabled {
  pointer-events: none;
}
</style>