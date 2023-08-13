<template>
  <button
    :class="
      colorTheme == 'dark' ? 'icon-button icon-button--dark' : 'icon-button'
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "icon-button",
  props: {
    colorTheme: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-button {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid $accent;
  background: $accent;
  color: $button-text-color;
  fill: $button-text-color;
  transition-property: background-color, color, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: $main-bg-color;
    fill: $accent;
  }
}
</style>