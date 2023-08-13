<template>
  <input
    :value="modelValue"
    @input="updateInput"
    :class="colorTheme == 'dark' ? 'main-input main-input--dark' : 'main-input'"
  />
</template>

<script>
export default {
  name: "main-input",
  props: {
    modelValue: [String, Number],
    colorTheme: {
      type: String,
    },
  },

  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.main-input {
  max-width: 200px;
  color: $main-text-color;
  height: 40px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid $main-color;
  outline: none;
  width: 100%;
  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-weight: normal;
    color: #878787;
  }

  &:hover, &:focus {
    border-color: $accent;
  }

  &--dark {
    border: 3px solid $accent;
  }
}
</style>