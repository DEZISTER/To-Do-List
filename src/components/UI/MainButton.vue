<template>
  <button
    :class="colorTheme == 'dark' ? 'main-button main-button--dark' : 'main-button'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "main-button",
  props: {
    colorTheme: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-button {
  background: $accent;
  color: $button-text-color;
  border: none;
  font-size: 14px;
  height: 40px;
  padding: 10px;
  border-radius: 30px;
  transition-property: background-color, color, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background: $accent-active;
  }

  &:disabled {
    background: $accent-active;
  }
}
</style>