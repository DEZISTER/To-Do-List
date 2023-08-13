<template>
  <footer class="my-footer">
    <main-container class="my-footer__container">
      <address class="my-footer__address">
        <a class="my-footer__telegram" href="#">
            @Kales_Nick
        </a>
      </address>
    </main-container>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
};
</script>

<style lang="scss" scoped>
.my-footer {
  margin: 20px auto 0;

  &__telegram {
    text-align: center;
    margin-bottom: 20px;
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: $accent;
    }
  }
}
</style>