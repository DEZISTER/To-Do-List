<template>
  <section class="my-contacts">
    <main-container class="my-contacts__container">
      <address class="my-contacts__address">
        <div class="my-contacts__info">
          <span class="my-contacts__title">Telegram: </span>
          <a class="my-contacts__descr" href="#">
            @Kales_Nick
          </a>
        </div>

        <div class="my-contacts__info">
          <span class="my-contacts__title">Telephone: </span>
          <a class="my-contacts__descr" href="#">
            (+380)-95-76-446-70
          </a>
        </div>

        <div class="my-contacts__info">
          <span class="my-contacts__title">e-mail: </span>
          <a class="my-contacts__descr" href="#">
            dezzplaygo@gmail.com
          </a>
        </div>
      </address>
    </main-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-contacts {
  margin: auto;

  &__address {
    display: flex;
    flex-flow: column;
    gap: 20px;
  }

  &__info {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    font-size: 16px;
  }

  &__title {
    font-weight: bold;
  }

  &__descr {
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: $accent;
    }
  }
}
</style>