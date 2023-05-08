<template>
  <div class="wrapper">
    <input
      class="input-file"
      :class="inputClass"
      type="file"
      id="input"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('updateInput', $event.target.value)"
    />
    <label class="input-file__label" for="input">
      <span>Label</span>
      <span>Placeholder</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FileInputComponent",
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
  computed: {
    inputClass() {
      return {
        'input__disabled': this.disabled,
        'input__error': this.error,
        'input__valid': this.valid,
      };
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
}
// .input-file {
//   opacity: 0;
//   visibility: hidden;
//   position: absolute;
// }

// .input {
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   color: #abafb1;
//   padding: 20px 16px 5px 16px;
//   width: 374px;
//   height: 28px;
//   border-radius: 8px;
//   border: 1px solid #cfd3d4;
//   outline: none;
//   &::placeholder {
//     color: #abafb1;
//   }

//   &:not(:placeholder-shown) {
//     font-weight: 400;
//     color: #5e6366;
//     border: 1px solid #5e6366;
//   }
//   &:focus {
//     color: #5e6366;
//     border: 1px solid #5570f1;
//   }
//   &:focus + .label {
//     color: #5570f1;
//   }
//   &__error,
//   &__error:focus,
//   &__error:not(:placeholder-shown) {
//     border: 1px solid #f57e77;
//   }
//   &__error + .label,
//   &__error:focus + .label {
//     color: #f57e77;
//   }
//   &__error-text {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 15px;
//     color: #f57e77;
//     margin: 2px 0;
//   }
//   &__valid,
//   &__valid:focus,
//   &__valid:not(:placeholder-shown) {
//     border: 1px solid #32936f;
//   }
//   &__valid + .label,
//   &__valid:focus + .label {
//     color: #32936f;
//   }
//   &__disabled {
//     pointer-events: none;
//     background-color: #f2f4f5;
//     border: 1px solid #dde2e5;
//   }
// }
// .label {
//   position: absolute;
//   top: 7px;
//   left: 16px;
//   height: 100%;
//   pointer-events: none;
//   border: 1px solid transparent;
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 15px;
//   color: #5e6366;
// }
// .icon__valid {
//   position: absolute;
//   z-index: 1;
//   top: 15px;
//   left: 375px;
//   width: 20px;
//   height: 20px;
//   font-size: 20px;
//   color: rgba(50, 147, 111);
// }
</style>